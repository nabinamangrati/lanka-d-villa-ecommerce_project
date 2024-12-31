import React from "react";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import whatsapp from "../images/whatsapp.png";
import logoFooter from "../images/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {/* Left: Quick Links */}
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-300 hover:text-green-500">Home</a></li>
            <li><a href="/about" className="text-gray-300 hover:text-green-500">About Us</a></li>
            <li><a href="/menu" className="text-gray-300 hover:text-green-500">Menu</a></li>
            <li><a href="/rooms" className="text-gray-300 hover:text-green-500">Rooms</a></li>
            <li><a href="/gallery" className="text-gray-300 hover:text-green-500">Gallery</a></li>
            <li><a href="/private-events" className="text-gray-300 hover:text-green-500">Private Dining</a></li>
            <li><a href="/contact" className="text-gray-300 hover:text-green-500">Contact</a></li>
          </ul>
        </div>

        {/* Center: Logo */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-0">
          <img src={logoFooter} alt="Resort Logo" className="w-32 h-auto mb-4" />
        </div>

        {/* Right: Follow Us & Contact Info */}
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.facebook.com/lankadvilla" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook Logo" className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com/lankadresort/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram Logo" className="w-8 h-8" />
            </a>
            <a href="https://wa.me/9707803471" target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="Whatsapp Logo" className="w-8 h-8" />
            </a>
          </div>

          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <p className="text-gray-300 mb-2">Address: Tokha, Jhor, Kathmandu, Nepal</p>
          <p className="text-gray-300 mb-2">Phone: +977-987463773</p>
          <p className="text-gray-300">Email: info@resort.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
        <p>&copy; 2024 Lankadavilla Resort. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
