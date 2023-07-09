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

export default function displayCoverImage(event: Event): void {
    const div = document.getElementById('displayCoverImage') as HTMLDivElement
    const btn = document.querySelector('.removeCover') as HTMLButtonElement
    const label = document.querySelector('.coverImageAdd label') as HTMLLabelElement
    var input = event.target as HTMLInputElement;
    const img = document.createElement("img");


    var file = input.files && input.files[0];

    var reader = new FileReader();

    if (file && isFileSizeValid(file, 5) && isImageFile(file)) {
        reader.onload = function (e: ProgressEvent<FileReader>) {
            if (e.target && e.target.result) {
                img.src = e.target.result as string
                img.alt = 'Cover image'
                img.style.maxWidth = '100%'; // Adjust the width as needed
                img.style.maxHeight = '200px'; // Adjust the height as needed
                if (div.firstChild) {
                    div.removeChild(div.firstChild as Node)
                }
                div.appendChild(img)
            }
        };

        input.value = ''

        store.coverImageFile = file

        btn.style.display = 'block'

        label.innerText = 'Change Cover Image'
    }
    else {
        input.value = ''
        alert('Please select a valid image file (max 5MB)')
    }

    if (file) {
        reader.readAsDataURL(file as Blob);
    }
}
</script>