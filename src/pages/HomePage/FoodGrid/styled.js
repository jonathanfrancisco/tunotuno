import styled from 'styled-components';

export const FoodGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  > * {
    margin-bottom: 1em;
    flex: 0 1 calc(33.33% - 1em);
  }
`;
