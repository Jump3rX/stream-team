import React from "react";
import { Info } from "lucide-react";

function About() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-gray-100 rounded-lg shadow-lg p-8 max-w-2xl flex ">
        <div className="flex items-center mr-6">
          <div className="bg-blue-500 text-white p-3 rounded-lg">
            <Info size={70} />
          </div>
        </div>

        <div>
          <h1 className="text-xl font-semibold mb-3">About Us</h1>
          <p className="text-gray-700">
            We started <span className="text-red-500 font-bold">Stream</span>{" "}
            <span className="text-black font-bold">team</span> with a simple
            goal: to connect people through music. Whether you’re at home or on
            the go, we bring the world’s radio stations to your fingertips.
          </p>
          <p className="mt-2 text-gray-700">
            Whether you’re reminiscing with a station from your hometown or
            exploring the sounds of a distant country, we’re here to make the
            world feel a little smaller—and a lot more musical.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
