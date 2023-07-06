<script setup lang="ts">
import { type Ref, ref, onMounted, onUnmounted, watchEffect, nextTick } from 'vue';
import MarkdownIt from 'markdown-it';
import DOMPurify from 'dompurify';
import router from '@/router/index';
import displayImage from '@/components/UploadImage.vue'
import { getFirestore, type DocumentData, doc, getDoc, getDocs, collection, query } from 'firebase/firestore'
import displayVideo from '../components/UploadVideo.vue'
import displayCoverImage from '@/components/UploadCoverImage.vue';
import { useChatterStore } from '@/stores/store';
import useUserDetails from '@/composables/useUserDetails.vue'
import CreatePostToCloud from '@/components/CreatePostToCloud.vue';
import MarkdownItAttrs from 'markdown-it-attrs';
import axios from 'axios'
import useAuthentication from '@/composables/useAuth.vue'

useUserDetails()

type DeepFileC = {
    id: number;
    fileName: string;
    nameType: string;
}
type DeepFileCImage = {
    id: number;
    fileName: string;
    nameType: 'images';
}
type RequiredDeepFileCImage = Required<DeepFileCImage>;
type DeepFileCVideo = {
    id: number;
    fileName: string;
    nameType: 'videos';
}
type RequiredDeepFileCVideo = Required<DeepFileCVideo>;
type mediaFullPaths = {
    id: number
    mediaFullPath: string
}

const { app } = useAuthentication()

const db = getFirestore(app)

const store = useChatterStore()
// Configure DOMPurify
const sanitizer = DOMPurify.sanitize;
const textarea = ref<HTMLDivElement | null>(null);
const blogHTML = ref('')
const mediaId = ref(0)
const ToEditLastId = ref(0)
const mediaTime = ref(false)
const toAddImage = ref(false)
const toAddVideo = ref(false)
const title = ref('')
const titleArr = ref<string[]>([])
const collector: Ref<string[]> = ref([])
const UploadImagesName: Ref<RequiredDeepFileCImage[]> = ref([]);
const UploadVideosName: Ref<RequiredDeepFileCVideo[]> = ref([]);
const allMedias: Ref<DeepFileC[]> = ref([])
const rawDocument = ref('')
const currentMedia = ref<mediaFullPaths[]>([])
const suggestedTags: Ref<string[]> = ref([])
const postTag = ref('')
const disableComments = ref(false)
const postContentToBePosted = ref('')
const postSection1 = ref('edit-section')
const postSection2 = ref('')
const postSection3 = ref('')
const parser = new DOMParser();
const undoStack = ref<{ content: string; cursor: number }[]>([]);
const redoStack = ref<{ content: string; cursor: number }[]>([]);
let timeOut: ReturnType<typeof setTimeout>;
const DomParse = new DOMParser()
const tagOption = ref('option1')
const imageDeleted = ref(false)
const toolbar = ref<HTMLDivElement | null>(null)

const observer = new MutationObserver((mutationsList) => {
    // Handle the changes here
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.target === textarea.value) {
            checkTextareaMedias()
        }
    }
});

async function getPostContent(post: DocumentData) {
    try {
        const contentUrl = post.postRawContent
        const response = await axios.post('/postContent', { contentUrl });
        const newHTML = DomParse.parseFromString(response.data as string, 'text/html');

        if (textarea.value) {
            textarea.value.innerHTML = newHTML.body.innerHTML as string;

            document.querySelectorAll('p > img + input').forEach((button) => {
                button.addEventListener('click', removeImage);
            });
            document.querySelectorAll('p > video + input').forEach((button) => {
                button.addEventListener('click', removeVideo);
            });
        }
    } catch (error) {
        console.error(error);

        const errorDiv = document.querySelector('#ErrorShow span') as HTMLSpanElement
        errorDiv.style.display = 'flex';
        errorDiv.textContent = 'Something went wrong. Please check your internet connection.';
    }
}

watchEffect(() => {
    const combinedFiles = [...UploadImagesName.value, ...UploadVideosName.value];
    allMedias.value = combinedFiles.map((file) => ({
        id: file.id,
        fileName: file.fileName,
        nameType: file.nameType
    })).sort((a, b) => a.id - b.id);
});

