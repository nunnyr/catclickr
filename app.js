let moves = 0;
let luna = document.getElementById('#luna');
let artemis = document.getElementById('#artemis');

let cat= document.getElementById('');



// $(document).ready(function (count) {
//     console.log("ready!");
//     $('#luna').click(function () {
//         moves1++
//         console.log(moves1);
//         document.getElementById('counter1').innerHTML = "You have clicked " + cat1 + " " + moves1 + " time(s)" ;
        


//     });
    
// })

// $(document).ready(function (count) {
//     console.log("ready!");
//     $('#artemis').click(function () {
//         moves2++
//         console.log(moves2);
//         document.getElementById('counter2').innerHTML = "You have clicked " + cat2 + " " + moves2 + " time(s)";



//     });

// })


$(document).ready(function() {
    console.log("ready");
    $('.form-group').click(function(event){
        let clickTarget = event.target;
        console.log("i am the clickTarget:" , clickTarget);
        let cat = $('#sel1 option:selected').text();
        console.log("I chose " + cat);
        document.getElementById('name').innerHTML = "Hello, I am " + cat;
   })
});





function showCat(cat) {
    cat.classList.toggle('open');
    cat.classList.toggle('show')
}


 





// when you click something
// get that id
// update the moves counter and say a sentence

