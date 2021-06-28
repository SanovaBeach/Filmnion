import React from 'react'
import {Link} from 'react-router-dom'

const Thumbnails = ({movie, titleId, clickable, image, media_type}) => {

  return (
    <React.Fragment>
      {clickable ?
        (
        <Link to={media_type === 'tv' ? `/${media_type}/${titleId}` :`/${media_type}/${titleId}`}>
          <img src={image} alt="" className="Thumbnails" />
        </Link>
        )
        :
        <img src={image} alt="" className="Thumbnails" />
      }
    </React.Fragment>
  )
}

Thumbnails.defaultProps = {
  media_type: 'movie'
}

export default Thumbnails