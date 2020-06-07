import React from 'react';
import * as S from './styled';

const OrderForm = ({ children }) => {
  return (
    <S.OrderForm>
      <S.OrderFormTitle>Your Order</S.OrderFormTitle>
      {children}
    </S.OrderForm>
  );
};

export default OrderForm;
