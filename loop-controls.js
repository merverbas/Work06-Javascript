var ad = "Merve"
var resitYas = 18;
var evlenecegiYas;

debugger

evlenecegiYas=prompt("evlenme yaşını girin!");
 
for(i=0; i<=35; i++){    
    
    if(i == 0){
        console.log(ad + " yeni doğdu ");
    }
    else if(i == 18){
        console.log(ad  + " reşit oldu ");
    }
    else if(i == evlenecegiYas){
        console.log(ad + i + " yaşında evlendi ");
    }
    else {
        console.log(ad + i + "yaşında");
    }
}