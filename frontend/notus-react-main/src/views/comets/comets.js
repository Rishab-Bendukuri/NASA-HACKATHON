import React from 'react'
import "./comets.css"
import IndexNavbarxt from "components/Navbars/IndexNavbarxt.js";
// Meteoroid Meteor Meteorite

function Comets() {
  return (
    <div className='h100 bgc'>
        {/* <div className='cusnav'><IndexNavbarxt/></div> */}
        
        <div className='row justify-content-center align-items-center'>
            <a href='/meteoroids' className='col col-md-4 p-3 col-sm-10 col-10 position-relative rounded rounded-5'>
            <div className="flip-card d-block mx-auto">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="https://www.factsjustforkids.com/wp-content/uploads/meteoroid-facts.png" className='cometimg w-100 h-100'/>
                            <p className='ctitle'>
                                <div className='otext'>
                                Meteoroid
                                </div>
                            </p>
                        </div>
                        <div className="flip-card-back d-flex align-items-center p-4 bg-secondary">
                            
                            <p>A meteoroid is a solid rock-like object that gets separated from its parent body in outer space mostly due collision of asteroids which are humongous in size. It travels through the solar system and comes close to Earth. It's also referred to as a near-Earth object.</p> 
                            
                        </div>
                    </div>
                </div>
            </a>

            <a href='/' className='col col-md-4 p-3 col-sm-10 col-10 position-relative rounded rounded-5'>
                <div className="flip-card d-block mx-auto">
                        <div className="flip-card-inner">
                            <div className="flip-card-front ">
                                <img src="https://english.cdn.zeenews.com/sites/default/files/2016/02/18/461649-ast.jpg" className='cometimg w-100 h-100'/>
                                <p className='ctitle'>
                                    <div className='otext text-primary'>
                                    Meteor
                                    </div>
                                </p>
                            </div>
                            <div className="flip-card-back d-flex align-items-center p-4 bg-secondary">
                                
                                <p>A meteor, otherwise known as a shooting star or fireball, is a meteoroid that fires up and radiates energy when enters Earth's atmosphere.</p>
                            </div>
                        </div>
                    </div>
            </a>

            <a href='/meteorites'className='col col-md-4 p-3 col-sm-10 col-10 position-relative rounded rounded-5'>
                <div className="flip-card d-block mx-auto">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="https://cdn.britannica.com/65/98465-050-8A6EE930/meteorite-Hoba-Grootfontein-Namibia-iron-object-classification-1920.jpg" className='cometimg w-100 h-100'/>
                            <p className='ctitle'>
                                <div className='otext'>
                                    Meteorite
                                </div>
                            </p>
                        </div>
                        <div className="flip-card-back d-flex align-items-center p-4 bg-secondary">
                            
                            <p>A meteorite is a meteor that falls on the earth's surface or ground</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Comets