import React from 'react'

const Loading = ({page}) => {
  return (
  <div className={`${page && 'loading'}`}>
    <div className='Spinner'>
    </div>
  </div>
  )
}

export default Loading