import React from 'react';
import '../style/footer.css';
import {FacebookFilled} from '@ant-design/icons';
const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='row box__cskh'>
        <a className='col-4 card__cskh' href='#'>
          <div className='cskh__icon'>
            <img src='https://cdn-www.vinid.net/697a860d-ic_40function_web_hotline.png' alt='' />
          </div>
          <div className='cskh__content'>
            <p>Hotline</p>
            <h1>1900 6959</h1>
          </div>
        </a>
        <a className='col-4 card__cskh' href='#'>
          <div className='cskh__icon'>
            <img src='https://cdn-www.vinid.net/5e9f0bee-ic_40function_web_email.png' alt='' />
          </div>
          <div className='cskh__content'>
            <p>Email Hỗ Trợ</p>
            <h1>cskh@vinid.net</h1>
          </div>
        </a>
        <a className='col-4 card__cskh' href='#'>
          <div className='cskh__icon'>
            <img src='https://cdn-www.vinid.net/697a860d-ic_40function_web_hotline.png' alt='' />
          </div>
          <div className='cskh__content'>
            <p>Fanpage</p>
            <h1>fb.com/vinid.net</h1>
          </div>
        </a>
      </div>
      <div className='row'>
        <div className='col-3'>
          <p className='title__footer'>THÔNG TIN LIÊN HỆ</p>
          <ul className='list__item__lh'>
            <li className='item__lh'>
              <p>Tên công ty</p>
              <h1>CÔNG TY CỔ PHẦN ONE MOUNT CONSUMER</h1>
            </li>
            <li className='item__lh'>
              <p>Địa chỉ</p>
              <h1>Tầng 4, Tòa văn phòng T26, KĐT Times City, 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng,Thành phố Hà Nội, Việt Nam</h1>
            </li>
            <li className='item__lh'>
              <p>GCN ĐKDN số</p>
              <h1>0108372860</h1>
            </li>
            <li className='item__lh'>
              <p>Cấp ngày</p>
              <h1>23/07/2018</h1>
            </li>
            <li className='item__lh'>
              <p>Nơi cấp</p>
              <h1>Phòng đăng ký kinh doanh - Sở Kế hoạch & Đầu tư TP Hà Nội</h1>
            </li>
          </ul>
        </div>
        <div className='col-3'>
          <p className='title__footer'>CHĂM SÓC KHÁCH HÀNG</p>
          <ul className='list__item__cskh'>
            <li className='item__cskh'>
              <p>Thời gian hỗ trợ</p>
              <h1>8H - 22H Hàng ngày</h1>
            </li>
            <li className='item__cskh'>
              <p>Hotline KHTT</p>
              <h1>1900 6959</h1>
            </li>
            <li className='item__cskh'>
              <p>Hotline VIP</p>
              <h1>1800 6599</h1>
            </li>
            <li className='item__cskh'>
              <p>Hotline cho KH nước ngoài</p>
              <h1>[+84] 247 3087 999</h1>
            </li>
          </ul>
        </div>
        <div className='col-3'>
          <p className='title__footer'>CHÍNH SÁCH CHƯƠNG TRÌNH</p>
          <ul className='list__item__cs'>
            <li className='item__cs'>
              <a href='#'>Giới thiệu về VinID</a>
            </li>
            <li className='item__cs'>
              <a href='#'>Quy chế hoạt động</a>
            </li>
            <li className='item__cs'>
              <a href='#'>Chính sách chương trình</a>
            </li>
            <li className='item__cs'>
              <a href='#'>Điều khoản và Điều kiện</a>
            </li>
            <li className='item__cs'>
              <a href='#'>Bảo mật và chia sẻ thông tin</a>
            </li>
            <li className='item__cs'>
              <a href='#'>Điều khoản và điều kiện mua Vé</a>
            </li>
            <li className='item__cs'>
              <a href='#'>Điều khoản và điều kiện ví điện tử</a>
            </li>
            <li className='item__cs'>
              <a href='#'>Chính sách biểu phí ví điện tử</a>
            </li>
            <li className='item__cs'>
              <a href='#'>Điều kiện và điều khoản giao dịch</a>
            </li>
            <li className='item__cs'>
              <a href='#'>Tính năng mua sắm</a>
            </li>
            <li className='item__cs'>
              <a href='#'>Thỏa thuận sử dụng dịch vụ mạng xã hội</a>
            </li>
          </ul>
        </div>
        <div className='col-3'>
          <p className='title__footer'>BẤM LIKE NHẬN NGAY ƯU ĐÃI</p>

          <div className='footer__page'>
            <div className='footer__page__header'>
              <div className='footer__page__img'>
                <img
                  src='https://scontent.xx.fbcdn.net/v/t39.30808-1/277794769_1956067787933855_4793665392710370546_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=bYIr5hqGWO4AX-w-PG8&_nc_ht=scontent.xx&edm=AD5vYhEEAAAA&oh=00_AT8XXqlsq5YJM3p9B-kfciotVnIegjoLhy9hHU8XY03ggw&oe=62946EF1'
                  alt=''
                />
              </div>
              <div className='footer__page__title'>
                <div className='footer__title__top'>
                  <a href='#'>VinID</a>
                  <i className='bi bi-check-lg'></i>{' '}
                </div>
                <div className='footer__title__bot'>
                  <p>673K lượt thích</p>
                </div>
              </div>
            </div>
            <div className='footer__page__bot'>
              <a className='footer__page__bot__btn' href='#'>
                <FacebookFilled />
                <p>Thích Trang</p>
              </a>
            </div>
          </div>

          <div className='app__footer'>
            <h1 className='title__footer'>TẢI ỨNG DỤNG VINID</h1>
            <div className='nav__app__footer'>
              <img src='https://cdn-www.vinid.net/aa1778d8-google-play-thumb.png' alt='' className='nav__app__footer-img' />
              <img src='https://cdn-www.vinid.net/68a8244f-apple-store-icon.png' alt='' className='nav__app__footer-img' />
            </div>
          </div>
        </div>
      </div>
      <div className='line__footer'>
        <div className='footer__all__right'>
          <div className='row'>
            <div className='col-6 d-flex justify-content-between align-items-center'>
              <img src='https://vinid.net/wp-content/themes/vinid-child/assets/img/vinid_logo_v1.png' alt='' className='footer__all__right-logo' />
              <p className='app__allright__title'>Copyright © 2022 by Vingroup. All rights reserved.</p>
            </div>
            <div className='col-6'>
              <div className='row list__img__gov'>
                <div className='col-3 d-flex align-items-center'>
                  <a href='#' className='item__img__gov'>
                    <img src='https://cdn-www.vinid.net/2020/08/1e8306e9-logoccdv.png' alt='' className='img__gov' />
                  </a>
                </div>
                <div className='col-3 d-flex align-items-center'>
                  <a href='#' className='item__img__gov'>
                    <img src='https://vinid.net/wp-content/themes/vinid/assets/img/bct2.png' alt='' className='img__gov' />
                  </a>
                </div>
                <div className='col-3 d-flex align-items-center'>
                  <a href='#' className='item__img__gov'>
                    <img src='https://vinid.net/wp-content/themes/vinid/assets/img/bct1.png' alt='' className='img__gov' />
                  </a>
                </div>
                <div className='col-3 d-flex align-items-center'>
                  <a href='#' className='item__img__gov'>
                    <img src='https://vinid.net/wp-content/themes/vinid/assets/img/PCI_logo.gif' alt='' className='img__gov' style={{maxWidth:"68px"}} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
