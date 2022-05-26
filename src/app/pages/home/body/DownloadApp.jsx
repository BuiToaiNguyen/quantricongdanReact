import React from 'react';

const DownloadApp = () => {
  return (
    <div className='download__app__container'>
      <div className='row box__download__app'>
        <div className='col-7 pb-18'>
          <h1 className='download__app__titleheader'>Mọi tiện ích trong tầm tay</h1>
          <div className='line__intro' style={{height: '4px', borderRadius: '20px'}}></div>
          <ul className='download__app__listicon'>
            <li className='download__app__itemicon'>
              <div className='download__app__icon'>1</div>
              <span className='download__app__title'>Tích điểm với mỗi giao dịch</span>
            </li>
            <li className='download__app__itemicon'>
              <div className='download__app__icon'>2</div>
              <span className='download__app__title'>Đổi voucher ưu đãi đến 50% từ 1.000 đối tác</span>
            </li>
            <li className='download__app__itemicon'>
              <div className='download__app__icon'>3</div>
              <span className='download__app__title'>Vô vàn tính năng & tiện ích</span>
            </li>
            <li className='download__app__itemicon'>
              <div className='download__app__icon'>4</div>
              <span className='download__app__title'>Thanh toán tiện lợi với ví VinID Pay</span>
            </li>
          </ul>
          <div className="download__group__icon">
              <div className="download__group__title">Trải nghiệm thực tế ngay</div>
              <div className="download__app__inner">
                  <div className="download__app__qr">
                      <img src="https://cdn-www.vinid.net/04b486c5-96x96-qrcode_popup.png" alt="" />
                  </div>
                  <div className="download__app__mobile">
                      <a href="#" className='download__app__mobile-link'>
                          <img src="https://cdn-www.vinid.net/68a8244f-apple-store-icon.png" alt="" />

                      </a>
                      <a href="#" className='download__app__mobile-link'>
                          <img src="https://cdn-www.vinid.net/aa1778d8-google-play-thumb.png" alt="" />

                      </a>

                  </div>
              </div>
          </div>
        </div>
        <div className="col-5 download__group__icon-right">
            <img src="	https://cdn-www.vinid.net/b1e89636-mobile-app-home.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
