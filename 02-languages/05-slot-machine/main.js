// SLOT MACHINE

class SlotMachine {
  constructor() {
    this.coins = 0;
  }

  play() {
    this.coins++;
    
    //Comparamos que todos los item sean true con every
    if (this.randomBoolean().every((item) => item)) {
      this.winnerMessage();
      this.coins = 0;

    } else {
      this.loserMessage();
    }
  }

  // Devuelve 3 boleanos aleatorios ( true o false)
  randomBoolean() {
    return [1, 2, 3].map(() => Boolean(Math.round(Math.random())));
  }

  winnerMessage() {
    console.log(
      `Congratulations!!!. You won ${this.coins} ${this.coins > 1 ? "coins" : "coin"}!!`
    );
  }

  loserMessage() {
    console.log("Good luck next time!!");
  }
}

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();

