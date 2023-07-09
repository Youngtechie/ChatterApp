<script setup lang="ts">
import { type Ref, ref, onMounted, onUnmounted, watchEffect, nextTick } from 'vue';
import MarkdownIt from 'markdown-it';
import DOMPurify from 'dompurify';
import router from '@/router/index';
import { getFirestore, type DocumentData, doc, getDoc, getDocs, collection, query } from 'firebase/firestore'
import displayCoverImage from '@/components/UploadCoverImage.vue';
import { useChatterStore } from '@/stores/store';
import useUserDetails from '@/composables/useUserDetails.vue'
import CreatePostToCloud from '@/components/CreatePostToCloud.vue';
import axios from 'axios'
import useAuthentication from '@/composables/useAuth.vue'

useUserDetails()

const { app } = useAuthentication()

const db = getFirestore(app)

const store = useChatterStore()
// Configure DOMPurify
const sanitizer = DOMPurify.sanitize;
const textarea = ref<HTMLDivElement | null>(null);
const blogHTML = ref('')
const mediaTime = ref(false)
const title = ref('')
const titleArr = ref<string[]>([])
const rawDocument = ref('')
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

async function getPostContent(post: DocumentData) {

  const contentUrl = post.postRawContent
  const response = await axios.post('/postContent', { contentUrl });
  const newHTML = DomParse.parseFromString(response.data as string, 'text/html');

  if (textarea.value) {
    textarea.value.innerHTML = newHTML.body.innerHTML as string;
  }
}
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
  }
  else {
    router.push('/write')
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

function handleBeforeUnload(event: BeforeUnloadEvent) {
  // If the content has been modified, prompt the user with a confirmation dialog
  if (textarea.value?.innerText.trim() !== '') {
    event.preventDefault();
    event.returnValue = ''; // Required for older browsers
  }
}

onMounted(() => {
  // Add event listener for beforeunload
  window.addEventListener('beforeunload', handleBeforeUnload);
  // Add event listener for window resize
  window.addEventListener('resize', handleResize);

  if (store.textarea[0] !== undefined && store.textarea[0].content.innerText.length > 0) {
    (textarea.value as HTMLDivElement).innerText = store.textarea[0].content.innerText as string;
    title.value = store.textarea[0].title
  }

  const browserWidth = window.innerWidth;
  if (browserWidth as number >= 768) {
    postSection1.value = 'edit-section'
    postSection2.value = 'preview-section'
    postSection3.value = ''
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

  if(textarea.value!.innerText.trim() == ''){
    textarea.value?.focus();
  }

  clearTimeout(timeOut)
})

onUnmounted(() => {
  undoStack.value = [];
  redoStack.value = [];
  clearTimeout(timeOut)
  const warning = document.getElementById('warningShow') as HTMLDivElement
  if(warning){
    warning.style.display = 'none';
  }
  window.removeEventListener('beforeunload', handleBeforeUnload);
})

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
        (toolbar.value as HTMLDivElement).style.display = 'none';
      }
    }
  }, 200);
}

