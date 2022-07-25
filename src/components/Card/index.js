import React from "react"

function Cart(props){

  const {
    _key,
    title,
    price,
    img,
    onPlus
  } = props;

  const onClickPlus = () => {
    onPlus(
      {
        'id': _key,
        "title":  title,
        "price":  price,
        "img":  img
        
      })
  }

  return(
    <div className='card' onClick={()=>{}} key={_key}>
      <img width={133} height={133} src={ img} alt='img'/>

      <h5 className='title mb-40'>{ title}</h5>
      
      <div className='d-flex justify-between align-center'>
        
        <div className='d-flex flex-column'>
          <p>Цена:</p>
          <b>{ price} руб.</b>
        </div>

        <div className='plus' onClick={onClickPlus}>
          <img  width={11} height={11}
          src='./img/btn-plus-1.svg' alt='img'/>
          </div>

      </div>

    </div> 
  )
}

export default Cart;