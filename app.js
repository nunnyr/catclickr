let moves = 0;
// let luna = document.getElementById('#luna');
let artemis = document.getElementById('#artemis');

let cat= document.getElementById('');
let salem = "I am a creature from the planet Mau and live with my human Sailor Serena. You have clicked me "


$(document).ready(function () {
    console.log("ready");
    $('.form-group').click(function (event) {
        let clickTarget = event.target;
        console.log("i am the clickTarget:", clickTarget);
        let cat = $('#sel1 option:selected').text();
        console.log("I chose " + cat);
        document.getElementById('name').innerHTML = "Hello, I am " + cat + ". ";
        
    })
});

$(document).ready(function (count) {
    console.log("ready!");
    $('#luna').click(function () {
        moves++
        console.log(moves);
        document.getElementById('count').innerHTML = "You have fed me " + moves + " time(s).";
        


    });
    
})



function showCat (cat) {
    cat.removeClassList('hidden');
    cat.addClassList('show');
}




// when you click something
// get that id
// update the moves counter and say a sentence

