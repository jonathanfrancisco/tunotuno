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
  onAddOrder,
}) => {
  if (isLoading) {
    return <BulletList />;
  }

  const handleAddToOrder = () => {
    onAddOrder({ image, cookingTime, name, price });
  };

  return (
    <S.FoodCard>
      <S.FoodCardImage src={image} alt="food" />
      <S.FoodCardContent>
        <S.FoodCardContentCookingTime>
          {cookingTime} minute(s)
        </S.FoodCardContentCookingTime>
        <S.FoodCardContentName>{name}</S.FoodCardContentName>
        <S.FoodCardContentPrice>₱{price}</S.FoodCardContentPrice>

        <S.FoodCardContentDescription>
          {description}
        </S.FoodCardContentDescription>
        <S.FoodCardContentAddOrderBtn onClick={handleAddToOrder}>
          Add to order
        </S.FoodCardContentAddOrderBtn>
      </S.FoodCardContent>
    </S.FoodCard>
  );
};

export default FoodCard;