async function getPost() {
    const id = router.currentRoute.value.params.postId
    const post = await getDoc(doc(db, 'posts', id as string))
    if (post.data() && post.data()?.postTag !== undefined && post.data()?.postTag !== '') {
        await getPostContent(post.data() as DocumentData)
        store.viwedPost = post.data() as DocumentData
        if (store.viwedPost.postCoverImage !== undefined && store.viwedPost.postCoverImage !== '') {
            const btn = document.querySelector('.removeCover') as HTMLButtonElement
            const label = document.querySelector('.coverImageAdd label') as HTMLLabelElement
            btn.style.display = 'block'
            label.innerText = 'Change Cover Image'
        }
        title.value = post.data()?.postTitle.join(' ')
        postTag.value = post.data()?.postTag
        disableComments.value = post.data()?.postSettings.disableComments

        changeSection('edit-section')

        if (post.data()?.postMedia.length > 0) {
            currentMedia.value = post.data()?.postMedia
            if (currentMedia.value.length > 0) {
                currentMedia.value.forEach((media: Record<string, any>) => {
                    const arr = (media.mediaFullPath as string).split('/')
                    if (arr[3] === 'images') {
                        UploadImagesName.value?.push({ id: media.id, fileName: arr[4], nameType: 'images' })
                    }
                    else {
                        UploadVideosName.value?.push({ id: media.id, fileName: arr[4], nameType: 'videos' })
                    }
                })
                mediaId.value = currentMedia.value[currentMedia.value.length - 1].id
                ToEditLastId.value = currentMedia.value[currentMedia.value.length - 1].id
            }
        }
    }
    else {
        clearTimeout(timeOut)
        const error = document.querySelector('#ErrorShow span') as HTMLSpanElement
        error.innerText = `Can't find a post with ${id} id`;
        (document.querySelector('#ErrorShow') as HTMLDivElement).style.display = 'flex'
    }
}

async function getTags() {
    const tagsRef = query(collection(db, 'tags'))
    await getDocs(tagsRef)
        .then((docs) => {
            docs.forEach((doc) => {
                suggestedTags.value.push(doc.id)
            })
        })
}

onMounted(() => {
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    const browserWidth = window.innerWidth;
    if (browserWidth as number >= 768 && browserWidth as number <= 991) {
        postSection1.value = 'edit-section'
        postSection2.value = 'preview-section'
        postSection3.value = ''
    }
    else if (browserWidth as number > 991) {
        postSection1.value = 'edit-section'
        postSection2.value = 'preview-section'
        postSection3.value = 'publish-section'
    }
    if(browserWidth as number >= 768){
        const error = document.querySelector('#ErrorShow span') as HTMLSpanElement
        (document.getElementById('ErrorShow') as HTMLDivElement).style.display = 'flex'
        error.textContent = 'Add images and videos only after done typing your post!!!'
    }

    getTags()

    if (router.currentRoute.value.params.postId !== undefined && router.currentRoute.value.params.postId !== "") {
        document.querySelectorAll('button').forEach((btn) => {
            btn.setAttribute('disabled', '')
            btn.style.cursor = "not-allowed"
        })
        nextTick(() => {
            const warningShow = document.getElementById('warningShow');
            if (warningShow) {
                warningShow.style.display = 'flex';
                warningShow.textContent = 'Loading ...'
            }
        })
        getPost().then(() => {
            document.querySelectorAll('button').forEach((btn) => {
                btn.removeAttribute('disabled')
                btn.style.cursor = 'pointer'
            })
            nextTick(() => {
                const warningShow = document.getElementById('warningShow');
                if (warningShow) {
                    warningShow.style.display = 'none';
                }
            })
        })
    }

    undoStack.value.push({ content: '', cursor: 0 });
    textarea.value?.focus();
    // Configure and start observing the div for changes in its child nodes
    const observerConfig = { childList: true, subtree: true };
    observer.observe((textarea.value as HTMLDivElement), observerConfig);

    clearTimeout(timeOut)
})

onUnmounted(() => {
    undoStack.value = [];
    redoStack.value = [];
    observer.disconnect();
    clearTimeout(timeOut)
    const warning = document.getElementById('warningShow') as HTMLDivElement
    warning.style.display = 'none';
    (document.getElementById('ErrorShow') as HTMLDivElement).style.display = 'none'
});

watchEffect(() => {
    if (postSection1.value) {
        if (textarea.value !== document.activeElement) {
            if (toolbar.value) {
                (toolbar.value as HTMLDivElement).style.display = 'none';
            }
        }
    }
})

function handleBlur() {
    timeOut = setTimeout(function () {
        if (textarea.value !== document.activeElement) {
            if (toolbar.value) {
                console.log(toolbar.value);
                (toolbar.value as HTMLDivElement).style.display = 'none';
            }
        }
    }, 200);
}

