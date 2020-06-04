import React from 'react';
import styled from 'styled-components';

export const StyledFoodCard = styled.div`
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .food-card_image {
    height: 150px;
    max-width: 100%;
    object-fit: cover;
  }

  .food-card_content {
    padding: 1em;
  }

  .food-card_content h5 {
    color: #7f8c8d;
  }

  .food-card_content h3 {
    color: #2c3e50;
    margin: 0.1em 0;
  }

  .food-card_content p {
    font-size: 12px;
    color: #7f8c8d;
  }

  .food-card_content_cooking-time {
    margin-top: 0;
  }

  .food-card_content_description {
    margin-top: 0.5em;
  }

  .food-card_content button {
    border: none;
    padding: 0.4em 0.8em;
    background-color: #e74c3c;
    border-radius: 100px;
    margin-top: 2em;
    color: #fff;
  }

  .food-card_content button:hover {
    cursor: pointer;
    background-color: #c0392b;
  }
`;

const FoodCard = ({ image, cookingTime, name, price, description }) => {
  return (
    <StyledFoodCard className="food-card">
      <img className="food-card_image" src={image} />
      <div className="food-card_content">
        <p className="food-card_content_cooking-time">
          {cookingTime} minute(s)
        </p>
        <h3>{name} </h3>
        <h5>₱{price}</h5>

        <p className="food-card_content_description">{description}</p>

        <button>Add to order</button>
      </div>
    </StyledFoodCard>
  );
};

export default FoodCard;
