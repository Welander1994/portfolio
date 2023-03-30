<script setup>
import { ref, onMounted } from 'vue';
const root = document.querySelector(':root');

let dark = true;
let name = ref('Light Mode')


const darkMode = () => {

    let color = {
        bg1: '#adabbf',
        bg2: '#f2f2f2',
        gray: '#575664',
        white: '#7063bc',
        show: 'block',
        dark: false
    }

    if (dark) {
        root.style.setProperty('--bg-1', "#adabbf");
        root.style.setProperty('--bg-2', "#f2f2f2");
        root.style.setProperty('--gray', "#575664");
        root.style.setProperty('--white', "#7063bc");
        root.style.setProperty('--show', 'none');

        dark = false;
        name.value = 'Dark Mode'


        color.bg1 = '#adabbf';
        color.bg2 = '#f2f2f2';
        color.gray = '#575664';
        color.white = '#7063bc';
        color.show = 'none';
        color.dark = false;
        color.name = 'Light Mode'
        localStorage.setItem("theme-color", JSON.stringify(color))

    } else {
        root.style.setProperty('--bg-1', "rgba(20, 20, 20, 1)");
        root.style.setProperty('--bg-2', "rgba(51, 51, 51, 1)");
        root.style.setProperty('--gray', "#adabbf");
        root.style.setProperty('--white', "#f2f2f2");
        root.style.setProperty('--show', 'block');

        dark = true;
        name.value = 'Light Mode'

        color.bg1 = 'rgba(20, 20, 20, 1)';
        color.bg2 = 'rgba(51, 51, 51, 1)';
        color.gray = '#adabbf';
        color.white = '#f2f2f2';
        color.show = 'block';
        color.dark = true;
        color.name = 'Dark Mode'

        localStorage.setItem("theme-color", JSON.stringify(color))
    }
}




onMounted(() => {
    const newColors = localStorage.getItem("theme-color");
    const realColor = JSON.parse(newColors);

    if (newColors) {
        root.style.setProperty('--bg-1', realColor.bg1);
        root.style.setProperty('--bg-2', realColor.bg2);
        root.style.setProperty('--gray', realColor.gray);
        root.style.setProperty('--white', realColor.white);
        root.style.setProperty('--show', realColor.show);
        dark = realColor.dark;
        name.value = realColor.name
    }


})



</script>

<template>
    <a class="toggle" @click="darkMode">{{ name }}</a>
</template>

<style lang="scss" scoped>
.toggle {
    cursor: pointer;
}
</style>