import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#355e3b] text-white py-10">
      <div className="flex justify-between  gap-5 w-11/12 mx-auto">
        <div className="w-[30%]">
          <p className="font-bold text-sm mb-2">🌿 Plant Paradise </p>
          <p>
            Grow Green,Live Better,Beautiful plants for your beautiful space
          </p>
          <p className="font-bold text-sm mt-2">Follow Us</p>
          <small>Facebook || Youtube || Instagram</small>
        </div>
        <div>
          <p className="font-bold text-sm mb-2">Quick Links</p>
          <ul>
            <li>Home</li>
            <li>Plants</li>
            <li>About Us</li>
            <li>My Plants</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-sm mb-2">Support</p>
          <ul>
            <li>Home</li>
            <li>Plants</li>
            <li>About Us</li>
            <li>My Plants</li>
          </ul>
        </div>
      </div>
      <small className="text-center  items-center">
      <p className="py-4">  © 2026 Plant Paradise. All rights reserved.</p>
      </small>
    </div>
  );
};

export default Footer;
