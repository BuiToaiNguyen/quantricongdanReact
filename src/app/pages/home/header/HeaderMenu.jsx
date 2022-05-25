import React, { useState } from 'react'
import MenuItem from './MenuItem'

const HeaderMenu = () => {
  const [active,setActive]= useState(1)
  return (
    <ul className='header__menu'>
        <MenuItem title={"Trang Chủ"} keykey={1} setActive={setActive} active={active} />
        <MenuItem title={"Giới Thiệu"} submenu={["Về VinID","Việc Làm"]}  keykey={2} setActive={setActive}  active={active}/>
        <MenuItem title={"Dịch Vụ"}  submenu={["Voucher","Ví Điện Tử"]} keykey={3} setActive={setActive}  active={active}/>
        <MenuItem title={"Tuyển CTV"} keykey={4} setActive={setActive}  active={active}/>
        <MenuItem title={"Tin Tức"} keykey={5} setActive={setActive}  active={active}/>
        <MenuItem title={"Blog"} keykey={6} setActive={setActive}  active={active}/>
        <MenuItem title={"Hỗ Trợ"} submenu={["Câu hỏi thường ghặp","Hướng dẫn"]} keykey={7} setActive={setActive}  active={active}/>



      
    </ul>
  )
}

export default HeaderMenu
