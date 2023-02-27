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
      <glitchText class="gradient-text" title="Jacob Welander" />
     
    </div>
    <div class="main__img">
      <pre>





                 ...... ...       ..
             .';:cc;;;:::,'.........
            ;dddxxxxxxxxxddolllc::;;'...
           lddxxxkkkkkkkkxxxdddoollcc:;,..
          lxxxkkkkkkkkkkkxxdddoolcccc::;'..
         'ddxxkkkkkkkkkkxxddoolcc:cc::;;,..
         codddxxxxxkxxxddoolllccc::;;;;;,'.
        ,oodddxxxxxxdddoolllllcc::;;;;,,'...
        ldddxdxxxxxxxxddoooollcc:;;,,,'....
       'clllooododdxxxdddddoolcc:,,,''...
       ',,''':clll::::clooooooc:;,,,,'....
        ...',,clc,......',;;;;:;,,,,,''...
        ..;ll:ldl,....  .'..'..'',,;;;;,.       ..
        ':::coxdc;,',''',:,.....',;:::;,.    .''..
        :ooddxxc::cccc:;;,,,,,;;:ccc::;'.   ...''..
        oxxkkxoc;;:clodddoooolllllc::;,.   ....;;',
        oxkxxoc;;;:;cdxkkkkxxdoolc::;;,.  .'.,,c:;.
       .oxxoc;...',,,lxkkkxddollc::;;,'.  .',:::;.
       .loll;'.....':loxxxddolllc:;;,'..  .,;;,.
       .cl:;''';,'';:llodddolccc:;,,'..    .
       '::,...,,....';:cloollcc::,''...
       .,::,::cc:;,'.',;:lolcc::,,'...
       '';:;:c;;:ccccc:;,ccc:;,,,'...
      ...,,,:::::lllcc:;,,;;,,''....
   .... ...';:cccllcc:;,''......
 ..       .''',,,,;,''.......           .
           ............               ...
            ..  ....                 ......
...                                     ......
....                                  ...........
                            ...............
                            .............
                           ...........



</pre>
    </div>
    <div>

    </div>
  </main>
</template>


<style lang="scss" scoped>

pre {
  font-family: 'Courier New', Courier, monospace;
  white-space: pre;
  color: white;
}

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
  flex-direction: row;
  margin: 0 2vw 2vw 2vw;
  padding: 30px;

  border: var(--white) 2px solid;
  border-color: var(--white) transparent transparent var(--white);

  .main__img {
    width: 50vw;
    height: 50vh;
    display: flex;
    justify-content: center;


    pre {
      font-size: 14px;
    }
  }

  #Web__title {
    color: transparent;
  }

  h1 {
    width: 50vw;
    font-size: 4rem;
    text-transform: uppercase;
    -webkit-text-stroke: 1px white;
    color: var(--white);
  }

  
}

a {
  text-decoration: none;
  color: var(--white);
  padding: 0 20px;
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

</style>



