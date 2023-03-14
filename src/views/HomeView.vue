<script setup>
import glitchText from '../components/glitchText.vue';
import ascii from '../components/ascii.vue'
import menu_bar from '../components/menu/menu.vue'



</script>

<template>
  <menu_bar classes="home" type="project" />
  <main>
    <div class=" main__title">
      <!--      <h1 id="Web__title">Jacob Welander</h1> -->
      <glitchText class="gradient-text" title="Web Developer" speed="1.5" />
      <p>
        I'm a web development student at UCL in Odense, and I'm passionate about building engaging and effective
        websites. Take a look at my <RouterLink to="/projects">projects</RouterLink> to see some examples of my work, or
        get to know <RouterLink to="/About">me</RouterLink> better as a person.
      </p>
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
  padding: 10px 30px;

  border: var(--white) 2px solid;
  border-color: var(--white) transparent transparent var(--white);



  .main__title {
    display: flex;
    flex-direction: column;
 
    padding: 20px 0;
    min-width: 40vw;
  }

  #Web__title {
    color: transparent;


  }

  h1 {
    min-width: 45vw;
    width: 45vw;
    font-size: 3.6rem;
    text-transform: uppercase;
    -webkit-text-stroke: 1px white;
    color: var(--white);
  }

}

p {
  max-width: 32vw;
  padding: 10px 0;
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

a {
  text-decoration: none;
  color: var(--purple);
  font-weight: 900;
  transition: .5s;
  padding: 2px;
  text-transform: uppercase;
  animation: myanim 2s;
  animation-delay: .8s;

  &:nth-child(2) {
    animation-delay: 1s;
  }
}

a:hover {
  color: var(--white);
  text-shadow: #ff1493 5px 0px, limegreen -5px 0px;

}

@keyframes myanim {
  10% {
    color: var(--white);
    text-shadow: #ff1493 5px 0px, limegreen -5px 0px;

  }

}





@media only screen and (max-width: 600px) {

  main {
    flex-direction: column;
    padding: 20px 30px;
    width: 80vw;
    height: calc(88dvh - 70px);

    .main__title {
      padding: 0;
    }

    h1 {
      font-size: 3rem;
      width: 85vw;
      -webkit-text-stroke: .5px white;

    }

    p {
      max-width: 80vw;
      padding: 20px 0;
    }


    .main__img {
      padding: 0vw;
      width: 89vw;
      overflow: hidden;
      z-index: -99;
    }

  }

  .gradient-text {
    font-size: 2.5rem;

  }


}

@media only screen and (max-width: 200px) {
  h1 {
    font-size: 3rem;
  }
}
</style>



