import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import Product from './Pages/Products/Product/Product';
import Products from './Pages/Products/Products/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/products" component={Products} exact />
          <Route path="/product/:productID" component={Product} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
