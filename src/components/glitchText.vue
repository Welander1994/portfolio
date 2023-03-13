<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
    title: String,
    speed: Number
})



function glitch() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let interval = null;
    let event = document.getElementById("header");

    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        event.innerText = event.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (iteration >= event.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / props.speed;
    }, 30);


}


onMounted(() => {

    glitch();

})


</script>

<template>
    <h1 class="text" id="header" :data-value="title">{{ title }}</h1>
</template>

<style lang="scss" scoped>
@import '../assets/main.css';

h1 {
    font-size: 2vw;
    color: var(--white);
    padding: 20px;
    user-select: none;

    /* Create the gradient. */
    background: linear-gradient(60deg, var(--white) 0%, var(--gray) 100%);

    /* Set the background size and repeat properties. */
    background-size: 100%;
    background-repeat: repeat;

    /* Use the text as a mask for the background. */
    /* This will show the gradient as a text color rather than element bg. */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;

    -webkit-text-stroke: 2px transparent;

}

.text-small {
    font-size: 1.5rem;
}

@media screen and (max-width: 480px) {
    h1 {
        font-size: 3rem;

    }
}
</style>
