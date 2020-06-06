import React from 'react';
import * as S from './styled';

const OrderFormItem = ({ foodName, quantity }) => {
  return (
    <S.OrderFormItem>
      <label>{quantity}</label>
      <label>{foodName}</label>
      <input type="text" />
    </S.OrderFormItem>
  );
};

export default OrderFormItem;
