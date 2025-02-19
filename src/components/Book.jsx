const blackjackFeedback = {
    "hard": { 
        "20": "Hard 20:\nAlways Stand",
        "19": "Hard 19:\nAlways Stand",
        "18": "Hard 18:\nAlways Stand",
        "17": "Hard 17:\nAlways Stand",
        "16": "Hard 16:\n2-6 Stand\n7-8 Hit\n9-A Surrender",
        "15": "Hard 15:\n2-6 Stand\n7-9 Hit\n10 Surrender\nA Hit",
        "14": "Hard 14:\n2-6 Stand\n7-A Hit",
        "13": "Hard 13:\n2-6 Stand\n7-A Hit",
        "12": "Hard 12:\n2-3 Hit\n4-6 Stand\n7-A Hit",
        "11": "Hard 11:\nAlways Double",
        "10": "Hard 10:\n2-9 Double\n10-A Hit",
        "9": "Hard 9:\n2 Hit\n3-6 Double\n7-A Hit",
        "8": "Hard 8:\nAlways Hit",
        "7": "Hard 7:\nAlways Hit",
        "6": "Hard 6:\nAlways Hit",
        "5": "Hard 5:\nAlways Hit",
        "4": "Hard 4:\nAlways Hit",
        "3": "Hard 3:\nAlways Hit"
        }, 
    "soft": {
        "21": "Blackjack!\nAlways Stand", 
        "20": "Soft 20:\nAlways Stand",
        "19": "Soft 19:\n2-5 Stand\n6 Double\n7-A Stand",
        "18": "Soft 18:\n2-6 Double\n7-8 Stand\n9-A Hit",
        "17": "Soft 17:\n2 Hit\n3-6 Double\n7-A Hit",
        "16": "Soft 16:\n2-3 Hit\n4-6 Double\n7-A Hit",
        "15": "Soft 15:\n2-3 Hit\n4-6 Double\n7-A Hit",
        "14": "Soft 14:\n2-4 Hit\n5-6 Double\n7-A Hit",
        "13": "Soft 13:\n2-4 Hit\n5-6 Double\n7-A Hit",
        }, 
    "pairs": {
        "A": "Pair As:\nAlways Split",
        "K": "Pair Ks:\nNever Split\nAlways Stand",
        "Q": "Pair Qs:\nNever Split\nAlways Stand",
        "J": "Pair Js:\nNever Split\nAlways Stand",
        "10": "Pair 10s:\nNever Split\nAlways Stand",
        "9": "Pair 9s:\n2-6 Split\n7 Stand\n8-9 Split\n10-A Stand",
        "8": "Pair 8s:\nAlways Split",
        "7": "Pair 7s:\n2-7 Split\n8-A Hit",
        "6": "Pair 6s:\n2-6 Split\n7-A Hit",
        "5": "Pair 5s:\nNever Split\n2-9 Double\n10-A Hit",
        "4": "Pair 4s:\n2-4 Hit\n5-6 Split\n7-A Hit",
        "3": "Pair 3s:\n2-7 Split\n8-A Hit",
        "2": "Pair 3s:\n2-7 Split\n8-A Hit"
    }
};

