import { Card } from './Card'

export function createDeck(){
  const suits = ["♠️", "♥️", "♦️", "♣️"];
  const ranks = [
    { rank: "2", value: 2 }, { rank: "3", value: 3 }, { rank: "4", value: 4 },
    { rank: "5", value: 5 }, { rank: "6", value: 6 }, { rank: "7", value: 7 },
    { rank: "8", value: 8 }, { rank: "9", value: 9 }, { rank: "10", value: 10 },
    { rank: "J", value: 10 }, { rank: "Q", value: 10 }, { rank: "K", value: 10 },
    { rank: "A", value: 11 } // Ace defaults to 11
  ];

  let deck = [];
  
  for (let suit of suits) {
    for (let { rank, value } of ranks) {
      deck.push(new Card(rank, suit, value, true));
    }
  }

  return shuffle(deck);
};

// Fisher-Yates Shuffle Algorithm
function shuffle(deck) {
  let shuffledDeck = [...deck];
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }
  return shuffledDeck;
};
