<script setup>
import header__menu from './header__menu.vue';
import glitchText from './glitchText.vue';
import weatherApp from './weatherApp/weather.vue'

</script>

<template>
    <div class="navigation">
        <header__menu />
    </div>

    <div class="box">
        <div class="box__content">
            <glitchText title="Weather api" />
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
        <div class="box__img">
            <weatherApp />
        </div>

    </div>
</template>

<style lang="scss" scoped>
.box {
    display: flex;
    margin: 0 2vw 2vw 2vw;

    border: var(--white) 2px solid;
    border-color: var(--white) transparent transparent var(--white);

    p {
        padding: 0 20px;
        width: 50vw;
        color: var(--white);
    }

    &__img {
        width: 100vw;
        height: 100%;
        display: flex;
        justify-content: center;
        padding-top: 6vh;

    }

}
</style>
