import React from 'react';
import '../style/header.css';
import HeaderMenu from './HeaderMenu';
const Header = () => {
  return (
    <div className='header__home'>
      <div className=' header__left'>
        <div className='logo'>
          <a href='#'>
            <img src='https://vinid.net/wp-content/themes/vinid-child/assets/img/vinid_logo_v1.png' alt='ảnh logo' style={{width: '100px'}} />
          </a>
        </div>

        <div className='header__search'>
          <div className='icon__search'>
            <i className='fas fa-search' style={{fontSize: '16px', fontWeight: 'bolder'}}></i>
          </div>
          <div className='search__input'>
            <input type='text' placeholder='Tìm kiếm' />
            <div className='search__open'>
              <div className='row'>
                <h1 style={{marginTop: '8px'}}>tìm kiếm nổi bật</h1>
              </div>
              <div className='row mt-4 box__item__search'>
                <div className='col-4  '>
                  <a className=' link__search ' href='#'>
                    {' '}
                    Voucher
                  </a>
                </div>
                <div className='col-4'>
                  <a className=' link__search ' href='#'>
                    {' '}
                    Giftcard
                  </a>
                </div>
                <div className='col-4'>
                  <a className=' link__search ' href='#'>
                    {' '}
                    Ve VinID
                  </a>
                </div>
                <div className='col-4'>
                  <a href='#' className=' link__search '>
                    {' '}
                    Vi Dien Tu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' header__right'>
        <HeaderMenu />

        <a className='btn btn__downApp' href='#'>
          Tải Ứng Dụng
          {/* <div className="box_downApp">

              <div className="row">
                  <span style={{textAlign:'left',color:"rgb(34 49 63)",fontWeight:"200",fontSize:"14px"}}>Dùng ứng dụng QR để quét mã, hoặc tải ứng dụng từ Google Play hoặc Apple Store</span>
              </div>
              <div className="row">
                  <div className="col-6">
                    <div className="row">
                        <div className="col-12">
                            <a href="#">

                                A
                            </a>

                        </div>
                    </div>  
                  </div>
                  <div className="col-6">
                        btr
                  </div>
              </div>
            </div> */}
        </a>
      </div>
    </div>
  );
};

export default Header;
