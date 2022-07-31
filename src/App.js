import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";



//https://gateway.marvel.com:443/v1/public/characters?apikey=4f1c0b87d2c3832319457bd835ad0225

//private_key: fa4ae0efb8aaa4bc9fb3d28a7f80577b1a45b777
//public_key: 4f1c0b87d2c3832319457bd835ad0225
//ts: 1

//1fa4ae0efb8aaa4bc9fb3d28a7f80577b1a45b7774f1c0b87d2c3832319457bd835ad0225

//hash: 8c5681ec8d747cda59a34afbb90155d7


function App() {

  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    axios.get(`ihttps://gateway.marvel.com:443/v1/public/characters?nameStartsWith=hulk&limit=6&ts=1&apikey=4f1c0b87d2c3832319457bd835ad0225&hash=8c5681ec8d747cda59a34afbb90155d7`)
      .then(res => {
        setPersonajes(res.data.data.results)
      }).catch(error => console.error(error))
  }, [])

  console.log(personajes)

  return (
    <div className="App">
      <header className="header-app">
        <div className="logo"></div>
      </header>

      <div className="card">
        {personajes.map(per => {

          if (personajes){
            return (
              <div className="card-item">
                <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} alt=""></img>
                <h2>{per.name}</h2>
              </div>
              )
          } else (
            <h1>Ingresa un nombre</h1>
          )
        
        })}
      </div>


    </div>
  );
}

export default App;
