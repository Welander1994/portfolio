<script setup>
import { onMounted } from 'vue'

defineProps({
    title: String
})

onMounted(() => {
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

        iteration += 1 / 1.5;
    }, 30);

})


</script>

<template>
    <h1 id="header" :data-value="title">{{ title }}</h1>
</template>

<style lang="scss" scoped>
@import '../assets/main.css';

h1 {
    font-size: 3rem;
    color: var(--white);
    padding: 20px;
}

@media screen and (max-width: 480px) {
    h1 {
        font-size: 1.2rem;

    }
}
</style>
