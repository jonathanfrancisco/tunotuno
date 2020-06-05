import React from 'react';
import styled from 'styled-components';
import OrderFormContainer from './splitpane/OrderFormContainer';
import FoodGrid from './splitpane/FoodGrid';

const StyledSplitPane = styled.div`
  min-height: calc(100vh - 62.76px);
  display: flex;
  > * {
    padding: 2em;
  }
  .order-form-container {
    flex-basis: 50%;
    height: calc(100vh - 62.76px);
  }
  .food-grid {
    flex-basis: 50%;
    height: calc(100vh - 62.76px);
    overflow-x: scroll;
  }
`;

const SplitPane = (props) => {
  return (
    <StyledSplitPane className="split-pane">
      <OrderFormContainer />
      <FoodGrid />
    </StyledSplitPane>
  );
};

export default SplitPane;
