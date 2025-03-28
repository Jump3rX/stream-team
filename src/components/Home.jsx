import React from "react";
import FeatureCard from "./FeatureCard";
import { Headphones, Star, UserCheck } from "lucide-react";
import bgImg from "../assets/bg.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <div
        className="relative w-full h-[450px] flex flex-col items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <h1 className="text-3xl md:text-4xl font-bold relative">
          Listen to the World’s <span className="text-green-400">Best</span>{" "}
          Radio Stations
        </h1>
        <p className="mt-2 text-lg relative max-w-xl">
          Stream thousands of live radio stations from every corner of the
          globe. Discover music, news, and podcasts in one place.
        </p>
        <Link
          to="/listen"
          className="relative mt-4 px-6 py-2 bg-emerald-500 text-white flex items-center gap-2 rounded-md hover:bg-gray-800 transition"
        >
          Listen now <Headphones size={18} />
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 p-6 max-w-4xl sm:grid-cols-1">
        <FeatureCard icon={<Headphones size={32} />} title="Live Streaming" />
        <FeatureCard icon={<Star size={32} />} title="Favorites" />
        <FeatureCard icon={<UserCheck size={32} />} title="User Friendly" />
      </div>
    </div>
  );
}

export default Home;
