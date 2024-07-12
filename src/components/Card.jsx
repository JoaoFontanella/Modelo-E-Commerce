import React from 'react';
import '../styles/Card.css';

const Card = ({ image, title, description, addToCart, product }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-img" />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-description">{description}</p>
        <button className="card-button" onClick={() => addToCart(product)}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Card;
