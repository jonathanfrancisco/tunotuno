import React from 'react';
import { BulletList } from 'react-content-loader';
import * as S from './styled';

const FoodCard = ({
  image,
  cookingTime,
  name,
  price,
  description,
  isLoading,
}) => {
  if (isLoading) {
    return <BulletList />;
  }

  return (
    <S.FoodCard className="food-card">
      <img alt="food" className="food-card_image" src={image} />
      <div className="food-card_content">
        <p className="food-card_content_cooking-time">
          {cookingTime} minute(s)
        </p>
        <h3>{name} </h3>
        <h5>₱{price}</h5>

        <p className="food-card_content_description">{description}</p>

        <button>Add to order</button>
      </div>
    </S.FoodCard>
  );
};

export default FoodCard;
