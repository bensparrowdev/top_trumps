//Creating the Card Objects//
class Card {
    constructor(name, pace, defence, shot, strength, height) {
        this.name = name;
        this.pace = pace;
        this.defence = defence;
        this.shot = shot;
        this.strength = strength;
        this.height = height;
    }
}

class Cardlist {
    constructor() {
        this.cardArray = []
    }
    addCard(name, pace, defence, shot, strength, height) {
        this.cardArray.push(new Card(name, pace, defence, shot, strength, height))
    }
}

const cardDeck = new Cardlist()

//Add stats to cards: name, pace, defence, shot, strength, height(cm)//
cardDeck.addCard("Jack Grealish", 85, 53, 83, 69, 180)
cardDeck.addCard("Emiliano Martinez", 57, 88, 50, 195);
cardDeck.addCard("Ollie Watkins", 90, 54, 84, 76, 180)
cardDeck.addCard("Ross Barkley", 70, 57, 74, 73, 185)
cardDeck.addCard("John McGinn", 70, 71, 71, 79, 178)
cardDeck.addCard("Matt Targett", 72, 73, 46, 68, 183)
cardDeck.addCard("Douglas Luiz", 66, 71, 67, 70, 178)
cardDeck.addCard("Matty Cash", 82, 70, 63, 65, 179)
cardDeck.addCard("Bertrand Traore", 82, 47, 71, 66, 181)
cardDeck.addCard("Marvelous Nakamba", 71, 74, 49, 79, 176)
cardDeck.addCard("Anwar El Ghazi", 75, 32, 75, 69, 189)
cardDeck.addCard("Tyrone Mings", 66, 74, 44, 80, 196)
cardDeck.addCard("M Trezeguet", 81, 35, 74, 65, 179)
cardDeck.addCard("Ezri Konsa", 74, 71, 38, 72, 183)
cardDeck.addCard("Ahmed Elmohamady", 68, 67, 64, 70, 183)
cardDeck.addCard("Jacob Ramsey", 66, 43, 43, 49, 180)
cardDeck.addCard("Gabriel Agbonlahor", 93, 56, 73, 80, 180)
cardDeck.addCard("Gareth Barry", 65, 80, 77, 68, 183)
cardDeck.addCard("Ashley Young", 88, 80, 80, 74, 175)
cardDeck.addCard("Dwight Yorke", 75, 45, 78, 80, 176)
cardDeck.addCard("Tammy Abraham", 80, 35, 83, 75, 196)
cardDeck.addCard("John Carew",  80, 65, 77, 85, 193)
cardDeck.addCard("Fabian Delph", 81, 69, 74, 75, 174)
cardDeck.addCard("Olof Mellberg", 62, 87, 64, 79, 186)
cardDeck.addCard("Brad Friedel", 39, 85, 60, 77, 188)
cardDeck.addCard("Martin Laursen", 73, 82, 53, 83, 188)
cardDeck.addCard("James Milner", 85, 73, 79, 82, 175)
cardDeck.addCard("Tom Heaton",  49, 78, 50, 75, 187)
cardDeck.addCard("Neil Taylor", 66, 68, 39, 66, 175)
cardDeck.addCard("Morgan Sanson", 76, 76, 79, 81, 180)


//Shuffle the Deck//
let shuffle = (array) => {
    let counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;

        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

shuffle(cardDeck.cardArray)

//Split deck into 2//
let half_length = Math.ceil(cardDeck.cardArray.length / 2);

let compDeck = cardDeck.cardArray.splice(0, half_length); //Comp's hand
let playerDeck = cardDeck.cardArray;                      //Players hand
let playerTopCard = playerDeck[0]

//Players Turn//
//let topCard = JSON.stringify(playerDeck[0])
let showStats = (x) => {
    let statName =  x.name,
    statPace = x.pace,
    statDefence = x.defence,
    statShot = x.shot,
    statStrength = x.strength,
    statHeight = x.height;
    let all = `Type the stats number to choose:
    ${statName}
    1.${statPace}
    2.${statDefence}
    3.${statShot}
    4.${statStrength}
    5.${statHeight}`
    return all;
}
prompt(showStats(playerTopCard))
