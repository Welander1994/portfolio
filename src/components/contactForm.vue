<script setup>

</script>

<template>
    <div>
        <!-- modify this form HTML and place wherever you want your form -->

        <form action="https://formspree.io/f/xpzelybw" method="POST">
            <label>
                <p>email:</p>
                <input class="email" type="email" name="email" placeholder="Write your email here...">
            </label>
            <label>
                <p>message:</p>
                <textarea class="message" name="message" placeholder="Write your message here..."></textarea>
            </label>
            <!-- your other form fields go here -->
            <button type="submit">Send</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
form {
    display: flex;
    flex-direction: column;
    width: 25vw;
    padding: 2vw;
    user-select: none;

    padding: 5rem 2rem;

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
        padding: 2px;
        text-transform: uppercase;
        user-select: none;
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
        padding: 15px;
        margin: 10px 0;
        border: none;
        min-height: 30px;
        transition: .1s;

        background-color: transparent;

        border-bottom: 1px var(--purple) solid;
        border-left: 1px var(--purple) solid;

        color: var(--gray);
        font-size: 18px;

        font-family: myFirstFont;

        &:focus {
            border: 1px var(--purple) solid;
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

    }
}
</style>