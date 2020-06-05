import React from 'react';
import styled from 'styled-components';
import OrderForm from './orderformcontainer/OrderForm';

const StyledOrderFormContainer = styled.div`
  display: flex;
  .order-form {
    flex: 1;
  }
`;

const OrderFormContainer = () => {
  return (
    <StyledOrderFormContainer className="order-form-container">
      <OrderForm />
    </StyledOrderFormContainer>
  );
};

export default OrderFormContainer;
