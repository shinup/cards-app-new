import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import '../box.css';


const Loading = () => {       
    return (
      <>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
       </Spinner>
      </>
    );
  };

  export default Loading;