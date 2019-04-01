let moves = 0;
let  cat1 = "Luna"
let cat2 = "Garfield"


$(document).ready(function (count) {
    console.log("ready!");
    $('#luna').click(function () {
        moves++
        console.log(moves);
        document.getElementById('counter').innerHTML = "You have clicked the cat " + moves + " time(s)" 

    });
    
})


