import React from 'react';

const IntroTwo = () => {
  return (
    <div className='row container__introtwo '>
      <div className=' col-6 intro__two__left'>
        <h1>Siêu ứng dụng thông minh, cho người Việt</h1>

        <div className='line__intro'></div>
        <h2>
          VinID là siêu ứng dụng thông minh, giải quyết mọi nhu cầu hàng ngày của người Việt, giúp cuộc sống của họ trở nên tiện lợi và tiết kiệm hơn.
        </h2>
        <a className='btn__more'>
          Tìm Hiểu Thêm
          <i className='bi bi-arrow-right arrow__more'></i>
        </a>
      </div>
      <div className='col-6'>
        <div className='intro__two__img'>
          <img src='https://cdn-www.vinid.net/9b014218-artboard-1-2-1.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default IntroTwo;