function handleResize() {
    const browserWidth = window.innerWidth;
    if (browserWidth as number >= 768 && browserWidth as number <= 991) {
        postSection1.value = 'edit-section'
        postSection2.value = 'preview-section'
        postSection3.value = ''
    }
    else if (browserWidth as number > 991) {
        postSection1.value = 'edit-section'
        postSection2.value = 'preview-section'
        postSection3.value = 'publish-section'
    }
    else {
        postSection1.value = 'edit-section'
        postSection2.value = ''
        postSection3.value = ''
    }
    if (browserWidth as number >= 768) {
        const error = document.querySelector('#ErrorShow span') as HTMLSpanElement
        (document.getElementById('ErrorShow') as HTMLDivElement).style.display = 'flex'
        error.textContent = 'Add images and videos only after done typing your post!!!'
    }
    else{
        (document.getElementById('ErrorShow') as HTMLDivElement).style.display = 'none'
    }
}

function removeImage(event: Event) {
    event.preventDefault();
    const target = event.target as HTMLButtonElement
    clickedToRemoveImage(target.parentElement as HTMLButtonElement)
}

function removeVideo(event: Event) {
    event.preventDefault();
    const target = event.target as HTMLButtonElement
    clickedToRemoveVideo(target.parentElement as HTMLButtonElement)
}

function clickedToRemoveVideo(p: HTMLButtonElement) {
    if (p && UploadVideosName.value) {
        const title = p.title
        UploadVideosName.value = UploadVideosName.value?.filter((fileContainer) => fileContainer.fileName !== title)
        store.removeFileInput(title)
        if (p.nextElementSibling?.tagName === 'BR' && p.nextSibling?.nodeName !== '#text') {
            p.nextElementSibling.remove()
        }
        p.remove()
    }
}

function clickedToRemoveImage(p: HTMLButtonElement) {
    if (p && UploadImagesName.value) {
        const title = p.title
        UploadImagesName.value = UploadImagesName.value?.filter((fileContainer) => fileContainer.fileName !== title)
        store.removeFileInput(title)
        if (p.nextElementSibling?.tagName === 'BR' && p.nextSibling?.nodeName !== '#text') {
            p.nextElementSibling.remove()
        }
        p.remove()
    }
}

function insertMedias(text: string): string {
    const regex = /(image|video)_\d+/g;

    return text.replace(regex, (matched) => {
        const matchingElement = collector.value.find((element) => {
            const elementHtml = parser.parseFromString(element as string, 'text/html');
            return elementHtml.body.firstElementChild?.id === matched;
        });

        if (matchingElement) {
            const elementHtml = parser.parseFromString(matchingElement as string, 'text/html');
            return elementHtml.body.firstElementChild?.outerHTML as string;
        }

        return matched; // return the original matched value if element is not found
    });
}

function setSrcToEmptyString(htmlString: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    const imgElements = doc.querySelectorAll('img');
    imgElements.forEach((img) => {
        img.setAttribute('src', '');
    });

    const videoElements = doc.querySelectorAll('video');
    videoElements.forEach((video) => {
        video.setAttribute('src', '');
        video.innerHTML = ''; // Remove any nested source elements
    });

    return doc.documentElement.innerHTML;
}

function handleCoverImage(event: Event) {

    displayCoverImage(event)

}

function removeCoverImage() {
    const img = document.querySelector('#displayCoverImage img') as HTMLDivElement
    const btn = document.querySelector('.removeCover') as HTMLButtonElement
    const label = document.querySelector('.coverImageAdd label') as HTMLLabelElement

    if (img && btn) {
        if (store.viwedPost.postCoverImage !== '') {
            imageDeleted.value = true
        }
        img.remove()
        btn.style.display = 'none'
        label.innerText = 'Add Cover Image'
        store.coverImageFile = null

    }
}

function addVideo(event: Event) {
    mediaId.value += 1
    displayVideo(event, mediaId.value, UploadVideosName.value, removeVideo)
}

function addImage(event: Event) {
    mediaId.value += 1
    displayImage(event, mediaId.value, UploadImagesName.value, removeImage)
}

