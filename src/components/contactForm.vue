<script setup>
import { ref } from 'vue';

const mailStatus = ref(false);

const changeMailStatus = () => {
    mailStatus.value = !mailStatus.value;
}


const mailInfo = ref({
    email: '',
    message: ''
});

async function postData() {
    // Default options are marked with *
    const response = await fetch('https://formspree.io/f/xpzelybw', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(mailInfo.value),
    });


    return response.json();

}



function onSubmit() {

    changeMailStatus();
    postData();
    mailInfo.value.email = '';
    mailInfo.value.message = '';
}


</script>

<template>
    <div>
        <form id="contact-form" @submit.prevent="onSubmit()" method="POST">
            <label>
                <p>email</p>
                <input class="email" type="email" v-model="mailInfo.email" name="email"
                    placeholder="Write your email here...">

            </label>
            <label>
                <p>message</p>
                <textarea class="message" name="message" placeholder="Write your message here..."></textarea>

            </label>
            <!-- your other form fields go here -->
            <button class="g-recaptcha" data-sitekey=" 6LfJ6vwkAAAAANuzyTtvxoAxD8Qk8wmABwqgHF0N" data-action='submit'
                type="submit">Send</button>
        </form>
    </div>

    <div class="model" v-if="mailStatus">
        <div class="content">
            <h2>Succes your mail has been sent</h2>
            <p>Thanks for contacting me</p>
            <button @click="changeMailStatus">Close</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.g-recaptcha {
    display: block !important;

}

.model {
    position: absolute;
    top: 0;
    left: 0;

    width: 100svw;
    height: 100svh;
    backdrop-filter: blur(2px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    .content {
        background: rgb(20, 20, 20);
        background: linear-gradient(43deg, rgba(20, 20, 20, 1) 0%, rgba(51, 51, 51, 1) 83%);
        border: 1px solid var(--purple);
        border-radius: 25px;
        padding: 5vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;


        h2 {

            background: linear-gradient(60deg, var(--white) 0%, var(--gray) 100%);
            background-size: 100%;
            background-repeat: repeat;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;
            -webkit-text-stroke: 2px transparent;
            font-size: 30px;
        }

        button {
            border: none;
            background-color: transparent;
            text-decoration: none;
            color: var(--purple);
            font-weight: bolder;
            font-size: 20px;
            font-family: myFirstFont;
            padding: 2px;
            text-transform: uppercase;
            transition: .5s;

            &:hover {
                cursor: pointer;
                color: var(--white);
                text-shadow: #ff1493 5px 0px, limegreen -5px 0px;

            }
        }
    }

}

form {
    display: flex;
    flex-direction: column;
    width: 25vw;
    position: relative;
    padding: 5rem 3rem;

    max-width: 90%;
    border: 1px solid var(--purple);
    border-radius: 25px;
    box-shadow: 0px 0px 43px 0px rgba(0, 0, 0, 0.59);
    -webkit-box-shadow: 10px 10px 43px 0px rgba(0, 0, 0, 0.59);
    -moz-box-shadow: 0px 0px 43px 0px rgba(0, 0, 0, 0.59);


    p {
        text-decoration: none;
        color: var(--gray);
        font-weight: 900;
        font-size: 24px;
        padding: 5px 2px;
        text-transform: capitalize;

        background: linear-gradient(60deg, var(--white) 0%, var(--gray) 100%);
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;

    }

    input,
    textarea,
    button {
        width: 90%;
        padding: 15px 0;
        margin: 10px 0;
        border: none;
        min-height: 30px;
        transition: .1s;
        z-index: 1;
        background-color: transparent;

        border-top: 1px var(--purple) solid;
        /*         border-left: 1px var(--purple) solid; */

        color: var(--gray);
        font-size: 18px;

        font-family: myFirstFont;

        &:focus {
            border: 1px var(--purple) solid;
            padding-left: 10px;
            outline: none
        }


    }

    textarea {
        height: 100px;

    }

    button {
        border: 0px var(--purple) solid;
        text-decoration: none;
        color: var(--purple);
        font-weight: bolder;
        padding: 2px;
        text-transform: uppercase;
        transition: .6s all;
        font-size: 24px;
        width: 30%;
        text-align: start;

        &:hover {
            cursor: pointer;
            color: var(--white);
            text-shadow: #ff1493 5px 0px, limegreen -5px 0px;

        }
    }



}

@media only screen and (max-width: 700px) {
    form {
        width: 65vw;
        padding: 2rem 2rem;

    }

    .model {



        .content {
            width: 80vw;
            height: 30vh;
            text-align: center;

            h2 {}

            button {}
        }

    }
}
</style>