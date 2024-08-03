// Essendo un prompt lascio entrambi gli esercizi commentati - basta decommentarli per eseguire il test

let voto = prompt(`Inserisci il voto:`);

// Prima parte con if/else

// if(voto < 18 && voto >= 0){
//     console.log(`Insufficiente`);

// }else if(voto >= 18 && voto < 21){
//     console.log(`Sufficiente`);

// }else if(voto >= 21 && voto < 24){
//     console.log(`Buono`);

// }else if(voto >= 24 && voto < 27){
//     console.log(`Distinto`);

// }else if(voto >= 27 && voto <= 29){
//     console.log(`Ottimo`);

// }else if(voto == 30){
//     console.log(`Eccellente`);

// }else{
//     console.log(`Il voto inserito non è compreso tra 0 e 30`);

// }

// Parte 2 con switch

// switch(voto){
//     case `1`:
//     case `2`:
//     case `3`:
//     case `4`:
//     case `5`:
//     case `6`:
//     case `7`:
//     case `8`:
//     case `9`:
//     case `10`:
//     case `11`:
//     case `12`:
//     case `13`:
//     case `14`:
//     case `15`:
//     case `16`:
//     case `17`:

//         console.log(`Insufficiente`);
//     break;

//     case `18`:
//     case `19`:
//     case `20`:
//         console.log(`Sufficiente`);
//     break;

//     case `21`:
//     case `22`:
//     case `23`:
//         console.log(`Buono`);
//     break;

//     case `24`:
//     case `25`:
//     case `26`:

//         console.log(`Distinto`);
//     break;

//     case `27`:
//     case `28`:
//     case `29`:

//         console.log(`Ottimo`);
//     break;

//     case `30`:
//         console.log(`Eccellente`);
//     break;

//     default:

//       console.log(`Il voto inserito non è compreso tra 0 e 30`);
// }