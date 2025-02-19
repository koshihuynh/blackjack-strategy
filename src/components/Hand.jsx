import React from 'react';
import CardComponent from './Card';
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

export default function Hand({ hand, title }) {
  return (
    <div className="p-3">
      <h1 className="fs-1">{title}</h1>
      <div className="d-flex justify-content-center align-items-center gap-2" >
        {
            hand.map((card, index) => (
                <CardComponent key={index} card={card} />
            ))
        }
      </div>
    </div>
  );
}