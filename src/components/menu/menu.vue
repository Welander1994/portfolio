<script setup>
import { ref } from 'vue';
import burger__menu from './burger__menu.vue';

let menu = ref(false);

function openMenu() {
    menu.value = !menu.value;
}


</script>

<template>
    <div>
        <nav>
            <div class="menu" :class="{ active: menu }">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/WeatherAppView">Weather App</RouterLink>
                <RouterLink to="/ShoppingView">Shopping list</RouterLink>
                <RouterLink to="/projectsView">projects</RouterLink>
                <RouterLink to="/ShoppingView">Kontakt</RouterLink>
            </div>
            <div class="burger__menu">
                <burger__menu @mouseup="openMenu()" />
            </div>

        </nav>
    </div>-
</template>

<style lang="scss" scoped>
nav {
    display: flex;
    align-items: center;

    height: 70px;
    padding: 0 1vw;
    font-size: 18px;

    a {
        text-decoration: none;
        color: var(--white);
        padding: 0 20px;
    }

    a:hover {
        text-decoration: underline;
    }

    .burger__menu {
        display: none;
    }
}

.list {
    flex-direction: column;
    align-items: start;
}

@media only screen and (max-width: 700px) {



    nav {

        flex-direction: row;
        justify-content: end;
        position: relative;

        a {
            background: linear-gradient(60deg, var(--white) 0%, var(--gray) 100%);
            background-size: 100%;
            background-repeat: repeat;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;
            -webkit-text-stroke: 2px transparent;

            padding: 20px;
            font-size: 26px;
        }

        .burger__menu {
            display: flex;

        }

        .menu {

            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            background: rgb(20, 20, 20);
            background: linear-gradient(45deg, var(--dark-blue) 0%, var(--purple) 100%);
            box-shadow: 0 0 30px #00000069;
            transition: .5s ease-in;

            position: absolute;
            top: 0;
            left: -100%;
            padding: 10vh 0;
            width: 100vw;
            height: 80vh;
            text-align: center;
        }

        .active {
            left: 0%;
        }


    }

}
</style>