import React from 'react'

const GridSectionItem = ({item}) => {
  return (
    <div className="grid__item">
    <div className="grid__img">
        <img src={item.linkImg} alt="" />
    </div>
    <div className="grid__bottom">
        <img className="logo__grid" src={item.linkLogo}  alt='logo'/>

        <div className="grid__title">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
        </div>
    </div>


</div>
  )
}

export default GridSectionItem
