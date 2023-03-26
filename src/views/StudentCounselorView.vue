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
        <div class="box__content">
            <glitchText title="Student Counselor Registration Form" speed=".7" />
            <hr_ />
            <p>
                As a part of my web developer education at UCL Odense, my team and I created a multi-step form using
                Vue.js and a SQL database, with an API made using C#. The purpose of the form is to make it easier and
                faster to register a new case when a student counselor talks with a student.
            </p>
            <p>
                Our team consisted of Mads, Ida, Benjamin, and myself. As a team worked we all on the backend, including the
                <span>API</span>, <span>database schema</span>, and <span>query optimization</span>. Our collaboration in
                the design of the backend
                ensured that
                the form and the database worked seamlessly together.
            </p>
            <p>
                We made the form even faster by adding <span>search functionality</span> to it. This allows the counselor to
                quickly find
                the subject and education that the student is seeking counseling on, reducing the time it takes to fill out
                the form.
            </p>
            <p>
                The form includes several steps, where the student counselor can provide relevant information about the
                student and the case, such as personal details, academic performance, and the reason for the counseling
                session. The form also allows the counselor to assign tasks to themselves or other staff members to follow
                up on the case.

                The data collected through the form is stored in a <span>SQL database</span>, which can be easily accessed
                and managed by
                authorized personnel. Our project represents a <span>collaborative effort</span> to create an effective and
                user-friendly
                tool for student counselors to manage cases and provide better support to students.
            </p>

            <p>
                If you'd like to see the project in action, you can click the button below and log in with the
                following credentials:
                <br><br>
                <span>Username:</span> Mads<br>
                <span>Password:</span> 12345
                <br><br>


                Our project represents a collaborative effort to create an effective and user-friendly tool for student
                counselors to manage cases and provide better support to students, developed during our studies at UCL
                Odense.
            </p>

            <Btn />
            <nav>
                <ul class="links">
                    <li>
                        <a href="https://github.com/Antegra/WebDev-1stSem-JIMB" target="_blank">
                            <img src="../assets/img/GitHub_Logo_White.png" alt="github">
                        </a>
                    </li>
                    <li>
                        <a id="shopping__img" href="https://we-lander.dk/Studievejledning/index.html#/" target="_blank">
                            <img src="../assets/img/ucl-logo.24165962.png" alt="Studievejledning">
                        </a>
                    </li>
                </ul>
            </nav>

            <h2>Things i learned</h2>

            <ul class="box__learn">
                <li><span>Vuejs 3 </span></li>
                <li><span>SQL DATABASE </span></li>
                <li><span>DATABASE DESIGN</span></li>
                <li><span>Local storage </span></li>
            </ul>
         
        </div>
        <div class="box__img">

        </div>

    </div>
</template>

<style lang="scss" scoped>
.box {
    display: flex;

    margin: 0 2vw;
    padding: 0 30px;
    border: var(--white) 2px solid;
    border-color: var(--white) transparent transparent var(--white);

    .links {
        display: flex;
        list-style: none;

        li {
            padding-right: 20px;
            display: flex;
            align-items: center;

            /* 
      #shopping__img {
        background-image: url('../assets/img/shoppingCart.png');
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
      } */

            img {
                width: 90px;
                min-height: 46px;
                align-items: center;
                object-fit: contain;
                max-height: 45px;
                padding: 5px 30px;
                border-radius: 25px;
                box-shadow: 5px 5px 13px 0px rgb(0 0 0 / 59%);
                -webkit-box-shadow: 5px 5px 13px 0px rgb(0 0 0 / 59%);
                -moz-box-shadow: 5px 5px 13px 0px rgba(0, 0, 0, 0.59);
                transition: .3s ease-in-out;

                &:hover {
                    background-color: var(--purple);
                }

            }
        }
    }

    p {
        padding: 20px 0;
        max-width: 50vw;

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

        span {
            text-decoration: none;
            color: var(--purple);
            font-weight: 900;
            padding: 2px;
            text-transform: uppercase;
        }

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

        margin: 20px 0;

        li {
            padding: 5px 0;
            margin-left: 20px;
            margin: 0 20px;
            text-decoration: none;
            color: var(--purple);
            padding: 2px;
            text-transform: uppercase;

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
        align-items: center;

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
            width: 90vw;
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
            padding: 0;
            width: 90vw;
        }
    }
}
</style>
