import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#443831] text-white py-12 px-4 sm:px-8 relative overflow-hidden w-full">
      <div
        className="absolute inset-0 bg-auto bg-top opacity-30"
        style={{ backgroundImage: `url('/footer-img.png')` }}
      ></div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-sm:grid-cols-2 max-sm:grid-rows-3">
        {/* Row 1: Tinytales Section */}
        <div className="flex flex-col items-start space-y-4 max-sm:col-start-1 max-sm:col-end-3    ">
          <div className="flex items-center space-x-2">
            <img src="/logo2.svg" alt="Tinytales Logo" />
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Soluta
            dolor quae ipsum in eos qui consequatur ab cum maxime. Soluta dolor
            quae ipsum in eos qui consequatur ab cum.
          </p>
        </div>

        {/* Row 2: Let Us Help */}
        <div className="max-sm:col-start-1 max-sm:col-end-2 ">
          <h4 className="text-lg font-semibold mb-4">Let Us Help</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">My Account</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Categories</a></li>
            <li><a href="#" className="hover:text-white">All Products</a></li>
          </ul>
        </div>

        {/* Row 2: Policies */}
        <div className="max-sm:col-start-2 max-sm:col-end-3">
          <h4 className="text-lg font-semibold mb-4">Policies</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Refund Policy</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Cancellation Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Row 3: Send Email + Follow Us */}
        <div className="flex flex-col items-start space-y-4 max-sm:col-start-1 max-sm:col-end-3 ">
          <h4 className="text-lg font-semibold">Send Email</h4>
          <div className="flex w-full bg-white max-w-md shadow-md rounded-lg ">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-2 text-gray-800 rounded-l-lg focus:outline-none border border-gray-200 max-sm:w-[60vw] w-[inherit]"
            />
            <button className="bg-[#a57f72] text-white px-6 py-2 rounded-r-lg hover:bg-[#8e6e63] transition-colors duration-200">
              Send
            </button>
          </div>

          <div className="flex flex-col items-start w-full mt-8">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4 text-2xl">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaTelegramPlane /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
