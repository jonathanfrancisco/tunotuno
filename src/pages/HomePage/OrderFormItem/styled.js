import styled from 'styled-components';

export const OrderFormItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  object-fit: cover;
  height: 50px;
  width: 50px;
  flex-basis: 15%;
`;

export const Details = styled.div`
  flex-basis: 65%;
`;

export const CookingTime = styled.p`
  color: #7f8c8d;
  font-size: 10px;
`;

export const OrderedName = styled.h5`
  color: #2c3e50;
`;

export const OrderedPrice = styled.h5`
  color: #7f8c8d;
`;

export const Actions = styled.div`
  display: flex;
`;

export const Quantity = styled.h5``;

export const RemoveBtn = styled.button`
  flex-basis: 10%;
`;
