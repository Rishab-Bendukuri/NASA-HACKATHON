import React from 'react'
import { SliderData } from 'components/Slider/SliderData'
import ImageSlider from 'components/Slider/ImageSlider'
import config from "chatbot/config";
import Chatbot from 'react-chatbot-kit'
import ActionProvider from "chatbot/ActionProvider";
import MessageParser from "chatbot/MessageParser";
import ParticlesBg from 'particles-bg';
import './landingcust.css'
function Landing() {
  return (
    <div className='container h-50 cust'>
      <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
    </div>
  )
}

export default Landing