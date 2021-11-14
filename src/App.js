import Card from "./components/Card/";
import Header from "./components/Header";
import Driwer from "./components/Driwer"

const arr = [
  { title: "Nike Air Huarache", price: '10799', img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/efb42610-7136-4808-bf8a-7133632ac8b9/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-huarache-l5Pg0s.png"},
  { title: "Nike Air Max 95", price: '15499', img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b1e6edcf-6ba9-48fb-83f1-d831736be852/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-95-zcVhs3.png"},
  { title: 'Nike Air Max 90', price: '12799', img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/65d02ab6-19ed-4635-81f2-569be3333ae4/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-90-S8L0TL.png"},
  { title: 'Nike Crater Impact', price: '9799', img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6a0ff185-b777-4515-9a90-7171fa8b4626/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-crater-impact-0v24WZ.png"},
  { title: 'Nike Air Huarache', price: '10799', img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/efb42610-7136-4808-bf8a-7133632ac8b9/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-huarache-l5Pg0s.png"},
  { title: 'Nike Air Zoom Pegasus 38 Shield', price: '11299', img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d5bc11d4-65e7-4254-a896-ee239ee280f5/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B1%D0%B5%D0%B3%D0%B0-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-%D1%81-%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%BE%D0%B9-%D0%BE%D1%82-%D0%BD%D0%B5%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D1%8B-air-zoom-pegasus-38-shield-TJhtkN.png"},

]
//  { title: '', price: '', img: ""},

function App() {
  return (
    <div className='wrapper clear'>
      <div style={{display: 'none'}} className='overlay'>
      
        <Driwer/>

      </div>
      <Header/>
        <div className='content p-40'>
          <div className='md-40 d-flex align-center justify-between'>

            <h1>все кросовки</h1>

            <div className='search-block d-flex '>
              <img src='./img/find_icon.svg' alt='Search' />
              <input placeholder='Поиск...' />
            </div>

          </div>
          <div className='sneakers d-flex '>
             {arr.map( obj => 
              (<Card 
                title={obj.title}
                price={obj.price} 
                imgUrl={obj.img}
                priKlicks={()=>alert(obj.title)}
                />))}
          </div>
        </div>
    </div>
  );
}

export default App;
