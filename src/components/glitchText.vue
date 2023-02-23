<script setup>
import { onMounted } from 'vue'

defineProps({
    title: String
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

        iteration += 1 / 3;
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
    font-size: 3rem;
    color: var(--white);
    padding: 20px;

}

.text-small {
    font-size: 1.5rem;
}

@media screen and (max-width: 480px) {
    h1 {
        font-size: 2rem;

    }
}
</style>
