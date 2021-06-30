import React from 'react'
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../constants/config'
import {FaStar} from 'react-icons/fa'

const Episodes = ({episode}) => {

  return (
    <React.Fragment>
      <div className="Episodes">
        <img 
          src={`${IMAGE_BASE_URL}${POSTER_SIZE}${episode.still_path}`} 
          alt={episode.name} 
          className="Episodes_image" 
        />
        <div className="Episodes_desc">
          <p className="Episodes_name">{episode.name}</p>
          <p className="Episodes_number">Episode: {episode.episode_number}</p>
          <p className="Episodes_rating">
            <span className="Episodes_icon">
              <FaStar />
            </span>
            {episode.vote_average}
          </p>
          <p className="Episodes_overview">{episode.overview}</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Episodes