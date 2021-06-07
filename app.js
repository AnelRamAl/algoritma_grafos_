
//Programación
var vertices = new Array([0,0]);
var arregloAristas = new Array("0,0");
var verticeActual = 1;
var arriba = 0;
var izquierda = 0;
var CONSTANTE = 10;  
var color = obtenerColor();
var numeroCromatico = 1;
var circuitosDeEuler = 0;
var caminosDeEuler = 0;
var circuitosDeHamilton = 0;
var caminosDeHamilton = 0;

var canvas;
var context;
var primerClic = true;
var de;
var a;
var matrizDeAdyacencia = [];
var matrizDeAdyacenciann = new Array();
var arreglo = new Array();      
var m = 0;
var contador = 1;
var arregloConteo = [];
var parcial = [];
var listaVertices = [];
var listaVertices = [];
var gradoVertices = [];
var maxInd = [];
var colorpop = new Array();
var colorpopi = new Array();
var juntar = [];
var h = 0;
var verticesOrden = [];
var cadenArista = [];
var aux = [];
var aux2 = [];
var dj;
var dj2;
var col= ['blue','green','orange','purple','white','red','brown','aqua'];
var d = 0;
var colorNoAdj = 0;
var h = 0;
var siAdyacente = 1;
var ks = 0 ;
var ksr = 0;
var f = 0;    
var cl = [];   
var cli = [];
var puedesAdjuntar = 0;
var t =  0;
var j= 0;
var g = 0;
var apuntador = 0;
var secuencia = 0;
var guardaVert;
var guardaArist;
var vertiz = [];
var acarreo = [];
var dataCadena = [];
var cardataCadena = [];
var formulario = document.getElementById('formulario');

  formulario.addEventListener('submit', function(e){

   console.log('me diste clic')

})

    function restablecer() {
        /*
        Coloreo
        */
        //Remover vértices
        for ( i = 1; i < verticeActual ; i++ ) {
          $("#vertice_" + i).remove();
        }
        //Reiniciar variables
        vertices = new Array([0,0]);
        arregloAristas = new Array("0,0");
        verticeActual = 1;
        arriba = 0;
        izquierda = 0;
        color = obtenerColor();
        numeroCromatico = 1;
        circuitosDeEuler = 0;
        caminosDeEuler = 0;
        circuitosDeHamilton = 0;
        caminosDeHamilton = 0;
        //Borrar contenidos de trazos
        $('#aristas').html('');
        $('#resultados').html('');

        clearCanvas();
        //Quitar las aristas de los selects
        $('#de')
            .find('option')
            .remove()
            .end();
        $('#a')
            .find('option')
            .remove()
            .end();
    }

    function calcularOperaciones() {
      //Calcular número cromático
         console.log("Si imprimio");
            //calculando el grado de cada vertice 
//Paso 1
           
             console. log(parcial);
             console.log(cadenArista);

             

            for (var i = 0; i <= (parcial.length - 1); i++) {
               if (parcial[i] != 0){
                contador = 1;
                   for (var j = i + 1; j <= (parcial.length - 1); j++) {
                      if ( parcial[i] == parcial[j] ){
                         contador = contador + 1;
                         parcial[j] = 0;
                      }
                    }
                arregloConteo.push(contador);
                 m = m + 1;
                 }
               }
             
            console.log(parcial);
            for (var i = 0; i <= parcial.length - 1; i++) {
              if(parcial[i] != 0){
                arreglo.push(parcial[i]);
              }
             } 

//Paso 2 ordenarlos         
            console.log(arreglo); 
            listaVertices = arreglo;  
            console.log(arregloConteo); //grado del grado de los vertices

            
         for ( var j= 0; j<= (arregloConteo.length - 2); j++ ) {
            for ( var i= 0; i<= (arregloConteo.length - 2 -j); i++ ) {
               
              if ( arregloConteo[i] > arregloConteo[i+1] ) {
                aux = arregloConteo[i];
                arregloConteo[i] = arregloConteo[i+1];
                arregloConteo[i+1] = aux;


                aux2 = arreglo[i];
                arreglo[i] = arreglo[i+1];
                arreglo[i+1] = aux2; 

                }
              }
           }
    console.log(arregloConteo);
    console.log(arreglo);
    
    arreglo.reverse();
    console.log(arreglo);
                  
            //console.log(verticesOrden);  VERTICES ORDEN DEBE DARME LOS VERTICES DE MAYOUR A MENOR EN ORDEN DE GRADO

//Matriz de adyacencia f(cadenaArista, VerticesOrden) = matrizDeAdyacencia ;   VerticesOrden da rl numrto de vertices 1...n     
                                                                   /* cadenArista da el conjunto de aristas*/    
          var n = 0;
          var nPn = [];
          
console.log(cadenArista);

       for (var fil = 1; fil <= (arreglo.length ); fil++) {
          for (var col = 1; col <= (arreglo.length ); col++) {
            n=0;
            for (var j = 0; j <= (cadenArista.length - 1); j= j +2) {
              if ( (fil == cadenArista[j] && col == cadenArista[j+1]) || (col == cadenArista[j] && fil == cadenArista[j+1])){
              
               matrizDeAdyacencia.push(1);
               n=1;
              }
            }
            if (n != 1){
               matrizDeAdyacencia.push(0);  }          
          }

          matrizDeAdyacenciann.push(matrizDeAdyacencia);  
          matrizDeAdyacencia=[];
        } 
          console.log(matrizDeAdyacenciann);
console.log(matrizDeAdyacenciann[0][0]);
          console.log(matrizDeAdyacenciann[0].length);
          


/*Paso 3 asignacion de color f(arreglo, matrizAdayacenciann) = matriz Color-Vertice ;   arreglo tiene los vertices 1...n  de mayor a menor en GRADO  c                                                                    orzAdyacancianxn nos da la mat-Adj nxn*/ 

         console.log(arreglo);
         //colorpop tiene las cadenas parciales de cada cadena      

          for (var i = 0; i <= (arreglo.length -1); i++) {  //i recorre a arreglo
            if (i == 0){ 
                                            
              cli.push(arreglo[i]);     
            }
              if (i == 1){ 
                if( matrizDeAdyacenciann[arreglo[i]-1][arreglo[i-1]-1] == 0 ) {                          //i = 2           
                cli.push(arreglo[i]);    
                cl.push(cli);  
              }
              else{   
                cl.push(cli);
                cli = [];
                cli = arreglo[i];
                cl.push([cli]);
               }
              }  //probar hasta aqui 

              if(i >=2){
                puedesAdjuntar = 1; //1
                j=0;
                r=0;
                apuntador = 0;
               while( j <= (cl.length -1)) {
                  puedesAdjuntar = 1;
                 t = cl[j].length;                 
                  ks = 0;
                  ks =cl[j];
                  r=0;

                  while( r <= (t - 1) ) {  
                     ksr = 0;     
                     ksr = ks[r];
                  if ( matrizDeAdyacenciann[arreglo[i]-1][ksr-1] == 1 ){
                    puedesAdjuntar = 0;
                    r = t;
                    }
                    if((puedesAdjuntar==1) && (r == (t - 1))){
                      apuntador = j;
                      j = cl.length;
                    }
                    r = r + 1;         
                   }
                  j = j + 1;
                  }  
                    if(puedesAdjuntar == 1){
                      cli = [];
                    cli = arreglo[i];
                    cl[apuntador].push(cli);  
                    }
                    if(puedesAdjuntar == 0){
                    cli = [];
                    cli = arreglo[i];
                    cl.push([cli]);  
                    }
                }
        }
             console.log(cl);       
             numeroCromatico = cl.length;

var cold = [];
col= ['blue','green','orange','purple','white','red','brown','aqua'];
var w = 0;
var wr = 0;

for (var j = 0; j <= cl.length -1; j++) {
   w = 0;
   w = cl[j]; 
   cold=0;
   cold = col[j];

  for (var t = 0; t <= w.length -1; t++) {
    wr = 0;
    wr = w[t];
    $("#vertice_" +wr).css("background-color", cold);
  }
}

//CAMINO DE EULER grado de vertices = arreglo
  //Un camino de Euler siempre inicia y termina en un vértice de grado impar.
    dj2 = 0;
    var cam = 0;
    var caminoDeEu = [];
    var imp = [];
   
      for (var i = 0; i <= arregloConteo.length -1; i++) {
        if ((arregloConteo[i]%2)==1){
          dj2 = dj2 + 1;
        }
      }
     if(dj2 == 2){     //Si un grafo tiene dos vértices de grado impar tiene camino de Euler.
       caminosDeEuler = 'si tiene camino';
       cam = 1;
     }
     else{
      caminosDeEuler = 'no tiene camino';
      cam = 0;
     }
arregloConteo.reverse();
console.log(arregloConteo);
console.log(arreglo);
console.log(cadenArista);
console.log(permutator(arreglo));

var perm = 0;
var cadAristaNew = [];
var cadenaUno =[];
var cadenaDos =[];
var noEnPar = 0;
var recorrido = 0;
var caminoP = [];
var longitud = 0;
var solParcial = [];
var q = 0;
var cadenaCuatro = [];

      for (var i = 0; i <= cadenArista.length -2; i = i+2) {
        perm = [];
        perm.push(cadenArista[i]);
        perm.push(cadenArista[i+1]);
        cadAristaNew.push(perm);
      }

console.log(cadAristaNew);
perm = permutator(cadAristaNew);
console.log(permutator(cadAristaNew));
cadenaUno = perm[0];
cadenaDos = cadenaUno[0] 
console.log( cadenaDos[0]);
   
     var segundo =0;

     if( cam == 1){

      //encontrando los grados impares en arreglo conteo y con un contador encontraremos asi los de la otra cadena
     for (var i = 0; i <= arregloConteo.length -1; i++) {
        if ((arregloConteo[i]%2) == 1){
           imp.push(arreglo[i]);          
          }
         }
         console.log(imp);
         console.log(imp[0]);
         q = perm[0].length - 1;
         cadenaCuatro = cadenaUno[q];
         console.log(cadenaCuatro);

      for (var j = 0; j <= perm.length -1; j++) {
         cadenaUno = perm[j];
         cadenaDos = cadenaUno[0]; 
         cadenaCuatro = cadenaUno[q];
         segundo = 0;
        if ((cadenaCuatro[0] == imp[1])||(cadenaCuatro[1] == imp[1])){
          segundo = 1;
        }
        if(((cadenaDos[0]== imp[0]) || (cadenaDos[1]== imp[0]) ) && (segundo == 1)){ //&& ((cadenaCuatro[0] == imp[1])||(cadenaCuatro[1] == imp[1])) 
            solParcial.push(cadenaUno);
        }
        }
console.log(solParcial);
var propuesta = [];
var cntr=0;
var caminosDeEuler = [];
var hg = 0;

      for (var k = 0; k <= solParcial.length -1; k++) {
        propuesta = [];
        cntr = 0;
        propuesta = solParcial[k];
        hg = propuesta.length;
        for (var j = 0; j <= propuesta.length -2; j++) {
           let engineering = new Set(propuesta[j]);
           let freelancers = new Set(propuesta[j+1]);
           let difference = new Set([...engineering].filter(x => !freelancers.has(x)));
           if( difference.size == 1 ){ 
            cntr = cntr + 1;
           }
         }
         if( cntr == (hg - 1)){
          caminosDeEuler = propuesta;

        }
      }

console.log(cntr);
console.log(propuesta);
console.log(hg);
console.log(caminosDeEuler);
    
        var corrida = 0;
        var wait =caminosDeEuler.length -1;

      var j = 0;                     //  set your counter to 1

     // myLoop(); 

      function myLoop () {
          setTimeout(function () {    //  call a 3s setTimeout when the loop is called
          corrida = caminosDeEuler[j];
          de = corrida[0];
          a = corrida[1];
          context.strokeStyle = "#FF0000";
        context.lineWidth = 4;
        context.beginPath(); //comienza el camino
        context.lineTo(vertices[de][1] + CONSTANTE, vertices[de][0] + CONSTANTE); //inicio 
        context.lineTo(vertices[a][1] + CONSTANTE, vertices[a][0] + CONSTANTE); // fin del camino
        context.stroke(); //lo dibuja
       
          j++;
          if (j <= wait) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another 
      }                   //  ..  setTimeout()
          }, 1000)
          
      }
          
    }
        console.log(vertices);
        console.log(de);
        console.log(a);
        console.log(arregloAristas);

