import React from 'react';
import { RingLoader } from 'react-spinners';

const SpinnerComponent = () => {
  return (
    <div className='d-flex vh-100'>
        <div className="m-auto spinner-container justify-content-center align-items-center">
        <RingLoader color={'green'} loading={true} size={'300px'} />
        </div>
    </div>
  );
};

export default SpinnerComponent;