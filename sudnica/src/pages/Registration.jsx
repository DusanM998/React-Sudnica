import React, {useState, useEffect, SyntheticEvent} from 'react';
import { Redirect } from 'react-router-dom';
import "../App.css";
import Navbar from './Navbar';
import Select from 'react-select'

export default function Registration() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [role, setRole] = useState("");
  const [selectOption, setOption] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const [redirect, setRedirect] = useState(false);

  const options = [
    { value: 'Admin', label: 'Admin' },
    { value: 'Normal user', label: 'Normal user' }
  ]

  useEffect( () => {
    if(selectOption != "")
      setRole(selectOption.value)}, [selectOption] );

  const register = async(e) => {
    e.preventDefault();

    console.log(username);
    console.log(password);
    console.log(ime);
    console.log(prezime);
    console.log(role);

    await fetch("https://localhost:44303/addKorisnik", {
      method: "POST",
      headers: {Accept: "application/json", 'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'},
      body: JSON.stringify({
        "Username": username,
        "Password": password,
        "Ime": ime,
        "Prezime": prezime,
        "Role": role
      })
    }).then(response => response.json())
    .then(data => console.log(data));

    setRedirect(true);
  }

  const submit = async(e) => {
    e.preventDefault();

    console.log(username);
    console.log(password);
    console.log(ime);
    console.log(prezime);
    console.log(role);

    const requestOptions = {
      method: "POST",
      headers: {Accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({
        "Username": username,
        "Password": password,
        "Ime": ime,
        "Prezime": prezime,
        "Role": role
      })
    };
    const response = await fetch("https://localhost:44303/RegisterUser", requestOptions);
  }
  
  if(redirect){
    return <Redirect to='/login'></Redirect>
  }
  
  return (
    <div className='App'>
      <Navbar></Navbar>
      <div className="form-signin">
        
        <form onSubmit={register}>
          <h1 className="h3 mb-3 fw-normal">Registration</h1>

          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" placeholder="Username" required
                onChange={e => setUsername(e.target.value)}/>
            <label for="floatingInput">Username</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required
                onChange={e => setPassword(e.target.value)}/>
            <label for="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputIme" placeholder="Ime" required
                onChange={e => setIme(e.target.value)}/>
            <label for="floatingInput">Ime</label>
          </div>

          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputPrezime" placeholder="Prezime" required
                onChange={e => setPrezime(e.target.value)}/>
            <label for="floatingInput">Prezime</label>
          </div>

          <div className="form-floating">
            <Select 
              options={options}
              defaultValue={role}
              onChange={setOption}
            />
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
    </form>
    </div>
    </div>
    
  )
}
