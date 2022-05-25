import React, {useState} from 'react';
import '../style/section.css';
import WithCarouselItem from './WithCarouselItem';
import WithItem from './WithItem';

const WithCarousel = () => {
  const key = ['Ẩm thực', 'Dịch vụ', 'Hot', 'Thời trang', 'Khác', 'Làm đẹp'];
  const allData = [
    [
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 10k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 20k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K  ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 30k',
        link: '#',
        title: ' [TP.HCM] Giảm 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 40k',
        link: '#',
        title: '  Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription: ' Chi  giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 60k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 70k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 80k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 90k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
    ],
    [
      {
        linkImg: 'https://cdn-www.vinid.net/713c859b-oedo-web-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/713c859b-oedo-web-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/713c859b-oedo-web-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/713c859b-oedo-web-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
    ],
    [
      {
        linkImg: 'https://cdn-www.vinid.net/e67ef6b6-untitled-1-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e67ef6b6-untitled-1-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e67ef6b6-untitled-1-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e67ef6b6-untitled-1-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e67ef6b6-untitled-1-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
    ],
    [
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
    ],
    [
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
    ],
    [
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
      {
        linkImg: 'https://cdn-www.vinid.net/e34bdbbe-sushigarden-1024x576.jpg',
        voucher: 'giảm 50k',
        link: '#',
        title: ' [TP.HCM] Giảm 50K cho hóa đơn từ 250K tại Oedo Alley ',
        decription:
          ' Chi tiết chương trình Voucher giảm 50,000đ áp dụng cho hóa đơn từ 250,000đ tại Oedo Alley - Japanese Food Village. Thời gian áp dụng: Từ 15/02/2022…',
      },
    ],
  ];
  const [dataModel, setDataModel] = useState(allData[0]);
  const [translateX, setTranslateX] = useState(0);
  const handleSetDataModel = (id) => {
    setDataModel(allData[id]);
  };
  const handleLeftClick = () => {
    translateX == -1945 ? setTranslateX(0) : setTranslateX((state) => state - 389);
  };
  const handleRightClick = () => {
    translateX == 0 ? setTranslateX(-1945) : setTranslateX((state) => state + 389);
  };
  console.log(translateX);

  return (
    <div className='section__carousel'>
      <div className='row'>
        <h1 style={{textAlign: 'center', fontSize: '32px'}}>Tiết kiệm hơn với VinID Voucher</h1>
        <div className='line__intro' style={{margin: '24px auto'}}></div>
        <h3 style={{textAlign: 'center', fontSize: '20px', fontWeight: '200'}}>Hãy chọn Voucher theo sở thích của bạn </h3>
      </div>
      <div className='row'>
        <ul className='list__btn__carousel'>
          {key.map((item, index) => (
            <WithCarouselItem item={item} index={index} handleSetDataModel={handleSetDataModel} />
          ))}
        </ul>
      </div>
      <div className='box__listitem__carouse'>
        <div className='box__item__carousel' style={{transform: `translateX(${translateX}px)`, transition: 'all 1s ease 0s'}}>
          {dataModel.map((item, index) => (
            <WithItem item={item} key={index} />
          ))}
        </div>
        <div className='with__click__left' onClick={handleRightClick}>
          <i class='bi bi-arrow-left arrow__withcarousel'></i>
        </div>
        <div className='with__click__right' onClick={handleLeftClick}>
          <i class='bi bi-arrow-right arrow__withcarousel'></i>
        </div>
      </div>
      <div className="row">
      <a className='btn__more m-auto mt-12' href="#">
          Khám Phá Thêm
          <i className='bi bi-arrow-right arrow__more'></i>
        </a>
      </div>
    </div>
  );
};

export default WithCarousel;
