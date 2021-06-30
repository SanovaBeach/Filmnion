import React from 'react'

import logo from '../../images/tmdb_logo.svg'
import {useFetchMovies} from '../../hooks/useFetchMovies'

const Footer = () => {
  const {loading} = useFetchMovies()

  return (
    <React.Fragment>
      {!loading && (

      <footer className="Footer">
        <div className="Footer_container container">
          <div className="Footer_logoContainer">
            <img src={logo} alt="tmdb logo" className='Footer_logo' />
          </div>
          <div className="Footer_text">
            <h3 className="Footer_heading">
              This website is powered by TMDB LOGO
            </h3>
            <p className="Footer_copyright">
              &copy; 2021, Filmnion Inc.,
            </p>
          </div>
        </div>
      </footer>   
      )}
    </React.Fragment>
  )
}

export default Footer