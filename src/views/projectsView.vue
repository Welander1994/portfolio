<script setup>
import header__menu from '../components/header__menu.vue';
import glitchText from '../components/glitchText.vue';
import menu_bar from '../components/menu/menu.vue'
import { onMounted } from 'vue';


/* onMounted(() => {
    const weatherApp = document.getElementById('weatherApp');
    const ShoppingList = document.getElementById('ShoppingList');
    const b = document.querySelector('.b');

    weatherApp.onmouseover = () => {
        b.style.backgroundImage = "url('/src/assets/img/weatherApp.jpg')";

    }

    ShoppingList.onmouseover = () => {
        b.style.backgroundImage = "url('/src/assets/img/shoppinglist.jpg')";

    }
})
 */





</script>

<template>
    <div>
        <div class="navigation">
            <menu_bar classes="" type="project" />
        </div>

        <div class="box">
            <div class="main">
                <glitchText title="Projects" />
                <p>List af projekter som jeg har arbejde på, både gennem min uddannelse og i min fritid
                </p>
                <div class="menu" :class="{ active: menu }">
                    <RouterLink id="weatherApp" to="/WeatherApp">Weather App</RouterLink>
                    <RouterLink id="ShoppingList" to="/Shopping">Shopping list</RouterLink>
                </div>
            </div>
            <div class="main__img b">

            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.box {
    display: flex;
    flex-direction: row;
    margin: 0 2vw 2vw 2vw;
    padding: 30px;
    border: var(--white) 2px solid;
    border-color: var(--white) transparent transparent var(--white);

    .links {
        display: flex;
        list-style: none;

        li {
            padding-right: 20px;
            display: flex;
            align-items: center;


            #shopping__img {
                background-image: url('../assets/img/icon-192x192.png');
                background-position: center;
                background-size: 40%;
                background-repeat: no-repeat;
                background-color: rgb(24, 24, 24);
                width: 90px;
                align-items: center;
                height: 45px;
                padding: 5px 30px;
                border-radius: 25px;
                box-shadow: 5px 5px 13px 0px rgb(0 0 0 / 59%);
                -webkit-box-shadow: 5px 5px 13px 0px rgb(0 0 0 / 59%);
                -moz-box-shadow: 5px 5px 13px 0px rgba(0, 0, 0, 0.59);
            }

            img {
                width: 90px;
                align-items: center;
                max-height: 45px;
                padding: 5px 30px;
                border-radius: 25px;
                box-shadow: 5px 5px 13px 0px rgb(0 0 0 / 59%);
                -webkit-box-shadow: 5px 5px 13px 0px rgb(0 0 0 / 59%);
                -moz-box-shadow: 5px 5px 13px 0px rgba(0, 0, 0, 0.59);
                transition: .3s ease-in-out;

                &:hover {
                    background-color: rgba(255, 255, 255, 0.13);
                }

            }
        }
    }


    h2,
    h1 {
        padding: 20px 0 20px 0;
        width: 50vw;
        color: var(--white);
    }

    p {
        padding: 0 0 20px 0;
    }


    .box__learn {


        list-style: circle;
        color: white;

        li {
            padding: 5px 0;
            margin-left: 20px;

            span {
                font-weight: 900;
                font-size: 16px;
            }
        }

    }

    &__img {
        width: 90vw;
        height: 100%;

        display: flex;
        justify-content: center;
        padding-top: 6vh;

        .content {
            max-height: 500px;
        }
    }



}

.main {
    display: flex;
    flex-direction: column;
}

.main__img {
    width: 45vw;
    max-height: 80vh;
    transition: .5s;

    display: flex;
    justify-content: center;

    filter: opacity(50%);
    padding: 0vw;
    background-position: center;
    background-repeat: no-repeat;
    background-clip: border-box;

}

.menu {
    display: flex;
    flex-direction: column;

    a {
        text-decoration: none;
        color: var(--purple);
        font-weight: bolder;
        width: fit-content;
        padding: 10px 0;
        text-transform: uppercase;
        transition: .5s;
        font-size: 24px;
        animation: myanim 2s;
        animation-delay: .8s;

        &:nth-child(2) {
            animation-delay: 1s;
        }
    }


    a:hover {
        color: var(--white);
        text-shadow: #ff1493 5px 0px, limegreen -5px 0px;
    }

    @keyframes myanim {
        10% {
            color: var(--white);
            text-shadow: #ff1493 5px 0px, limegreen -5px 0px;

        }

    }

}

@media only screen and (max-width: 700px) {
    .box {

        flex-direction: column;
        max-width: 100vw;
        align-items: center;

        .box__content {
            width: 110%;
        }


        h2,
        h1 {
            padding: 20px 0;
            width: 90vw;
            color: var(--white);
            font-size: 32px;
        }

        p {
            width: 100%;
            padding: 0 0 20px 0;
        }

        nav {
            ul {
                padding: 20px 0;
                justify-content: space-around;
                align-items: center;
            }
        }

        .box__img {
            height: auto;
            padding: 10vh 0;
            width: 90vw;
        }
    }
}
</style>
