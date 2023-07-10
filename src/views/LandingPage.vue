<script setup lang="ts">
import { useChatterStore } from '@/stores/store';
import FeedPage from "@/views/FeedPage.vue";
const store = useChatterStore()

</script>
<template>
    <FeedPage v-if="store.signedUser.isLogined" />
    <section v-else id="landingPagecontainer">
        <section id="section1">
            <section id="img"></section>
            <section id="text">
                <h2>Welcome to Chatter: A Haven for Text-Based Content</h2>
                <p>Unleash the power of Words, Connect with Like-minded Readers.</p>
               <RouterLink to="/login"><button>Get Started</button></RouterLink>
            </section>
        </section>
        <section id="section2">
            <h2>About Chatter</h2>
            <p>Chatter is a multi-functional platform where authors and readers can have access to their own content. It
                aims to be a traditional bookworm's heaven and a blog to get access to more text based content. Our
                vision is to foster an inclusive and vibrant community where diversity is celebrated. We encourage
                open-mindedness and respect for all individuals, regardless of their backgrounds or beliefs. By
                promoting dialogue and understanding, we strive.</p>
        </section>

        <section id="section3">
            <h2>Why you should join chatter</h2>
            <p>Our goal is to make writers and readers see our platform as their next heaven for blogging, ensuring ease
                in interactions, connecting with like-minded peers, have access to favorite content based on interests
                and able to communicate your great ideas with people.
            </p>
            <section id="section3Parts">
                <section>
                    <img src="/Vector1.png" />
                    <h3>Analaytics</h3>
                    <p>Analytics to track the number of views, likes and comment and also analyse the performance of
                        your
                        articles over a poeriod of time</p>
                </section>

                <section>
                    <img src="/Vector2.png" alt="analysis"/>
                    <h3>Social interactions</h3>
                    <p>Users on the platform can interact with posts they like, comment and engage in dicussions</p>
                </section>

                <section>
                    <img src="/Vector3.png" />
                    <h3>Content creation</h3>
                    <p>Write nice and appealing with our in-built markdown, a rich text editor</p>
                </section>
            </section>
        </section>
        <section id="section4">
            <img src="/section4Img.png" alt="Adebola Muhydeen" />
            <section>
                <blockquote><q>Chatter has become an integral part of my online experience. As a user of this incredible
                        blogging
                        platform, I have discovered a vibrant community of individuals who are passionate about sharing
                        their ideas and engaging in thoughtful dicussions.</q></blockquote>

                <strong>Adebola Muhydeen,</strong> <em>Software developer at Apple</em>
            </section>
        </section>
    </section>
</template>
<style scoped>
#landingPagecontainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-top: 50px;
    overflow-y: scroll;
}

#section1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    text-align: center;
    position: relative;
}

#section1 #img {
    width: 100%;
    height: 100%;
    background-image: url('/public/section1Url.png');
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(40%)
}

#section1 #text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    width: 100%;
}
#section1 #text a button{
    margin-top: 10px;
    padding: 5px;
    border-radius: 5px;
    background-color: #FFC700;
    cursor: pointer;
    color: #000;
}

#section1 #text a button:hover{
    background-color: #b79b35;
    color: white;
}

section {
    margin-bottom: 10px;
    text-align: center;
}

section h2 {
    margin-bottom: 10px;
}

#section3 {
    margin: 0;
}

#section3 p {
    margin-bottom: 10px;
}

#section3Parts {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    margin: 0;
}

#section3Parts section {
    border: 1px solid #D0D0D0;
    border-radius: 8px;
    text-align: left;
    width: 200px;
    padding: 10px;
    display: flex;
    flex-direction: column;

}
#section3Parts section img{
    height: 30px;
    width: 30px;
    margin-bottom: 25px;
    background-color: gray;
    padding: 5px;
    border-radius: 10%;
    filter: invert(100%);
}

#section3Parts section h3 {
    margin-bottom: 15px;
}
#section4 {
    width: 100%;
    padding: 10px;
    text-align: left;
    background: rgba(255, 237, 204, 0.5);
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 35px;
}

#section4 img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-right: 10px;
}

#section4 section {
    text-align: left;
}

#section4 blockquote {
    margin-bottom: 30px;
}
section p:not(#section3 section p){
    padding: 5px;
}

@media screen and (max-width: 787px) {
    #section3Parts section{
        height: 250px;
    }
}
@media screen and (min-width: 768px) {   
}
@media screen and (min-width: 768px) and (max-width: 991px) {
    #section1{
        height: 300px;
    }
    #section3Parts section{
        height: 250px;
    }
    #section4 {
        margin-bottom: 40px;
    }
}

@media screen and (min-width: 992px) {
    #section1{
        height: 400px;
    }
    #section3Parts section{
        height: 300px;
    }
    #section4 {
        margin-bottom: 45px;
    }
}

@media screen and (min-width: 1200px) {
    #section1{
        height: 500px;
    }

}
</style>