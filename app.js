let moves = 0;
let cat;




$(document).ready(function () {
    console.log("ready");
    // $('.form-group').click(function (event) {
        $('.form-control').click(function(event) { 
        setTimeout(function() {
        let clickTarget = event.target;
        console.log("i am the clickTarget:", clickTarget);
        console.log("I chose " + cat);
        greeting(cat);
        
        }, 1000)

        })
    })
// });


function greeting(hello) {
    let cat = $('#sel1 option:selected').text();
    document.getElementById('name').innerHTML = "Hello, I am " + cat + ". ";

}




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

