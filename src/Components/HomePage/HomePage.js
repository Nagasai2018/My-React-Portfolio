import React from 'react';
import { MdContacts } from "react-icons/md";
import Navbar from '../Navbar/Navbar';
import "./index.css";
import { FaCode } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className='containers d-flex justify-content-center align-items-center'>
        <div className='content-div'>
          <div className='text-center'>
            <h1>-- This Is NAGA SAI --</h1>
            <p className='text-white'>I am a Full-Stack Developer</p>
            <div className='btn-container mt-3'>
              <a href='/projects' className='me-3'>
                <button className='btn btn-success'><p className='p-0 m-0'>Projects <FaCode size={"20px"}/></p></button>
              </a>
              <a href='/contact'>
                <button className='btn btn-primary'><p className='p-0 m-0'>Contact <MdContacts/> </p></button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
