<script setup>
import arrow from './arrow.vue';
import glitchText from './glitchText.vue';
import menuq from './menu.vue';
</script>

<template>
    <div class="navigation">
        <arrow />
        <menuq />
    </div>

    <div class="box">
        <glitchText title="Welecome to this undersite" />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste facilis amet dicta quod deserunt modi,
            necessitatibus at iure quibusdam officia voluptate fugit voluptatem eligendi! Pariatur veritatis reiciendis
            excepturi magni error?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste facilis amet dicta quod deserunt modi,
            necessitatibus at iure quibusdam officia voluptate fugit voluptatem eligendi! Pariatur veritatis reiciendis
            excepturi magni error?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste facilis amet dicta quod deserunt modi,
            necessitatibus at iure quibusdam officia voluptate fugit voluptatem eligendi! Pariatur veritatis reiciendis
            excepturi magni error?
        </p>


    </div>
</template>

<style lang="scss" scoped>
@import '../assets/main.css';

.navigation {
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
}

.box {
    margin: 0 2vw 2vw 2vw;
    min-height: 55vh;
    border: var(--white) 2px solid;
    border-color: var(--white) transparent transparent var(--white);

    p {
        padding: 0 0 0 20px;
        color: var(--white);
    }

}
</style>
