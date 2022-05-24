import React from 'react';
import '../style/section.css';

const WithCarousel = () => {
  return (
    <div className='section__carousel'>
      <div className='row'>
        <h1 style={{textAlign: 'center', fontSize: '32px'}}>Tiết kiệm hơn với VinID Voucher</h1>
        <div className='line__intro' style={{margin: '24px auto'}}></div>
        <h3  style={{textAlign: 'center', fontSize: '20px',fontWeight:"200"}}>Hãy chọn Voucher theo sở thích của bạn </h3>
      </div>
      <div className="row">
          <ul className='list__carousel'>


          </ul>
      </div>


    </div>
  );
};

export default WithCarousel;
