<script setup lang="ts">
import useLikeButton from '@/composables/useLikeButton.vue'
import useBookmarks from './useBookmarks.vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps({
    post: {
        type: Object,
        required: true
    }
})

const routeToPost = (postId: string) => {
    router.push(`/post/${postId}`)
}
</script>
<template>
    <div class="analysesDisplay">
        <useLikeButton :viewPostId="props.post.postId" :viewPostPosterId="props.post.posterId" />
        <button @click.prevent="routeToPost(props.post.postId)">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 50 50">
                <path d="M25 4.0703125C12.368265 4.0703125 2.0703125 12.921644 2.0703125 24C2.0703125 30.432481 5.5907163 36.030749 11.003906 39.6875C10.995106 39.903125 11.010706 40.250912 10.728516 41.294922C10.378462 42.590119 9.6725023 44.413033 8.2382812 46.46875L7.21875 47.929688L9 47.929688C15.17102 47.929688 18.741544 43.907595 19.294922 43.261719C21.134317 43.693171 23.024914 43.929686 25 43.929688C37.631735 43.929688 47.929688 35.078356 47.929688 24C47.929688 12.921644 37.631735 4.0703125 25 4.0703125zM25 5.9296875C36.768265 5.9296875 46.070312 14.078356 46.070312 24C46.070312 33.921644 36.768265 42.070312 25 42.070312C22.959016 42.070312 21.040073 41.87506 19.236328 41.400391L18.654297 41.248047L18.277344 41.714844C18.277344 41.714844 15.390792 44.972581 10.78125 45.757812C11.617979 44.248964 12.233683 42.844161 12.521484 41.779297C12.921431 40.299494 12.929687 39.300781 12.929688 39.300781L12.929688 38.789062L12.5 38.515625C7.2214165 35.156526 3.9296875 29.955741 3.9296875 24C3.9296875 14.078356 13.231735 5.9296875 25 5.9296875z"></path>
              </svg>              
            <span>{{ props.post.postComments.total }}</span>
        </button>
        <button disabled>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                width="25" height="25" viewBox="0 0 256 256" xml:space="preserve">
                <defs>
                </defs>
                <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                    <path
                        d="M 45 66.739 c -11.987 0 -21.74 -9.752 -21.74 -21.739 S 33.013 23.26 45 23.26 S 66.739 33.013 66.739 45 S 56.987 66.739 45 66.739 z M 45 29.26 c -8.679 0 -15.74 7.061 -15.74 15.74 S 36.321 60.739 45 60.739 S 60.739 53.679 60.739 45 S 53.679 29.26 45 29.26 z"
                        style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;"
                        transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    <path
                        d="M 45 66.763 c -14.477 0 -28.953 -6.054 -43.328 -18.16 C 0.609 47.708 0 46.395 0 45 s 0.609 -2.708 1.672 -3.603 c 28.751 -24.214 57.906 -24.214 86.656 0 l 0 0 C 89.391 42.293 90 43.605 90 45 s -0.609 2.707 -1.672 3.602 C 73.953 60.709 59.477 66.763 45 66.763 z M 6.726 45 c 25.74 21.046 50.809 21.048 76.547 0 C 57.536 23.954 32.467 23.952 6.726 45 z M 84.459 45.984 c 0.001 0.001 0.003 0.002 0.004 0.003 C 84.461 45.986 84.461 45.985 84.459 45.984 z"
                        style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;"
                        transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    <circle cx="45" cy="45" r="7"
                        style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;"
                        transform="  matrix(1 0 0 1 0 0) " />
                </g>
            </svg>
            <span>{{ props.post.postViews }}</span>
        </button>
        <useBookmarks :view-post-id="props.post.postId"/>
    </div>
</template>
<style scoped>
.analysesDisplay {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
    font-size: small;
}

.analysesDisplay button {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    width: 50px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-weight: bold;
}
span{
    font-weight: bold;
    font-size: smaller;
}
.DayApp button:nth-of-type(3) svg *{
    fill: black
}
.NightApp button:nth-of-type(3) svg *{
    fill: #fff;
}

button:last-of-type{
    cursor: not-allowed;
}
</style>