<script setup>
import { ref } from 'vue';
import burger__menu from './burger__menu.vue';
import header__menu from '../header__menu.vue';

defineProps({
    classes: String
})


let menu = ref(false);

function openMenu() {
    menu.value = !menu.value;
}
</script>

<template>
    <div>
        <nav :class="classes">
            <div class="arrow">
                <header__menu />
            </div>
            <div class="menu" :class="{ active: menu }">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/projectsView">projects</RouterLink>
                <RouterLink to="/ShoppingView">Kontakt</RouterLink>
                <RouterLink to="/AboutView">about</RouterLink>
            </div>
            <div class="burger__menu">
                <burger__menu @mouseup="openMenu()" />
            </div>

        </nav>
    </div>
</template>

<style lang="scss" scoped>
.hide {
    display: none;
}

.arrow {
    display: none;
}


nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    padding: 0 1vw;
    font-size: 18px;
    font-weight: bold;


    a {
        text-decoration: none;
        color: var(--white);
        padding: 0 20px;

    }

    a:hover {


        animation: myanim 5s infinite;

        @keyframes myanim {
            10% {
                text-shadow: #ff1493 5px 0px, limegreen -5px 0px;

            }

        }

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

    .home {
        .arrow {
            display: none;
        }


        justify-content: end;

    }

    .arrow {
        display: flex;
    }

    .hide {
        display: flex;
    }


    nav {
        flex-direction: row;
        justify-content: space-between;
        position: relative;

        a {
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
            background: linear-gradient(43deg, rgba(20, 20, 20, 1) 0%, rgba(51, 51, 51, 1) 83%);
            box-shadow: 0 0 30px #00000069;
            transition: .5s ease-in;
            transition: all 1000ms cubic-bezier(1, -.22, 0.765, 1);
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