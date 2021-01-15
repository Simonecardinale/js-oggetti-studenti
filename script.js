var studente = {
    nome: "Paolo",
    cognome: "D'Arrigo",
    eta: 16
}

for(var k in studente){
    console.log(studente[k]);
}

var studentiArray = [
    {
        nome: "Giovanni",
        cognome: "Letta",
        eta: 17
    },
    {
        nome: "Mimmo",
        cognome: "Leone",
        eta: 20
    },
    {
        nome: "Andrea",
        cognome: "Lo Presti",
        eta: 18
    },
];

for (var j in studentiArray){
    console.log(studentiArray[j].nome, studentiArray[j].cognome);
}


// var utenteNome = prompt("Inserisci nome");
// var utenteCognome = prompt("Inserisci cognome");
// var utenteEta = parseInt(prompt("Inserisci età"));
// var obj = { 
//             nome:  utenteNome, 
//             cognome:  utenteCognome, 
//             eta:  utenteEta 
//         };

// studentiArray.push(obj);


// for (var i in studentiArray){
//     console.log(studentiArray[i]);
// }

var arrayObj = ["nome", "cognome", "età"];
var arrayPrompt = [];
for (var h = 0; h < arrayObj.length; h++){
    var utente = prompt("Inserisci" + " " + arrayObj[h]);
    arrayPrompt.push(utente);
}

var obj2 = {
    nome: arrayPrompt[0],
    cognome: arrayPrompt[1],
    eta: arrayPrompt[2]
};

studentiArray.push(obj2);
for (var i in studentiArray){
    console.log(studentiArray[i]);
}