function preview() {

    checkTextareaMedias()

    const md = new MarkdownIt().use(MarkdownItAttrs);

    rawDocument.value = textarea.value?.innerHTML as string

    const doc = parser.parseFromString(textarea.value?.innerHTML as string, 'text/html')

    const titleTextNode = document.createTextNode('# ' + title.value + '\n'); // Create a text node with the title value

    // Insert the title text node at the beginning of the body
    doc.body.insertBefore(titleTextNode, doc.body.firstChild);


    store.textarea = [{
        "title": title.value,
        "content": textarea.value as HTMLDivElement
    }]

    const browserWidth = window.innerWidth;

    if (browserWidth as number < 768) {
        changeSection('preview-section')
    }

    titleArr.value = title.value.split(" ")

    const firstElementChild = doc.body.childNodes as NodeListOf<ChildNode>

    const EditedTextarea = () => {
        Array.from(firstElementChild as NodeListOf<ChildNode>).forEach((element) => {
            if (element.nodeName === 'P') {
                if (element.firstChild?.nodeName === 'IMG' || element.firstChild?.nodeName === 'VIDEO') {
                    collector.value.push((element.firstChild as HTMLElement).outerHTML as string)
                    console.log()
                    const textNode = doc.createTextNode('\n' + (element.firstChild as HTMLElement).id + '\n');
                    element.parentNode?.replaceChild(textNode, element);

                }
            }
            else if (element.nodeName === 'BR') {
                const breakLine = doc.createTextNode('\n');
                element.parentNode?.replaceChild(breakLine, element);
            }
            else {
                // Replace the element element with its inner text
                if (element.textContent) {
                    const textNode = doc.createTextNode(element.textContent);
                    element.parentNode?.replaceChild(textNode, element);
                }
            }
        })

        return doc.body.innerHTML
    }

    const newTextarea = EditedTextarea()

    const markdownGenerated = md.render(newTextarea as string);

    const edited = insertMedias(markdownGenerated)
    const sanitized = sanitizer(edited)
    blogHTML.value = sanitized

    postContentToBePosted.value = setSrcToEmptyString(blogHTML.value)
}

function changeSection(value: string) {
    const browserWidth = window.innerWidth;

    if (value === 'preview-section') {
        postSection1.value = ''
        postSection2.value = 'preview-section'
        postSection3.value = ''
    }
    else if (value === 'edit-section') {
        postSection1.value = 'edit-section'
        postSection2.value = ''
        postSection3.value = ''
        if (browserWidth as number >= 768 && browserWidth as number <= 991) {
            postSection1.value = 'edit-section'
            postSection2.value = 'preview-section'
            postSection3.value = ''
        }
        else if (browserWidth as number > 991) {
            postSection1.value = 'edit-section'
            postSection2.value = 'preview-section'
            postSection3.value = 'publish-section'
        }
    }
    else if (value === 'publish-section') {
        postSection1.value = ''
        postSection2.value = ''
        postSection3.value = 'publish-section'
    }

    if (store.textarea[0]) {
        title.value = store.textarea[0].title;
        textarea.value = store.textarea[0].content;
    }
}

function changeSettingsComment() {
    disableComments.value = !disableComments.value
}

function createPost() {
    if (postContentToBePosted.value !== '') {
        (document.getElementById('publishBtn') as HTMLInputElement).setAttribute('disabled', 'true');
        const id = router.currentRoute.value.params.postId ? router.currentRoute.value.params.postId : '';
        CreatePostToCloud(rawDocument.value as string, postContentToBePosted.value as string, titleArr.value, postTag.value, 'post', disableComments.value, id as string, ToEditLastId.value as number, allMedias.value, imageDeleted.value)
    }
    else {
        console.log('No empty post')
    }
}

function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
        if ((event.target as HTMLDivElement).innerText.trim().length < 1) {
            event.preventDefault();
        }
    }
    else if (event.ctrlKey && event.key === 'z') {
        event.preventDefault();
        undo();
    }
    else if (event.ctrlKey && event.key === 'y') {
        event.preventDefault();
        redo();
    }
    else if (event.key === 'Backspace') {
        if ((event.target as HTMLDivElement).textContent === '') {
            event.preventDefault()
        }
    }
}

function handleInput(event: Event) {
    if ((event.target as HTMLDivElement).innerText.trim() !== '') {
        mediaTime.value = true
    }
    else {
        mediaTime.value = false
    }
    store.textarea = [{
        "title": title.value,
        "content": textarea.value as HTMLDivElement
    }]

    updateDom()

    const content = textarea.value?.innerHTML as string;
    const cursor = getCursorPosition();

    // Push the current content and cursor position to the undo stack
    undoStack.value.push({ content, cursor });

    // Clear the redo stack
    redoStack.value = [];
}

