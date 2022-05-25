import React from 'react';

const MenuItem = ({title, submenu, setActive, keykey, active}) => {
  return (
    <>
      {submenu ? (
        <li className='item__menu' onClick={() => setActive(keykey)}>
          <a href='#' className='link__menu'>
            {title}
            <i className='bi bi-caret-down-fill icon__downmenu'></i>
          </a>
          {active == keykey && <div className='line__menu'></div>}

          <div className='sub__menu'>
            <ul className='list__submenu'>
              {submenu.map((item) => (
                <li className='item__submenu'>
                  <a href='#' className='link__submenu'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ) : (
        <>
          {' '}
          <li className='item__menu' onClick={() => setActive(keykey)}>
            <a href='#' className='link__menu'>
              {title}
            </a>
            {active == keykey && <div className='line__menu'></div>}
          </li>
        </>
      )}{' '}
    </>
  );
};

export default MenuItem;
