import React from 'react';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import * as S from './styled';

const OrderFormItem = ({ image, cookingTime, name, price }) => {
  return (
    <S.OrderFormItem>
      <S.Image src={image} />
      <S.Details>
        <S.CookingTime>{cookingTime} minute(s)</S.CookingTime>
        <S.OrderedName>{name}</S.OrderedName>
        <S.OrderedPrice>₱{price}</S.OrderedPrice>
      </S.Details>
      <S.Actions>
        <p>Quantity</p>
        <AiFillPlusCircle />
        <S.Quantity>100</S.Quantity>
        <AiFillMinusCircle />
        <S.RemoveBtn>X</S.RemoveBtn>
      </S.Actions>
    </S.OrderFormItem>
  );
};

export default OrderFormItem;
