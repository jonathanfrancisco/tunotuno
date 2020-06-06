import React from 'react';
import * as S from './styled';
import OrderFormItem from 'pages/HomePage/SplitPane/OrderForm/OrderFormItem';

const OrderForm = () => {
  return (
    <S.OrderForm>
      <OrderFormItem foodName="dasd" quantity={1} />
      <button>Submit Order</button>
    </S.OrderForm>
  );
};

export default OrderForm;
