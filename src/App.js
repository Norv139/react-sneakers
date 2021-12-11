import Card from "./components/Card/";
import Header from "./components/Header";
import Driwer from "./components/Driwer";
import React from "react";
import axios from "axios";



//  { "title": "", "price": , "img": ""},
/*const axios = require('axios').default;



  fetch('https://6191576f41928b0017690030.mockapi.io/items')
  .then((res)=>{
    return res.json();
  })
  .then(json=>{
    console.log(json);
    setItems(json)
  })
*/

function App() {


const [items, setItems] = React.useState([]);
const [cartItems, setCartItems] = React.useState([]);
const [searchValue, setSearchValue] = React.useState('');
const [cartOpened, setCartOpened] = React.useState(false);

React.useEffect(()=>{
  axios.get('https://6191576f41928b0017690030.mockapi.io/items')
  .then((res) => {setItems(res.data)} );
  axios.get('https://6191576f41928b0017690030.mockapi.io/cart')
  .then((res) => {setCartItems(res.data)} )
}, [])



const onAddToCart = (obj) => {

  setCartItems([...cartItems, obj])

  axios.post('https://6191576f41928b0017690030.mockapi.io/cart', obj)
}

const onRemoveItem = (id) => {
  console.log(id)
  setCartItems((prev) => prev.filter(items => items.id !== id))
  axios.delete('https://6191576f41928b0017690030.mockapi.io/cart/'+id)
}

const onChangeSearchInput = (event) =>{
  setSearchValue(event.target.value)
}

  return (
    <div className='wrapper clear'>

      {cartOpened && <Driwer items={cartItems} onClose={()=>setCartOpened(false)} onRemove={onRemoveItem} />}

      <Header onOpen={()=>setCartOpened(true)}/>
        <div className='content p-40'>
          <div className='md-40 d-flex align-center justify-between'>

            <h1>{(searchValue === '') ? "все кросовки" : 'Поиск: '+searchValue}</h1>

            <div className='search-block d-flex mb-30'>
              <img src='./img/find_icon.svg' alt='Search' />
              <input placeholder='Поиск...' value={searchValue} onChange={onChangeSearchInput}/>
              <button className="btn_clear" onClick={()=>{setSearchValue('')}}>X</button>
            </div>

          </div>
          <div className='sneakers d-flex flex-wrap'>
             {items
             .filter((items) => items.title.toLowerCase().includes(searchValue.toLocaleLowerCase()))
             .map( (items) => 
              (<Card
                key = {items.title}

                title={items.title}
                price={items.price} 
                img={items.img}

                onPlus={(obj)=>{onAddToCart(obj)}}
                onFavorite={()=>alert("onFavorititems")}
                />))}
          </div>
        </div>
    </div>
  );
}

export default App;
