import styled from 'styled-components';

export const FoodCardContentCookingTime = styled.p`
  margin-top: 0;
`;

export const FoodCardContentDescription = styled.p`
  margin-top: 0.5em;
`;

export const FoodCard = styled.div`
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${FoodCardContentCookingTime}, ${FoodCardContentDescription} {
    font-size: 12px;
    color: #7f8c8d;
  }
`;

export const FoodCardImage = styled.img`
  height: 150px;
  max-width: 100%;
  object-fit: cover;
`;

export const FoodCardContent = styled.div`
  padding: 1em;
`;

export const FoodCardContentName = styled.h3`
  color: #2c3e50;
  margin: 0.1em 0;
`;

export const FoodCardContentPrice = styled.h5`
  color: #7f8c8d;
`;

export const FoodCardContentAddOrderBtn = styled.button`
  border: none;
  padding: 0.4em 0.8em;
  background-color: #e74c3c;
  border-radius: 100px;
  margin-top: 2em;
  color: #fff;
  :hover {
    cursor: pointer;
    background-color: #c0392b;
  }
`;
