// var drink = 'fanta'
// if (drink == 'sprite') {
//     show.innerHTML = 'Buy fanta'
// } else{
//     show.innerHTML = 'sha buy anything for me'
// }


// var food = 'spag'



// if(food == 'Amala') {
//     show.innerHTML = "Buy abula"
// } else if(food == "Eba") {
//     show.innerHTML = "Buy ila or egusi"
// } else if(food == "Iyan") {
//     show.innerHTML = "Buy efo riro/egusi"
// }else{
//     show.innerHTML = "Buy me something to eat"
// }

// if(2+2 ==4) {
//     show.innerHTML = 'yes'
// }
// else{
//     show.innerHTML = 'No'
// }

// function music() {
//     Song.play()
// }



function checkValue() {
    if(num.value >=0 && num.value < 40) {
        var Song = new Audio("../Audios/satani.mp3");
        show.innerHTML = "F"
        Song.play()
    }
    else if(num.value >=40 && num.value < 45) {
        var Song = new Audio("../Audios/satani.mp3");
        console.log("E");
        show.innerHTML = "E"
    }
    else if(num.value >=45 && num.value < 50) {
        console.log("D");
    }
    else if(num.value >=50 && num.value < 60) {
        console.log("C");
    }
    else if(num.value >=60 && num.value < 70 ) {
        console.log("B");
    }
    else if(num.value >=70 && num.value <=100) {
        console.log("A");
        var Song = new Audio("../Audios/champion.mp3");
        Song.play()
    }
}