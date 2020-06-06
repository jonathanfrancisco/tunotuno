import styled from 'styled-components';

export const SplitPane = styled.div`
  min-height: calc(100vh - 62.76px);
  display: flex;
  > * {
    padding: 2em;
    flex-basis: 50%;
    height: calc(100vh - 62.76px);
    overflow-x: scroll;
  }
`;
