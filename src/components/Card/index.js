import style from './Card.module.scss'
import React, {useState} from "react"

console.log(style);

function Cart(props){

  const [isAdded, serIsAdded] = useState(false)

  const onClickPlus = () => {
    serIsAdded(!isAdded)
  }

  return(
    <div className='card' onClick={props.onClickCard}>

      <div className='favorite'>
        <button className='button' onClick={props.onFavorite}>
          <img src='./img/icon_heart.svg' alt='Unkiked'/>
        </button>
      </div>

      <img width={133} height={133} src={props.imgUrl}/>
      <h5 className='mb-40'>{props.title}</h5>
      
      <div className='d-flex justify-between align-center'>
        
        <div className='d-flex flex-column'>
          <p>Цена:</p>
          <b>{props.price} руб.</b>
        </div>
        <div className={isAdded ? 'plus_check':'plus'}>
          
          <img  
          onClick={onClickPlus} width={11} height={11}
          src={isAdded ? './img/btn-check.svg':'./img/btn-plus-1.svg'}/>


          </div>
      </div>
    </div> 
  )
}

export default Cart;