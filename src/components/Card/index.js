
import React from "react"

function Cart(props){

  const [isAdded, serIsAdded] = React.useState(false)

  const onClickPlus = () => {
    props.onPlus({
      "title": props.title,
      "price": props.price,
      "img": props.img
    })
  }

  

  return(
    <div className='card' onClick={props.onClickCard}>
      <div className='favorite'>
        <button className='button' onClick={props.onFavorite}>
          <img src='./img/icon_heart.svg' alt='Unkiked'/>
        </button>
      </div>

      <img width={133} height={133} src={props.img} alt='img'/>
      <h5 className='mb-40'>{props.title}</h5>
      
      <div className='d-flex justify-between align-center'>
        
        <div className='d-flex flex-column'>
          <p>Цена:</p>
          <b>{props.price} руб.</b>
        </div>

        <div className='plus'>
          <img onClick={onClickPlus} width={11} height={11}
          src='./img/btn-plus-1.svg' alt='img'/>
          </div>

      </div>

    </div> 
  )
}

export default Cart;