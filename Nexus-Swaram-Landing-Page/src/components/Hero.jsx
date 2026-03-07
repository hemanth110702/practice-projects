import React from "react";
import MainLogo from "../assets/pixelcut-logo.png";
import { FaLinkedin } from "react-icons/fa"; 

const Hero = () => {
  return (
    <div
      id="home"
      className="flex items-center justify-between h-screen p-8 bg-gray-400"
      style={{
        background: "linear-gradient(180deg, yellow, orange)",
      }}
    >
      <div
        className="w-1/2 p-8 rounded-tr-lg rounded-bl-lg"
        style={{
          background:
            "linear-gradient(135deg, rgba(251, 191, 36, 0.8), rgba(245, 158, 11, 0.8), rgba(251, 191, 36, 0.8))",
        }}
      >
        <h1 className="text-4xl font-bold text-black mb-4">
          Uniting Talents, Fueling Ideas
        </h1>
        <p className="text-lg text-white mb-8">
          At NEXUS, we believe in the power of connection. A central point where
          students from all walks of life come together to empower, explore, and
          unite.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition duration-300 ease-in-out">
          <a href="https://linktr.ee/nexus_swarm" target="_blank">Learn More</a>
        </button>

        <div className="mt-6">
          <a
            href="https://www.linkedin.com/company/nexus-swarm/posts/?feedView=all&viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition duration-300 ease-in-out inline-flex items-center"
          >
            <FaLinkedin size={28} />
            <span className="ml-2 font-medium">Connect on LinkedIn</span>
          </a>
        </div>
      </div>

      <div className="w-1/2 flex justify-center">
        <img
          src={MainLogo}
          alt="Nexus Swarm"
          className="w-7/12 h-auto octagon transform transition duration-300 hover:scale-105 hover:shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
