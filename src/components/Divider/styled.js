import styled from 'styled-components';

export const Divider = styled.div`
  width: 100%;
  min-height: ${(props) => props.height + 'px'} !important;
  background-color: ${(props) => props.color};
  margin: 10px 0;
`;
