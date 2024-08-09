import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><h1 className='fs-3'>-- Portfolio --</h1></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/"><p className='text-white'>Home</p></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects"><p className='text-white'>Projects</p></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about"><p className='text-white'>About</p></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact"><p className='text-white'>Contact</p></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
