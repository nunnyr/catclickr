let moves = 0;
let cat;


$(document).ready(function () {
    console.log("ready");
    // $('.form-group').click(function (event) {
    $('.form-control').click(function(event) { 
        setTimeout(function() {
            let clickTarget = event.target;
            console.log("i am the clickTarget:", clickTarget);
            greeting();
            resetMoves()
            
        }, 1000)
    })
    
})

//displaying cat chosen
// function showImage() {
//     $('form-control').append




//greeting + feeding counter 

function greeting(hello) {
    let cat = $('#sel1 option:selected').text();
    
    document.getElementById('name').innerHTML = "Hello, I am " + cat + ". ";
    console.log("I chose " + cat);
   
}


$(document).ready(function (count) {
    console.log("ready!");
    $('li').click(function () {
        moves++
        console.log(moves);
        document.getElementById('count').innerHTML = "You have fed me " + moves + " time.";
        if(moves > 1 && moves === 0) {
            document.getElementById('count').innerHTML = "You have fed me " + moves + " times.";
        }        
        
    });
})

//choosing a different cat 
function resetMoves() {
    moves = 0;
    console.log("I am resetting the moves counter")
    
}

$(function() {

    let model = {

    };


    let octopus = {

    };

    let view = {

    };









})