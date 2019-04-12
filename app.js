
// ********** model ************
let model = {
//In the model we are storing our data. Such as what is our currentCat, our Cats are keys.
//the keys and in my cat keys I have an array of objects with the values of each cat. 
// model.cats[0].name
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
//here the octopus talks with the model and the view
//the first function is in the init key and it sets the currentCat by accessing the cats object
//in the first index
//i am initializing our views. 2 different views because i need to display the cats 
//as well as show them
//made a simple function to get currentCat. just accessed the key by doing model.currentCat
//in the octopus view i am just assigning things to communicate with the model and the view

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
    //cat here is the thing we are passing through
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    //increments the counter for the currently selected cat
    //here this function is incrementing the counter. the counter is in the 
    //cats object that holds the arrays with the information of the cat.
    //i am calling the catView object and attaching the render() function.
    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    }

};


//I have to access the DOM elements
//this points to the newly created object where the method is stored


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