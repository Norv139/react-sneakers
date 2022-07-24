
import React from "react"

function Cart(props){
  const {
    key,
    title,
    price,
    img,
    onPlus,
    onFavorite,
  } = props;

  const [isAdded, serIsAdded] = React.useState(false)

  const onClickPlus = () => {
     onPlus({
      "title":  title,
      "price":  price,
      "img":  img
    })
  }

  

  return(
    <div className='card' onClick={()=>{}}>
      <div className='favorite'>

      </div>

      <img width={133} height={133} src={ img} alt='img'/>
      <h5 className='mb-40'>{ title}</h5>
      
      <div className='d-flex justify-between align-center'>
        
        <div className='d-flex flex-column'>
          <p>Цена:</p>
          <b>{ price} руб.</b>
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