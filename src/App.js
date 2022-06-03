import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products/Products';
import UpdateProduct from './Pages/Products/UpdateProduct/UpdateProduct';
import AddProuct from './Pages/Products/AddProduct/AddProuct';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/productManagement'>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/products" component={Products} />
          <Route path="/addProduct" component={AddProuct} />
          <Route path="/product/:productID" component={UpdateProduct} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
