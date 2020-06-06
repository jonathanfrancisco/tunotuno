import styled from 'styled-components';

export const SplitPane = styled.div`
  min-height: calc(100vh - (62.76px));
  display: flex;
  justify-content: center;
  padding: 2em 0;
  > * {
    flex-basis: 40%;
    height: calc(100vh - 126.76px);
    overflow-x: scroll;
  }
`;
