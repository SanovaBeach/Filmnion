import React from 'react'

const HeroImage = ({ backDrop}) => {
  return (
    <React.Fragment>
      <div className="HeroImage" 
        style={{
          backgroundImage: `url(${backDrop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="HeroImage_container">


        </div>
      </div>
    </React.Fragment>
  )
}

export default HeroImage