function checkTextareaMedias() {
    const textareaC = document.querySelector('#textarea') as HTMLDivElement;
    const images = Array.from(textareaC.querySelectorAll('img'));
    const videos = Array.from(textareaC.querySelectorAll('video'));

    // Check if uploaded images are still present
    UploadImagesName.value.forEach((file) => {
        const imageName = file.fileName;
        const imageExists = images.some((img) => img.title.includes(imageName));
        if (!imageExists) {
            // Image is not present in the DOM, remove it from the array
            UploadImagesName.value = UploadImagesName.value.filter(
                (file) => file.fileName !== imageName
            );
        }
    });

    // Check if uploaded videos are still present
    UploadVideosName.value.forEach((file) => {
        const videoName = file.fileName;
        const videoExists = videos.some((video) => video.title.includes(videoName));

        if (!videoExists) {
            // Video is not present in the DOM, remove it from the array
            UploadVideosName.value = UploadVideosName.value.filter(
                (file) => file.fileName !== videoName
            );
        }
    });
}

function handleMediaTimechange() {
    mediaTime.value = false
}

function undo() {
    if (undoStack.value.length > 1) {
        const current = undoStack.value.pop()!;
        redoStack.value.push(current);

        const previous = undoStack.value[undoStack.value.length - 1];
        textarea.value!.innerHTML = previous.content;
        setCursorPosition(previous.cursor);

        const textareaC = document.querySelector('#textarea') as HTMLDivElement;
        const images = Array.from(textareaC.querySelectorAll('img'));
        const videos = Array.from(textareaC.querySelectorAll('video'));

        // Check if uploaded images are still present
        UploadImagesName.value.forEach((file) => {
            const imageName = file.fileName;
            const imageExists = images.some((img) => img.src.includes(imageName));

            if (!imageExists) {
                // Image is not present in the DOM, remove it from the array
                UploadImagesName.value = UploadImagesName.value.filter(
                    (file) => file.fileName !== imageName
                );
            }
        });

        // Check if uploaded videos are still present
        UploadVideosName.value.forEach((file) => {
            const videoName = file.fileName;
            const videoExists = videos.some((video) => video.src.includes(videoName));

            if (!videoExists) {
                // Video is not present in the DOM, remove it from the array
                UploadVideosName.value = UploadVideosName.value.filter(
                    (file) => file.fileName !== videoName
                );
            }
        });
    }
}

function redo() {
    if (redoStack.value.length > 0) {
        const next = redoStack.value.pop()!;
        undoStack.value.push(next);

        textarea.value!.innerHTML = next.content;
        setCursorPosition(next.cursor);

        const textareaC = document.querySelector('#textarea') as HTMLDivElement;
        const images = Array.from(textareaC.querySelectorAll('img'));
        const videos = Array.from(textareaC.querySelectorAll('video'));

        // Check if uploaded images are still present
        UploadImagesName.value.forEach((file) => {
            const imageName = file.fileName;
            const imageExists = images.some((img) => img.src.includes(imageName));

            if (!imageExists) {
                // Image is not present in the DOM, remove it from the array
                UploadImagesName.value = UploadImagesName.value.filter(
                    (file) => file.fileName !== imageName
                );
            }
        });

        // Check if uploaded videos are still present
        UploadVideosName.value.forEach((file) => {
            const videoName = file.fileName;
            const videoExists = videos.some((video) => video.src.includes(videoName));

            if (!videoExists) {
                // Video is not present in the DOM, remove it from the array
                UploadVideosName.value = UploadVideosName.value.filter(
                    (file) => file.fileName !== videoName
                );
            }
        });
    }
}

function getCursorPosition(): number {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const preSelectionRange = range.cloneRange();
        preSelectionRange.selectNodeContents(textarea.value!);
        preSelectionRange.setEnd(range.startContainer, range.startOffset);
        return preSelectionRange.toString().length;
    }
    return 0;
}

function setCursorPosition(position: number) {
    const range = document.createRange();
    const sel = window.getSelection();
    if (sel && textarea.value) {
        range.setStart(textarea.value.childNodes[0], position);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
    }
}

