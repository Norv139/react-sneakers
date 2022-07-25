function Driwer(props){

  function summSneakers(){
    var arr = props.items.map(e=>e.price)
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum = sum + parseInt(arr[i]);
    }
    return sum
  }

    return(
      <div className='overlay'>
      
        <div className='driwer'>

        <h2>Корзина <img onClick={props.onClose} className='remove-btn'src='./img/btn_remove.svg' alt='img' /></h2>

        <div  className='items'>
        {
          props.items.length > 0 ?

          <div>
          {props.items.map((obj)=>(
          <div className='cartItem d-flex align-center mb-20' key={obj.id}>

            <img width={133} height={133} src={obj.img} alt='img'/>

            <div className='cartText mr-20'>
              <p className='md-5'>{obj.title}</p>
              <b>{obj.price} руб.</b>
            </div>

            <img onClick={()=>{props.onRemove(obj.title)}} className='remove-btn' src='./img/btn_remove.svg' alt='img'/>

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

          <button className='greenButton'>Оформить заказ <img width={16} height={16} src='./img/rightArrows.svg' alt='img'/></button>
        </div>

      </div>
    </div>
    )
}

export default Driwer