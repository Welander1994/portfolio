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
      <glitchText title="Shopping list app" />
      <hr_ />
      <p>
        The ShoppingList <span>PWA</span> is a full-stack web application that I developed using <span>Vue.js</span> and
        <span>LocalStorage</span>.
        This project
        was primarily intended as a means for me to enhance my Vue.js skills and gain more experience with data handling
        in web development.
      </p>
      <p>
        To create this application, I started by developing a clear and concise user interface that would enable users to
        easily manage their shopping lists. The use of Vue.js allowed me to create a highly responsive and dynamic
        interface that reacts quickly to user actions. I also made use of CSS to design a modern and aesthetically
        pleasing layout.
      </p>
      <p>
        One of the key features of this application is its use of LocalStorage, which enabled me to store
        user data
        securely and reliably on their devices. This feature ensures that users can access their shopping lists even after
        closing the application or restarting their device. The data is encrypted and stored locally, providing users with
        a high level of privacy and security.
      </p>
      <Btn />
      <nav>
        <ul class="links">
          <li>
            <a href="https://github.com/Welander1994/ShopppingList" target="_blank">
              <img src="../assets/img/GitHub_Logo_White.png" alt="github">
            </a>
          </li>
          <li>
            <a id="shopping__img" href="https://we-lander.dk/ShoppingList/" target="_blank">
              <img src="../assets/img/shoppingCart.png" alt="github">
            </a>
          </li>
        </ul>
      </nav>

      <h2>Things i learned</h2>

      <ul class="box__learn">
        <li><span> Vue </span></li>
        <li><span>Local storage </span></li>
        <li><span>PWA manifest </span></li>
      </ul>
    </div>
    <div class="box__img">

    </div>

  </div>
</template>

<style lang="scss" scoped>
.box {
  display: flex;

  margin: 0 2vw 2vw 2vw;
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
      padding: 0;
      width: 90vw;
    }
  }
}
</style>
