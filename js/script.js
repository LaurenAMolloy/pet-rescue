
const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

//Step 1
const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    //Create a Method for Sleep
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzz…`);
      this.isTired = 1;
    },
    //Create a Method for Playtime
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play today");
        this.sleep();
      } else {
        console.log(`Yay! ${name} loves to play!`);
        this.isTired += 1;
      }
    },
  };
  return pet;
};

//Create 5 New Objects

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

//Verify Objects & Methods
//console.log(sora, clover, baxter, cleo, francine);

clover.sleep();
baxter.play();

console.log(clover, baxter);
