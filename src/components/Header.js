function Header(props){
    return(
        
        <header className='d-flex justify-between align-center p-40'>

            <div className='d-flex align-center'>
                <img width={40} height={40} src='img/logo192.png'></img>

                <div>
                    <h3 className='text-uppercase'>React sneakers</h3>
                    <p>Магазин лучших кросовок</p>
                </div>
            </div>

            <ul className='d-flex '>
            <li onClick={props.onOpen} className='mr-30 cu-p'> 
                <img width={18} height={18} src='img/shoppingCart.png'/>
                <span>1205 руб.</span>
            </li>

            <li>
                <img width={18} height={18} src='img/user.png' />
            </li>
            </ul>

      </header>

    )
}

export default Header;