import React from "react"
import { v4 as uuidv4 } from 'uuid';
function Card(props){

  const {
    //_key,
    title,
    price,
    img,
    onPlus
  } = props;

  const onClickPlus = () => {
    onPlus(
      {
        'id': uuidv4(),
        "title":  title,
        "price":  price,
        "img":  img
        
      })
  }

  return(
    <div className='card' onClick={()=>{}}>
      <img width={133} height={133} src={ img} alt='img'/>

      <h4 className='title mb-40'>{ title}</h4>
      
      <div className='d-flex justify-between align-center price'>
        
        <div className='d-flex flex-column '>
          <p>Цена:</p>
          <b>{ price } руб.</b>
        </div>

        <div className='plus' onClick={onClickPlus}>
          <img  width={11} height={11}
          src='./img/btn-plus-1.svg' alt='img'/>
        </div>

      </div>

    </div> 
  )
}

export default Card;