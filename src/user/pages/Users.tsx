import React from "react";
import UsersList from "../components/UsersList";

const Users=()=>{
  //var users:[]=[];
  var Users=[
  {
  id:'u1',
  name:'Max schwarz',
  image:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  places:3,
  
}
];

  return <UsersList  items={Users}/>;
};

export default Users;