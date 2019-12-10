import React        from 'react';
import ProductsList from './ProductList';
import Header       from './Header';
import Cart         from '../lib/Cart';
import Footer       from './Footer';
import Stripe       from './Stripe';
import Form         from './For';
import Table        from './Tab';
import Toast        from './Toa';

class App extends React.Component {

  // Note the cart object is just a vanilla JS
  // custom type (see lib/Cart.js)
  state = {
    cart : new Cart()
  }

  // Render
  render() {
    return (
      <div className='App'>
        <Header cart={this.state.cart} />
        <Stripe />
        <Form />
        <ProductsList cart={this.state.cart} />
        <Table />
        <Toast />
        <Footer />
      </div>
    );
  }
}

export default App;
