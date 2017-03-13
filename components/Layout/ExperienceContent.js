import React, { PropTypes } from 'react';
import s from './ExperienceContent.css';

class ExperienceContent extends React.Component {

 render () {
   return(
   <div>
     <div className = {s.card}>
       <div className = {s.topContainer}>
         <div className = {s.headerContainer}>
           <h4><b>UX Developer</b></h4>
           <h4><b><i>Seequ</i></b></h4>
           <b>June 2015 - March 2017 </b>&#40;1yr 10mos&#41;
         </div>
         <div className = {s.imageContainer}>
           <img className = {s.image} src = {'cards/seequ.jpg'}></img>
         </div>
       </div>
       <div className = {s.contentContainer}>
         <ul>
           <li>Consulted on style, created and edited icons in Photoshop.</li>
           <li>Created components and refined style in the Android application using Android Studio.</li>
           <li>Fixed bugs and added new features to the iOS application using X Code.</li>
           <li>Created and styled an inhouse web chat client using ReactJS.</li>
         </ul>
       </div>
    </div>
    <div className = {s.card}>
     <div className = {s.topContainer}>
       <div className = {s.headerContainer}>
         <h4><b>Undergraduate Researcher</b></h4>
         <h4><b><i>Vanderbilt University</i></b></h4>
         <b>August 2014 - August 2015 </b>&#40;1yr 1mo&#41;
       </div>
       <div className = {s.imageContainer}>
         <img className = {s.image} src = {'cards/VU.jpg'}></img>
       </div>
     </div>
     <div className = {s.contentContainer}>
       <ul>
         <li>Trained rhesus macaques daily for neuroscience study.</li>
         <li>Read through and dissected several relevant research papers.</li>
         <li>Learned from classes and first hand experience a good deal of animal handling techniques.</li>
       </ul>
     </div>
    </div>
    <div className = {s.card}>
       <div className = {s.topContainer}>
         <div className = {s.headerContainer}>
           <h4><b>Technology Consultant</b></h4>
           <h4><b><i>Self-Employed</i></b></h4>
           <b>May 2013 - August 2013 </b>&#40;4mos&#41;
         </div>
         <div className = {s.imageContainer}>
           <img className = {s.image} src = {'cards/cs.jpg'}></img>
         </div>
       </div>
       <div className = {s.contentContainer}>
         <ul>
           <li>Fixed computer problems and arranged preventative measures for end users.</li>
           <li>Gave copious advice on hardware and software choices.</li>
         </ul>
       </div>
    </div>
    <div className = {s.card}>
       <div className = {s.topContainer}>
         <div className = {s.headerContainer}>
           <h4><b>Technology Consultant</b></h4>
           <h4><b><i>Law Offices of Charles Sanford Esq.</i></b></h4>
           <b>May 2013 - August 2013 </b>&#40;4mos&#41;
         </div>
         <div className = {s.imageContainer}>
           <img className = {s.image} src = {'cards/cardinal.jpg'}></img>
         </div>
       </div>
       <div className = {s.contentContainer}>
         <ul>
           <li>Upgraded and modified software systems to increase productivity and improve stability.</li>
           <li>Created a new website complete with a new logo with a modern, flat design aesthetic.</li>
         </ul>
       </div>
    </div>
   </div>
  )
 }
}
export default ExperienceContent;
