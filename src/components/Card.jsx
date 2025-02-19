import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

export class Card {
  constructor(rank, suit, value, revealed) {
    this.rank = rank;
    this.suit = suit;
    this.value = value;
    this.revealed = revealed;
  }
  
}

// Card Component for Display
export default function CardComponent({ card }) {
  return (
    <div className="card text-center border-dark " style={{ width: "10em", height: "15em", position: "relative" }}>
      {
        card.revealed ? (
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <h1 className="position-absolute top-50 start-50 translate-middle fw-bold fs-1">
            {card.rank + card.suit}
          </h1>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center h-100 fs-1">
          ❓
        </div>
      )}
    </div>
  );
};