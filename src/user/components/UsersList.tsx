import React from "react";
import './UsersList.css';
import UserItem from './UserItem';

const UsersList=(props:any)=>{
if(props.items.length===0){
  return(
    <div className="center">
      <h2>No users found.</h2>
    </div>
  )
}
return<ul className="users-list">
  {props.items.map((user:any)=>
    ( <UserItem key={user.id} id={user.id} image={user.image} name={user.name} palceCount={user.places}/>
  
  ))
  }
</ul>
}

export default UsersList;