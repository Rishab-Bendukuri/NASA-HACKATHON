/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Carousel from 'react-bootstrap/Carousel';
import ImageSlider from "components/Slider/ImageSlider";
import { SliderData } from "components/Slider/SliderData";

import './Index-marquee.css'
import Chatbot from 'react-chatbot-kit'
export default function Index() {
  return (
    <div className="">
      <IndexNavbar fixed />
    
      <div className="row pt-32 bg-img d-flex aign-items-center justify-content-center">
        <div className="col-sm-8 d-flex align-items-center">
          <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-white">
                What our website is about?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white">
                 It provides entire information about meteoroids and its co-ordinates. It can be used to track their locations. It also provides us with the information on the pattern of the meteoroids falling towards earth. It also warns when a dangerous asteroid is on a collision course towards earth. It is also helpful for various researchers to gain more insight on the meteoroids such as their size, location and its properties.
              </p>
              
          </div>
        </div>
        {/* <div className="col-sm-12 pt-32 text-center">
        <ImageSlider slides={SliderData}></ImageSlider>
        </div> */}
      
      </div>
        
      

      

      
    
      {/* <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} /> */}
      <Footer />
    </div>
  );
}