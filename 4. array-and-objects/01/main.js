let myPenguin = {
    character : 'Whiteblack', 
    origin : 'Whiteblack the Penguin Sees the World',
    author : 'H. A. Rey and Margret Rey',
    notes : 'Children book about a travelling penguin',
};
let foodArr = ["mango", "apple", "orange"];
myPenguin.favoriteFoods = foodArr;

console.log(myPenguin.favoriteFoods[1]);

var firstFavFood = myPenguin.favoriteFoods[0];

myPenguin.favoriteFoods.push("banana");

console.log(myPenguin.favoriteFoods.length);

myPenguin.favoriteFoods[2] = "pineapple";

var lastFavoriteFood = myPenguin.favoriteFoods[foodArr.length - 1];

for (let food of foodArr) {
    console.log(food);
}
