import React from "react";
import HoneyBeeBg from "../assets/honeybeebg.jpg";
import AboutUs from "../assets/about-us.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="relative bg-cover bg-center py-32 h-screen"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(255, 255, 0, 0.2) 0%, rgba(255, 152, 150, 0) 70%, rgba(255, 252, 250, 0) 100%), url(${HoneyBeeBg})`,
      }}
    >
      <div className="relative container mx-auto px-6 py-8 text-lg text-center text-black">
        <h2 className="text-4xl font-bold underline decoration-yellow-400 underline-offset-8 mb-6">
          About Nexus Swarm
        </h2>
        <div className="opacity-50">
          <p className="mb-6 max-w-3xl mx-auto leading-relaxed">
            At Nexus Swarm, we are dedicated to creating a vibrant community
            where students can connect, learn, and thrive together. Our platform
            serves as a hub for collaboration and innovation, empowering
            individuals from diverse backgrounds to share their talents and
            knowledge.
          </p>
          <p className="mb-6 max-w-3xl mx-auto leading-relaxed">
            We believe that by fostering strong connections and promoting
            collaboration, we can drive meaningful change and inspire the next
            generation of leaders and innovators. Whether you are a student,
            mentor, or professional, Nexus Swarm is here to support your
            journey.
          </p>
          <p className="mb-6 max-w-3xl mx-auto leading-relaxed">
            Join us as we embark on this exciting journey of empowerment,
            exploration, and unity. Together, we can create a brighter future
            for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