function handleResize() {
  const browserWidth = window.innerWidth;
  if (browserWidth as number >= 768) {
    postSection1.value = 'edit-section'
    postSection2.value = 'preview-section'
    postSection3.value = ''
  }
  else {
    postSection1.value = 'edit-section'
    postSection2.value = ''
    postSection3.value = ''
  }
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

function preview() {

  const md = new MarkdownIt()

  rawDocument.value = textarea.value?.innerHTML as string

  const doc = parser.parseFromString(textarea.value?.innerHTML as string, 'text/html')

  const titleTextNode = document.createTextNode('# ' + title.value + '\n'); // Create a text node with the title value

  // Insert the title text node at the beginning of the body
  doc.body.insertBefore(titleTextNode, doc.body.firstChild);

  const TitleAdded = doc.body.innerText


  store.textarea = [{
    "title": title.value,
    "content": textarea.value as HTMLDivElement
  }]

  const browserWidth = window.innerWidth;

  if (browserWidth as number < 768) {
    changeSection('preview-section')
  }

  titleArr.value = title.value.split(" ")

  const markdownGenerated = md.render(TitleAdded as string);

  const sanitized = sanitizer(markdownGenerated)
  blogHTML.value = sanitized;

  (document.getElementById('previewer') as HTMLDivElement).normalize();

  postContentToBePosted.value = blogHTML.value
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
    if (browserWidth as number >= 768) {
      postSection1.value = 'edit-section'
      postSection2.value = 'preview-section'
      postSection3.value = ''
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
  if (store.signedUser.username !== '' && store.signedUser.username !== undefined) {
    if (postContentToBePosted.value.trim() !== '' && rawDocument.value.trim() !== '') {
      (document.getElementById('publishBtn') as HTMLInputElement).setAttribute('disabled', 'true');
      const id = router.currentRoute.value.params.postId ? router.currentRoute.value.params.postId : '';
      CreatePostToCloud(rawDocument.value as string, postContentToBePosted.value as string, titleArr.value, postTag.value, 'post', disableComments.value, id as string, imageDeleted.value)
    }
    else {
      const warningShow = document.getElementById('warningShow') as HTMLDivElement
      warningShow.style.display = 'flex'
      warningShow.textContent = 'Please add some content to create a post'
      timeOut = setTimeout(() => {
        warningShow.style.display = 'none'
      }, 2000);
    }
  }
  else {
    const warningShow = document.getElementById('warningShow') as HTMLDivElement
      warningShow.style.display = 'flex'
      warningShow.textContent = 'You must be have signed in or compeleted your registration to post'
      timeOut = setTimeout(() => {
        warningShow.style.display = 'none'
      }, 2000)
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

function handleMediaTimechange() {
  mediaTime.value = false
}

function undo() {
  if (undoStack.value.length > 1) {
    const current = undoStack.value.pop()!;
    redoStack.value.push(current);

    const previous = undoStack.value[undoStack.value.length - 1];
    textarea.value!.innerHTML = previous.content;

    if(previous.content !== ''){
      setCursorPosition(previous.cursor);
    }

    updateDom()
  }
  else{
    insertTextAtCursor('')
  }
}

function redo() {
  if (redoStack.value.length > 0) {
    console.log(redoStack.value)
    const next = redoStack.value.pop()!;
    undoStack.value.push(next);

    textarea.value!.innerHTML = next.content;

    if(next.content !== ''){
      setCursorPosition(next.cursor);
    }

    updateDom()
  }
  else{
    insertTextAtCursor('')
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
          const pasteDoc = DomParse.parseFromString(pastedData, 'text/html');
          pasteDoc.body.innerHTML = pasteDoc.body.innerHTML.replace(/<[^>]*>?/gm, '');
          const textNode = document.createTextNode(pasteDoc.body.innerText.replace(/\n/g, ''));
          range.insertNode(textNode);
          range.setStartAfter(textNode);
          range.collapse(true);
          selection?.removeAllRanges();
          selection?.addRange(range);
          editableDiv.focus();
          updateDom()
        }
      }
    })
}

function insertTextAtCursor(text: string) {
  if (!textarea.value) return;

  const selection = window.getSelection();
  if (selection) {
    const range = selection.getRangeAt(0);
    range.deleteContents();

    const textNode = document.createTextNode(text);
    range.insertNode(textNode);

    if (text === '**' || text === '_' || text === '~~' || text === '\n```\n' || text === '`') {
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
  else {
    insertTextAtCursor('');
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
  else {
    insertTextAtCursor('');
  }
}

function insertHorizontalRule() {
  insertTextAtCursor('\n *** \n');
}

function insertStrikeThrough() {
  insertTextAtCursor('~~');
}

function insertQuote() {
  insertTextAtCursor('\n > ')
}

function insertImageUrl() {
  const url = prompt('Enter the URL:');
  if (url) {
    insertTextAtCursor(`\n![Image](${url})\n`);
  }
}

function insertSourceCode() {
  insertTextAtCursor('`')
}

function OrderedList() {
  insertTextAtCursor('\n1. ')
}
function UnorderedList() {
  insertTextAtCursor('\n- ')
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
    <RouterLink to="/"><button type="button">Home</button></RouterLink>
    <button type="button" :title="store.themeDetails.title" id="themeBtn" @click="store.changeTheme">
      <div id="themeImgContainer"><img :src="store.themeDetails.img" :alt="store.themeDetails.title" /></div>
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
        <button type="button" class="removeCover" @click="removeCoverImage">Remove Cover Image</button>
      </div>

      <button type="button" @click="preview" id="previewBtn">Preview</button>

      <div id="writeEditor">
        <input type="text" v-model="title" placeholder="Post Title" @focus="handleMediaTimechange" @input="updateDom" />
        <div class="toolbar" ref="toolbar">
          <button type="button" @click.prevent="makeBold">
            <img src="https://img.icons8.com/ios-filled/50/000000/bold.png" alt="bold" height="20"/>
          </button>
          <button type="button" @click.prevent="makeItalic">
            <img src="https://img.icons8.com/ios-filled/50/000000/italic.png" alt="itallic" height="20"/>
          </button>
          <button type="button" @click.prevent="insertLink">
            <img src="https://img.icons8.com/ios-filled/50/000000/link.png" alt="link" height="20"/>
          </button>
          <button type="button" @click.prevent="insertHeader">
            <img src="https://img.icons8.com/ios-filled/50/000000/header.png" alt="header" height="20"/>
          </button>
          <button type="button" @click.prevent="insertStrikeThrough">
            <img src="https://img.icons8.com/ios-filled/50/000000/strikethrough.png" alt="strike" height="20"/>
          </button>
          <button type="button" @click.prevent="insertQuote">
            <img src="https://img.icons8.com/ios-filled/50/000000/comma.png" alt="quote" height="20"/>
          </button>
          <button type="button" @click.prevent="insertSourceCode">
            <img src="https://img.icons8.com/windows/90/000000/source-code.png" alt="source code" height="20"/>
          </button>
          <button type="button" @click.prevent="OrderedList">
            <img src="https://img.icons8.com/windows/90/000000/numbered-list.png" alt="OrderedList" height="20" />
          </button>
          <button type="button" @click.prevent="UnorderedList">
            <img src="https://img.icons8.com/ios-filled/80/000000/bulleted-list.png" alt="UnorderedList" height="20" />
          </button>
          <button type="button" @click.prevent="insertTable">
            <img src="https://img.icons8.com/ios-filled/50/000000/table.png" alt="Table" height="20"/>
          </button>
          <button type="button" @click.prevent="insertCodeBlock">
            <img src="https://img.icons8.com/ios-filled/50/000000/code.png" alt="Code" height="20"/>
          </button>
          <button type="button" @click.prevent="insertHorizontalRule">
            <img src="https://img.icons8.com/ios-filled/50/000000/horizontal-line.png" alt="Horizontal Line"
              height="20"/>
          </button>
          <button type="button" @click.prevent="insertImageUrl" v-show="mediaTime">
            <img src="https://img.icons8.com/ios-filled/50/000000/image.png" alt="Image" height="20"/>
          </button>
          <button type="button" @click.prevent="undo">
            <img src="https://img.icons8.com/ios-filled/50/000000/undo.png" alt="Image" height="20"/>
          </button>
          <button type="button" @click.prevent="redo">
            <img src="https://img.icons8.com/ios-filled/50/000000/redo.png" alt="Image" height="20"/>
          </button>
        </div>
        <div ref="textarea" contenteditable="true" id="textarea" @keydown="handleKeyDown" @input="handleInput"
          @paste="handlePaste" @focusout="handleBlur" @focus="handleFocus">
        </div>
      </div>
    </div>

    <div :class="[{ none: postSection2 !== 'preview-section' }, { previewsection: true }]">

      <div class="previewBtns">
        <button type="button" @click.prevent="changeSection('edit-section')">Edit Post</button>
        <button type="button" @click.prevent="changeSection('publish-section')">Proceed to publish</button>
      </div>

      <div v-html="blogHTML" id="previewer"></div>
    </div>

    <div :class="[{ none: postSection3 !== 'publish-section' }, { publishsection: true }]">
      <button type="button" @click.prevent="changeSection('edit-section')" class="lastEditBtn">Edit Post</button>
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

          <select id="tags" v-model="postTag" v-show="tagOption === 'option1'" required title="Tags">
            <option value="" disabled>Select a tag for your post</option>
            <option v-for="tag in suggestedTags" :key="tag" :value="tag">{{ tag }}</option>
          </select>

          <input type="text" v-model="postTag" v-show="tagOption === 'option2'" placeholder="Write your tag here" required
            @input="handleInputLast" name="Inputag" />
        </div>
        <div class="secondDiv">
          <p>
            <span>Disable Comments: </span>
            <button type="button" @click.prevent="changeSettingsComment">
              {{ (disableComments).toString().toUpperCase() }}
            </button>
          </p>
        </div>
        <input type="submit" value="Publish" id="publishBtn">
      </form>
    </div>
    <div id="warningShow"></div>
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
  outline: none;
  height: 95%;
  overflow-y: scroll;
  overflow-x: hidden;
  max-width: 95vw;
  white-space: pre-wrap;
}

#textarea {
  height: 350px;
  line-height: 1.5;
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
.previewBtns button{
  cursor: pointer;
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
  margin-top: 5px;
  cursor: pointer;
}

.NightApp .toolbar button img {
  filter: invert(1);
}

.publishsection button:first-of-type {
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
#warningShow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border: 1px outset #efefef;
  display: none;
  text-align: center;
  height: 200px;
  width: 200px;
  border-radius: 10px;
  font-weight: bolder;
  align-items: center;
  justify-content: center;
}

.DayApp #warningShow {
  color: #efefef;
  background-color: black;
}

.NightApp #warningShow {
  color: black;
  background-color: #efefef;
}

button:hover, input[type="button"], input[type="submit"]:hover, label:hover {
  background-color: #888; /* Dimmed background color */
}

@media screen and (min-width: 768px) {
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
  .publishsection {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .publishsection select {
    font-size: large;
  }
  
}
</style>