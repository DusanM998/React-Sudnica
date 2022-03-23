import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useCookies } from "react-cookie";
import '../Home.css';
import Navbar from './Navbar';


function Login(){
const [username, setUsername]=useState('');
const [password,setPassword]=useState('');

const [redirect, setRedirect] = useState(false);

const [cookies, setCookie, removeCookie] = useCookies(["Korisnik"]);
//const [history] = useHistory();

  async function login(e){
    e.preventDefault();
    console.log(username);
    console.log(password);
    const requestOptions = {
      method: 'POST',
      headers: {  'Accept': 'application/json','Content-Type': 'application/json', },
        credentials: 'include',
        body: JSON.stringify({"username": username,"password": password})};
    const response = await fetch('https://localhost:44303/LoginUser', requestOptions);
    const data = await response.json();
    setCookie("token", data.token);
    console.log(data);
    setRedirect(true);
  }

  if(redirect){
    return <Redirect to='/'></Redirect>
  } 

    return(
      <div className='App'>
        <Navbar></Navbar>
        <div className="form-signin">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" placeholder="Username"
              onChange={e => setUsername(e.target.value)}/>
            <label for="floatingInput">Username</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
              onChange={e => setPassword(e.target.value)}/>
            <label for="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={login}>Sign in</button>
    </form>
    </div>
      </div>
      
        
    );
}
export default Login;