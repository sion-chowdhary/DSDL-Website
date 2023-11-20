import React from 'react';
import femate from "../assets/images/f.gif";
import cheque from "../assets/images/cheque.jpeg.jpg";
import openai from "../assets/images/OpenAI.jpg";
import mdps from "../assets/images/mdps.jpg";
import yoga from "../assets/images/yoga.jpg"
import { NavLink } from "react-router-dom";
import "./css/WhatWeDo.css";

const WhatWeDo = () => {
  return (
    <>
     <div className='main-prj'>
       <center>
         <div className='text-prj'> Projects </div>
       </center>
       <div className="inner-prj">
        <div className="blog-prj">
          <img src={femate} alt="femate" className="image" />
        </div>
        <div className="prj-content">
          <div className="prj-main-heading">
            <div>Femate</div>
          </div>
          <div className="prj-2">
          Developed for women to track their periods and pamper themselves on our pamper-booth.
          They can shop for menstrual hygiene products and call a loved one whenever they are feeling low.
          </div>
          <div>
            <NavLink to="https://github.com/praxton74/Femate">
              <div className="prj-button">Explore</div>
            </NavLink>
          </div>
        </div>
      </div>
       <div className="inner-prj">
        <div className="blog-prj">
          <img src={cheque} alt="cheque" className="image" />
        </div>
        <div className="prj-content">
          <div className="prj-main-heading">
            <div>Cheque-Detection</div>
          </div>
          <div className="prj-2">
          Bank handles large volumes of cheques in the clearing process. The process involves many technical verifications including signature verification. Some of these steps are manual and require human intervention to complete the process. The current process requires the high human capital deployment and longer processing time.
          </div>
          <div>
            <NavLink to="https://github.com/GreatClasher/Cheque-Detection">
              <div className="prj-button">Explore</div>
            </NavLink>
          </div>
        </div>
      </div>
       <div className="inner-prj">
        <div className="blog-prj">
          <img src={openai} alt="openai" className="image" />
        </div>
        <div className="prj-content">
          <div className="prj-main-heading">
            <div>GPT-2 Text Classification API</div>
          </div>
          <div className="prj-2">
          This repository contains code to deploy a RESTful API for text classification using the GPT-2 model. The API is built using FastAPI, and it allows users to make predictions on text input.
          </div>
          <div>
            <NavLink to="https://github.com/GreatClasher/Gpt2_classification">
              <div className="prj-button">Explore</div>
            </NavLink>
          </div>
        </div>
      </div>
       <div className="inner-prj">
        <div className="blog-prj">
          <img src={yoga} alt="openai" className="image" />
        </div>
        <div className="prj-content">
          <div className="prj-main-heading">
            <div>Yoga Posture Recognition</div>
          </div>
          <div className="prj-2">
          Yoga posture recognition via machine learning involves collecting diverse datasets of yoga poses, preprocessing and labeling the data, selecting a suitable model like Convolutional Neural Networks (CNNs), training and fine-tuning the model, and deploying it for real-time recognition. Continuous monitoring and user feedback inform updates for improved accuracy. The process typically includes developing a user interface for interaction. Successful implementation hinges on a curated dataset, optimal model choice, and effective training. Ongoing refinement ensures the system's reliability in identifying yoga poses from images or videos.
          </div>
          <div>
            <NavLink to="https://github.com/aryanmishra29/G1-BlissFit.git">
              <div className="prj-button">Explore</div>
            </NavLink>
          </div>
        </div>
      </div>
       <div className="inner-prj">
        <div className="blog-prj">
          <img src={mdps} alt="openai" className="image" />
        </div>
        <div className="prj-content">
          <div className="prj-main-heading">
            <div>Multiple Disease Prediction System</div>
          </div>
          <div className="prj-2">
          Our Multiple Disease Prediction System is an innovative and user-friendly application designed to predict three prevalent health conditions: diabetes, heart disease, and Parkinson's. Deployed on the Streamlit platform, this system leverages advanced machine learning algorithms to analyze user-inputted data and provide insightful predictions regarding the likelihood of these diseases.
          </div>
          <div>
            <NavLink to="https://t7grl3uld.streamlit.app/">
              <div className="prj-button">Explore</div>
            </NavLink>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default WhatWeDo