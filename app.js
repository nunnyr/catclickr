let moves1 = 0;
let moves2 = 0;
let  cat1 = "Luna"
let cat2 = "Artemis"


$(document).ready(function (count) {
    console.log("ready!");
    $('#luna').click(function () {
        moves1++
        console.log(moves1);
        document.getElementById('counter1').innerHTML = "You have clicked " + cat1 + " " + moves1 + " time(s)" ;
        


    });
    
})

$(document).ready(function (count) {
    console.log("ready!");
    $('#artemis').click(function () {
        moves2++
        console.log(moves2);
        document.getElementById('counter2').innerHTML = "You have clicked " + cat2 + " " + moves2 + " time(s)";



    });

})


