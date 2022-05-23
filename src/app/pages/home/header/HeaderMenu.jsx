import React from 'react'
import MenuItem from './MenuItem'

const HeaderMenu = () => {
  return (
    <ul className='header__menu'>
        <MenuItem title={"Trang Chủ"} />
        <MenuItem title={"Giới Thiệu"} submenu={["Về VinID","Việc Làm"]}/>
        <MenuItem title={"Dịch Vụ"}  submenu={["Voucher","Ví Điện Tử"]}/>
        <MenuItem title={"Tuyển CTV"}/>
        <MenuItem title={"Tin Tức"}/>
        <MenuItem title={"Blog"}/>
        <MenuItem title={"Hỗ Trợ"} submenu={["Câu hỏi thường ghặp","Hướng dẫn"]}/>



      
    </ul>
  )
}

export default HeaderMenu
