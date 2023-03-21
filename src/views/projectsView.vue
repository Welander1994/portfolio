<script setup>

import glitchText from '../components/glitchText.vue';
import menu_bar from '../components/menu/menu.vue';
import hr_ from '../components/hr.vue';
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
                <glitchText title="Projects" speed="2" />
                <hr_ />
                <p>
                    Here, you'll find a selection of projects I've worked on throughout my time as a web developer. From
                    custom websites to interactive web applications, these projects showcase my skills in design,
                    development.
                </p>
                <div class="menu" :class="{ active: menu }">

                    <RouterLink id="weatherApp" to="/WeatherApp">Weather App</RouterLink>
                    <RouterLink id="ShoppingList" to="/Shopping">Shopping list</RouterLink>
                    <RouterLink id="studentCounsel" to="/studentCounsel">student Counsel</RouterLink>

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
    flex-direction: column;
    margin: 0 2vw 2vw 2vw;
    padding: 0 30px;
    border: var(--white) 2px solid;
    border-color: var(--white) transparent transparent var(--white);

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

            &:nth-child(3) {
                animation-delay: 1.2s;
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


    p {
        padding: 20px 0;
        max-width: 40vw;

        a {
            text-decoration: none;
            color: var(--purple);
            font-weight: bolder;
            transition: .5s;
            padding: 2px;
            text-transform: uppercase;
            animation: myanim 2s;
            animation-delay: 2s;

            &:hover {
                color: var(--white);
                text-shadow: #ff1493 5px 0px, limegreen -5px 0px
            }
        }

    }

    ul {
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        width: 30vw;

        li {
            margin: 0 20px;
            text-decoration: none;
            color: var(--purple);
            padding: 2px;
            text-transform: uppercase;
        }
    }

    span {
        text-decoration: none;
        color: var(--purple);
        font-weight: 900;
        padding: 2px;
        text-transform: uppercase;
    }


    h2,
    h1 {
        padding: 20px 0 20px 0;
        width: 50vw;
        color: var(--white);
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

@media only screen and (max-width: 700px) {
    .box {

        flex-direction: column;
        max-width: 100vw;


        .box__content {
            width: 110%;
        }



        h2,
        h1 {
            padding: 20px 0;
            width: 90vw;
            color: var(--white);
        }

        p {
            max-width: none;

            padding: 10px 0;
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
