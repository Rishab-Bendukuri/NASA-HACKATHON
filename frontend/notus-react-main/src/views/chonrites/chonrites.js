import React,{useEffect} from 'react'
import "./chonrites.css"

import Aos from 'aos'
import "aos/dist/aos.css"

function Chonrites() {
    useEffect(()=>{
        Aos.init({ duration: 2000 });
    },[]);
    return (
        <div className='h100 bg-light d-flex flex-column justify-content-center bga'>
            <div data-aos="flip-right" className='d-flex-column p-5 m-5 cbg'>
                <h2 className='h1 text-light text-center'>What is chondrites?</h2>
                <p className='text-light text-center'>
                    A chondrite /ˈkɒndraɪt/ is a stony (non-metallic) meteorite that has not been modified, by either melting or differentiation of the parent body.[a][1] They are formed when various types of dust and small grains in the early Solar System accreted to form primitive asteroids. Some such bodies that are captured in the planet's gravity well become the most common type of meteorite by (whether quickly, or after many orbits) arriving on a trajectory toward the planet's surface. Estimates for their contribution to the total meteorite population vary between 85.7%[2] and 86.2%.[3]
                    Their study provides important clues for understanding the origin and age of the Solar System, the synthesis of organic compounds, the origin of life and the presence of water on Earth. One of their characteristics is the presence of chondrules (from the Ancient Greek χόνδρος chondros, grain), which are round grains formed as molten, or partially molten droplets, in the space by distinct minerals, that normally constitute between 20% and 80% of a chondrite by volume.[4]
                    Chondrites can be differentiated from iron meteorites due to their low iron and nickel content. Other non-metallic meteorites, achondrites, which lack chondrules, were formed more recently.[5] There are currently over 27,000 chondrites in the world's collections. The largest individual stone ever recovered, weighing 1770 kg, was part of the Jilin meteorite shower of 1976. Chondrite falls range from single stones to extraordinary showers consisting of thousands of individual stones. An instance of the latter occurred in the Holbrook fall of 1912, in which an estimated 14,000 stones grounded in northern Arizona.
                </p>
            </div>

            <div data-aos="flip-right" className='d-flex-column p-5 m-5 cbg'>
                <h2 className='h1 text-light text-center'>Why are chondrites important for research?</h2>
                <p className='text-light text-center'>
                    A chondrite /ˈkɒndraɪt/ is a stony (non-metallic) meteorite that has not been modified, by either melting or differentiation of the parent body.[a][1] They are formed when various types of dust and small grains in the early Solar System accreted to form primitive asteroids. Some such bodies that are captured in the planet's gravity well become the most common type of meteorite by (whether quickly, or after many orbits) arriving on a trajectory toward the planet's surface. Estimates for their contribution to the total meteorite population vary between 85.7%[2] and 86.2%.[3]
                    Their study provides important clues for understanding the origin and age of the Solar System, the synthesis of organic compounds, the origin of life and the presence of water on Earth. One of their characteristics is the presence of chondrules (from the Ancient Greek χόνδρος chondros, grain), which are round grains formed as molten, or partially molten droplets, in the space by distinct minerals, that normally constitute between 20% and 80% of a chondrite by volume.[4]
                    Chondrites can be differentiated from iron meteorites due to their low iron and nickel content. Other non-metallic meteorites, achondrites, which lack chondrules, were formed more recently.[5] There are currently over 27,000 chondrites in the world's collections. The largest individual stone ever recovered, weighing 1770 kg, was part of the Jilin meteorite shower of 1976. Chondrite falls range from single stones to extraordinary showers consisting of thousands of individual stones. An instance of the latter occurred in the Holbrook fall of 1912, in which an estimated 14,000 stones grounded in northern Arizona.
                </p>
            </div>
        </div>
    )
}

export default Chonrites