import React from 'react';

const ThreeCol = () => {
  return (
    <div className='three__col__section'>
      <div className='row'>
        <h1 style={{textAlign: 'center', fontSize: '32px'}}>Đăng ký đơn giản chỉ với 3 bước</h1>
        <div className='line__intro' style={{margin: '24px auto'}}></div>
      </div>
      <div className="row nav__three__col">
         <div className="col-4 three__col__box">
             <img src="https://vinid.net/wp-content/themes/vinid-child/assets/img/order-number/1.png" alt="" className='three__col__stt' />
            
            <div className="three__col__content">
                <img src="	https://cdn-www.vinid.net/ce7764a1-appstore-screenshot.png" alt="" className='three__col__img'/>

                <h1 className='three__col__title'>Tải ứng dụng</h1>
                <span className='three__col__decription'>Tìm kiếm từ khóa “VinID” trên kho ứng dụng hoặc nhấn vào đây để tải App:</span>
                <p>
                <a href="#">App Store</a>

                </p>
                <p>

                <a href="#">Google Play</a>
                </p>
            </div>

         </div>
   
         <div className="col-4 three__col__box">
             <img src="https://vinid.net/wp-content/themes/vinid-child/assets/img/order-number/2.png" alt="" style={{width:"37px",height:"55px"}} className='three__col__stt' />
            
            <div className="three__col__content">
                <img src="	https://cdn-www.vinid.net/1c3dbfbc-dk-5.png" alt="" className='three__col__img'/>

                <h1 className='three__col__title'>Đăng ký tài khoản</h1>
                <span className='three__col__decription'>Nhập SĐT và mã OTP để đăng ký tài khoản VinID Cài đặt mã PIN và nhập thông tin cá nhân</span>
                
            </div>

         </div>
         <div className="col-4 three__col__box">
             <img src="https://vinid.net/wp-content/themes/vinid-child/assets/img/order-number/3.png" alt="" style={{width:"37px",height:"55px"}} className='three__col__stt'/>
            
            <div className="three__col__content">
                <img src="https://cdn-www.vinid.net/272d68d1-dk-1-1.png" alt="" className='three__col__img'/>

                <h1 className='three__col__title'>Xác thực tài khoản</h1>
                <span className='three__col__decription'>Chọn "Xác thực tài khoản". Tải ảnh chụp rõ ràng, không mờ nhòe của 1 trong 3 loại giấy tờ tùy thân (Chứng minh nhân dân/ Căn cước công dân/ Hộ chiếu).</span>
          
            </div>

         </div>
      </div>
    </div>
  );
};

export default ThreeCol;