//CIRCUITO DE EULER
var dj2 = 0;
      for (var i = 0; i <= arregloConteo.length -1; i++) {
        if ( ( arregloConteo[i]%2 ) == 0 ){ //si es igual a cero es par 
          dj2 = dj2 + 1;  
        }
      }
     if( dj2 == arregloConteo.length ){ //si todos los vertices son de grado par tiene circuito Euler
       circuitosDeEuler = 'Tiene circuito de Euler';
       cam = 2;
     }
     else{
      circuitosDeEuler = 'No tiene circuito de Euler';
     }

console.log(cadenArista);
console.log(cadenArista[0]);
console.log(cadenArista[1]);

     if ( cam == 2){
       for (var j = 0; j <= cadenArista.length -2; j = j +2) { 
       
        de = cadenArista[j];
        a = cadenArista[j+1];
        context.lineWidth = 4;
        context.beginPath(); //comienza el camino
        context.lineTo(vertices[de][1] + CONSTANTE, vertices[de][0] + CONSTANTE); //inicio 
        context.lineTo(vertices[a][1] + CONSTANTE, vertices[a][0] + CONSTANTE); // fin del camino
        context.stroke(); //lo dibuja
      }
     }
     
     var dj2 = 0;
     var ham = 0;
     var caminH = 0;
     //CIRCUITO HAMILTONIANO
     for (var i = 0; i <= arregloConteo.length -1; i++) {
        if (arregloConteo[i] >= 3){
          dj2 = dj2 + 1;
        }
      }
     if(dj2 == arregloConteo.length){     //Si todos los grados de los vertices de un grafo son mayor a 3 tiene circuito de Hamilton 
       circuitosDeHamilton = 'Si tiene circuito de Hamilton';
      // caminH =1;
     }
     else{
      circuitosDeHamilton = 'No tiene circuito de Hamilton';
      caminH =1;
      //caminH =3;
     } 
     //el camino de hamilton no presenta alguna restriccion en particular por lo que entraremos desde el else, pero notar que realmente no depende de nada.
    //CAMINO HAMILTONIANO entrada vertices (aplicarle permutaciones) y Matriz de adyacencia
    var perm = 0;
    console.log(arreglo);
    perm = permutator(arreglo);
    console.log(perm);        
    console.log(matrizDeAdyacenciann);
    var hamp = [];
    var posiblesHam = [];
    var camHam = [];
    var s = 0;
    var ss = 0;
    var pos = 0;
    var revision = 0;

    if (caminH == 1 ){

      for (var i = 0; i <= perm.length -1; i++) {
      hamp = [];
      hamp = perm[i];
      pos = hamp.length -1;
      s = hamp[0]; //tiene el primer elemento de la cadena i esima de las permutaciones
      ss = hamp[pos]; //tiene el ultimo elemento de la cadena i esima de las permutaciones
      if(matrizDeAdyacenciann[s-1][ss-1] == 0){
        posiblesHam.push(hamp);
      }
    }
    console.log(posiblesHam);
    console.log(posiblesHam[0]);
    var l = posiblesHam.length -1;
    var cnty= 0;
    var cr = 0;
    for (var zz = 0; zz <= l; zz++) {
      hamp = [];
      hamp = posiblesHam[zz];
      revision = 0;
      cnty = 0;
      for (var xy = 0; xy <= hamp.length -2; xy++) {
        s = hamp[xy]; 
      ss = hamp[xy +1];
         if(matrizDeAdyacenciann[s-1][ss-1] == 1){
          cnty = cnty + 1;
         } 
      }
      if(cnty == hamp.length -1){
       caminosDeHamilton = hamp;
       cr= 1;
      }
    }
      console.log(caminosDeHamilton);
    
     var waitH =caminosDeHamilton.length -1; //limite
      var jj = 0;
     var itrham = 0; 

     function myLoopHam () {
          setTimeout(function () {    //  call a 3s setTimeout when the loop is called
          itrham = 0; 
          itrham = caminosDeHamilton[jj];
          $("#vertice_" +itrham).css({"border-color": 'white',"border-style": 'dotted', "border-width":'5px'});

          jj++;
          if (jj <= waitH) {            //  if the counter < 10, call the loop function
         myLoopHam();             //  ..  again which will trigger another 
      }                   //  ..  setTimeout()
          }, 1000)
          if(jj>=waitH){
          myLoop();
        }
      } 
      myLoopHam(); 
     }

     if (caminH == 3 ){

     for (var i = 0; i <= perm.length -1; i++) {
      hamp = [];
      hamp = perm[i];
      pos = hamp.length -1;
      s = hamp[0]; //tiene el primer elemento de la cadena i esima de las permutaciones
      ss = hamp[pos]; //tiene el ultimo elemento de la cadena i esima de las permutaciones
      if(matrizDeAdyacenciann[s-1][ss-1] == 0){
        posiblesHam.push(hamp);
      }
    }
    console.log(posiblesHam);
    console.log(posiblesHam[0]);
    var l = posiblesHam[0].length -3;
    var cnty= 0;
    var cr = 0;
    cnty = posiblesHam[0];
    var f = [];
f = cnty.slice(0,l);
console.log(f);
    
    cr = cnty[l+1];
    f.push(cr);
    cr = cnty[l];
    f.push(cr);

console.log(f);

    caminosDeHamilton = arreglo;
      console.log(caminosDeHamilton);

     var waitH =caminosDeHamilton.length -1; //limite
      var jj = 0;
     var itrham = 0; 

     function myLoopHam () {
          setTimeout(function () {    //  call a 3s setTimeout when the loop is called
          itrham = 0; 
          itrham = caminosDeHamilton[jj];
          $("#vertice_" +itrham).css({"border-color": 'white',"border-style": 'dotted', "border-width":'5px'});

          jj++;
          if (jj <= waitH) {            //  if the counter < 10, call the loop function
         myLoopHam();             //  ..  again which will trigger another 
      }                   //  ..  setTimeout()
          }, 1000)
      } 
      myLoopHam(); 
     }


      //Desplegar
      $('#resultados').html('Numero cromatico: ' + numeroCromatico + '<br />' +
          'Circuitos de Euler: ' + circuitosDeEuler + '<br />' +
          'Caminos de Euler: ' + caminosDeEuler + '<br />' +
          'Circuitos de Hamilton: ' + circuitosDeHamilton + '<br />' +
          'Caminos de Hamilton: ' + caminosDeHamilton + '<br />'
          );


    }
