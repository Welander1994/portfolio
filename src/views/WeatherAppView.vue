<script setup>

import glitchText from '../components/glitchText.vue';
import weatherApp from '../components/weatherApp/weather.vue';
import menu_bar from '../components/menu/menu.vue';
import hr_ from '../components/hr.vue';

</script>

<template>
  <div class="navigation">
    <menu_bar classes="" type="project" />
  </div>

  <div class="box">
    <div class="box__content">
      <glitchText title="Weather api" />
      <hr_ />
      <p>
        For this project, I developed a sleek and modern weather app using <span>Vue.js 3</span> and <span>OpenWeather
          API</span>. With this app,
        users can quickly and easily check the current weather conditions for any location in the world.
      </p>
      <p>
        To enhance the user experience, I designed and implemented a series of Vue components with <span>CSS
          animations</span> that
        correspond to different weather types. For example, the component for rainy weather features a subtle raindrop
        animation, see if you can find all the different weather types.
        I also optimized the app for mobile devices, ensuring that it's fully responsive and easy to use on any screen
        size.
      </p>
      <p>
        Overall, I'm proud of the work I've done on this project, and I'm excited to continue exploring new ways to
        incorporate dynamic animations and responsive design into my web development work.
      </p>

      <nav>
        <ul class="links">
          <li>
            <a href="https://github.com/Welander1994/weatherApp" target="_blank">
              <img src="../assets/img/GitHub_Logo_White.png" alt="github">
            </a>
          </li>
          <li>
            <a href="https://openweathermap.org/" target="_blank">
              <img src="../assets/img/logo_white_cropped.png" alt="github">
            </a>
          </li>
        </ul>
      </nav>

      <h2>Things i learned</h2>

      <ul class="box__learn">
        <li><span> Api: </span> </li>
        <li><span> Vue - components: </span></li>
        <li><span>Css Animation: </span></li>
      </ul>
    </div>
    <div class="box__img">
      <weatherApp />
    </div>

  </div>
</template>

<style lang="scss" scoped>
.navigation {}

.box {
  display: flex;

  margin: 0 2vw 2vw 2vw;
  padding: 0 30px;
  border: var(--white) 2px solid;
  border-color: var(--white) transparent transparent var(--white);

  &__content {
    display: flex;
    flex-direction: column;

  }

  .links {
    display: flex;
    list-style: none;

    li {
      padding-right: 20px;
      align-items: center;

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

  nav {
    margin: 10px 0;
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


  }



}

@media only screen and (max-width: 700px) {
  .box {

    flex-direction: column;
    max-width: 100vw;
    align-items: center;
    padding: 0 30px;

    .box__content {
      width: 110%;
    }



    h2,
    h1 {
      padding: 20px 0;
      width: 90vw;
      color: var(--gray);
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

    .box__img {
      height: auto;
      padding: 4vh 0;
      width: 90vw;
    }
  }
}
</style>
