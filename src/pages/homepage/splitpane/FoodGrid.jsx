import React from 'react';
import styled from 'styled-components';
import FoodCard from './foodgrid/FoodCard';
import LoadingFoodCard from './foodgrid/LoadingFoodCard';

const StyledFoodGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;

  .loading-food-card {
    margin-bottom: 1em;
    flex: 0 1 calc(33.33% - 1em);
  }

  .food-card {
    margin-bottom: 1em;
    flex: 0 1 calc(33.33% - 1em);
  }
`;

const foods = [
  {
    image: 'https://i.ytimg.com/vi/YNFLLOiXiDg/maxresdefault.jpg',
    cookingTime: 0,
    name: 'Barbecue',
    price: 12,
    description:
      'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
  },
  {
    image:
      '//www.willflyforfood.net/wp-content/uploads/2017/09/filipino-street-food.jpg',
    cookingTime: 0,
    name: 'Kwek Kwek',
    price: 15,
    description:
      'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
  },
  {
    image: 'https://i.ytimg.com/vi/YNFLLOiXiDg/maxresdefault.jpg',
    cookingTime: 0,
    name: 'Barbecue',
    price: 12,
    description:
      'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
  },
  {
    image:
      '//www.willflyforfood.net/wp-content/uploads/2017/09/filipino-street-food.jpg',
    cookingTime: 0,
    name: 'Kwek Kwek',
    price: 15,
    description:
      'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
  },
  {
    image: 'https://i.ytimg.com/vi/YNFLLOiXiDg/maxresdefault.jpg',
    cookingTime: 0,
    name: 'Barbecue',
    price: 12,
    description:
      'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
  },
  {
    image:
      '//www.willflyforfood.net/wp-content/uploads/2017/09/filipino-street-food.jpg',
    cookingTime: 0,
    name: 'Kwek Kwek',
    price: 15,
    description:
      'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
  },
];
const FoodGrid = (props) => {
  if (false) {
    return (
      <StyledFoodGrid className="food-grid">
        <LoadingFoodCard />
        <LoadingFoodCard />
        <LoadingFoodCard />
        <LoadingFoodCard />
        <LoadingFoodCard />
        <LoadingFoodCard />
        <LoadingFoodCard />
        <LoadingFoodCard />
        <LoadingFoodCard />
      </StyledFoodGrid>
    );
  }

  return (
    <StyledFoodGrid className="food-grid">
      {foods.map((food) => (
        <FoodCard
          image={food.image}
          cookingTime={food.cookingTime}
          name={food.name}
          price={food.price}
          description={food.description}
        />
      ))}
    </StyledFoodGrid>
  );
};

export default FoodGrid;
