import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import Pfp from "../assets/profile.jpg";

const teamMembers = [
  {
    name: "Deepak Sreeram",
    role: "Founder",
    description: "Visionary leader driving Nexus Swarm's mission.",
    image: "path/to/deepak-image.jpg",
    linkedin: "https://www.linkedin.com/in/deepak-sreeram/",
  },
  {
    name: "Shweta Evangeline",
    role: "Co-Founder",
    description: "Passionate advocate for student empowerment.",
    image: "path/to/shweta-image.jpg",
    linkedin: "https://www.linkedin.com/in/shwetaevangeline/",
  },
  {
    name: "Amarnath Siliveri",
    role: "Community Manager",
    description: "Fostering connections within our community.",
    image: "path/to/amarnath-image.jpg",
    linkedin: "https://www.linkedin.com/in/amarnathsiliveri/",
  },
  {
    name: "Navya Kalamadi",
    role: "Community Manager",
    description: "Dedicated to enhancing user engagement.",
    image: "path/to/navya-image.jpg",
    linkedin: "https://www.linkedin.com/in/navya-kalamadi-b50297273/",
  },
];

const FoundingTeam = () => {
  const [visibleCards, setVisibleCards] = useState(new Set()); 
  const cardRefs = useRef([]); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prevVisibleCards) =>
              new Set(prevVisibleCards).add(entry.target.dataset.index)
            );
          }
        });
      },
      { threshold: 0.2 } 
    );

    cardRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="founders"
      className="py-32 bg-yellow-300 h-screen"
      style={{
        background: "radial-gradient(yellow, orange, yellow)",
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Meet Our Founding Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`bg-white rounded-lg shadow-md p-4 transform transition duration-300 ease-in
                ${
                  visibleCards.has(index.toString())
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-[-50px]"
                }
                hover:scale-105 hover:shadow-lg hover:bg-yellow-300 hover:shadow-[0px_4px_15px_rgba(251,191,36,0.8)]`}
              style={{
                transitionDelay: `${index * 0.2}s`,
              }}
            >
              <img
                src={Pfp}
                alt={member.name}
                className="w-full h-48 object-fill rounded-t-lg mb-4 transform transition duration-250 hover:scale-105"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-gray-500 mt-2">{member.description}</p>
              {/* LinkedIn Icon */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 mt-4 inline-flex items-center transition duration-300"
              >
                <FaLinkedin size={24} />
                <span className="ml-2 text-sm font-medium">Connect</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoundingTeam;
