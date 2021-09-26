import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt,  faUser } from '@fortawesome/free-solid-svg-icons'
import './User.css';

const User = (props) => {

  const { name, nationality, gender, age, salary, img} = props.user
  return (
    <div className="user-info">
      <img height="150px" width="150px" src={img} alt="" />
      <h3>Name: {name}</h3>
      <h4>Age: {age}</h4>
      <h4>Gender: {gender}</h4>
      <h4>Nationality: {nationality}</h4>
      <h4>Salary: ${salary}</h4>
      <h1 className="icon"><FontAwesomeIcon icon={faEnvelope} /><FontAwesomeIcon icon={ faPhoneAlt} /></h1>
      <button onClick={()=>props.handleAddToCart(props.user)}><FontAwesomeIcon icon={faUser}/>  Add To Cart</button>
    </div>
  );
};

export default User;