import React, { useState, useRef, useEffect } from "react";
import { Heart, Volume2, Play, Pause, VolumeX } from "lucide-react";

function NowPlayingBar({ station, addToFavorites }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [mute, setMute] = useState(false);
  const audioRef = useRef(null);

  // Auto plays when a new station is selected
  useEffect(() => {
    if (station?.url && audioRef.current) {
      audioRef.current.src = station.url;
      audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [station]);

  // change between play and pause
  function handlePlayPause() {
    if (!station?.url) return; // if not station is provided it breaks out of function withut error
    if (isPlaying) {
      //if btn is clicked when staion is playing it is paused then isPlaying state s set to false
      audioRef.current.pause();
    } else {
      audioRef.current.play(); //if btn is clicked when station is paused it is played then isPlaying state s set to true
    }
    setIsPlaying(!isPlaying);
  }

  // Adjusts volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  function muteVolume() {
    if (mute === false) {
      setVolume(0);
      setMute(true);
    } else {
      setVolume(1);
      setMute(false);
    }
  }
  return (
    <div className="w-full bg-white p-4 mt-4 shadow-md rounded-lg flex items-center justify-between flex-wrap">
      <div className="flex items-center space-x-4">
        {/*=================Show station logo if available============ */}
        {station?.favicon && (
          <img
            src={station.favicon}
            alt="Now Playing"
            className="w-12 h-12 rounded-lg hidden sm:block"
          />
        )}
        <div>
          <p className="text-gray-500 text-sm">Now playing</p>
          <p className="font-semibold">{station?.name || "Select a Station"}</p>
        </div>
      </div>

      {/*========= Audio Controls==========*/}
      <div className="flex items-center space-x-4 mt-2 sm:mt-0">
        <button
          className="text-green-500 bg-gray-200 p-2 rounded-full"
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </button>

        <button onClick={muteVolume}>
          {mute ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>

        <input
          type="range"
          className="w-24 sm:w-32"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        />

        <button onClick={() => addToFavorites(station)}>
          <Heart className="w-5 h-5" />
        </button>
      </div>

      {/*=======Audio Element============*/}
      <audio ref={audioRef} />
    </div>
  );
}

export default NowPlayingBar;
