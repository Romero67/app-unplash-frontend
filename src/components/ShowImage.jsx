import React from 'react'
import '../css/ShowImage.css'

const ShowImage = ({url}) => {
 
 return (
  <div>
   <img src={url} alt="" className='img'/>
  </div>
 )
}

export default ShowImage
