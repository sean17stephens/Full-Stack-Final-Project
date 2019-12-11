import React    from 'react';
import { Table } from 'react-bootstrap';



class Tab extends React.Component {

  render() {
    return (
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Upcoming Products</th>
      <th>Product Name</th>
      <th>Product Colour</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Levi's Sweatshirt</td>
      <td>Blue</td>
      <td>€29.99</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Retro Netherlands Jersey</td>
      <td>Orange</td>
      <td>€34.99</td>
    </tr>
    <tr>
      <td>3</td>
      <td>North Face Jacket</td>
      <td>Black & White</td>
      <td>€79.99</td>
    </tr>
  </tbody>
</Table>
    );
  }

}

export default Tab;
