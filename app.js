// let moves = 0;
// let cat;


// $(document).ready(function () {
//     console.log("ready");
//     // $('.form-group').click(function (event) {
//     $('.form-control').click(function(event) { 
//         setTimeout(function() {
//             let clickTarget = event.target;
//             console.log("i am the clickTarget:", clickTarget);
//             greeting();
//             resetMoves()
            
//         }, 1000)
//     })
    
// })

// //displaying cat chosen
// // function showImage() {
// //     $('form-control').append




// //greeting + feeding counter 

// function greeting(hello) {
//     let cat = $('#sel1 option:selected').text();
    
//     document.getElementById('name').innerHTML = "Hello, I am " + cat + ". ";
//     console.log("I chose " + cat);
   
// }


// $(document).ready(function (count) {
//     console.log("ready!");
//     $('li').click(function () {
//         moves++
//         console.log(moves);
//         document.getElementById('count').innerHTML = "You have fed me " + moves + " time.";
//         if(moves > 1 && moves === 0) {
//             document.getElementById('count').innerHTML = "You have fed me " + moves + " times.";
//         }        
        
//     });
// })

// //choosing a different cat 
// function resetMoves() {
//     moves = 0;
//     console.log("I am resetting the moves counter")
    
// }

// $(function() {

//     let model = {
//         cats: function(name) {
//             $('#sel1 option:selected').text();        
//             document.getElementById('name').innerHTML = "Hello, I am " + cat + ". ";
//             console.log("I chose " + cat);
//         },

//         reset: function() {
//                 moves=0;
//         },

//     };


//     let octopus = {
        
        

//     };

//     let view = {
//         greeting: function () {
//             $('li').click(function () {
//                 moves++
//                 console.log(moves);
//                 document.getElementById('count').innerHTML = "You have fed me " + moves + " time.";
//                 if (moves > 1 && moves === 0) {
//                     document.getElementById('count').innerHTML = "You have fed me " + moves + " times.";
//                 }

//             });
//         }
//     };


// })
// ********** model ************
let model = {
    currentCat: null,
    cats: [
        {
            clickCount: 0,
            name: 'Luna',
            imgSrc: 'img/Luna.png'
        },

        {
            clickCount: 0,
            name: 'Artemis',
            imgSrc: 'img/artemis.png'
        },

        {
            clickCount: 0, 
            name: 'Salem' ,
            imgSrc: 'img/salem.jpeg'
        },

        {
            clickCount: 0,
            name: 'Duchess',
            imgSrc: 'img/duchess.png'
        },

        {
            clickCount: 0,
            name: 'Sylvester',
            imgSrc: 'img/sylvester.png'
        },

    ]
};

// ********octopus *********

let octopus = {
    init: function() {
        //this sets our current cat to the first one in the list
        model.currentCat = model.cats[0];

        //our views are initializing
        catListView.init();
        catView.init();

    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },
    //set the currently-selected cat to the object passed in 
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    //increments the counter for the currently selected cat
    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    }

};

let catView = {
    init: function(){
        // store pointers to our DOM elements for easy access later
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        // on click, increment the current cat's counter
        this.catImageElem.addEventListener('click', function () {
            octopus.incrementCounter();
        });

        // render this view (update the DOM elements with the right values)
        this.render();
    },
    render: function () {
        // update the DOM elements with values from the current cat
        var currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
}






let catListView = {
    init: function () {
        // store the DOM element for easy access later
        this.catListElem = document.getElementById('cat-list');

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function () {
        let cat, elem, i;
        // get the cats we'll be rendering from the octopus
        let cats = octopus.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop over the cats
        for (i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i];

            // make a new cat list item and set its text
            elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            elem.addEventListener('click', (function (catCopy) {
                return function () {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        }
    }
};

// make it go!
octopus.init();