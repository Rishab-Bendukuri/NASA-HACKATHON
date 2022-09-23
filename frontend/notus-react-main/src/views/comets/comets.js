import React from 'react'
import "./comets.css"
// import { useNavigate } from "react-router-dom";

function Comets() {
    // let navigate=useNavigate()
  return (
    <div>
        <div className='row p-5 justify-content-center align-items-center'>
            <a href='' className='col col-md-4 p-3 col-sm-10 col-10 position-relative rounded rounded-5'>
                <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg"/>
                <p className='ctitle'>
                    <div className='otext'>
                        Meteoroid
                    </div>
                </p>
            </a>

            <div className='col col-md-4 p-3 col-sm-10 col-10 position-relative rounded rounded-5'>
                <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg"/>
                <p className='ctitle'>
                    <div className='otext'>
                        Meteor
                    </div>
                </p>
            </div>

            <div className='col col-md-4 p-3 col-sm-10 col-10 position-relative rounded rounded-5'>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg"/>
                            <p className='ctitle'>
                                <div className='otext'>
                                    Meteor
                                </div>
                            </p>
                        </div>
                        <div class="flip-card-back">
                            <h1>John Doe</h1> 
                            <p>Architect & Engineer</p> 
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Comets