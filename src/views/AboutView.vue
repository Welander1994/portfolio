<script setup>
import header__menu from '../components/header__menu.vue';
import glitchText from '../components/glitchText.vue';
import menu_bar from '../components/menu/menu.vue'
import hr_ from '../components/hr.vue';

</script>

<template>
    <div class="navigation">
        <menu_bar classes="" type="project" />
    </div>

    <div class="box">
        <glitchText title="About me" />
        <hr_ />
        <p>
            Hi, I'm Jacob Welander, a 28-year-old web development student based in Odense, where i live with my girlfriend.
            I first learned to code
            while studying 3D animation in Grenaa, and have been hooked on web development ever since.

            As a web developer, I specialize in <span>Vue.js</span> and <span>JavaScript</span>, and I'm always looking for
            new challenges and
            opportunities to learn. I believe that collaboration and community are key to success in any field.
        </p>
        <p>
            In my free time, I love to watch movies and play video games. I find that they inspire my creativity and help me
            stay up-to-date on the latest trends in design and technology. But I also know the importance of staying active,
            which is why I make time for the gym and outdoor activities like hiking and soccer.
        </p>
        <h3>Programs and Tools I Use</h3>
        <ul>
            <li>Html/scss</li>
            <li>JavaScript</li>
            <li>Vuejs 3</li>
            <li>SQL</li>
            <li>API</li>
            <li>Postman</li>
            <li>PWA</li>
        </ul>
        <p>
            Thanks for visiting my portfolio, and feel free to <RouterLink to="/contact">reach out</RouterLink> if you have
            any questions or are interested in
            collaborating!
        </p>

    </div>
</template>

<style lang="scss" scoped>
.box {
    display: flex;
    flex-direction: column;
    margin: 0 2vw 2vw 2vw;
    padding: 30px;
    border: var(--white) 2px solid;
    border-color: var(--white) transparent transparent var(--white);



    hr {
        border-color: var(--gray);
        max-width: 40vw;
    }

    p {
        padding: 10px 0;
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
        list-style: circle;

        li {
            margin: 0 20px;
            text-decoration: none;
            font-weight: 900;
            color: var(--purple);
            padding: 2px;
            text-transform: uppercase;
        }
    }

    span {
        text-decoration: none;
        color: var(--purple);
        font-weight: bolder;
        padding: 2px;
        text-transform: uppercase;
    }


    h2,
    h1 {
        padding: 20px 0 20px 0;
        width: 50vw;
        color: var(--white);
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




        hr {
            max-width: 80vw;
            margin: 0 0 10px 0;
        }

        h2,
        h1 {
            padding: 20px 0;
            width: 90vw;
            color: var(--white);
        }

        p {
            max-width: none;

            padding: 0 0 10px 0;
        }

        nav {
            ul {

                padding: 20px 0;
                justify-content: space-around;
                align-items: center;
            }
        }

    }
}
</style>
