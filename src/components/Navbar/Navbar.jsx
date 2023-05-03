import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

export default function Navbar({ userData ,logout}) {
  console.log(userData)
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${styles.bgNav} bg-body-tertiary py-3` }>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {userData ? <ul className="navbar-nav mr-auto">

              <li className="nav-item active">
                <Link className="nav-link" to="">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="movies">Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="tvshows">Tv Shows</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="people">People</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">About</Link>
              </li>
            </ul> : ""}

            <ul className="navbar-nav ms-auto py-3">
              <div className='social-media d-flex align-items-center'>
                <Link className='fab fa-facebook mx-2' to="https://www.facebook.com/" target='_blank' style={{ textDecoration: 'none' }}></Link>
                <Link className='fab fa-youtube mx-2' to="https://www.youtube.com/" target='_blank' style={{ textDecoration: 'none' }}></Link>
                <Link className='fab fa-snapchat mx-2' to="https://www.snapchat.com/" target='_blank' style={{ textDecoration: 'none' }}></Link>
                <Link className='fab fa-instagram mx-2' to="https://www.instagram.com/" target='_blank' style={{ textDecoration: 'none' }}></Link>
              </div>
              {userData ?
                <>
                  <li className="nav-item ">
                    <div className='d-flex align-items-center mx-2 name-logout' >
                    
                      <Link to='profile' className='py-3 mr-2 name'>Hello {userData.name}</Link>
                      <Link className="nav-link mx-2 logout" onClick={logout}>Logout</Link>
                    </div>

                  </li>
                </>
                :
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="register">Register</Link>
                  </li>
                </>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
