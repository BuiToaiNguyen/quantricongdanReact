import React from 'react';
import Header from './header/Header';
import '../home/style/allstyle.css';
import Body from './body/Body';
import Footer from './footer/Footer';
const HomePage = () => {
  return (
    <>
      <div className='container__header'>
        <Header />
      </div>
      <div className='container__body'>
        <Body />
      </div>
      <Footer/>
    </>
  );
};

export default HomePage;
