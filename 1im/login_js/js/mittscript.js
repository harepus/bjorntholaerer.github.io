/* Kommentarer i 
   JavaScript kan 
   gå over flere linjer	   
*/
	
// eller bare en enkelt linje 


// Nå skal vi definere en funksjon som henter variabler fra HTML-form

function variablerFraForm(){
	
	// det er god praksis å deklarere lokale variabler (variabler som benyttes inne i en funksjon) i starten av funksjonen
	
	let brukernavnFraSkjema ="";
	let passordFraSkjema ="";
	let korrekt_brukernavn ="Bjorn";
	let korrekt_passord ="abc123";
	let myOutput = "";
	let myDebug = 1;

	// tilordne lokale variabler med verdier fra skjema/form
	// vi bruker document.getElementById(id/variabelnavn_i_form)
	brukernavnFraSkjema = document.getElementById("brukernavn").value;
	passordFraSkjema = document.getElementById("passord").value;
	
	// console.log brukes for utvikling/debugging
	// output til console.log i browser inspector (ctrl/cmd+i)
	// vis variablene i konsoll-loggen

    if(myDebug == 1){
        console.log("Brukernavn : " + brukernavnFraSkjema);
	    console.log("Passord : " + passordFraSkjema);
    }
    
    // sjekk om input er tom
    if ( (brukernavnFraSkjema == "") || (passordFraSkjema == "") ) {

       myOutput =  myOutput + "Du må skrive inn brukernavn og passord !<br> Prøv på nytt";
        
    } else{
        // sjekk brukernavn og passord
        if(   (brukernavnFraSkjema == korrekt_brukernavn) && (passordFraSkjema == korrekt_passord)    )  {

            myOutput =  myOutput + "Velkommen " + brukernavnFraSkjema + "!";

        }
        else{
            myOutput =  myOutput + "Feil brukernavn eller passord!<br> Prøv på nytt";

        }
    }

	// vise output i en spesifikk paragraph <p id="output"> i html-filen	
	document.getElementById("output").innerHTML = myOutput;	
	
}




