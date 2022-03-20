function KitchenApplliances() {
  this.brand = "LG", 
  this.color = "black", 
  this.material = "metal";
}
KitchenApplliances.prototype.activityDevice = function (watt) {
  if (watt > 0) {
    console.log("On");
  } else {
    console.log("Off");
  }
};

function FoodStorage(frozen) {
  this.frozen = frozen;
}
FoodStorage.prototype = new KitchenApplliances();

FoodStorage.prototype.getTemp = function (t) {
  console.log(`${t} degrees Celsius`);
};

function Cooking(cook) {
  this.cook = cook;
}
Cooking.prototype = new KitchenApplliances();

Cooking.prototype.getTimer = function (time) {
  if (time >= 5) {
    console.log(`${time} minutes - food's ready`);
  } else {
    console.log("You should wait");
  }
};

const fridge = new FoodStorage("ice");
const blender = new Cooking("whip");
const microwave = new Cooking("warms");

console.log(fridge);
console.log(blender);
console.log(microwave);

fridge.activityDevice(220);
blender.activityDevice(0);
microwave.activityDevice(220);

fridge.getTemp(5);
microwave.getTimer(5);
