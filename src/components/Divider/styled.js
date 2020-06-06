import styled from 'styled-components';

export const Divider = styled.div`
  width: 100%;
  height: ${(props) => props.height + 'px'};
  background-color: ${(props) => props.color};
`;
