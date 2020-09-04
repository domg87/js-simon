// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
// -- Consigli del giorno:
// -- Pensate prima in italiano.
// -- Dividete in piccoli problemi la consegna.
// -- Individuate gli elementi di cui avete bisogno per realizzae il programma.

$(document).ready(function(){

    var listaNum = [];
    var messaggio = "";
   
    
    // genero numero random
    
    for(var i = 0; i < 5; i++){
        var numRandom = Math.floor(Math.random() * 50) + 1;
        listaNum.push(numRandom);

        if(i == numRandom){
            messaggio + numRandom;
        } else {
            messaggio += numRandom + " - ";
        }
    }
    
    alert("Salva questi numeri: " + messaggio);

    // chiedi all'utente di inserire un numero alla volta di quelli salvati precedentemente dopo un intervallo di 30 secondi


    // funzione per inserire i numeri dell'utente + il setTimeout di 30 secondi per far comparire il prompt
    setTimeout(function(){
        var numUtente = [];
        var listaUtente = [];
        var maxNumUtente = 5;

        for(var i = 0; i < maxNumUtente; i++){
            numUtente.push(parseInt(prompt("Inserisci un numero")));
            listaUtente.push(numUtente);
            console.log(listaUtente[i]);
        }
    }, 3000);

    //

    // Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

        // creo variabili per quantità e quali numeri esatti sono stati inseriti
        var quantNum = 0;
        var numEsatti = [];
            
      // metodo includes ( verifica se una stringa ne contiene un altra desiderata restituendo true o false in base alla ricerca)




});