//import CartItem from


function Driwer(props){
    return(
      <div className='overlay'>
      
        <div className='driwer'>

        <h2>Корзина <img onClick={props.onClose} className='remove-btn'src='./img/btn_remove.svg' /></h2>

        <div className='items'>
          
          <div className='cartItem d-flex align-center mb-20'>

            <div style={{backgroundImage: 'url(https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/380697/02/sv01/fnd/RUS/w/1000/h/1000/fmt/png)' }} className='cartItemImg'></div>

            <div className='cartText mr-20'>
              <p className='md-5'>Test text</p>
              <b>12 999 руб.</b>
            </div>

            <img className='remove-btn'src='./img/btn_remove.svg' />
          </div>

          <div className='cartItem d-flex align-center mb-20'>

            <div style={{backgroundImage: 'url(https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/380697/02/sv01/fnd/RUS/w/1000/h/1000/fmt/png)' }} className='cartItemImg'></div>

            <div className='cartText mr-20'>
              <p className='md-5'>Test text</p>
              <b>12 999 руб.</b>
            </div>

            <img className='remove-btn'src='./img/btn_remove.svg' />
          </div>

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

          <button className='greenButton'>Оформить заказ <img width={16} height={16} src='./img/rightArrows.svg' /></button>
        </div>

      </div>
    </div>
    )
}

export default Driwer