// MainProToken : 5f38e5d29d73f8bcd10b6e437bdfb121284e80b8d104de17139fdfcb49c328a3
// Celui-ci est à renseigner lors de chacune de vos appels à l'API, par exemple :
// https://api.meteo-concept.com/api/ephemeride/0?token=5f38e5d29d73f8bcd10b6e437bdfb121284e80b8d104de17139fdfcb49c328a3


let object = [];
let search;
let param = document.getElementById('citySearch');
let submitButton = document.getElementById('submitButton');

submitButton.addEventListener('onClick', checkParam);


function checkParam(event){
    let param = event.currentTarget.value;
    console.log(param)
}

// function foundCity(event){

//     window.fetch('https://api.meteo-concept.com/api/location/cities?token=5f38e5d29d73f8bcd10b6e437bdfb121284e80b8d104de17139fdfcb49c328a3&search='+param )

//     .then(function(httpResponse){
//         return httpResponse.json();
//         })
//             .then(function(results){
//         results;
//         object = results

//         console.log(object)
//     });
// }



