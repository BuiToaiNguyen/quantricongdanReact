import React from 'react';
import Slide from './Slide';
import '../style/body.css';
import HomeStatic from './HomeStatic';
import IntroTwo from './IntroTwo';
import GridSection from './GridSection';
import WithCarousel from './WithCarousel';
const Body = () => {
  return (
    <>
      <Slide />
      <HomeStatic />
      <IntroTwo />
      <GridSection />
      <WithCarousel />
    </>
  );
};

export default Body;
