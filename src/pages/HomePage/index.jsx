import React, { useState, useEffect } from 'react';

// SHARED COMPONENTS
import NavBar from 'components/NavBar';
import Divider from 'components/Divider';

// PAGE COMPONENTS
import TopLoadingBar from 'react-top-loading-bar';
import SplitPane from 'pages/HomePage/SplitPane';
import OrderForm from 'pages/HomePage/OrderForm';
import OrderFormItem from 'pages/HomePage/OrderFormItem';
import FoodGrid from 'pages/HomePage/FoodGrid';
import FoodCard from 'pages/HomePage/FoodCard';

// SERVICES
import { getSampleOrders, getFoods } from 'services/api';

const HomePage = () => {
  const [topLoadingBarProgress, setTopBarLoadingProgress] = useState(0);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    // getSampleOrders().then(setOrders);
    getFoods().then((foods) => {
      setFoods(foods);
      setTopBarLoadingProgress(20);
      setTimeout(() => {
        setTopBarLoadingProgress(65);
      }, 500);
      setTimeout(() => {
        setTopBarLoadingProgress(100);
        setIsPageLoading(false);
      }, 1000);
    });
  }, []);

  const handleAddOrder = ({ id, image, cookingTime, name, price }) => {
    const isFoodExistsInOrder = orders.find((order) => order.id === id);
    if (!isFoodExistsInOrder) {
      setOrders([...orders, { id, image, cookingTime, name, price }]);
    }
  };
  console.log(orders);
  return (
    <>
      <TopLoadingBar
        progress={topLoadingBarProgress}
        height={3}
        color="E74C3C"
      />
      <NavBar />
      <SplitPane>
        <OrderForm>
          {orders.map((order) => (
            <>
              <OrderFormItem
                image={order.image}
                cookingTime={order.cookingTime}
                name={order.name}
                price={order.price}
              />
              <Divider height={3} color="#dfe6e9" />
            </>
          ))}
        </OrderForm>
        <FoodGrid>
          {foods.map((food) => (
            <FoodCard
              id={food.id}
              image={food.image}
              cookingTime={food.cookingTime}
              name={food.name}
              price={food.price}
              description={food.description}
              isLoading={isPageLoading}
              onAddOrder={handleAddOrder}
            />
          ))}
        </FoodGrid>
      </SplitPane>
    </>
  );
};

export default HomePage;
