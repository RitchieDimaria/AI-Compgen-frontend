import React from 'react';
import { FaReact, FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-100 text-black p-4 flex justify-between items-center">
      <div className="flex items-center">
        <FaReact className="text-3xl mr-2 text-blue-400" />
        <span className="text-xl font-bold">React UI Components </span>
      </div>
      <nav>
        <ul className="flex space-x-5">
          <li><a href="/" className="hover:text-blue-400 text-xl">Home</a></li>
          <li><a href="/history" className="hover:text-blue-400 text-xl">History</a></li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <a href="https://github.com/RitchieDimaria" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaGithub className="text-2xl" />
        </a>
        <a href="https://www.linkedin.com/in/richard-dimaria89/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaLinkedin className="text-2xl" />
        </a>
      </div>
    </header>
  );
};

export default Header;