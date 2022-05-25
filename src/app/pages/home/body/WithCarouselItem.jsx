import React from 'react'

const WithCarouselItem = ({item,index,handleSetDataModel}) => {
  return (
    <li className='item__btn__carousel' onClick={()=>handleSetDataModel(index) }>
        <div className="btn__carousel">
            {item}
        </div>
      
    </li>
  )
}

export default WithCarouselItem
