import React from "react";
import { Play, Heart } from "lucide-react";
import SearchBar from "./SearchBar";
import NowPlayingBar from "./NowPlayingBar";

function Listen() {
  const mapItems = [1, 2, 3, 4, 5, 6];

  return (
    <div className="p-6 bg-gray-300 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <h1 className="text-2xl font-bold">Listen</h1>
        <SearchBar />

        <NowPlayingBar />

        <div className="mt-4 flex space-x-4">
          <button className="bg-purple-300 text-black px-4 py-1 rounded-full">
            All
          </button>
          <button className="bg-gray-300 px-4 py-1 rounded-full">
            Favorites
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mapItems.map((_, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src="https://placehold.co/100x100/000000/FFF"
                alt="Radio"
                className="mb-2 rounded-lg"
              />
              <p className="font-semibold">Station Name</p>
              <div className="flex mt-2 space-x-4">
                <button className="text-green-500">
                  <Play className="w-5 h-5" />
                </button>
                <button className="text-black">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Listen;
