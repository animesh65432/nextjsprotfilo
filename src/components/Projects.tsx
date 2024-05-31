import React, { useState } from "react";
import { projects } from "../temp";
import Image from "next/image";

const Projects: React.FC = () => {
  const [index, setIndex] = useState(0);

  const goToPrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(projects.length - 1);
    }
  };

  const goToNext = () => {
    if (index < projects.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md mx-auto overflow-hidden rounded shadow-lg">
        <Image
          src={projects[index].images}
          alt={projects[index].name}
          width={800}
          height={600}
          className="w-full"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{projects[index].name}</div>
          <div className="flex flex-wrap mb-2">
            {projects[index].Techstack.map((tech, i) => (
              <span
                key={i}
                className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="px-6 pb-4 flex justify-between">
          {projects[index].liveurl && (
            <a
              href={projects[index].liveurl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Live Demo
            </a>
          )}
          {projects[index].githuburl && (
            <a
              href={projects[index].githuburl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
            >
              GitHub
            </a>
          )}
        </div>
        <div className="px-6 pb-4 flex justify-between">
          <button
            onClick={goToPrev}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Prev
          </button>
          <button
            onClick={goToNext}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
