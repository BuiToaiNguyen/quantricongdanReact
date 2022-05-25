import React from 'react';
import Slide from './Slide';
import '../style/body.css';
import HomeStatic from './HomeStatic';
import IntroTwo from './IntroTwo';
import GridSection from './GridSection';
import WithCarousel from './WithCarousel';
import ThreeCol from './ThreeCol';
import Final from './Final';
import FeatureSmall from './FeatureSmall';
import DownloadApp from './DownloadApp';
const Body = () => {
  return (
    <>
      <Slide />
      <HomeStatic />
      <IntroTwo />
      <GridSection />
      <WithCarousel />
      <ThreeCol/>
      <Final/>
      <DownloadApp/>
    </>
  );
};

export default Body;
