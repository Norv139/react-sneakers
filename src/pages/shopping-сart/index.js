import ReactDOM from "react-dom"

import { useDispatch, useSelector } from "react-redux"
import { closeOrOpenOrder } from "../../services/redusers/card"
import { dellItems } from "../../services/redusers/card"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';

function ShoppingCart(){
  const isOpenCard = useSelector(store=>store.card.isOpenCard)
  const itemsList = useSelector(store=>store.card.cartItems)

  const navigate = useNavigate()
  const dispach = useDispatch()

  const closeCart = ()=>{
    dispach(closeOrOpenOrder())
    //navigate('/cart')
  }
  const goPay = ()=>{
    
    if (itemsList.length >0){
      closeCart(); 
      navigate('/formpay')
    }
  }

  useEffect(()=>{
    if (isOpenCard ){
    document.body.style.overflow = 'hidden'}
    else{ document.body.style.overflow = null }
  })

  const onRemoveItem = (title) => {
    dispach(dellItems(title))
  }

  function summSneakers(){
    var arr = itemsList.map(e=>e.price)
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum = sum + parseInt(arr[i]);
    }
    return sum
  }

    return ReactDOM.createPortal(
      <>{isOpenCard && 
        <div className='overlay'>
        
        <div className='driwer'>

        <h2>Корзина <img onClick={closeCart} className='remove-btn'src='./img/btn_remove.svg' alt='img' /></h2>

        <div  className='items'>
        {
          itemsList.length > 0 ?

          <div>
          {itemsList.map((obj)=>(
          <div className='cartItem d-flex align-center mb-20' key={uuidv4()}>

            <img width={133} height={133} src={obj.img} alt='img'/>

            <div className='cartText mr-20'>
              <p className='md-5'>{obj.title}</p>
              <b>{obj.price} руб.</b>
            </div>

            <img onClick={()=>{onRemoveItem(obj.title)}} className='remove-btn' src='./img/btn_remove.svg' alt='img'/>

          </div>
          ))}
          </div> 
        :
        <div className="cart_none">
          
          <img width={300} alt='КОТ В КОРОБКЕ' src="https://cdn.the-village.ru/the-village.ru/post_image-image/SDbLTwiH2GdnM11LKNmcVQ.png" />

          <h3>Добавте в корзину товар</h3>
        </div>
        }
        </div>


        <div className='cartTotalBlock'>
          <ul>

            <li>
              <span>Итого:</span>
              <div></div>
              <b>{summSneakers()} руб.</b>
            </li>
          </ul>

          <button className='greenButton' onClick={()=>{goPay()}}>
            Оформить заказ 
            <img width={16} height={16} src='./img/rightArrows.svg' alt='img'/>
          </button>
        </div>

        </div>
      </div>
      }</>
      ,
      document.getElementById('portal') 
    )
}

export default ShoppingCart