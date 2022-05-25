import React from 'react';
import HomeStaticDown from './HomeStaticDown';
import HomeStaticItem from './HomeStaticItem';

const HomeStatic = () => {
  const home_static = [
    {
      link_img: 'https://cdn-www.vinid.net/2a4387ed-ic_40function_loyalty_badge.png',
      title1: '11.000.000+',
      title2: 'khách hàng tin dùng',
    },
    {
      link_img: 'https://cdn-www.vinid.net/0ce9ff87-ic_40function_b2b_store.png',
      title1: '100.000+',
      title2: 'điểm thanh toán',
    },
    {
      link_img: '	https://cdn-www.vinid.net/a9323537-ic_40function_platform_addvinidpoint.png',
      title1: 'Tích & tiêu điểm',
      title2: 'dễ dàng',
    },
    {
      link_img: 'https://cdn-www.vinid.net/85fccfd4-ic_40function_pay_transfer.png',
      title1: 'Chuyển tiền',
      title2: 'miễn phí',
    },
    {
      link_img: '	https://cdn-www.vinid.net/9116ce6f-ic_40function_b2b_promotion.png',
      title1: 'Hàng ngàn',
      title2: 'voucher miễn phí',
    },
  ];
  const homeStaticDown = [
    'Cung cấp nhiều tiện ích cho cuộc sống hằng ngày của người Việt.',
    'Thanh toán không tiền mặt nhanh chóng, bảo mật tại nhiều điểm thanh toán trong cả nước.',
    'Tích và tiêu điểm VinID khi đi siêu thị, bệnh viện, du lịch, mua sắm tại các đối tác của VinID.',
    'Chuyển và nhận tiền miễn phí mọi lúc mọi nơi.',
    'Đáp ứng mọi nhu cầu ăn uống, mua sắm, giải trí của khách hàng.',
  ];
  return (
    <div className='home__static__section'>
      {/*  */}
      <div className='home__static__header'>
        {home_static.map((item,index) => (
          <HomeStaticItem link_img={item.link_img} title1={item.title1} title2={item.title2} key={index}/>
        ))}
      </div>
      <div className='home__static__down'>
        {homeStaticDown.map((item) => (
          <HomeStaticDown title={item} />
        ))}
      </div>
    </div>
  );
};

export default HomeStatic;
