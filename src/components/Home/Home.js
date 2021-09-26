import React, { useEffect, useState } from 'react';
import './Home.css'
import User from '../User/User';
import AddUser from '../AddUser/AddUser';
import AddName from '../addNames/AddName';


const Home = () => {
  const [users, setUsers]=useState([])
  useEffect(()=>{
    fetch('./person.json')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])

  const [addUser, setAddUser]=useState([])
  

  const handleAddToCart=(getTotalUser)=>{
    const addNewUser =[...addUser, getTotalUser]
    setAddUser(addNewUser)
  }

  return (
    <div className="container">
      <div className="user-box">
        {
          users.map(user=><User 
            key={user.id}
            user={user}
            handleAddToCart={handleAddToCart}
            ></User>)
        }
      </div>
      <div className="add-user">
      <AddUser addUser={addUser} ></AddUser>
      <div className="name-container">
        <h2>Added Name</h2>
        {
        addUser.map(userName=>
        <AddName 
          key={userName.id}
          name={userName.name}
          >
           </AddName>)
      }
      </div>
      
      </div>
    </div>
  );
};

export default Home;