let moves = 0;
// let luna = document.getElementById('#luna');
//let artemis = document.getElementById('#artemis');


$(document).ready(function () {
    console.log("ready");
    // $('.form-group').click(function (event) {
        $('.form-control').click(function(event) { 
        let clickTarget = event.target;
        console.log("i am the clickTarget:", clickTarget);
        let cat = $('#sel1 option:selected').text();
        console.log("I chose " + cat);
        document.getElementById('name').innerHTML = "Hello, I am " + cat + ". ";
        
        })
    })
// });

$(document).ready(function (count) {
    console.log("ready!");
    $('#luna').click(function () {
        moves++
        console.log(moves);
        document.getElementById('count').innerHTML = "You have fed me " + moves + " time.";
        if(moves > 1) {
            document.getElementById('count').innerHTML = "You have fed me " + moves + " times.";
        }
        


    });

    
})



function showCat (cat) {
    cat.removeClassList('hidden');
    cat.addClassList('show');
}




// when you click something
// get that id
// update the moves counter and say a sentence

