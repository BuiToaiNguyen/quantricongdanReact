import React from 'react'

const FeatureSmallItem = ({linkImg,title,date}) => {
  return (
    <div className='col-6 feature__small__item'>
    <div className='row'>
      <div className='col-6'>
        <a href='#' className='featuresmall_header__link'>
          <img className='featuresmall__header__img' src={linkImg} alt='' />
        </a>
      </div>
      <div className='col-6 box__featuresmall__right'>
        <p style={{marginBottom: '12px'}}>
          <a href='#' className='featuresmall__header__title'>
            TIN TỔNG HỢP
          </a>
        </p>
        <a href='#' className='featuresmall__header__name'>
        {title}
        </a>
        <p className='featuresmall__header__description'>
            {date}
        </p>
      </div>
    </div>
  </div>
  )
}

export default FeatureSmallItem