function handlePaste(event: ClipboardEvent) {
    event.preventDefault();
    navigator.clipboard.readText()
        .then(pastedData => {
            const editableDiv = textarea.value;
            if (editableDiv) {
                const selection = window.getSelection();
                const range = selection ? selection.getRangeAt(0) : null;
                if (range) {
                    range.deleteContents();
                    const textNode = document.createTextNode(pastedData);
                    range.insertNode(textNode);

                    range.setStartAfter(textNode);
                    range.collapse(true);
                    selection?.removeAllRanges();
                    selection?.addRange(range);

                    editableDiv.focus();
                }
            }
        })
        .catch(error => {
            console.error('Failed to read clipboard data:', error);
        });
}

function insertTextAtCursor(text: string) {
    if (!textarea.value) return;

    const selection = window.getSelection();
    if (selection) {
        const range = selection.getRangeAt(0);
        range.deleteContents();

        const textNode = document.createTextNode(text);
        range.insertNode(textNode);

        if (text === '**' || text === '_' || text === '~~' || text === '\n```\n') {
            const cursorNode = document.createTextNode('');
            range.insertNode(cursorNode);

            const cloneNode = textNode.cloneNode();
            range.insertNode(cloneNode);

            range.setStartAfter(cursorNode);
            range.setEndAfter(cursorNode);
        }

        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

function makeBold() {
    insertTextAtCursor('**');
}

function makeItalic() {
    insertTextAtCursor('_');
}

function insertLink() {
    const url = prompt('Enter the URL:');
    if (url) {
        insertTextAtCursor(`[Link Text](${url})`);
    }
}

function insertTable() {
    insertTextAtCursor(
        '\n| Header 1 | Header 2 |\n| -------- | -------- |\n| Cell 1 | Cell 2 |\n| Cell 3 | Cell 4 |\n'
    );
}

function insertCodeBlock() {
    insertTextAtCursor('\n```\n');
}

function insertHeader() {
    const headerLevel = prompt('Enter the header level (1-6):');
    if (headerLevel) {
        insertTextAtCursor(`\n ${'#'.repeat(parseInt(headerLevel))} `);
    }
}

function insertHorizontalRule() {
    insertTextAtCursor('\n\n --- \n ');
}

function insertStrikeThrough() {
    insertTextAtCursor('~~');
}

function insertImage() {
    const addMedia = document.querySelector('.addMedia') as HTMLDivElement;
    addMedia.style.display = 'flex';
    toAddImage.value = true
    toAddVideo.value = false
}

function insertImageUrl() {
    const url = prompt('Enter the URL:');
    if (url) {
        insertTextAtCursor(`\n![Image](${url})\n`);
        closeAddMedia();
    }
}

function insertVideo() {
    const addMedia = document.querySelector('.addMedia') as HTMLDivElement;
    addMedia.style.display = 'flex';
    toAddVideo.value = true
    toAddImage.value = false
}

function closeAddMedia() {
    const addMedia = document.querySelector('.addMedia') as HTMLDivElement;
    addMedia.style.display = 'none';
}

function handleFocus(event: Event) {
    (document.querySelector('.toolbar') as HTMLDivElement).style.display = 'flex';
    if ((event.target as HTMLDivElement).innerText.trim() !== '') {
        mediaTime.value = true
    }
    else {
        mediaTime.value = false
    }
}

function updateDom() {
    const browserWidth = window.innerWidth;
    if (browserWidth as number >= 768) {
        preview()
    }
}

function handleInputLast(event: Event) {
    const inputValue = event.target as HTMLInputElement;
    const sanitizedValue = inputValue.value.replace(/[0-9\s]/g, '');

    if (inputValue.value !== sanitizedValue) {
        postTag.value = sanitizedValue;
    }
};

</script>
<template>
    <header>
        <RouterLink to="/"><button>Home</button></RouterLink>
        <button :title="store.themeDetails.title" id="themeBtn" @click="store.changeTheme">
            <div id="themeImgContainer"><img :src="store.themeDetails.img" /></div>
        </button>
    </header>

    <div class="sectionContainers">
        <div :class="[{ none: postSection1 !== 'edit-section' }, { editorsection: true }]">

            <div class="coverImageAdd">
                <div id="displayCoverImage">
                    <img :src="store.viwedPost.postCoverImage" alt="Cover Image"
                        v-if="store.viwedPost.postCoverImage !== '' && store.viwedPost.postCoverImage !== undefined"
                        style="max-width: 100%; max-height: 200px;" />
                </div>

                <label for="coverImage">Add Cover Image</label>
                <input type="file" @change="handleCoverImage" id="coverImage" style="display: none;" />
                <button class="removeCover" @click="removeCoverImage">Remove Cover Image</button>
            </div>

            <button @click="preview" id="previewBtn">Preview</button>

            <div id="writeEditor">
                <input type="text" v-model="title" placeholder="Post Title" @focus="handleMediaTimechange"
                    @input="updateDom" />
                <div class="toolbar" ref="toolbar">
                    <button @click.prevent="makeBold">
                        <img src="https://img.icons8.com/ios-filled/50/000000/bold.png" height="15" />
                    </button>
                    <button @click.prevent="makeItalic">
                        <img src="https://img.icons8.com/ios-filled/50/000000/italic.png" height="15" />
                    </button>
                    <button @click.prevent="insertLink">
                        <img src="https://img.icons8.com/ios-filled/50/000000/link.png" height="15" />
                    </button>
                    <button @click.prevent="insertHeader">
                        <img src="https://img.icons8.com/ios-filled/50/000000/header.png" height="15" />
                    </button>
                    <button @click.prevent="insertStrikeThrough">
                        <img src="https://img.icons8.com/ios-filled/50/000000/strikethrough.png" height="15" />
                    </button>
                    <button @click.prevent="insertTable">
                        <img src="https://img.icons8.com/ios-filled/50/000000/table.png" height="15" />
                    </button>
                    <button @click.prevent="insertCodeBlock">
                        <img src="https://img.icons8.com/ios-filled/50/000000/code.png" height="15" />
                    </button>
                    <button @click.prevent="insertHorizontalRule">
                        <img src="https://img.icons8.com/ios-filled/50/000000/horizontal-line.png" height="15" />
                    </button>
                    <button @click.prevent="insertImage" v-show="mediaTime">
                        <img src="https://img.icons8.com/ios-filled/50/000000/image.png" height="15" />
                    </button>
                    <button @click.prevent="insertVideo" v-show="mediaTime">
                        <img src="https://img.icons8.com/ios-filled/50/000000/video.png" height="15" />
                    </button>
                </div>
                <div ref="textarea" contenteditable="true" id="textarea" @keydown="handleKeyDown" @input="handleInput"
                    @paste="handlePaste" @focusout="handleBlur" @focus="handleFocus">
                </div>
            </div>

            <div class="addMedia">
                <div class="imageAdd" v-if="toAddImage">
                    <div class="mediaAddClass">
                        <label class="custom-file-input">Choose Image</label>
                        <input type="file" id="inputImg" @change.prevent="addImage" />
                    </div>
                    <button @click="insertImageUrl" class="imageUrl">Add Image using URL</button>
                </div>
                <div class="videoAdd" v-if="toAddVideo">
                    <div class="mediaAddClass">
                        <label class="custom-file-input">Choose Video</label>
                        <input type="file" @change.prevent="addVideo" id="inputVideo" />
                    </div>
                </div>

                <button @click="closeAddMedia" class="close">X</button>
            </div>

        </div>

        <div :class="[{ none: postSection2 !== 'preview-section' }, { previewsection: true }]">

            <div class="previewBtns">
                <button @click.prevent="changeSection('edit-section')">Edit Post</button>
                <button @click.prevent="changeSection('publish-section')">Proceed to publish</button>
            </div>

            <div v-html="blogHTML" id="previewer"></div>
        </div>

        <div :class="[{ none: postSection3 !== 'publish-section' }, { publishsection: true }]">
            <button @click.prevent="changeSection('edit-section')" class="lastEditBtn">Edit Post</button>
            <form @submit.prevent="createPost()">
                <div class="firstDiv">
                    <h2>Select a tag for your post</h2>
                    <div class="options">
                        <div class="option">
                            <input type="radio" value="option1" id="opt1" name="tag" required v-model="tagOption" />
                            <label for="opt1">Choose from available tags</label>
                        </div>
                        <div class="option">
                            <input type="radio" value="option2" name="tag" id="opt2" required v-model="tagOption" />
                            <label for="opt2">Create a new tag</label>
                        </div>
                    </div>

                    <select id="tags" v-model="postTag" v-show="tagOption === 'option1'" required>
                        <option value="" disabled>Select a tag for your post</option>
                        <option v-for="tag in suggestedTags" :key="tag" :value="tag">{{ tag }}</option>
                    </select>

                    <input type="text" v-model="postTag" v-show="tagOption === 'option2'" placeholder="Write your tag here"
                        required @input="handleInputLast" />
                </div>
                <div class="secondDiv">
                    <p>
                        <span>Disable Comments: </span>
                        <button @click.prevent="changeSettingsComment">
                            {{ (disableComments).toString().toUpperCase() }}
                        </button>
                    </p>
                </div>
                <input type="submit" value="Publish" id="publishBtn">
            </form>
        </div>
    </div>
</template>
<style scoped>
header {
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 100%;
    padding: 0 20px;
    background-color: #333333;
}

header a button {
    background-color: transparent;
    color: #efefef;
    border: 2px solid #ccc;
    padding: 0.3rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-weight: 600;
    border-radius: 30%;
}

.previewsection,
.publishsection,
.editorsection {
    height: 100vh;
}

.coverImageAdd {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 100%;
}

.coverImageAdd label,
.removeCover,
#previewBtn,
.removeCover2 {
    cursor: pointer;
    padding: 2px 4px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    font-weight: bold;
}

.editorsection {
    overflow-y: scroll;
    padding: 35px 5px 0 5px;
}

.editorsection header {
    height: 25px;
}

.editorsection,
.previewsection,
.publishsection {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.previewsection,
.publishsection {
    padding: 55px 5px 0 5px;
}

.removeCover {
    display: none;
}

#writeEditor {
    height: 500px;
}

#displayCoverImage {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #ccc;
    margin: 10px 0;
}
.themeBtn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
}

