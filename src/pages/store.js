import Card from "../components/card";
import ShoppingCart from "./shopping-сart";
import React, {useEffect, useState} from "react";
import axios from "axios";
//import itemsJ from './items.json'

import { addItems } from '../services/redusers/card';
import { addAllItems } from '../services/redusers/components'

import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";



function Store() {
  const items = useSelector(store=>store.components.listItems)

  const [searchValue, setSearchValue] = useState('');
  
  const navigate = useNavigate()
  const dispach = useDispatch()

  useEffect(()=>{
    console.log(items.length)
    if (items.length < 1){
      axios.get('https://6191576f41928b0017690030.mockapi.io/items')
      .then(
        (res) => 
        dispach(addAllItems(res.data))
      );
    }
  }, [dispach])

  const onAddToCart = (object) => {
    dispach(
      addItems(object)
      )
  }

  const onChangeSearchInput = (event) =>{
    setSearchValue(event.target.value)
  }

  return (

    <main className='content p-40'>
      <div className='md-40 d-flex justify-between'>

        <h1 className='mr-20'>{(searchValue === '') ? "все кросcовки" : 'Поиск: '+searchValue}</h1>

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
              key = {uuidv4()}

              title={items.title}
              price={items.price} 
              img={items.img}

              onPlus={onAddToCart}
              />)
            )
          }
      </div>
    </main>

  );
}

export default Store;
