import React from 'react'

const WithItem = ({item:{linkImg,link,title,decription,voucher}}) => {
  return (
    <div className='item__with__carousel'>
            <a href='#' class='item__with__link'>
              <img src={linkImg} alt='' className='img__withcarousel' />
            </a>

            <div className='with__voucher'>
              <p>{voucher}</p>
              <img
                src={link}
                alt=''
                className='img__withcarousel'
              />
            </div>
            <a href={link} className='item__with__title'>
              <h1>{title}</h1>
            </a>

            <span>
              {decription}
            </span>
          </div>
  )
}

export default WithItem
