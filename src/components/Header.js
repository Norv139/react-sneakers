function Header(props){

    function summSneakers(){
        var arr = props.items.map(e=>e.price)
        var sum=0;
        for(var i=0;i<arr.length;i++){
            sum = sum + parseInt(arr[i]);
        }
        return sum
      }

    return(
        
        <header className='d-flex justify-between align-center p-40'>

            <div className='d-flex align-center'>
                <img width={40} height={40} src='img/logo192.png' alt='img'></img>

                <div>
                    <h3 className='text-uppercase'>React sneakers</h3>
                    <p>Магазин лучших кросовок</p>
                </div>
            </div>

            <ul className='d-flex '>
                <li onClick={props.onOpen} className='mr-30 cu-p'> 
                    <img width={18} height={18} src='img/shoppingCart.png' alt='img'/>
                    <span>{summSneakers()} руб.</span>
                </li>
                
                <li>
                    <img width={18} height={18} src='img/user.png' alt='img'/>
                </li>
            </ul>

      </header>

    )
}

export default Header;