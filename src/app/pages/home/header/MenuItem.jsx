import React from 'react'

const MenuItem = ({title,submenu}) => {
  return (
    <li className='item__menu'>
      
      <a href='#' class="link__menu">

          {title}
      </a>
{   submenu ? <>



      <div className="sub__menu">

        <ul className='list__submenu'>

          
          
          { submenu.map((item)=>(
              <li className='item__submenu'>
                  <a href="#" class="link__submenu">
                      {item}
                  </a>
              </li>
  ))}

    

          
        
       
         

        </ul>
      </div></>:<></> }   
    </li>
  )
}

export default MenuItem
