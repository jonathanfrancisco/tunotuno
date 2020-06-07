import React from 'react';
import * as S from './styled';

const OrderFormItem = ({ image, name }) => {
  return (
    <S.OrderFormItem>
      <S.OrderFormItemImage src={image} />
      <S.OrderFormItemDetails>
        <S.OrderFormItemName>{name}</S.OrderFormItemName>
      </S.OrderFormItemDetails>
    </S.OrderFormItem>
  );
};

export default OrderFormItem;
