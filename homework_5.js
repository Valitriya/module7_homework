class KitchenApplliances {
  constructor() {
    this.brand = "LG";
    this.color = "black";
    this.material = "metal";
  }
  activityDevice(watt) {
    if (watt > 0) {
      console.log("On");
    } else {
      console.log("Off");
    }
  }
}

class FoodStorage extends KitchenApplliances {
  constructor(frozen) {
    super();
    this.frozen = frozen;
  }
  getTemp(t) {
    console.log(`${t} degrees Celsius`);
  }
}

class Cooking extends KitchenApplliances {
  constructor(cook) {
    super();
    this.cook = cook;
  }
  getTimer(time) {
    if (time >= 5) {
      console.log(`${time} minutes - food's ready`);
    } else {
      console.log("You should wait");
    }
  }
}

const fridge = new FoodStorage("ice");
const blender = new Cooking("whip");
const microwave = new Cooking("warms");

console.log(fridge);
console.log(blender);
console.log(microwave);

fridge.activityDevice(0);
blender.activityDevice(220);
microwave.activityDevice(0);

blender.getTimer(2);
microwave.getTimer(5);
