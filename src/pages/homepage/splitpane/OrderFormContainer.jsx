import React from 'react';
import styled from 'styled-components';

const StyledOrderFormContainer = styled.div`
  display: flex;
`;
const StyledOrderForm = styled.form`
  margin: auto;
  box-shadow: 0px 0px 4px -1px black;
  width: 100%;
  max-width: 400px;
`;

const OrderFormContainer = () => {
  return (
    <StyledOrderFormContainer className="order-form">
      <StyledOrderForm>
        <label>Full Name</label>
        <input type="text" />
      </StyledOrderForm>
    </StyledOrderFormContainer>
  );
};

export default OrderFormContainer;
