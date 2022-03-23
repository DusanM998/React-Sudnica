import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import Navbar from './Navbar';

export default function Main() {

  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    (
      async () => {
        const response = await fetch("https://localhost:44303/GetUser", {
          headers: {Accept: "application/json", 'Content-Type': 'application/json'},
          credentials: 'include',
        });

        const content = await response.json();

        setUsername(content.username);
      }
    )();
  },[])


  return (
    <div className='main'>
      <Navbar></Navbar>
      <h1>Home</h1>
      <h1> Hi {username}</h1>
    </div>
  )
}
