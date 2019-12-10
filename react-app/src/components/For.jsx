import React    from 'react';
import { Form, Button } from 'react-bootstrap';



class For extends React.Component {

  render() {
    return (
        <Form>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>You can sign up and create an Account here</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            Please enter a valid email address into the field above.
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Do you wish to recieve email updates on Offers" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }

}

export default For;