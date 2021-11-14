import style from './Card.module.scss'

console.log(style);

function Cart(props){

  const onClickButton = () => {
    alert(props.title)
  }


  return(
    <div className='card'>

      <div className='favorite'>
        <button className='button'>
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
        <button className='button' onClick={props.priKlicks}> 
          <img width={11} height={11} src='./img/btn-plus-1.svg'/>
        </button>
      </div>
    </div> 
  )
}

export default Cart;