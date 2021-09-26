import React from 'react';
import './AddName.css'
const AddName = (props) => {
  const name=props.name
  return (
    <div className='name-field'>
  <h5>• {name}</h5>
       
    </div>
  );
};

export default AddName;