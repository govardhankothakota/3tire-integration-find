import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [movies, setMovies] = useState([]);
  let [cricketPlayers, setCricketPlayers] = useState([]);

  let getMoviesFromServer = async () => {
    let reqOptions = {
      method: "GET",
    };
    let JSONData = await fetch("http://localhost:13189/movieslist", reqOptions);
    let JSOData = await JSONData.json();
    setMovies(JSOData);

    console.log(JSOData);
  };

  let getCricketPlayersFromServer = async () => {
    let reqOptions = {
      method: "GET",
    };
    let JSONData = await fetch(
      "http://localhost:7799/cricketplayerslist",
      reqOptions
    );
    let JSOData = await JSONData.json();
    setCricketPlayers(JSOData);

    console.log(JSOData);
  };
  return (
    <div className="App">
      <h2>Rajamouli Movies List</h2>
      <button
        onClick={() => {
          getMoviesFromServer();
        }}
      >
        Get Movies
      </button>
      <div className="itemContainer">
        {movies.map((ele, i) => {
          return (
            <div key={i} className="itemDiv">
              <img className="itemImg" src={ele.image}></img>
              <p>
                <span className="title">
                  {ele.no}.{ele.movie}
                </span>
                <br />
                year : {ele.year}
                <br />
                Rating : {ele.rating}
                <br />
                Stars : {ele.stars}
                <br />
                <a href={ele.imdbURL} target="_blank">
                  IMDb Link
                </a>
              </p>
            </div>
          );
        })}
      </div>
      <h2>T20 WorldCup Final Players</h2>
      <button
        onClick={() => {
          getCricketPlayersFromServer();
        }}
      >
        Get Players
      </button>
      <div className="itemContainer">
        {cricketPlayers.map((ele, i) => {
          return (
            <div key={i} className="itemDiv">
              <img className="itemImg" src={ele.image}></img>
              <p className="playersPara">
                <span className="title">
                  {ele.id}.{ele.playerName}
                </span>
                <br />
                Age : {ele.age}
                <br />
                Role : {ele.role}
                <br />
                EmailID : {ele.emailID}
                <br />
                <a href={ele.instagramID} target="_blank">
                  Instagram ID
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
