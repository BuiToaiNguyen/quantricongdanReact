import React from 'react';

const FeaturePost = () => {
  return (
    <div className='feature__post__container'>
      <div className='row'>
        <div className='col-6'>
          <a href='#' className='feature_header__link'>
            <img className='feature__header__img' src='https://cdn-www.vinid.net/cca52d1a-banner-tin-tuc-web-1024x576.jpg' alt='' />
          </a>
        </div>
        <div className='col-6 box__feature__right'>
          <p style={{marginBottom: '12px'}}>
            <a href='#' className='feature__header__title'>
              TIN TỔNG HỢP
            </a>
          </p>
          <a href='#' className='feature__header__name'>
            QUAY SỐ TRÚNG VÀNG, RINH QUÀ TIỀN TỶ
          </a>
          <h2 className='feature__header__description'>
            Mừng xuân sang, VinID mang đến cho bạn cơ hội rinh quà tiền tỷ. Từ 12h00' ngày 30/12/2021 đến 12h00' ngày 06/02/2022, chỉ cần tham gia
            chương trình “Vòng quay may mắn” là bạn sẽ có cơ hội trúng quà. Bạn cần nhận được lượt quay để tham gia “Vòng quay may mắn” và phiếu rút
            thăm để tham gia…
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FeaturePost;
