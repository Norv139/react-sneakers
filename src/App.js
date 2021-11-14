import Card from "./components/Card/";
import Header from "./components/Header";
import Driwer from "./components/Driwer";
import React from "react";
import axios from "axios";



//  { "title": "", "price": , "img": ""},
/*const axios = require('axios').default;

axios.get('https://6191576f41928b0017690030.mockapi.io/items')
  .then(function (response) {
    // handle success
    console.log(response.data);
    setItems(response.data)
  })
*/



function App() {


const [items, setItems] = React.useState([]);
const [cartOpened, setCartOpened] = React.useState(false)
React.useEffect(()=>{
  fetch('https://6191576f41928b0017690030.mockapi.io/items')
  .then((res)=>{
    return res.json();
  })
  .then(json=>{
    console.log(json);
    setItems(json)
  })
}, [])


  return (
    <div className='wrapper clear'>
      {cartOpened && <Driwer onClose={()=>setCartOpened(false)} />}
      <Header onOpen={()=>setCartOpened(true)}/>
        <div className='content p-40'>
          <div className='md-40 d-flex align-center justify-between'>

            <h1>все кросовки</h1>

            <div className='search-block d-flex mb-30'>
              <img src='./img/find_icon.svg' alt='Search' />
              <input placeholder='Поиск...' />
            </div>

          </div>
          <div className='sneakers d-flex flex-wrap'>
             {items.map( obj => 
              (<Card
                title={obj.title}
                price={obj.price} 
                imgUrl={obj.img}

                onPlus={()=>alert(obj.title)}
                onFavorite={()=>alert("onFavorite "+ obj.title)}
                />))}
          </div>
        </div>
    </div>
  );
}

export default App;
