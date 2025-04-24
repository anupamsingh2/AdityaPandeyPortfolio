import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import anupamPhoto from '../assets/anupamsingh.jpg'; // ✅ import your photo
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        
        {/* ✅ Left: Photo instead of logo */}
        <Link to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={anupamPhoto}
            alt="Anupam Singh"
            className="w-10 h-10 rounded-full object-cover border-2 border-purple-500 shadow-sm"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Anupam Singh &nbsp;
            <span className="hidden sm:block">| Software Developer</span>
          </p>
        </Link>

        {/* Right: Navigation Links */}
        <ul className="flex-row hidden gap-10 list-none sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
