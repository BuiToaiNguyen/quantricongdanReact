import React, {useRef} from 'react';
import {Carousel, Button} from 'antd';

const Slide = () => {
  // from https://react-slick.neostack.com/docs/example/custom-arrows
  const SampleNextArrow = (props) => {
    const {className, style, onClick} = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          backgroundColor: 'rgba(0,0,0,0.4)',
          zIndex: 999,
          marginRight: '90px',
          width: '50px',
          height: '50px',
          textAlign: 'center',
          borderRadius: '30px',
        }}
        onClick={onClick}
      >
        <i className='bi bi-arrow-right arrow__slide'></i>
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const {className, style, onClick} = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          backgroundColor: 'rgba(0,0,0,0.4)',
          zIndex: 999,
          marginLeft: '90px',
          width: '50px',
          height: '50px',
          textAlign: 'center',
          borderRadius: '30px',
        }}
        onClick={onClick}
      >
        <i className='bi bi-arrow-left arrow__slide'></i>
      </div>
    );
  };

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className='slide'>
      <Carousel arrows {...settings} autoplay>
        <div class='item__slide'>
          <img src='https://cdn-www.vinid.net/5e401820-1400-x-520_-1.jpg' alt='aaa' className='img__silde' />
        </div>
        <div>
          <img src='https://cdn-www.vinid.net/13508773-1400x-520.jpg' alt='aaa' className='img__silde' />
        </div>
        <div>
          <img src='https://cdn-www.vinid.net/780a13b5-slider-web-pc-1.jpg' alt='aaa' className='img__silde' />
        </div>
      </Carousel>

      {/* <div className="slide__click">
        <div className="slide__click__left">

              wwww
        </div>

    </div> */}
    </div>
  );
};

export default Slide;
