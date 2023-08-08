import React from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import { IoEarth } from 'react-icons/io5';
import './styles/Navbar.css';

function Navbar() {
  return (
    <nav>
      <IoEarth className="logo" />
      <p>Let&apos;s Explore Countries!</p>
      <div className="buttons">
        <BiMicrophone />
        <AiFillSetting />
      </div>
    </nav>
  );
}
export default Navbar;
