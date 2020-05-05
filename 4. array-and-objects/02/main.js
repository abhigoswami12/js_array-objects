var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    }
  };
  
  var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    }
  };
  
  var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    }
  };
  let myPenguin = {
    name : 'Whiteblack', 
    origin : 'Whiteblack the Penguin Sees the World',
    author : 'H. A. Rey and Margret Rey',
    notes : 'Children book about a travelling penguin',
    canFly : true,
    sayHello: function () {
        console.log("Lorem ispum dolor");
    }
};

  let penguin = [gunter, ramon, fred];

  console.log (penguin[0]);

  var secondPenguin = penguin[1];

  console.log(penguin[2].name);

  penguin.push(myPenguin);

  console.log(penguin.length);

penguin[0].canfly = true;
 
penguin[0].sayHello();

for (i = 0; i < penguin.length; i++) {
    console.log(penguin[i].name);
}

for (i = 0; i < penguin.length; i++) {
    penguin[i].sayHello();
}

for (i = 0; i < penguin.length; i++) {
    penguin[i].numberOfFeet = 2;
}

for (i = 0; i < penguin.length; i++) {
    if (penguin[i].canFly == true) {
        console.log(penguin[i].name + " can fly. ");
    }

}


