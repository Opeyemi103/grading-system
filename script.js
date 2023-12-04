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


  var myaudio = document.getElementById('myaudio');
function checkValue() {
    if(num.value >=0 && num.value < 40) {
        myaudio.src ="../Audios/AUD-20200621-WA0012.m4a"
        show.innerHTML = "You Failed"
        myaudio.play()
    }
    else if(num.value >=40 && num.value < 45) {
        myaudio.src = "../Audios/AUD-20200714-WA0013.m4a";
        show.innerHTML = "Pass"
        myaudio.play()
    }
    else if(num.value >=45 && num.value < 50) {
        show.innerHTML = "Fair"
        myaudio.src ="../Audios/AUD-20200617-WA0066.mp3"
        myaudio.play()    
    }
    else if(num.value >=50 && num.value < 60) {
        show.innerHTML = "Better"
        myaudio.src ="../Audios/AUD-20200616-WA0019.mp3"
        myaudio.play()
    }
    else if(num.value >=60 && num.value < 70 ) {
        show.innerHTML = "Good"
        // myaudio.src ="../Audios/AUD-20200621-WA0012.m4a"
        myaudio.src = "../Audios/satani.mp3";
        myaudio.play()
    }
    else if(num.value >=70 && num.value <=100) {
        show.innerHTML ="Excellent";
        myaudio.src ="../Audios/champion.mp3";
        myaudio.play()
    }
}