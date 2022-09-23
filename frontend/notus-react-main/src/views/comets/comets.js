import React from 'react'
import "./comets.css"
// Meteoroid Meteor Meteorite

function Comets() {
  return (
    <div className='h100 bgc'>
        <div className='row justify-content-center align-items-center'>
            <div className='col col-md-4 p-3 col-sm-10 col-10 position-relative rounded rounded-5'>
            <div className="flip-card d-block mx-auto">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="https://www.factsjustforkids.com/wp-content/uploads/meteoroid-facts.png" className='cometimg'/>
                            <p className='ctitle'>
                                <div className='otext'>
                                Meteoroid
                                </div>
                            </p>
                        </div>
                        <div className="flip-card-back">
                            <h1>John Doe</h1> 
                            <p>Architect & Engineer</p> 
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col col-md-4 p-3 col-sm-10 col-10 position-relative rounded rounded-5'>
                <div className="flip-card d-block mx-auto">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg"/>
                                <p className='ctitle'>
                                    <div className='otext'>
                                    Meteor
                                    </div>
                                </p>
                            </div>
                            <div className="flip-card-back">
                                <h1>John Doe</h1> 
                                <p>Architect & Engineer</p> 
                                <p>We love that guy</p>
                            </div>
                        </div>
                    </div>
            </div>

            <div className='col col-md-4 p-3 col-sm-10 col-10 position-relative rounded rounded-5'>
                <div className="flip-card d-block mx-auto">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg"/>
                            <p className='ctitle'>
                                <div className='otext'>
                                    Meteorite
                                </div>
                            </p>
                        </div>
                        <div className="flip-card-back">
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