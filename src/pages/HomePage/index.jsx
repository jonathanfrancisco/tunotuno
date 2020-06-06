import React, { useState, useEffect } from 'react';
import TopLoadingBar from 'react-top-loading-bar';
import NavBar from 'components/NavBar';
import SplitPane from 'pages/HomePage/SplitPane';
import OrderForm from 'pages/HomePage/OrderForm';
import FoodGrid from 'pages/HomePage/FoodGrid';
import FoodCard from 'pages/HomePage/FoodCard';

const HomePage = () => {
  const [topLoadingBarProgress, setTopBarLoadingProgress] = useState(0);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [foods] = useState([
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
  ]);

  useEffect(() => {
    setTopBarLoadingProgress(20);
    setTimeout(() => {
      setTopBarLoadingProgress(65);
    }, 500);
    setTimeout(() => {
      setTopBarLoadingProgress(100);
      setIsPageLoading(false);
    }, 1000);
  }, []);

  const onTopBarLoaderFinished = () => {};

  return (
    <>
      <TopLoadingBar
        progress={topLoadingBarProgress}
        onLoaderFinished={onTopBarLoaderFinished}
        height={3}
        color="E74C3C"
      />
      <NavBar />
      <SplitPane>
        <OrderForm />
        <FoodGrid>
          {foods.map((food) => (
            <FoodCard
              image={food.image}
              cookingTime={food.cookingTime}
              name={food.name}
              price={food.price}
              description={food.description}
              isLoading={isPageLoading}
            />
          ))}
        </FoodGrid>
      </SplitPane>
    </>
  );
};

export default HomePage;
