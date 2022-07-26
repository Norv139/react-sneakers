import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Store from "./pages/store";
import Header from "./components/header/Header";
import ShoppingCart from "./pages/shoppingCart";
import Profile from "./pages/profile/profile";


function App() {
  const isOpenCard = useSelector(store=>store.card.isOpenCard)
  return (
    <div className='wrapper clear' style={{overflow: 'hidden'}}>
      
    <BrowserRouter>
      <Header/>
      <ShoppingCart /> 
      
      <Routes>
        <Route path="/" element={<Store />} />
        
        <Route path="/profile" element={<Profile/>} />

        <Route path="/formpay" element={<>TEXT</>} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
