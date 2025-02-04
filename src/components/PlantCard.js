import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  const handleSoldOut = () => {
    setIsSoldOut(!isSoldOut);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isSoldOut ? (
        <button>Out of Stock</button>
      ) : (
        <button className="primary" onClick={handleSoldOut}>
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;