import React, { useState, useEffect } from "react";
import { Play, Heart } from "lucide-react";
import SearchBar from "./SearchBar";
import NowPlayingBar from "./NowPlayingBar";
import axios from "axios";

function Listen() {
  const [stations, setStations] = useState([]); // holds all stations
  const [currentStation, setCurrentStation] = useState({}); //holds station that is now playing
  const [loadFavorites, setLoadFavorites] = useState([]); //all holds favorite
  const [isFavorites, setIsFavorites] = useState(false); // sets current active tab, ie; all or favorites tab

  async function getStations() {
    // gets stations top 20 kenya stations from API
    const res = await axios.get(
      "https://de2.api.radio-browser.info/json/stations/bycountryexact/Kenya",
      {
        params: {
          limit: 20, // limits stations to return only 20
          order: "clickcount", //orders the stations by most popular station
          reverse: true, // shows stations with most likes in descending order
        },
      }
    );
    console.log(res.data);
    setStations(res.data);
    setIsFavorites(false);
  }

  async function handleSearch(query) {
    // searches for station based on name
    const res = await axios.get(
      `https://de2.api.radio-browser.info/json/stations/byname/${query}`
    );
    console.log(res.data);
    setStations(res.data);
  }

  /*===============================================================================*/
  function getAllFavorites() {
    // gets all favorite stations and loads then to loadFavorites state
    const stations = localStorage.getItem("my-favorites");
    let favStations = JSON.parse(stations);
    setLoadFavorites(favStations);
  }

  useEffect(() => {
    getStations();
    getAllFavorites();
  }, []);
  function playStation(station) {
    //sets now playing station when play btn is clicked
    setCurrentStation(station);
    console.log(station);
  }

  function searchStation(searchItem) {
    //receives search name from searchbar component
    console.log(searchItem);
    handleSearch(searchItem);
  }

  function addToFavorites(station) {
    // adds station to favorites when favites button is clicked
    let existingFavorites = JSON.parse(localStorage.getItem("my-favorites"));

    if (!Array.isArray(existingFavorites)) {
      // sets the existingFavorites to an array ensuring the .some() does not cause and error
      existingFavorites = [];
    }

    const isFavorite = existingFavorites.some(
      //checks if the station already exists in the favorites
      (fav) => fav.stationuuid === station.stationuuid
    );

    if (!isFavorite) {
      existingFavorites.push(station); // Adds new station if not already in favorites

      // Store updated favorites list in localStorage
      localStorage.setItem("my-favorites", JSON.stringify(existingFavorites));

      alert(`${station.name} added to favorites!`);
    } else {
      alert("Station already in favorites");
    }
  }

  function getFavorites() {
    //  gets all favorite stations from localstorage
    setIsFavorites(true); //set current active tab to favorites tab
    let allFavorites = localStorage.getItem("my-favorites");
    let listStations = JSON.parse(allFavorites);
    setStations(listStations);
  }
  return (
    <div className="p-6 bg-gray-300 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <h1 className="text-2xl font-bold">Listen</h1>
        <SearchBar searchStation={searchStation} />

        <NowPlayingBar
          station={currentStation}
          addToFavorites={addToFavorites}
        />

        <div className="mt-4 flex space-x-4">
          <button
            className={`px-4 py-1 rounded-full ${
              isFavorites ? "bg-gray-300" : "bg-purple-300 text-black"
            }`}
            onClick={getStations}
          >
            All
          </button>
          <button
            className={`px-4 py-1 rounded-full ${
              isFavorites ? "bg-purple-300 text-black" : "bg-gray-300"
            }`}
            onClick={getFavorites}
          >
            Favorites
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stations.length > 0 ? (
            stations.map((station, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
              >
                <img
                  src={
                    station.favicon || ""
                      ? station.favicon
                      : "https://placehold.co/100x100/000000/FFF"
                  }
                  alt="Radio"
                  className="mb-2 rounded-lg"
                />
                <p className="font-semibold">{station.name}</p>
                <div className="flex mt-2 space-x-4">
                  <button
                    className="text-green-500"
                    onClick={() => playStation(station)}
                  >
                    <Play className="w-5 h-5" />
                  </button>
                  <button
                    className={
                      loadFavorites.some(
                        (fav) => fav.stationuuid === station.stationuuid
                      )
                        ? "text-red-500"
                        : "text-black"
                    }
                    onClick={() => addToFavorites(station)}
                  >
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h2>No stations available</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Listen;