const blackjackStrategy = {
    "hard": { 
        "20": { "2": "Stand", "3": "Stand", "4": "Stand", "5": "Stand", "6": "Stand", "7": "Stand", "8": "Stand", "9": "Stand", "10": "Stand", "11": "Stand" },
        "19": { "2": "Stand", "3": "Stand", "4": "Stand", "5": "Stand", "6": "Stand", "7": "Stand", "8": "Stand", "9": "Stand", "10": "Stand", "11": "Stand" },
        "18": { "2": "Stand", "3": "Stand", "4": "Stand", "5": "Stand", "6": "Stand", "7": "Stand", "8": "Stand", "9": "Stand", "10": "Stand", "11": "Stand" },
        "17": { "2": "Stand", "3": "Stand", "4": "Stand", "5": "Stand", "6": "Stand", "7": "Stand", "8": "Stand", "9": "Stand", "10": "Stand", "11": "Stand" },
        "16": { "2": "Stand", "3": "Stand", "4": "Stand", "5": "Stand", "6": "Stand", "7": "Hit", "8": "Hit", "9": "Surrender", "10": "Surrender", "11": "Surrender" },
        "15": { "2": "Stand", "3": "Stand", "4": "Stand", "5": "Stand", "6": "Stand", "7": "Hit", "8": "Hit", "9": "Hit", "10": "Surrender", "11": "Hit" },
        "14": { "2": "Stand", "3": "Stand", "4": "Stand", "5": "Stand", "6": "Stand", "7": "Hit", "8": "Hit", "9": "Hit", "10": "Hit", "11": "Hit" },
        "13": { "2": "Stand", "3": "Stand", "4": "Stand", "5": "Stand", "6": "Stand", "7": "Hit", "8": "Hit", "9": "Hit", "10": "Hit", "11": "Hit" },
        "12": { "2": "Hit", "3": "Hit", "4": "Stand", "5": "Stand", "6": "Stand", "7": "Hit", "8": "Hit", "9": "Hit", "10": "Hit", "11": "Hit" },
        "11": { "2": "Double", "3": "Double", "4": "Double", "5": "Double", "6": "Double", "7": "Double", "8": "Double", "9": "Double", "10": "Double", "11": "Double" },
        "10": { "2": "Double", "3": "Double", "4": "Double", "5": "Double", "6": "Double", "7": "Double", "8": "Double", "9": "Double", "10": "Hit", "11": "Hit" },
        "9": { "2": "Hit", "3": "Double", "4": "Double", "5": "Double", "6": "Double", "7": "Hit", "8": "Hit", "9": "Hit", "10": "Hit", "11": "Hit" },
        "8": { "2": "Hit", "3": "Hit", "4": "Hit", "5": "Hit", "6": "Hit", "7": "Hit", "8": "Hit", "9": "Hit", "10": "Hit", "11": "Hit" },
        "7": { "2": "Hit", "3": "Hit", "4": "Hit", "5": "Hit", "6": "Hit", "7": "Hit", "8": "Hit", "9": "Hit", "10": "Hit", "11": "Hit" },
        "6": { "2": "Hit", "3": "Hit", "4": "Hit", "5": "Hit", "6": "Hit", "7": "Hit", "8": "Hit", "9": "Hit", "10": "Hit", "11": "Hit" },
        "5": { "2": "Hit", "3": "Hit", "4": "Hit", "5": "Hit", "6": "Hit", "7": "Hit", "8": "Hit", "9": "Hit", "10": "Hit", "11": "Hit" },
        "4": { "2": "Hit", "3": "Hit", "4": "Hit", "5": "Hit", "6": "Hit", "7": "Hit", "8": "Hit", "9": "Hit", "10": "Hit", "11": "Hit" },
        "3": { "2": "Hit", "3": "Hit", "4": "Hit", "5": "Hit", "6": "Hit", "7": "Hit", "8": "Hit", "9": "Hit", "10": "Hit", "11": "Hit" }
        }, 
    "soft": { 
        "20": { "2": "Stand", "3": "Stand", "4": "Stand", "5": "Stand", "6": "Stand", "7": "Stand", "8": "Stand", "9": "Stand", "10": "Stand", "11": "Stand" },
        "19": { "2": "Stand", "3": "Stand", "4": "Stand", "5": "Stand", "6": "Double", "7": "Stand", "8": "Stand", "9": "Stand", "10": "Stand", "11": "Stand" },
        "18": { "2": "Double", "3": "Double", "4": "Double", "5": "Double", "6": "Double", "7": "Stand", "8": "Stand", "9": "Hit", "10": "Hit", "11": "Hit" },
        "17": { "2": "Hit", "3": "Double", "4": "Double", "5": "Double", "6": "Double", "7": "Hit", "8": "Hit", "9": "Hit", "10": "Hit", "11": "Hit" },
        "16": { "2": "Hit", "3": "Hit", "4": "Double", "5": "Double", "6": "Double", "7": "Hit", "8": "Hit", "9": "Hit", "10": "Hit", "11": "Hit" },
        "15": { "2": "Hit", "3": "Hit", "4": "Double", "5": "Double", "6": "Double", "7": "Hit", "8": "Hit", "9": "Hit", "10": "Hit", "11": "Hit" },
        "14": { "2": "Hit", "3": "Hit", "4": "Hit", "5": "Double", "6": "Double", "7": "Hit", "8": "Hit", "9": "Hit", "10": "Hit", "11": "Hit" },
        "13": { "2": "Hit", "3": "Hit", "4": "Hit", "5": "Double", "6": "Double", "7": "Hit", "8": "Hit", "9": "Hit", "10": "Hit", "11": "Hit" },
        }, 
    "pairs": {
        "A": { "2": "Split", "3": "Split", "4": "Split", "5": "Split", "6": "Split", "7": "Split", "8": "Split", "9": "Split", "10": "Split", "11": "Split" },
        "K": { "2": "Stand", "3": "Stand", "4": "Stand", "5": "Stand", "6": "Stand", "7": "Stand", "8": "Stand", "9": "Stand", "10": "Stand", "11": "Stand" },
        "Q": { "2": "Stand", "3": "Stand", "4": "Stand", "5": "Stand", "6": "Stand", "7": "Stand", "8": "Stand", "9": "Stand", "10": "Stand", "11": "Stand" },
        "J": { "2": "Stand", "3": "Stand", "4": "Stand", "5": "Stand", "6": "Stand", "7": "Stand", "8": "Stand", "9": "Stand", "10": "Stand", "11": "Stand" },
        "10": { "2": "Stand", "3": "Stand", "4": "Stand", "5": "Stand", "6": "Stand", "7": "Stand", "8": "Stand", "9": "Stand", "10": "Stand", "11": "Stand" },
        "9": { "2": "Split", "3": "Split", "4": "Split", "5": "Split", "6": "Split", "7": "Stand", "8": "Split", "9": "Split", "10": "Stand", "11": "Stand" },
        "8": { "2": "Split", "3": "Split", "4": "Split", "5": "Split", "6": "Split", "7": "Split", "8": "Split", "9": "Split", "10": "Split", "11": "Split" },
        "7": { "2": "Split", "3": "Split", "4": "Split", "5": "Split", "6": "Split", "7": "Split", "8": "Hit", "9": "Hit", "10": "Hit", "11": "Hit" },
        "6": { "2": "Split", "3": "Split", "4": "Split", "5": "Split", "6": "Split", "7": "Hit", "8": "Hit", "9": "Hit", "10": "Hit", "11": "Hit" },
        "5": { "2": "Double", "3": "Double", "4": "Double", "5": "Double", "6": "Double", "7": "Double", "8": "Double", "9": "Double", "10": "Hit", "11": "Hit" },
        "4": { "2": "Hit", "3": "Hit", "4": "Hit", "5": "Split", "6": "Split", "7": "Hit", "8": "Hit", "9": "Hit", "Hit": "Hit", "A": "Hit" },
        "3": { "2": "Split", "3": "Split", "4": "Split", "5": "Split", "6": "Split", "7": "Split", "8": "Hit", "9": "Hit", "10": "Hit", "11": "Hit" },
        "2": { "2": "Split", "3": "Split", "4": "Split", "5": "Split", "6": "Split", "7": "Split", "8": "Hit", "9": "Hit", "10": "Hit", "11": "Hit" }
    }
};

