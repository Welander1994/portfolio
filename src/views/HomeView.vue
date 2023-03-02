<script setup>
import glitchText from '../components/glitchText.vue';
import ascii from '../components/ascii.vue'
import menu_bar from '../components/menu/menu.vue'
</script>

<template>
  <menu_bar classes="" type="project" />
  <main>
    <div class=" main__title">
      <h1 id="Web__title">Web developer </h1>
      <glitchText class="gradient-text" title="Jacob Welander" />

    </div>
    <div class="main__img">
      <ascii />
    </div>
  </main>
</template>


<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: row;

  margin: 0 2vw 2vw 2vw;
  padding: 30px;

  border: var(--white) 2px solid;
  border-color: var(--white) transparent transparent var(--white);

  .main__title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 40vw;
  }

  #Web__title {
    color: transparent;
  }

  h1 {
    max-width: 50vw;
    font-size: 4rem;
    text-transform: uppercase;
    -webkit-text-stroke: 1px white;
    color: var(--white);
  }

}



h1 {
  font-size: 1.5rem;
  padding: 0;
  text-decoration: none;


}


.gradient-text {
  /* Fallback: Set a background color. */
  background-color: red;

  /* Create the gradient. */
  background: linear-gradient(60deg, var(--white) 0%, var(--gray) 100%);

  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;

  -webkit-text-stroke: 2px transparent;
}



@media only screen and (max-width: 700px) {

  main {
    flex-direction: column;

    width: 80vw;

    h1 {
      font-size: 3rem;
      max-width: 100%;
    }

    .main__img {
      padding: 5vw;
    }

  }

}
</style>



