<script lang="ts">
import { useChatterStore } from '@/stores/store';

import { onUnmounted } from 'vue';


let timeOut: ReturnType<typeof setTimeout>;

onUnmounted(() => {
    clearTimeout(timeOut)
})

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
    video.style.maxWidth = "300px";
    video.style.maxHeight = "300px";
    video.style.height = "auto";
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

        store.addFileInput(file, id, 'video');

        const addMedia = document.querySelector('.addMedia') as HTMLDivElement;
        addMedia.style.display = 'none';

    } else {
        if (video && button) {
            videoContainer.remove();
            const error = document.querySelector('#ErrorShow span') as HTMLSpanElement
            (document.querySelector('#ErrorShow') as HTMLDivElement).style.display = 'flex'
            error.textContent = 'Please select a valid Video file (max 8MB) and no duplicate video allowed'
            timeOut = setTimeout(() => {
                (document.querySelector('#ErrorShow') as HTMLDivElement).style.display = 'none'
            }, 3000)
        }
    }

    if (file) {
        reader.readAsDataURL(file as Blob);
    }
}
</script>