/*
    Determines the proper strategy using the Player's Hand and Dealer's Up card.
    This function returns an object with {strategy, feedback}
    strategy - strategy given hand and upcard
    feedback - strategy with given hand against all Dealer's Up cards
*/
export function evaluate(playerHand, upCard) {
    let strategy = "";
    let feedback = "";
    const firstCard = playerHand[0];
    const secondCard = playerHand[1];

    const hasAce = firstCard.rank == "A" || secondCard.rank == "A"
    const isPair = firstCard.rank == secondCard.rank
    

    if(firstCard.value + secondCard.value == 21){
        strategy = "Stand";
        feedback = "Blackjack! Stand";
        return {strategy, feedback};
    }else if(isPair){
        strategy = blackjackStrategy["pairs"][firstCard.rank][upCard.value];
        feedback = blackjackFeedback["pairs"][firstCard.rank];
        return {strategy, feedback};
    }else if(hasAce){
        if(firstCard.rank == "A"){
            strategy = blackjackStrategy["soft"][secondCard.value+11][upCard.value];
            feedback = blackjackFeedback["soft"][secondCard.value+11];
            return {strategy, feedback};
        }else{
            strategy = blackjackStrategy["soft"][firstCard.value+11][upCard.value];
            feedback = blackjackFeedback["soft"][firstCard.value+11];
            return {strategy, feedback};
        }
    }else {
        strategy = blackjackStrategy["hard"][firstCard.value+secondCard.value][upCard.value];
        feedback = blackjackFeedback["hard"][firstCard.value+secondCard.value];
        return {strategy, feedback};
    }
}

