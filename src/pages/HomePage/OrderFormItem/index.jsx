import React from 'react';
import * as S from './styled';

const OrderFormItem = ({ image, name }) => {
  return (
    <S.OrderFormItem>
      <img class="order-form-item-image" alt="food" src={image} />
      <div className="order-form-item-details">
        <h5>{name}</h5>
      </div>
    </S.OrderFormItem>
  );
};

export default OrderFormItem;
