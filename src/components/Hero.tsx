import React, { useState, useEffect } from "react";
import {
  FaAws,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaJsSquare,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiMysql } from "react-icons/si";
import { DiDatabase } from "react-icons/di";

const Myintro = [
  "HELLO, I AM A FRONTEND DEVELOPER",
  "HELLO, I AM A BACKEND DEVELOPER",
  "HELLO, I AM A FULL Stack DEVELOPER",
];

const skills = [
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "Express", icon: <FaNodeJs className="text-gray-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "AWS", icon: <FaAws className="text-orange-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "DSA", icon: <DiDatabase className="text-blue-500" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-500" /> },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  const updateBio = () => {
    setIndex((prevIndex) => (prevIndex + 1) % Myintro.length);
  };

  useEffect(() => {
    const intervalId = setInterval(updateBio, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="text-3xl font-bold mb-4">{Myintro[index]}</div>
      <div className="flex justify-end w-full mb-8">
        <img
          src="https://media.licdn.com/dms/image/C5603AQGM1y3Y6i8ghg/profile-displayphoto-shrink_800_800/0/1642843600153?e=2147483647&v=beta&t=vG4jE4sJLWpOFFczek_FO3v7PyOsK7QKObVjyJ1T1io"
          alt="Profile"
          className="rounded-full h-32 w-32 border-4 border-white shadow-lg"
        />
      </div>
      <div className="mt-8 w-full">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-2"
            >
              {skill.icon}
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
