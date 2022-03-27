import React, { useEffect,useState} from 'react'
import Navbar from './Navbar';
import "../App.css";

export default function Parnica() {

  const [parnice, setParnice] = useState([]);

  useEffect(() => {
    getParnice();
  },[] );
  
  const getParnice = async() => {
    const requestOptions = {
      method: "GET",
      headers: {"Content-Type": "application/json",},
      credential: 'include'
    };
    const response = await fetch("https://localhost:44303/Parnica/GetAllParnice", requestOptions);
    const data = await response.json();
    console.log(data);
    setParnice(data);
  }

  return (
    <div className='App'>
      <Navbar></Navbar>
      <h1>Parnica</h1>
      {parnice.map(pObj => (
        <table>
          <tr>
            <th>Datum i vreme</th>
            <th>Lokacija</th>
            <th>Sudija</th>
            <th>Tip ustanove</th>
            <th>Identifikator</th>
            <th>Broj sudnice</th>
            <th>Tuzilac</th>
            <th>Tuzenik</th>
            <th>Napomena</th>
            <th>Tip</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      ))}
    </div>
  )
}
