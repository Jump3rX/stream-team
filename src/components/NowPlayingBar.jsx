import React from "react";
import { Heart, Volume2 } from "lucide-react";
function NowPlayingBar() {
  return (
    <div className="w-full bg-white p-4 mt-4 shadow-md rounded-lg flex items-center justify-between flex-wrap">
      <div className="flex items-center space-x-4">
        {/* Hide on small screens */}
        <img
          src="https://placehold.co/50x50/000000/FFF"
          alt="Now Playing"
          className="w-12 h-12 rounded-lg hidden sm:block"
        />
        <div>
          <p className="text-gray-500 text-sm">Now playing</p>
          <p className="font-semibold">Classic 105</p>
        </div>
      </div>

      <div className="flex items-center space-x-4 mt-2 sm:mt-0">
        <Volume2 className="w-5 h-5" />
        <input type="range" className="w-24 sm:w-32" />
        <Heart className="w-5 h-5" />
      </div>
    </div>
  );
}

export default NowPlayingBar;
