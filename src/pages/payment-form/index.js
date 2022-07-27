import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import { dellAllItems } from "../../services/redusers/card"

function PayForm(){
    const dispach = useDispatch()
    const itemsList = useSelector(store=>store.card.cartItems)
    const userDataCards = useSelector(store=>store.user.userDataCards)
    

    const navigate = useNavigate()

    const initState = {
        visa: {opacity: 0.5},
        mastercard: {opacity: 0.5},
        amex: {opacity: 0.5},
        discover: {opacity: 0.5},
    }
    const [selectCard, setSelectCard] = useState(initState)

    const initDataCard = { 
        name: '',
        number: '',
        data: '',
        security:'',
        zipCode:''
    }
    
    const [form_, setValue] = useState (initDataCard)


    const onChange=(e)=>{
        e.preventDefault()
        
        setValue({ ...form_, [e.target.id]: e.target.value });
        console.log(form_[e.target.id], e.target.id)
    }

    const onSubmit = (e)=>{ 
        e.preventDefault(); 

        if(form_.name.length === 0){
            document.getElementById('name').style='border: 1px solid rgb(204, 37, 37);'
        } else { document.getElementById('name').style='border: 1px solid #ccc;' }

        if(form_.number.length === 0){
            document.getElementById('number').style='border: 1px solid rgb(204, 37, 37);'
        } else { document.getElementById('number').style='border: 1px solid #ccc;' }
        
        if(form_.data.length === 0){
            document.getElementById('data').style='border: 1px solid rgb(204, 37, 37);'
        } else { document.getElementById('data').style='border: 1px solid #ccc;' }

        if(form_.security.length === 0){
            document.getElementById('security').style='border: 1px solid rgb(204, 37, 37);'
        } else { document.getElementById('security').style='border: 1px solid #ccc;' }

        if(form_.zipCode.length === 0){
            document.getElementById('zipCode').style='border: 1px solid rgb(204, 37, 37);'
        } else { document.getElementById('zipCode').style='border: 1px solid #ccc;' }

        if(form_.name.length !== 0 &
        form_.number.length !== 0 &
        form_.data.length !== 0 &
        form_.security.length !== 0 &
        form_.zipCode.length !== 0){
            
            dispach(dellAllItems())
            navigate('/')
        }
        
    }

    function summSneakers(){
        var arr = itemsList.map(e=>e.price)
        var sum=0;
        for(var i=0;i<arr.length;i++){
            sum = sum + parseInt(arr[i]);
        }
        return sum
      }

    return (
        <main className="main_form">

            <div className="payment_form mt-20 mb-20">
            
                <h1>Pay Invoice</h1>
                <div className="card_row">
                    <span 
                        className="visa" 
                        style={selectCard.visa}
                        onClick={()=>{setSelectCard({...initState, visa:{opacity: 1}})}}
                    ></span>
                    <span 
                        className="mastercard" 
                        style={selectCard.mastercard}
                        onClick={()=>{setSelectCard({...initState, mastercard:{opacity: 1}})}} 
                    ></span>
                    <span 
                        className="amex" 
                        style={selectCard.amex}
                        onClick={()=>{setSelectCard({...initState, amex:{opacity: 1}})}} 
                    ></span>
                    <span 
                        className="discover" 
                        style={selectCard.discover}
                        onClick={()=>{setSelectCard({...initState, discover:{opacity: 1}})}}
                    ></span>
                </div>
                
                <form className="form">
                    <div className="form__item">

                        <label htmlFor="PaymentAmount" className="mr-20"> Payment amount</label>
                            <p>{summSneakers()} руб</p>
                    </div>
                    <div className="form__item">
                        <label or="name">Name on card</label>
                        <input id="name" onChange={onChange} value={form_.name} type="text" maxLength="255"></input>
                    </div>
                    <div className="form__item">
                        <label htmlFor="number">Card number</label>
                        <input id="number" onChange={onChange} value={form_.number} type="text"></input>
                    </div>
                    <div className="form__item">
                        <label htmlFor="data">Expiry date</label>
                        <input id="data" onChange={onChange} value={form_.data} type="text" placeholder="MM / YY" maxLength="7"></input>
                    </div>
                    <div className="form__item">
                        <label htmlFor="security">Security code</label>
                        <div>
                            <input id="security" onChange={onChange} value={form_.security} type="text" maxLength="3" ></input>
                            <i id="cvc"></i>
                        </div>
                        <div >
                            <div className="amex-cvc-preview"></div>
                            <div className="visa-mc-dis-cvc-preview"></div>
                        </div>
                    </div>
                    <div className="form__item">
                        <label htmlFor="zipCode">ZIP/Postal code</label>
                        <div>
                            <input id="zipCode" onChange={onChange} value={form_.zipCode} className="form-control" type="text" maxLength="10"></input>
                            <a tabIndex="0" role="button" data-toggle="popover" data-trigger="focus" data-placement="left" data-content="Enter the ZIP/Postal code for your credit card billing address.">
                                <i></i>
                            </a>
                        </div>
                    </div>
                    <button id="PayButton" className="submit__button" type="submit" onClick={onSubmit}>
                        <span></span>
                        <span>Pay {summSneakers()} руб</span>
                    </button>
                </form>
            <div className="mt-20 mb-20">
                {
                    userDataCards.map(item=>{ return(
                        <button onClick={()=>{setValue(item)}} className='mr-5'>
                            {item.name === ''?('Новая'):(`Карта: ${item.name}`) }
                        </button>)
                    })
                }
            </div>
            </div>
        </main>
    )
}

export default PayForm