function permutator (input) {
  var set =[];
  function permute (arr, data) {
    var cur, memo = data || [];

    for (var i = 0; i < arr.length; i++) {
       cur = arr.splice(i, 1)[0];
       if (arr.length === 0) set.push(memo.concat([cur]));
       permute(arr.slice(), memo.concat([cur]));
       arr.splice(i, 0, cur);
    }
    return set;
 }
 return permute(input);
}

    function obtenerColor() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }
    function clearCanvas() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      var w = canvas.width;
      canvas.width = 1;
      canvas.width = w;
    }
    function agregarArista() {
      //Validar si no existe ya
       
      if ( arregloAristas.indexOf(de + "," + a) == -1 ){ //revisa que no exista ya ese par de aristas
        //No existe, dibujar arista
        //context.lineWidth = 2;
        
        context.beginPath(); //comienza el camino
        context.lineTo(vertices[de][1] + CONSTANTE, vertices[de][0] + CONSTANTE); //inicio 
        context.lineTo(vertices[a][1] + CONSTANTE, vertices[a][0] + CONSTANTE); // fin del camino
        context.stroke(); //lo dibuja


        //Agregar a arreglo
        arregloAristas.push(de + "," + a); 
        
        
        console.log(de);
        console.log(a);
        parcial.push(de); 
        parcial.push(a);
        console.log(parcial);
        cadenArista.push(de); 
        cadenArista.push(a);
console.log(cadenArista);
console.log(vertices);

        //Variables
          $('#vertice_', +a); ///////
        color = obtenerColor();
        numeroCromatico++;

        
        $('#aristas').append('(' + de + ',' + a + ')'); //cadena que se imprimira en pantalla
      } else {
        //Ya existe
        alert('No se pueden duplicar aristas...');
      }
    }
    $(document).ready(function() {
        //Coordenadas para dibujar
        $('#html_canvas').mousemove(function(e){
            var parentOffset = $(this).parent().offset();
            arriba = (e.pageY - parentOffset.top);
            izquierda = (e.pageX - parentOffset.left);
        });
        //Dibujar vértice
         $('#html_canvas').click(function(){

          $('#div_canvas').append('<div id="vertice_' + verticeActual +
          '" class="vertice" style="top: ' + arriba + 'px; left: ' +
          izquierda + 'px;">' + verticeActual + '</div>');


          vertices.push([arriba, izquierda]);
          vertiz.push(arriba);
          vertiz.push(izquierda);
          console.log(vertices);
          var o = new Option(verticeActual, verticeActual);
         // o = [274.5, 224];
          $(o).html(verticeActual);
          $("#de").append(o);
          o = new Option(verticeActual, verticeActual);
          $(o).html(verticeActual);
          $("#a").append(o);
          //colorpop=['blue','green','orange','purple','white','red','brown','aqua'];

          $("#vertice_" + verticeActual).css("background-color", color);
         // h = h +1;
          $('#vertice_' + verticeActual).click(function(){
            var arregloInterno = $(this).attr('id').split("_");
            if ( primerClic ) {
              de = Number(arregloInterno[1]);
              primerClic = false;
              $("#etiquetaArista").html("de " + de);
            } else {
              if ( de == a ) {
                //Arco
                
              } else {
                //Lanza arista
                a = Number(arregloInterno[1]);
                agregarArista();
                color = obtenerColor();////////////////
                 $('#vertice_', +a); ///////
              }
              primerClic = true;
              $("#etiquetaArista").html("de " + de + " a " + a);
            }
          });

          verticeActual++;
          //calcularOperaciones();
        });
        canvas = document.getElementById('html_canvas');
        context = canvas.getContext('2d');
    });
