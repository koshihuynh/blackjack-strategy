import { useState, useEffect } from 'react'
import { createDeck } from './components/Deck'
import { evaluate } from './components/Book'
import Hand from './components/Hand'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

function App() {
  const [deck, setDeck] = useState(createDeck());
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [playerCount, setPlayerCount] = useState(0);
  const [dealerCount, setDealerCount] = useState(0);
  const [isCorrectMove, setIsCorrectMove] = useState(false)
  const [isIncorrectMove, setIsIncorrectMove] = useState(false)
  const [score, setScore] = useState(0);
  const [strategy, setStrategy] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showGuide, setShowGuide] = useState(false);

  function startGame(){
    //Reset Counts
    setPlayerCount(0);
    setDealerCount(0);

    //Create Deck
    const newDeck = createDeck();

    //Player Draws
    let firstCard = newDeck.shift();
    let secondCard = newDeck.shift();

    //Edge case for A,A Hand
    if(firstCard.rank == "A" && secondCard.rank == "A"){
      setPlayerCount(12);
    }else{
      setPlayerCount(firstCard.value + secondCard.value);
    }
    
    const playerInitialHand = [firstCard, secondCard];

    //Dealer Draws
    firstCard = newDeck.shift();
    secondCard = newDeck.shift();
    setDealerCount(secondCard.value);
    const dealerInitialHand = [firstCard, secondCard];

    dealerInitialHand[0].revealed = false;

    setDeck(newDeck);
    setPlayerHand(playerInitialHand);
    setDealerHand(dealerInitialHand);

    const cpu = evaluate(playerInitialHand, secondCard)
    setStrategy(cpu["strategy"]);
    setFeedback(cpu["feedback"]);
  };

  function handlePlayerMove(move){
    if(move == strategy){
      setScore(score => score + 1);
      setIsCorrectMove(true);
      setTimeout(() => setIsCorrectMove(false), 1000); // Remove glow after 1s
    }else{
      setScore(0);
      setIsIncorrectMove(true);
      setTimeout(() => setIsIncorrectMove(false), 1000); // Remove glow after 1s
    }
    startGame();
  }

  function toggleShowGuide(){
    setShowGuide(cur => !cur);
  }

  useEffect(() => {
    startGame();
  }, []);

  return (
    <div className={`container vh-100 d-flex flex-column align-items-center bg-dark text-light ${isCorrectMove ? `correct-move` : ``} ${isIncorrectMove ? `incorrect-move` : ``}`}>

      {/* HAND AND DEALER CARDS */}
      <div className="container d-flex flex-row align-items-center">
        <div className="container">
          <Hand hand={dealerHand} title={`Dealer's Hand [${dealerCount}]`} />
          <Hand hand={playerHand} title={`Player's Hand [${playerCount}]`} />
        </div>
        <div className="container d-flex flex-column">
          <h1>{score}</h1>
          <h1 style={{ whiteSpace: "pre-line" }}>{showGuide ? feedback : null}</h1>
          <div className="row justify-content-center h-50">
            <div className="col-6">
              <button className="btn btn-primary btn-md w-50 h-100 fs-3" onClick={toggleShowGuide}>{showGuide ? "Hide" : "Show"}</button>
            </div>
          </div>
        </div>
      </div>
      
      {/*CONTAINER FOR ALL BUTTONS*/}
      <div className="container">

        {/* NEW DEAL AND SURRENDER BUTTONS */}
        <div className="row mb-3 justify-content-center h-50">
          <div className="col-6">
            <button className="btn btn-success btn-md w-100 h-100 fs-1" onClick={() => {
              setScore(0); 
              startGame();
            }}>New Deal</button>
          </div>
          <div className="col-6">
            <button className="btn btn-danger btn-md w-100 h-100 fs-1" onClick={() => handlePlayerMove("Surrender")}>Surrender</button>
          </div>
        </div>

        {/* HIT AND STAND BUTTONS */}
        <div className="row mb-3 justify-content-center h-50">
          <div className="col-6">
            <button className="btn btn-primary btn-md w-100 h-100 fs-1" onClick={() => handlePlayerMove("Hit")}>Hit</button>
          </div>
          <div className="col-6">
            <button className="btn btn-primary btn-md w-100 h-100 fs-1" onClick={() => handlePlayerMove("Stand")}>Stand</button>
          </div>
        </div>

        {/* DOUBLE AND SPLIT BUTTONS */}
        <div className="row justify-content-center h-50">
          <div className="col-6">
            <button className="btn btn-primary btn-md w-100 h-100 fs-1" onClick={() => handlePlayerMove("Double")}>Double</button>
          </div>
          <div className="col-6">
            <button className="btn btn-primary btn-md w-100 h-100 fs-1" onClick={() => handlePlayerMove("Split")}>Split</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
