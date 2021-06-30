import React from 'react'

import {IMAGE_BASE_URL, POSTER_SIZE} from '../../constants/config'
import NoImage from '../../images/no_image.jpg'

const Actors = ({credits}) => {

  return (
    <React.Fragment>
      <div className="Actors">
        <h1 className="Actors_title">Casts</h1>
        <div className="Actors_container container">
          {credits.map((item)=> {
            const {character, name, profile_path, credit_id} = item
            return(
              <div className="Actors_content" key={credit_id}>
                <img 
                  src={profile_path 
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${profile_path}`
                    : NoImage
                  } 
                  alt='name' 
                  className="Actors_image" 
                />
                <div className="Actors_desc">
                  <h3 className="Actors_name">{name}</h3>
                  <p className="Actors_character">{character}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Actors