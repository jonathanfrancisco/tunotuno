import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { Code } from 'react-content-loader';
import NavBar from './homepage/NavBar';
import SplitPane from './homepage/SplitPane';

const HomePage = (props) => {
  const [loadingBarProgress, setLoadingBarProgress] = useState(0);

  useEffect(() => {
    setInterval(() => {
      console.log('progress: ', Math.floor(Math.random() * 100 + 1));
      setLoadingBarProgress(
        loadingBarProgress + Math.floor(Math.random() * 100 + 1)
      );
    }, 1500);
  }, []);

  return (
    <>
      <LoadingBar progress={loadingBarProgress} height={3} color="red" />
      <NavBar />
      <SplitPane />
    </>
  );
};

export default HomePage;