.mediaAddClass {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
}

.themeBtn img {
    width: 24px;
    height: 24px;
}

.addMedia {
    position: absolute;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    top: 0;
    background-color: grey;
}

.imageAdd,
.videoAdd {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
}

.addMedia button.close {
    cursor: pointer;
    padding: 5px 20px;
    font-size: 20px;
    margin-top: 20px;
    border-radius: 20px;
}

.addMedia button.imageUrl {
    cursor: pointer;
    padding: 5px 10px;
    font-size: 20px;
    margin-top: 20px;
    border-radius: 20px;
}

.media-item {
    margin-bottom: 10px;
}

.custom-file-input {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 4px 8px;
    cursor: pointer;
    display: inline;
    margin-bottom: 10px;
}

.editorsection input[type="text"] {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    font-weight: bold;
    margin-bottom: 10px;
}

#textarea,
#previewer {
    width: 100%;
    border: 2px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    line-height: 1.5;
    outline: none;
    height: 95%;
    overflow-y: scroll;
    overflow-x: hidden;
    white-space: break-spaces;
}

#textarea {
    height: 350px;
}

#previewBtn {
    align-self: flex-end;
    margin-bottom: 5px;
    height: 5%;
}

.previewBtns {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 10px;
}

.previewBtns button,
.publishsection button:first-of-type,
.publishsection input[type='submit'] {
    padding: 5px;
    border-radius: 10px;
    font-weight: 700;
}

