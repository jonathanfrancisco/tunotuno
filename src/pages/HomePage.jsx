import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';
import NavBar from './homepage/NavBar';
import SplitPane from './homepage/SplitPane';
import useInterval from '../customHooks/useInterval';

const HomePage = (props) => {
  const [loadingBarProgress, setLoadingBarProgress] = useState(0);

  useInterval(() => {
    setLoadingBarProgress(
      loadingBarProgress + Math.floor(Math.random() * 50 + 1)
    );
  }, 800);

  return (
    <>
      <LoadingBar progress={loadingBarProgress} height={3} color="E74C3C" />
      <NavBar />
      <SplitPane />
    </>
  );
};

export default HomePage;
