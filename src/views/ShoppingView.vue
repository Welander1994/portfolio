<script setup>
import header__menu from '../components/header__menu.vue';
import glitchText from '../components/glitchText.vue';
import weatherApp from '../components/weatherApp/weather.vue'

</script>

<template>
  <div class="navigation">
    <header__menu />
  </div>

  <div class="box">
    <div class="box__content">
      <glitchText title="Shopping list app" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste facilis amet dicta quod deserunt modi,
        necessitatibus at iure quibusdam officia voluptate fugit voluptatem eligendi! Pariatur veritatis reiciendis
        excepturi magni error?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste facilis amet dicta quod deserunt modi,
        necessitatibus at iure quibusdam officia voluptate fugit voluptatem eligendi! Pariatur veritatis reiciendis
        excepturi magni error?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste facilis amet dicta quod deserunt modi,
        necessitatibus at iure quibusdam officia voluptate fugit voluptatem eligendi! Pariatur veritatis reiciendis
        excepturi magni error?
      </p>

      <nav>
        <ul class="links">
          <li>
            <a href="https://github.com/Welander1994/ShopppingList" target="_blank">
              <img src="../assets/img/GitHub_Logo_White.png" alt="github">
            </a>
          </li>
          <li>
            <a id="shopping__img" href="https://we-lander.dk/ShoppingList/" target="_blank">

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

        &:hover {
          background-color: rgba(255, 255, 255, 0.13);
        }

      }
    }
  }

  p,
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
    align-items: center;

    .box__content {
      width: 110%;
    }

    p,
    h2,
    h1 {
      padding: 20px 0;
      width: 90vw;
      color: var(--white);
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
