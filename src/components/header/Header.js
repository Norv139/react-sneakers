//import imgLogo from './img/logo192.png'
import { useSelector, useDispatch } from "react-redux";
import { closeOrOpenOrder } from "../../services/redusers/card";
import { guestMode } from "../../services/action/guestMode";

import {
    useNavigate
  } from "react-router-dom";

function Header(){
    const navigate = useNavigate()

    const itemsList = useSelector(store=>store.card.cartItems)
    const dispatch = useDispatch()

    const openCart = ()=>{
        dispatch(closeOrOpenOrder())
    }

    const openProfile = ()=>{
        navigate('/profile')
    }

    function summSneakers(){
        var arr = itemsList.map(e=>e.price)
        var sum=0;
        for(var i=0;i<arr.length;i++){
            sum = sum + parseInt(arr[i]);
        }
        return sum
      }

    return(
        
        <header className='d-flex justify-between align-center p-40'>

            <div className='d-flex align-center'>
                <img width={40} height={40} src={'./img/logo192.png'} alt='img'></img>

                <div onClick={()=>{navigate('/')}} className='cu-p'>
                    <h3 className='text-uppercase'>React sneakers</h3>
                    <p>Магазин лучших кросовок</p>
                </div>
            </div>

        

            <ul className='d-flex '>
                <li onClick={openCart} className='mr-30 cu-p'> 
                    <img width={18} height={18} src='img/shoppingCart.png' alt='img'/>
                    <span>{summSneakers()} руб.</span>
                </li>
                
                <li className='cu-p'>
                    <img width={18} height={18} src='img/user.png' alt='img' onClick={openProfile} />
                </li>
                <li>
                </li>
            </ul>
            

      </header>

    )
}

export default Header;