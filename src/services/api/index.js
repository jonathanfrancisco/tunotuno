import axios from 'axios';

export const getFoods = () => {
  return axios.get('foods.json').then(({ data }) => {
    return data;
  });
};

export const getSampleOrders = () => {
  return axios.get('orders.json').then(({ data }) => {
    return data;
  });
};
