<script setup>
import arrow from './arrow.vue';
import glitchText from './glitchText.vue';

</script>

<template>
    <div class="navigation">
        <arrow />
        <glitchText title="Welecome to this undersite" />
    </div>

    <div class="box">
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
.navigation {
    display: flex;
    align-items: center;
}

.box {
    margin: 0 2vw;
    min-height: 90vh;
    border: white 2px solid;
    border-color: white transparent transparent white;

    p {
        padding: 15px 0 0 20px;
        color: white;

    }

}
</style>
