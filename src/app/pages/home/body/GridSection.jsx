import React from 'react';
import '../style/section.css';
import GridSectionItem from './GridSectionItem';
const GridSection = () => {
  const gridSection = [
    {
      linkImg: '	https://cdn-www.vinid.net/8e80e13c-image-233-2.png',
      linkLogo: 'https://cdn-www.vinid.net/ed75bc1c-diemvinid-new.png',
      title: 'Tích và tiêu điểm',
      description: ' Dễ dàng tích và tiêu điểm tại hệ thống VinMart, VinMart+ và nhiều đối tác của VinID',
    },
    {
      linkImg: 'https://cdn-www.vinid.net/2eea7656-image-244-1.png',
      linkLogo: 'https://cdn-www.vinid.net/69490176-vidientu-new.png',
      title: 'Ví điện tử',
      description: ' Miễn phí chuyển/ nhận tiền mọi lúc mọi nơi, an toàn bảo mật đạt chuẩn quốc tế.',
    },
    {
      linkImg: '	https://cdn-www.vinid.net/9ed4213f-image-235-1.png',
      linkLogo: 'https://cdn-www.vinid.net/79ae887d-muasam-new.png',
      title: 'Mua sắm trực tuyến',
      description: '  Đi chợ, mua sắm, đặt đồ ăn uống online và nhận hàng tiện lợi ngay tại nhà.',
    },
    {
      linkImg: '	https://cdn-www.vinid.net/3df44bf2-image-236-1.png',
      linkLogo: 'https://cdn-www.vinid.net/43f90829-voucher-new.png',
      title: 'Voucher - Đổi thưởng',
      description: ' Hàng ngàn voucher ăn uống, mua sắm, giải trí,… miễn phí hoặc đổi bằng điểm VinID.',
    },
    {
      linkImg: 'https://cdn-www.vinid.net/4f2e01d6-image-241-1.png',
      linkLogo: 'https://cdn-www.vinid.net/21fb7033-hoadon-new.png',
      title: 'Thanh toán hóa đơn',
      description: '  Không sợ trễ hạn, thanh toán hoá đơn điện nước, internet ngay tại nhà với tính năng thanh toán tự động.',
    },
    {
      linkImg: '	https://cdn-www.vinid.net/4004ebeb-image-238-1.png',
      linkLogo: 'https://cdn-www.vinid.net/82498db8-ticket-new.png',
      title: 'Giải trí',
      description: '   Hàng loạt sự kiện giải trí, âm nhạc và thể thao độc quyển. Mua vé trên app khỏi lo xếp hàng.',
    },
    {
      linkImg: 'https://cdn-www.vinid.net/061ef56a-image-240-1.png',
      linkLogo: 'https://cdn-www.vinid.net/c9c5e54f-napdienthoai-new.png',
      title: 'Thanh toán điện thoại',
      description: ' Cài đặt tính năng nạp tiền điện thoại tự động để không bỏ lỡ khuyến mãi nhà mạng.',
    },
    {
      linkImg: 'https://cdn-www.vinid.net/750be143-image-234-1.png',
      linkLogo: 'https://cdn-www.vinid.net/7bfb025d-condong-new.png',
      title: 'Hoạt động cộng đồng',
      description: ' Chung tay vì cộng đồng với nhiều hoạt động thiết thực và đa dạng hình thức quyên góp.',
    },
  ];
  return (
    <div className='grid__section'>
      <div className='row'>
        <h1 style={{textAlign: 'center', fontSize: '32px'}}>Vô vàn tiện ích & dịch vụ</h1>
        <div className='line__intro' style={{margin: '24px auto'}}></div>
      </div>

      <div className='container__gridsection'>
        <div className='box__gridsection'>
          {gridSection.map((item) => (
            <GridSectionItem item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridSection;
