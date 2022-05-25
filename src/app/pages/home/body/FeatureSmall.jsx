import React from 'react';
import FeatureSmallItem from './FeatureSmallItem';

const FeatureSmall = () => {
  const featureSmall = [
    {
      linkImg: '	https://cdn-www.vinid.net/054a3a2b-kv-1920x1080-1-219x123.jpg',
      title: 'CƠ HỘI HOÀN NGAY 50% KHI DÙNG MASTERCARD CONTACTLESS',
      date: '29/12/2021',
    },
    {
      linkImg: 'https://cdn-www.vinid.net/9464ada5-tin-tuc-web-1-219x123.jpg  ',
      title: 'Vé VinWonders và Vinpearl Safari Phú Quốc đã mở bán…',
      date: '20/12/2021',
    },
    {
      linkImg: '	https://cdn-www.vinid.net/b61d9819-news-web-1-219x123.jpg',
      title: 'CHƯƠNG TRÌNH ƯU ĐÃI TẶNG BẠN MỚI 666,000Đ',
      date: '10/12/2021',
    },
    {
      linkImg: 'https://cdn-www.vinid.net/7b4b6f76-cover-group-236x123.jpg            ',
      title: 'LÊN VINID MUA HÀNG GIÁ SỐC - MIỄN PHÍ GIAO…',
      date: '29/12/2021',
    },
  ];
  return (
      <>
     
    <div className='feature__small__container'>
      <div className='row'>
        {featureSmall.map((item) => (
          <FeatureSmallItem linkImg={item.linkImg} title={item.title} date={item.date} />
        ))}
        
      </div>
    </div> 
    <a className='btn__more m-auto mt-2' href="#">
          Khám Phá Thêm
          <i className='bi bi-arrow-right arrow__more'></i>
        </a>
    </>
  );
};

export default FeatureSmall;
