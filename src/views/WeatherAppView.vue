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

  p {
    padding: 0 20px;
    width: 50vw;
    color: var(--white);
  }

  &__img {
    width: 90vw;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 6vh;

  }



}

@media only screen and (max-width: 400px) {
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
