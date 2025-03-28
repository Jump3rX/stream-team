import React from "react";
import { Copyright } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-4 flex justify-center items-center">
      <Copyright size={16} className="mr-1" />
      <span>{new Date().getFullYear()}</span>
      <span className="text-lg font-semibold mx-2">
        <span className="text-red-500">stream</span>
        <span className="text-green-500">-</span>
        <span className="text-white">team</span>
      </span>
      <span>All rights reserved.</span>
    </footer>
  );
}

export default Footer;
