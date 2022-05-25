import React from 'react';

const HomeStaticItem = ({link_img, title1, title2}) => {
  return (
    <div className='home__static__item'>
      <div className='home__static__logo'>
        <img src={link_img} alt='sss' />
      </div>
      <div className='home__static__title'>
        <p>{title1}</p>
        <p>{title2}</p>
      </div>
    </div>
  );
};

export default HomeStaticItem;
