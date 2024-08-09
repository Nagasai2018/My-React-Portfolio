import React from 'react';
import { BiSolidHandDown } from "react-icons/bi";
import IplImg from "../../assets/IPL.png";
import EmojieImg from "../../assets/Emoji.jfif";
import TodoImg from "../../assets/Todo.png";
import ProImg from "../../assets/Pro.jfif";
import "./index.css";

const ProjectPage = () => {
  return (
    <div className='project-page'>
      <div className='contents-div'>
        <div className='header-section'>
          <h3 className='text-white p-3'>-- Projects Page --</h3>
          <p className='text-white pt-3'>The Below are My <br /> Recent Projects. <BiSolidHandDown size={"30px"} color='white' /></p>
        </div>

        <div className='cards-container'>
          <div className="card">
            <img src={ProImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">Nxt Trendz</h3>
              <hr />
              <p className="card-text">Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by</p>
              <div className='buttons-div'>
                <a href="https://nagasai2018.ccbp.tech/" target='_blank' rel="noreferrer"><button className='btn btn-primary'>Website</button></a>
                <a href="https://github.com/Nagasai2018/Nxt-Trendz-Enhanced" target='_blank' rel="noreferrer"><button className='btn btn-success'>Code</button></a>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={TodoImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">Todos Application</h3>
              <hr />
              <p className="card-text">A comprehensive todo management tool designed to enhance productivity</p>
              <ul className='lists'>
                <li>
                  <p><small>User-friendly interface with HTML, CSS, and Bootstrap for ease of use.</small> </p>
                </li>
              </ul>
              <div className='buttons-div'>
                <a href="https://simpledns.ccbp.tech" target='_blank' rel="noreferrer"> <button className="btn btn-primary">Website</button></a>
                <a href="https://github.com/Nagasai2018/NXTWAVE-Todo-App" target='_blank' rel="noreferrer"> <button className="btn btn-success">Code</button></a>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={EmojieImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">Emoji Game</h3>
              <hr />
              <p className="card-text">Created an exciting memory game with unique emoji clicks and randomized placement, And Achieved a polished look with CSS <br/> <br/> <br/> </p>
              <div className='buttons-div'>
                <a href="https://emojidns.ccbp.tech/" target='_blank' rel="noreferrer"> <button className="btn btn-primary">Website</button></a>
                <a href="https://github.com/Nagasai2018/Emoji-Game" target='_blank' rel="noreferrer"> <button className="btn btn-success">Code</button></a>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={IplImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">Ipl Dashboard</h3>
              <hr />
              <p className='card-text'>Add a Pie Chart feature showing the statistics of a match in the Team Matches Route. The statistics should include the number of matches a team has won, lost, and drawn.</p>
              <div className='buttons-div'>
                <a href="https://dnsipl.ccbp.tech/" target='_blank' rel="noreferrer"> <button className="btn btn-primary">Website</button></a>
                <a href="https://github.com/Nagasai2018/IPL-Dashboard-Enhanced" target='_blank' rel="noreferrer"> <button className="btn btn-success">Code</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
