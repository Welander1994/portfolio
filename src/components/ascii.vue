<script setup>
/* import { onMounted } from 'vue';



onMounted(() => {

  let test = document.getElementById('pre').innerText.split('');
  let test2 = '';
  console.log(test);

  for (let i = 0; i < test.length; i++) {

    test2 += '<span class="ascii__art" >' + test[i] + '</span>';
  }
  document.getElementById('pre').innerHTML = test2;
})

console.log("test"); */

</script>

<template>
  <div>
    <pre id="pre">
                ................
              .,;:cll:;;;::c:;,'............
            .lodddxxxddxxxxdddooolcccc::;;,,'....
          ;dddxxxxxkkkkkkkkxxxxdddoooollccc::;,'..
          cxddxxkkkkkkkOkkkkkkxxxxddddooollccc::;,'..
        ;xdxxxkkkkkkkkkkkkkkkxxxdddoolllccccc:::;,...
        .odxxxxkkkkkkkkkkkkkkxxdddooollcccccc::;;;,'..
        ;oddddxxxxxxxkkkkkxxxddooollllcc::::;;;;;;,'..
      'lloddddxddxxxxxxxxdddoolllllcccc::;;;;;;;,,'...
      :oodddddxxxxxxxdddddoollllllllcc::;;;;;,,,''....
      .oddddxddxxxxxxxxxxdddooooollllcc:;;;;,,,'''....
      :odddddddxxddxxxxxxxddddoooollccc:;;,,,,''....
    .;;;;;::lloolodddddddddddddddoolc::;,,,,''....
    .,;,,''.,:clclc:;;;;:cloooooooolc:;;,,,,,'.....
      '''.',,,;llc:,'.......',;;::::::;,,',,,,'''....
      . .:::;,loo:'.........',,,,'''',,,',,,,,,,'..
      .;;lllcldxdc,.......  ''........'',,;;;;;;,..      ..','
      ;::::cldxdl:;;,,',,'',::,'.......',;:::::;,.      .'.....
      looooddxxl:::cc::::;,,,,,,'',,,,;:::ccc:;;'.    .....'....
      .odxxkkkxol:;::cclooollcccccccccccllcc:::;,.    ... ..;,'..
      'oxkkxxxdl:;;;::clodxxxxxxdddoooollcc:::;,'.   .',...,:;,;.
      ,dxkxxxdl:,,;:::;:oxxkkkkkxxxddollc::::;,,'.   .'.';;;l;;'
      :oxxdol:,..'',;;',cdxkkkkkxddoollcc::;;;,,'.   ..';:::;;.
    .:ooool;..........;codxxxxxdooolllcc:;;;,,'..   .';::c:'
    .;lllcl;;,.'''.',:lllodxxxdoollllcc::;;,,'...   .','..
    .,llc:;'''';,''',;:clloddddollcccc::;,,''...
    .,c:;'....;:,'...',;:ccloooollccc::;,,'....
    .,;::,',,,;;,,'.....';::loolllccc:;,,''...
    .',;c;;cccccccc:;;;;;;;;clllcc::;;,,''...
    '..;:;;:c:;;;:ccccccc:;,;cc:::;;,,,'....
    ....,;,,:c::;;:ccccccc:;,';;;;,,,''.....
  ........'.';::cc:clollc::;,,,''''''.....
  ......    .'.,,;;:::c:cc::;;,,..........
  ...          .''.,.''',,,,'''......                   .
          ...... ...'......                     ....
          ....   ......                       .... ..
            ..    . .                         ........
  .....                                             ..  .........
  ......                                              ..............
  .                                         ...................
                                ....................
                                  .................
                                ...............
                                  ........


                                        ...
                                          .,,
                                          ..
  </pre>
  </div>
</template>


<style lang="scss" scoped>
pre {
  font-size: 10px;

  font-family: 'Courier New', Courier, monospace;
  white-space: pre;
  color: white;


}

/* span.ascii__art:nth-child(even):hover {
    color: deeppink;
     font-size: 12px; 
} */

/* 
.ascii__art.letter:nth-child(even):hover {
  filter: blur(10px);
  transform: rotate(90deg);

}

.ascii__art.letter:nth-child(odd):hover {
  filter: blur(10px);
  transform: rotate(-90deg);
} */
</style>