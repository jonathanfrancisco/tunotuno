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

  const handleAddOrder = (order) => {
    setOrders([...orders, order]);
  };

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
          <h3>Your Order</h3>
          {orders.map((order) => (
            <>
              <OrderFormItem image={order.image} name={order.name} />
              <Divider height={3} color="#dfe6e9" />
            </>
          ))}
        </OrderForm>
        <FoodGrid>
          {foods.map((food) => (
            <FoodCard
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
