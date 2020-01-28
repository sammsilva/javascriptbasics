/*  Objeto Car
    Atributos: gear and currentGear
    Métodos: changeGear
*/

const car = {
    gear: 10,
    currentGear: 0,
    changeGear: function(direction, changeBy){
        if(direction == 'up')
            this.currentGear+=changeBy;
        else
            this.currentGear-=changeBy;
    }
}

console.log(car.gear);
console.log(car.currentGear);
car.changeGear('up',1);
console.log(car.currentGear);

/*  Objeto bike
    Atributos: frontGearIndex, rearGearIndex e objeto Transmission
    Métodos: calculateGearRatio, changeGear
*/

const bike = {
    frontGearIndex: 0,
    rearGearIndex: 0,
    transmission: { //objeto Transmission - possui dois arrays como atributos
      frontGearTeeth: [30,45],
      rearGearTeeth: [11,13,15,17,19,21,24,28,32,36]
    },
    calculateGearRatio: function() {
      let front = this.transmission.frontGearTeeth[this.frontGearIndex],
          rear = this.transmission.rearGearTeeth[this.rearGearIndex];
      return (front / rear);
    },
    changeGear: function(frontOrRear, newValue) {
      if (frontOrRear === 'front') {
        this.frontGearIndex = newValue;
      } else {
        this.rearGearIndex = newValue;
      }
    }
  };

  /*  Event Handles  */

 var handleClick = function(event) {
    console.log(event.type);  // click
    console.log(event.currentTarget); // the thing you clicked
    console.log(event.screenX); // screen X coordinate
    console.log(event.screenY); // screen Y coordinate
}

//html <button id=”clicker”>
let button = document.getElementById("clicker"); //find button with id
button.addEventListener("click", handleClick); // add event listener 
button.removeEventListener("click", handleClick); // remove event listener
button.addEventListener("click", function(event){
    //...anonymous function body...
});

function countToThree() {
    // i is in the scope of the countToThree function
    for (var i = 0; i < 3; i++){
      console.log(i); // iteration 1: 0
      // iteration 2: 1
      // iteration 3: 2
    }
    console.log(i); // What is this?
  }

for (let j = 0; j < 3; j++){ //j exists only in the for context
    console.log(j); // 0 
    // 1
    // 2
}
console.log(j); // error - does not exist in this context