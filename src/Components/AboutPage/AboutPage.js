import React from 'react'
import { FaAngleDoubleDown, FaEye } from "react-icons/fa";
import "./index.css"
import Resume from "../../assets/Naga_Sai_Resume.pdf"

const AboutPage = () => {
  return (
    <div>
      <div className='main-div bg-dark '>
        <div className='text-white text-center'>
          <div className='content-div'>
            <div className='pb-5'>
              <h1 className='text-white'>-- About ME --</h1>
              <p className='p-3 fs-3 text-white'>Click on below button's For My Resume</p>
              <a href={Resume} target='_blank' download={Resume} rel="noreferrer" > 
                <button className='btn btn-warning'>
                  <p className='m-0'>Download Resume <FaAngleDoubleDown/> </p>
                </button> 
              </a> 
              <a href={Resume} target='_blank' rel="noreferrer" > 
                <button className='btn btn-primary'>
                  <p className='m-0'>View Resume <FaEye style={{ size:"20px" }}/> </p>
                </button> 
              </a> 
            </div>
          </div>      
        </div>
      </div>
    </div>
  )
}

export default AboutPage
