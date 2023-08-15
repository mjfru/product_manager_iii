import HomeView from './views/HomeView';
// import ProductForm from './components/ProductForm';
// import DisplayProducts from './components/DisplayProducts';
import DisplayOneProduct from './components/DisplayOneProduct';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import UpdateProduct from './components/UpdateProduct';

function App() {

  return (
    <div className="App">
      <h1>Product Manager</h1>
        {/* <ProductForm/>
        <DisplayProducts/> */}
        <Routes>
          <Route path='/' element={<HomeView/>}/>
          <Route path='/product/:id' element={<DisplayOneProduct/>}/>
          <Route path='/update/product/:id' element={<UpdateProduct/>}/>
        </Routes>
    </div>
  );
}

export default App;


//? Meeting Questions:
//?   Update page after product is added
//?   'Views'
//?   Styling - form is adjusting with the products added