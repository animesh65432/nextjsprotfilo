import React from "react";

const ContactMe = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-4">
          Feel free to get in touch with me via email. I&apos;d love to hear
          from you!
        </p>
        <a
          href="mailto:kiranduttta234@gmail.com"
          className="text-blue-500 hover:underline"
        >
          Email Me
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
