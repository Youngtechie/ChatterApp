<script lang="ts">
import { useChatterStore } from '@/stores/store';

const store = useChatterStore()

function isVideoFile(file: File): boolean {
    return file.type.startsWith("video");
}

type FileC = {
  id: number;
  fileName: string;
  nameType: string;
};

function insertAtCursor(tag: HTMLElement) {
    const editableDiv = document.getElementById('textarea');
    const selection = window.getSelection();

    if (editableDiv && selection) {
        const range = selection.getRangeAt(0);
        const newLine = document.createTextNode('\n'); // Add a line break
        range.insertNode(tag);
        tag.parentNode?.insertBefore(newLine, tag.nextSibling);
        range.setStartAfter(newLine);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
        editableDiv.focus();
    }
}

function isVideoFileNotPresent(file: File, filesContainer: FileC[]): boolean {
    return filesContainer.some((uploadedFile) => uploadedFile.fileName === file.name) === false;
}

function isFileSizeValid(file: File, maxSizeInMB: number): boolean {
    const maxSize = maxSizeInMB * 1024 * 1024;
    return file.size <= maxSize;
}

export default function displayVideo(event: Event, id: number, fileNameContainer: FileC[], clickedRemove: Function): void {
    event.preventDefault();
    const input = event.target as HTMLInputElement;
    const videoContainer = document.createElement("p");
    videoContainer.style.position = "relative";
    videoContainer.setAttribute("id", `videoContainer_${id}`);
    videoContainer.contentEditable = "false";
    videoContainer.style.display = "flex";
    videoContainer.style.flexFlow = "column wrap";
    videoContainer.style.alignItems = "center";
    const video = document.createElement("video");
    video.id = `video_${id}`;
    video.style.display = "block";
    video.style.maxWidth = "250px";
    video.style.height = "auto";
    video.style.maxHeight = "250px"
    video.contentEditable = "false";
    video.controls = true
    const button = document.createElement("input");
    button.type = "button"
    button.id = `removal_button_${id}`;
    button.className = "removal_button";
    button.value = "Remove video";
    button.style.position = "absolute";
    button.contentEditable = "false";
    videoContainer.appendChild(video);
    videoContainer.appendChild(button);

    const file = input.files && input.files[0];

    videoContainer.title = file?.name as string;
    video.title = file?.name as string;
    button.addEventListener("click", (event) => clickedRemove(event));

    var reader = new FileReader();

    if (file && isFileSizeValid(file, 8) && isVideoFile(file) && isVideoFileNotPresent(file, fileNameContainer)) {
        reader.onload = function (e: ProgressEvent<FileReader>) {
            if (e.target && e.target.result && video && button) {
                video.src = e.target.result as string;
                button.style.display = 'block'
            }
        };

        insertAtCursor(videoContainer);
        
        input.value = "";

        fileNameContainer.push({
            'id': id,
            'fileName': file.name as string,
            'nameType': 'videos'
        })

        store.addFileInput(file, id, 'video')
        
    } else {
        if (video && button) {
            videoContainer.remove();
            input.value = "";
            console.log("Please select a valid video file (max 5MB)");
        }
    }
    if (file) {
        reader.readAsDataURL(file as Blob);
    }
}
</script>