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
  penguin.outfit = {
      hat : "a baseball cap",
      shirt: "Hawaiian shirt",
      pants: "cargo shorts",
      shoes: "flip flops"
  }
  penguinHatType = penguin.outfit.hat;

  console.log(penguinHatType);

  penguin.outfit.accessory = "pocket watch";

  penguin.outfit.hat = "top hat";

  delete penguin.outfit.pants;


  for (let key in penguin.outfit) {
      console.log(penguin.outfit[key]);
  }