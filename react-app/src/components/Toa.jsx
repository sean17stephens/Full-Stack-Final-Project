import React    from 'react';
import { Toast } from 'react-bootstrap';



class Toa extends React.Component {

  render() {
    return (
        <Toast>
        <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">Updates</strong>
            <small>Just now</small>
        </Toast.Header>
        <Toast.Body>New products are being consistently added as we expand our business</Toast.Body>
        </Toast>
    );
  }

}

export default Toa;