var cadf = [1, 2, 4, 2, 4, 3, 1, 3, 5, 3, 6, 5];
var j = 0;

function abrir(){
     $(document).ready(function() {
        //Coordenadas para dibujar
        $('#html_canvas').mousemove(function(e){
            var parentOffset = $(this).parent().offset();
            arriba = (e.pageY - parentOffset.top);
            izquierda = (e.pageX - parentOffset.left);
        });
        //Dibujar vértice
         // $('#html_canvas').click(function(){
           acarreo = [1, 94.07638549804688, 231,  2, 267.0763854980469, 140, 3, 268.0763854980469, 351, 4, 463.0763854980469, 270, 5, 488.0763854980469, 477, 6, 278.0763854980469, 620];
           
          for (var i = 0; i <= acarreo.length -3; i= i+3) {
        
          verticeActual = acarreo[i];
          arriba = acarreo[i+1];
          izquierda = acarreo[i+2];

          $('#div_canvas').append('<div id="vertice_' + verticeActual +
          '" class="vertice" style="top: ' + arriba + 'px; left: ' +
          izquierda + 'px;">' + verticeActual + '</div>');


          vertices.push([arriba, izquierda]);
          vertiz.push(arriba);
          vertiz.push(izquierda);
          console.log(vertices);
          var o = new Option(verticeActual, verticeActual);
         // o = [274.5, 224];
          $(o).html(verticeActual);
          $("#de").append(o);
          o = new Option(verticeActual, verticeActual);
          $(o).html(verticeActual);
          $("#a").append(o);
          //colorpop=['blue','green','orange','purple','white','red','brown','aqua'];

          $("#vertice_" + verticeActual).css("background-color", color);
         // h = h +1;
          $('#vertice_' + verticeActual).click(function(){
            var arregloInterno = $(this).attr('id').split("_");
            if ( primerClic ) {
              de = Number(arregloInterno[1]);
              primerClic = false;
              $("#etiquetaArista").html("de " + de);
            } else {
              if ( de == a ) {
                //Arco
                
              } else {
                //Lanza arista
                a = Number(arregloInterno[1]);
                agregarArista();
                color = obtenerColor();////////////////
                 $('#vertice_', +a); ///////
              }
              primerClic = true;
              $("#etiquetaArista").html("de " + de + " a " + a);
            }
         // });

          verticeActual++;
          //calcularOperaciones();
        });
        canvas = document.getElementById('html_canvas');
        context = canvas.getContext('2d');
      }
    }); 
       for (var j = 0; j <= cadf.length -2; j= j+2) {
       de = cadf[j];
       a = cadf[j+1];
       context.beginPath(); //comienza el camino
        context.lineTo(vertices[de][1] + CONSTANTE, vertices[de][0] + CONSTANTE); //inicio 
        context.lineTo(vertices[a][1] + CONSTANTE, vertices[a][0] + CONSTANTE); // fin del camino
        context.stroke();
       // j = j+2;
      }
      parcial = [1, 2, 4, 2, 4, 3, 1, 3, 5, 3, 6, 5]; 
      cadenArista =[1, 2, 4, 2, 4, 3, 1, 3, 5, 3, 6, 5];;
   }

 var contenido = document.querySelector('#contenido')

   function traer() {
        fetch('Datos.txt')
        .then(res => res.text())
        .then(data =>{
          console.log(data)
          abrir();
        })
   }

 
