import React from 'react';
import Header from './header/Header';
import '../home/style/allstyle.css';
import Body from './body/Body';
const HomePage = () => {
  return (
    <>
      <div className='container__header'>
        <Header />
      </div>
      <div className='container__body'>
        <Body />
      </div>
    </>
  );
};

export default HomePage;
