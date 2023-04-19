import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Header from './Components/Header/Header'
import ProductsSection from './Components/ProductsSection/ProductsSection';
import products from './products';
import { useState } from 'react';
import Toast from './Components/Toast/Toast';
import Cart from './Components/Cart/Cart';
import ProductContext from './Contexts/ProductContext';



function App() {
  const [allProducts, setAllProducts] = useState(products);
  const [userCart, setUserCart] = useState([]);
  const [isShowToast, setIsShowToast] = useState(false);
  const [isShowCart, setIsShowCart] = useState(false);






  return (
    <>
      <ProductContext.Provider value={
        {
          allProducts,
          userCart,
          setUserCart,
          isShowToast,
          setIsShowToast,
          isShowCart,
          setIsShowCart
        }
      }>
        <Header />
        <div className='pb-5'>
          <div className='container'>
            <h1 className='text-center main-title'>All Products</h1>
            <ProductsSection />
          </div>
          <Toast />
        </div>
        <Cart />
      </ProductContext.Provider >
    </>
  );
}

export default App;
