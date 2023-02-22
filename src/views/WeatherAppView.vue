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
      <glitchText title="Weather api" />
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
          <li><img src="../assets/img/GitHub_Logo_White.png" alt="github"></li>
          <li><img src="../assets/img/logo_white_cropped.png" alt="github"></li>
        </ul>
      </nav>

      <h2>Things i learned</h2>

      <ul>
        <li> <span> Api:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus similique consectetur qui tenetur, enim </li>
        <li> <span> Vue3:</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae obcaecati error autem quo deserunt laudantium</li>
        <li><span>sass: </span></li>
      </ul>
    </div>
    <div class="box__img">
      <weatherApp />
    </div>

  </div>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
  margin: 0 2vw 2vw 2vw;

  border: var(--white) 2px solid;
  border-color: var(--white) transparent transparent var(--white);

  .links {
    display: flex;
    list-style: none;

    li {
      padding-right: 20px;
      img {
        width: 100px;
      }
    }
  }

  p, h2{
    padding: 0 20px;
    width: 50vw;
    color: var(--white);
  }

  h2 {
    padding: 30px 20px 10px 20px;
  }

  ul {
    padding: 20px 20px;
    list-style: circle;

    color: white;

    li {
      padding: 5px 0;
      
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

@media only screen and (max-width: 800px) {
  .box {

    flex-direction: column;
    overflow-y: hidden;

    p {
      width: 85vw;
      padding: 0 20px;
    }

    .box__img {
      height: auto;
      padding: 10vh 0;
    }
  }
}
</style>
