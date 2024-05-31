import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-slate-800 flex-col h-24">
      <div className="text-white">MY SOCIAL MEDIA</div>
      <div className="flex space-x-10 ">
        <a href="https://github.com/animesh65432">
          <div>
            <FaGithub className="text-4xl bg-slate-200 hover:bg-slate-400" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/animesh-dutta-ba5783273/">
          <div>
            <FaLinkedin className="text-4xl bg-slate-200 hover:bg-slate-400" />
          </div>
        </a>

        <a href="https://x.com/animeshdut16137">
          <div>
            <FaSquareXTwitter className="text-4xl bg-slate-200 hover:bg-slate-400" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
