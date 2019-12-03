import React    from 'react';
import ViewCart from './ViewCart';



class Header extends React.Component {

  render() {
    return (
      <div className='jumbotron'>
        <h1 className='display-4'>Sean's Mens Clothes Shop</h1>
        <p>Here we offer a range of products, that we hope caters to the needs of all of our customers</p>
        <ViewCart cart={this.props.cart} />
      </div>
    );
  }

}

export default Header;