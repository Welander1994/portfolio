<script setup>

import glitchText from '../components/glitchText.vue';
import menu_bar from '../components/menu/menu.vue'
import hr_ from '../components/hr.vue';

</script>

<template>
    <div class="navigation">
        <menu_bar classes="" type="project" />
    </div>

    <div class="box">
        <glitchText title="About me" speed="2"/>
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
            which is why I make time for the gym.
        </p>
        <h3>Programs and Tools I Use</h3>
        <div class="skills">
            <ul>
                <li>Html/scss</li>
                <li>JavaScript</li>
                <li>Vuejs 3</li>
                <li>git</li>
                <li>SQL</li>
                <li>mongoDB</li>
                <li>API</li>
                <li>Postman</li>

                <li>Wordpress</li>
                <li>elementor</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Indesign</li>
                <li>3ds max</li>
            </ul>
        </div>
        <div class="Some">
            <header>
                <a href="https://github.com/Welander1994?tab=repositories" target="_blank">
                    <img src="../assets/img/GitHub_Logo_White.png" alt="github">
                </a>
                <a href="https://www.linkedin.com/in/jacob-welander-776b03105/" target="_blank">
                    <img src="../assets/img/LinkedIn_Logo_2019.png" alt="github">
                </a>
   <!--              <a href="../assets/document/cv.pdf" target="_blank">
                    <img src="../assets/img/CV.png" alt="github">
                </a> -->
            </header>
        </div>

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
    padding: 0 30px;
    border: var(--white) 2px solid;
    border-color: var(--white) transparent transparent var(--white);

    img {
        width: 90px;
        align-items: center;
        height: 40px;
        padding: 5px 30px;
        margin: 0 20px 0 0;
        border-radius: 25px;
        object-fit: contain;
        box-shadow: 5px 5px 13px 0px rgb(0 0 0 / 59%);
        -webkit-box-shadow: 5px 5px 13px 0px rgb(0 0 0 / 59%);
        -moz-box-shadow: 5px 5px 13px 0px rgba(0, 0, 0, 0.59);
        transition: .3s ease-in-out;

        &:hover {
            background-color: var(--purple);
        }
    }

    .skills {
        display: flex;
        flex-direction: row;

        ul {
            max-height: 200px;
            flex-wrap: wrap;

            padding: 10px 0;
            display: flex;
            flex-direction: column;
            width: 25vw;
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
    }


    p {
        padding: 10px 0;
        max-width: 40vw;

        a {
            text-decoration: none;
            color: var(--purple);
            font-weight: 900;
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

        .skills {
            display: flex;
            flex-direction: row;


            ul {
                width: 90vw;
                align-content: space-between;

                li {
                    margin: 1px 18px;
                }
            }
        }


    }
}
</style>
