<script setup>
import { ref, onMounted } from 'vue';

let rings = ref(document.getElementsByClassName('ring'));

let ringSize = ref('50');


onMounted(() => {

    for (let i = 0; i < rings.value.length; i++) {
        rings.value[i].style.padding = ringSize.value * i + 'px';
        rings.value[i].style.opacity = 10 / i + '%';

    }

})

</script>

<template>
    <div>
        <div class="sun">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.sun {
    position: absolute;
    top: 0vh;
    right: 0vw;
    z-index: -10;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

}

.ring {
    position: fixed;
    overflow: hidden;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    opacity: 30%;
    box-shadow: 10px 10px 20px black;
    background-color: rgba(243, 243, 72, 0.781);

    animation: sun 10s alternate infinite ease;

}


@keyframes sun {
    0% {

        transform: scale(1) translateY(-350px) translateX(40vw);
    }

    100% {

        transform: scale(1.05) translateY(-350px) translateX(40vw);
    }

}
</style>