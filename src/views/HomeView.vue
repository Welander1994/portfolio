<script setup>
import glitchText from '../components/glitchText.vue';
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/WeatherAppView">Weather App</RouterLink>
    <RouterLink to="/ShoppingView">Shopping list</RouterLink>
  </nav>

  <main>
    <div class="main__title">
      <h1 id="Web__title">Web developer </h1>
      <glitchText title="Jacob Welander" />
     
    </div>
    <div class="main__img">

    </div>
  </main>
</template>


<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 1vw;
  font-size: 18px;

  a:hover {
    text-decoration: underline;
  }
}

main {
  display: flex;

  margin: 0 2vw 2vw 2vw;
  padding: 30px;

  border: var(--white) 2px solid;
  border-color: var(--white) transparent transparent var(--white);



  #Web__title {
    color: transparent;
  }

  h1 {
    max-width: 40vw;
    font-size: 4rem;
    text-transform: uppercase;
    -webkit-text-stroke: 1px white;
    color: white;
  }
}

a {
  text-decoration: none;
  color: white;
  padding: 0 20px;
}

h1 {
  font-size: 1.5rem;
  padding: 0;
  text-decoration: none;


}
</style>



