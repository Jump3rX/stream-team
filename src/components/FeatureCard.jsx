import React from "react";

function FeatureCard({ icon, title }) {
  return (
    <div className="p-4 flex flex-col items-center bg-gray-200 rounded-lg shadow-lg transition transform hover:scale-105">
      {icon}
      <p className="mt-2 text-lg font-semibold">{title}</p>
    </div>
  );
}

export default FeatureCard;
