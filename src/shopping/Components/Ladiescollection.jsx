import React from 'react'
import { Ladies } from '../data'

const Ladiescollection = () => {
  return (
    <div className="bannersection">
        <div className="bannerbox">
            <img src="./assets/LadiesBanner.gif"/>
        </div>

        <div className="collectionSection">
            <h2>{Ladies.title}</h2>
                <div className="menImages">
                    <img src={Ladies.image1}/>
                    <img src={Ladies.image2}/>
                    <img src={Ladies.image3}/>
                    <img src={Ladies.image4}/>
                    <img src={Ladies.image5}/>
                    <img src={Ladies.image6}/>
                </div>
        </div>
    </div>
  )
}

export default Ladiescollection
