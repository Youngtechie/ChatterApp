<script lang="ts">
import { useChatterStore } from '@/stores/store'


const store = useChatterStore()

function isImageFile(file: File): boolean {
    return file.type.startsWith("image")
}

function isFileSizeValid(file: File, maxSizeInMB: number): boolean {
    const maxSize = maxSizeInMB * 1024 * 1024
    return file.size <= maxSize
}

type FileC = {
    id: number;
    fileName: string;
    nameType: string
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


function isImageFileNotPresent(file: File, filesContainer: FileC[]) {
    return filesContainer.some(uploadedFile => uploadedFile.fileName === file.name) === false;
}

export default function displayImage(event: Event, id: number, fileNameContainer: FileC[], clickedRemove: Function): void {
    event.preventDefault()
    var input = event.target as HTMLInputElement;
    const p = document.createElement('p');
    p.style.position = 'relative'
    p.setAttribute('id', `imageContainer_${id}`)
    p.contentEditable = "false";
    p.style.display = 'flex';
    p.style.flexFlow = 'column wrap';
    p.style.alignItems = 'center';
    const img = document.createElement("img");
    img.id = `image_${id}`;
    img.style.display = 'block';
    img.style.maxWidth = '300px'; // Adjust the width as needed
    img.style.maxHeight = '300px'; // Adjust the height as needed
    img.style.height = 'auto';
    img.contentEditable = "false";
    const button = document.createElement("input");
    button.id = `Removal_button_${id}`;
    button.className = `removal_button`;
    button.value = "Remove image"
    button.type = "button"
    button.style.position = "absolute";
    button.contentEditable = "false";
    p.appendChild(img)
    p.appendChild(button);

    var file = input.files && input.files[0];

    p.title = file?.name as string

    img.title = `${file?.name as string}`;

    button.addEventListener("click", (event) => clickedRemove(event))

    var reader = new FileReader();

    if (file && isFileSizeValid(file, 1) && isImageFile(file) && isImageFileNotPresent(file, fileNameContainer as FileC[])) {
        reader.onload = function (e: ProgressEvent<FileReader>) {
            if (e.target && e.target.result && img && button) {
                img.src = e.target.result as string;
                button.style.display = 'block'
            }
        };

        const alt = prompt('Please enter an alt text for the image') as string

        if (alt) {
            img.alt = alt

            insertAtCursor(p)

            input.value = ''

            const insert: FileC = {
                'id': id,
                'fileName': file.name as string,
                "nameType": 'images'
            }

            fileNameContainer.push(insert)

            store.addFileInput(file, id, 'image')

            const addMedia = document.querySelector('.addMedia') as HTMLDivElement;
            addMedia.style.display = 'none';
        }
        else {
            if (img && button) {
                p.remove()
                input.value = ''
                console.log('Please enter an alt text for the image')
            }
        }
    }
    else {
        if (img && button) {
            p.remove()
            input.value = ''
            const error = document.querySelector('#ErrorShow span') as HTMLSpanElement
            (document.querySelector('#ErrorShow') as HTMLDivElement).style.display = 'flex'
            error.textContent = 'Please select a valid image file (max 1MB) and no duplicate image allowed'
            setTimeout(() => {
                (document.querySelector('#ErrorShow') as HTMLDivElement).style.display = 'none'
            }, 3000)
        }
    }

    if (file) {
        reader.readAsDataURL(file as Blob);
    }
}
</script>