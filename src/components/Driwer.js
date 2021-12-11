//import CartItem from


function Driwer(props){
    return(
      <div className='overlay'>
      
        <div className='driwer'>

        <h2>Корзина <img onClick={props.onClose} className='remove-btn'src='./img/btn_remove.svg' alt='img' /></h2>

        <div  className='items'>
        {
          props.items.length > 0 ?

          <div>
          {props.items.map((obj)=>(
          <div className='cartItem d-flex align-center mb-20'>

            <img width={133} height={133} src={obj.img} alt='img'/>

            <div className='cartText mr-20'>
              <p className='md-5'>{obj.title}</p>
              <b>{obj.price} руб.</b>
            </div>

            <img onClick={()=>{props.onRemove(obj.id)}} className='remove-btn' src='./img/btn_remove.svg' alt='img'/>
          </div>
          ))}
          </div> 
        :
        <div className="cart_none">
          
          <img width={300}  src="https://cdn.the-village.ru/the-village.ru/post_image-image/SDbLTwiH2GdnM11LKNmcVQ.png" />

          <h3>Добавте в корзину товар</h3>
        </div>
        }
        </div>


        <div className='cartTotalBlock'>
          <ul>

            <li>
              <span>Итого:</span>
              <div></div>
              <b>12 999руб.</b>
            </li>

            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>

          </ul>

          <button className='greenButton'>Оформить заказ <img width={16} height={16} src='./img/rightArrows.svg' alt='img'/></button>
        </div>

      </div>
    </div>
    )
}

export default Driwer