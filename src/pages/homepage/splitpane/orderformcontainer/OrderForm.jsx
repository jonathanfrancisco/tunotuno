import React from 'react';
import styled from 'styled-components';

const StyledOrderForm = styled.form`
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.15);
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow-x: scroll;
`;

const OrderForm = () => {
  return (
    <StyledOrderForm className="order-form">
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>{' '}
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>{' '}
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>{' '}
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>{' '}
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>{' '}
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>{' '}
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>{' '}
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>{' '}
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>{' '}
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>
      <button>Submit Order</button>
    </StyledOrderForm>
  );
};

export default OrderForm;
