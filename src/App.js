import Card from "./components/Card/";
import Header from "./components/Header";
import Driwer from "./components/Driwer";
import React, {useEffect, useState} from "react";
import axios from "axios";
//import itemsJ from './items.json'

import { addItems, dellItems, closeOrOpenOrder } from './services/redusers/card';
import { addAllItems } from './services/redusers/components'

import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";


function App() {

  const isOpenCard = useSelector(store=>store.card.isOpenCard)
  const itemsList = useSelector(store=>store.card.cartItems)
  const items = useSelector(store=>store.components.listItems)

  const [searchValue, setSearchValue] = useState('');
  

  const dispach = useDispatch()

  useEffect(()=>{
    axios.get('https://6191576f41928b0017690030.mockapi.io/items')
    .then(
      (res) => 
      dispach(addAllItems(res.data ))
    );
  }, [dispach])

  const onAddToCart = (obj) => {
    dispach(
      addItems(obj)
      )
  }

  const onRemoveItem = (title) => {
    dispach(dellItems(title))
  }

  const onChangeSearchInput = (event) =>{
    setSearchValue(event.target.value)
  }

  return (
    <div className='wrapper clear'>

      {isOpenCard && <Driwer items={itemsList} onClose={()=>{dispach(closeOrOpenOrder())}} onRemove={onRemoveItem} />}

      <Header items={itemsList} onOpen={()=>{dispach(closeOrOpenOrder())}}/>
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
             {items.filter(
              item => 
                item.title.toLowerCase().includes( searchValue.toLocaleLowerCase()))
                .map( (items) => 
                (<Card
                  _key = {uuidv4()}

                  title={items.title}
                  price={items.price} 
                  img={items.img}

                  onPlus={onAddToCart}
                  />)
                )
              }
          </div>
        </div>
    </div>
  );
}

export default App;
