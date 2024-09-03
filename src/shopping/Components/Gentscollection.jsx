import React from 'react'
import { Gents } from '../data'

const Gentscollection = () => {
    
    const { title, image1, image2, image3, image4, image5, image6 } = Gents

    const images = [image1, image2, image3, image4, image5, image6]

  return (
    <div className="collectionSection">
      <h2>{title}</h2>

      <div className="menImages">

        {images.map((src, index) => <img key={index} src={src} alt={`Gent ${index + 1}`} />)}
      
      </div>
    </div>
  )
}

export default Gentscollection
