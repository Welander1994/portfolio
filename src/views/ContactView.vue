<script setup>

import glitchText from '../components/glitchText.vue';
import menu_bar from '../components/menu/menu.vue'
import hr_ from '../components/hr.vue';
import contactForm from '../components/contactForm.vue'

</script>

<template>
    <div class="navigation">
        <menu_bar classes="" type="project" />
    </div>

    <div class="box">
        <div class=" main__title">
            <glitchText title="Contact"  speed="2"/>
            <hr_ />
            <p>
                Thank you for visiting my portfolio! If you have any questions, work inquiries, or just want to say hello, I would love to hear from you. Please feel free to fill out the contact form, or you can email me directly at <span>Jacobwelander1994@gmail.com</span>. <br>I look forward to hearing from you and potentially collaborating on a project together. 
            </p>
        </div>
        <div class="box__img">
            <contactForm />
        </div>
       

    </div>
</template>

<style lang="scss" scoped>
.box {
    display: flex;
    flex-direction: row;
    margin: 0 2vw 2vw 2vw;
    padding: 0 30px;
    border: var(--white) 2px solid;
    border-color: var(--white) transparent transparent var(--white);


    hr {
        border-color: var(--gray);
        max-width: 40vw;
    }

    p {
        padding: 10px 0;
        line-height: 21px;
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
  

        display: flex;
        justify-content: center;
        padding-top: 10vh;

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


        &__img {

        justify-content: start;
        padding-top: 5vh;

    }
    }
}
</style>
