function createCrew(name, age, position, ship) {
  return {
    name,
    age,
    position,
    ship,
    introduction: function () {
      return console.log(
        `Hello. My name is ${this.name}, and I am the ${this.position} aboard the ${ship}.`
      )
    },
  }
}

let jHolden = createCrew('James Holden', 30, 'Captain', 'Rocinante')

jHolden.introduction()
