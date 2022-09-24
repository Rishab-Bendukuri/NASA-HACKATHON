import React from 'react'
import meteoroids_map from "assets/img/meteoroids_map.jpeg"
function Emeteoroids() {
  return (
    <div className='h100 d-flex flex-column bg-light align-items-center justify-content-center'>
        <h1 className='text-center'>Meteoroids Location traced out on the map is shown below!</h1>
        <img src={meteoroids_map} className="d-block mx-auto"></img>
    </div>
    
  )
}

export default Emeteoroids