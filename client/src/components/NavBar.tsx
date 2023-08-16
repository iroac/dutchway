import React, { useState } from 'react';
import axios from 'axios';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogout = async () => {
    try {
      const res = await axios.get('https://dutchway.onrender.com/api/logout', { withCredentials: true });
      console.log(res.data);
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="flex flex-row justify-center items-center shadow-md w-screen h-10">
      <div className="flex justify-start items-center sm:w-2/12 w-10/12 pl-5 pr-1">
        <Link to="/">
          <img className="w-32 h-6" src="/dutchwaylogo.png" alt="dutch way logo" />
        </Link>
      </div>

      <div className="hidden sm:flex flex-row gap-6 justify-center items-center pt-1 w-8/12">
        <Link to="/grammar" className="text-blue-flag sm:text-lg text-xs">
          GRAMMAR
        </Link>
        <Link to="/lessons" className="text-blue-flag sm:text-lg text-xs">
          LESSONS
        </Link>
        <Link to="/dictionary" className="text-blue-flag sm:text-lg text-xs">
          DICTIONARY
        </Link>
        <Link to="/material" className="text-blue-flag sm:text-lg text-xs">
          MATERIAL
        </Link>
      </div>

      <div className="flex justify-center items-end w-2/12 pl-5 pr-1 sm:hidden">
        <button onClick={toggleMobileMenu}>
        <div className="w-6 h-1 my-1 bg-blue-flag rounded-md"></div>
          <div className="w-6 h-1 my-1 bg-blue-flag rounded-md"></div>
          <div className="w-6 h-1 bg-blue-flag rounded-md"></div>
        </button>
      </div>

      {showMobileMenu && (
        <div className="sm:hidden absolute top-10 right-0 left-0 bg-white border-b-2 border-gray-300 shadow-lg">
          <div className="flex flex-col gap-3 py-3">
            <Link
              to="/grammar"
              className="text-blue-flag sm:text-sm text-xs px-4 py-2"
              onClick={toggleMobileMenu}
            >
              GRAMMAR
            </Link>
            <Link
              to="/lessons"
              className="text-blue-flag sm:text-sm text-xs px-4 py-2"
              onClick={toggleMobileMenu}
            >
              LESSONS
            </Link>
            <Link
              to="/dictionary"
              className="text-blue-flag sm:text-sm text-xs px-4 py-2"
              onClick={toggleMobileMenu}
            >
              DICTIONARY
            </Link>
            <Link
              to="/material"
              className="text-blue-flag sm:text-sm text-xs px-4 py-2"
              onClick={toggleMobileMenu}
            >
              MATERIAL
            </Link>
            <div
              className="text-red-flag sm:text-sm text-xs px-4 py-2"
              onClick={handleLogout}
            >
              LOGOUT
            </div>
          </div>
        </div>
      )}

      <div className="hidden sm:flex justify-end items-center w-2/12 pl-5 pr-1">
        <RiLogoutCircleLine onClick={handleLogout} className="text-red-flag text-1xl sm:text-3xl" />
      </div>
    </div>
  );
}

export default NavBar;
