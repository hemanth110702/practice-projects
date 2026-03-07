import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import LinkTree from "../assets/linktree.ico";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10">
      <div id="contact" className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-8">
          <div className="mb-6 lg:mb-0">
            <h4 className="text-xl font-semibold mb-4">Connect with Us</h4>
            <div className="flex space-x-4 text-lg">
              <a
                href="https://www.instagram.com/nexus_swarm/#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-pink-600 rounded-full hover:shadow-lg transform hover:scale-105 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@nexus_swarm"
                https:target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-red-600 rounded-full hover:shadow-lg transform hover:scale-105 transition duration-300"
              >
                <AiFillYoutube />
              </a>
              <a
                href="http://t.me/nexus_swarm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-blue-600 rounded-full hover:shadow-lg transform hover:scale-105 transition duration-300"
              >
                <SiTelegram />
              </a>
              <a
                href="https://www.whatsapp.com/channel/0029VadY0pO1Hspr6yKS1Y1P"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-green-600 rounded-full hover:shadow-lg transform hover:scale-105 transition duration-300"
              >
                <IoLogoWhatsapp />
              </a>
              <a
                href="https://linktr.ee/nexus_swarm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-black rounded-full hover:shadow-lg transform hover:scale-105 transition duration-300"
              >
                <span className="text-lg">
                  <img src={LinkTree} alt="link tree" />
                </span>{" "}
              </a>
              <a
                href="https://www.linkedin.com/company/nexus-swarm/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-blue-700 rounded-full hover:shadow-lg transform hover:scale-105 transition duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:max-w-md">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                rows="3"
                placeholder="Your Message"
                className="px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 shadow-lg transform hover:scale-105"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="text-center border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Nexus Swarm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
