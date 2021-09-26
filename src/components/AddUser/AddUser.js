import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser } from '@fortawesome/free-solid-svg-icons'
import './AddUser.css'
const AddUser = (props) => {
  const {addUser}=props
  const total=addUser.reduce((previous, current)=>previous+current.salary, 0)
  
  return (
    <div className="added-user">
       <h2><FontAwesomeIcon icon={faUser}/> Added User:<span className="user-length">{addUser.length}</span></h2>
       <h3>Total Salary:$ <span className="salary">{total}</span></h3>
    </div>
  );
};


export default AddUser;