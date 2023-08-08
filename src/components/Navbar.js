import React from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import { IoEarth } from 'react-icons/io5';

function Navbar() {
  return (
    <nav>
      <IoEarth />
      <p>Let&apos;s Explore Countries!</p>
      <div>
        <BiMicrophone />
        <AiFillSetting />
      </div>
    </nav>
  );
}
export default Navbar;
