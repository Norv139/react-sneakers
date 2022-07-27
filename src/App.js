import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Store from "./pages/store";
import Header from "./components/header/Header";
import ShoppingCart from "./pages/shopping-сart";
import Profile from "./pages/profile/profile";
import Payment from "./pages/payment-form";


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

        <Route path="/formpay" element={<Payment/>} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