.publishsection select,
.publishsection input[type="text"] {
    padding: 8px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
}

.publish-section p {
    margin: 0;
}

.none {
    display: none;
}

.toolbar {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
}

.toolbar button {
    margin-right: 5px;
    padding: 2px;
}

.NightApp .toolbar button img {
    filter: invert(1);
}

.publishsection button:first-of-type {
    width: fit-content;
    align-self: center;
    padding: 5px;
}

.publishsection form {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

form .firstDiv h2 {
    margin-bottom: 10px;
}

.firstDiv .options {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
}

.option label {
    margin-left: 20px;
    font-size: larger;
}

.secondDiv {
    margin-top: 20px;
}

.secondDiv span {
    font-size: larger;
}

.option:first-of-type {
    margin-bottom: 5px;
}

.publishsection input[type='submit'] {
    margin-top: 30px;
}

@media screen and (min-width: 768px) and (max-width: 991px) {
    .sectionContainers {
        width: 100%;
        display: flex;

    }

    .editorsection {
        width: 50%;
    }

    .previewsection {
        width: 50%;
    }

    #previewBtn,
    .previewBtns button:first-of-type {
        display: none;
    }

    #previewer {
        height: 100vh;
    }

    .toolbar button {
        padding: 5px;
    }
}

@media screen and (min-width: 992px) {
    .sectionContainers {
        width: 100%;
        display: flex;

    }

    .editorsection {
        width: 35%;
    }

    .previewsection {
        width: 35%;
    }

    .publishsection {
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #previewBtn,
    .previewBtns,
    .publishsection .lastEditBtn {
        display: none;
    }

    #previewer {
        height: 100vh;
    }

    .publishsection select {
        font-size: large;
    }

    .toolbar button img {
        height: 25px;
    }
}</style>