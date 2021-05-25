import './style.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './components/home';
import Cart from './components/cart';
import Account from './components/account';
import Productdet from './components/productdetails';
import Products from './components/products';

function App() {
  return (
    <Router>
    <div>
      <Switch>
         <Route exact path="/" component = {Home}/>
         {/* <Redriect from='/blog/' to="/tutorials/" />            */}
         <Route path="/account/" component={Account} />
         <Route path="/cart/" component={Cart} />
         <Route path="/products" component={Products}></Route>
         <Route path="/Productdetails/:id" component={Productdet} />
      </Switch>
    </div>
  </Router>
            );
}

export default App;
