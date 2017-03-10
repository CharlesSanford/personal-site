import React, { PropTypes } from 'react';
import s from './ExperienceContent.css';

class ExperienceContent extends React.Component {

 render () {
   return(
   <div>
     <div className = {s.card}>
       <h4><b>UX Developer - <i>Seequ</i></b></h4>
       <b>June 2015 - March 2017 </b>&#40;1yr 10mos&#41;
       <br/>
       <br/>
       Consulted on style, created and edited icons in Photoshop.
       <br/>
       Created components and refined style in the Android application using Android Studio.
       <br/>
       Fixed bugs and added new features to the iOS application using X Code.
       <br/>
       Created and styled an inhouse web chat client using ReactJS.
    </div>
    <div className = {s.card}>
       <h4><b>Undergraduate Researcher - <i>Vanderbilt University</i></b></h4>
       <b>August 2014 - August 2015 </b>&#40;1yr 1mo&#41;
       <br/>
       <br/>
       Trained rhesus macaques daily for neuroscience study.
       <br/>
       Read through and dissected several relevant research papers.
       <br/>
       Learned from classes and first hand experience a good deal of animal handling techniques.
    </div>
    <div className = {s.card}>
       <h4><b>Technology Consultant - <i>Self-Employed</i></b></h4>
       <b>May 2013 - August 2013 </b>&#40;4mos&#41;
       <br/>
       <br/>
       Fixed computer problems and arranged preventative measures for end users.
       <br/>
       Gave copious advice on hardware and software choices.
    </div>
    <div className = {s.card}>
       <h4><b>Technology Consultant - <i>Law Offices of Charles Sanford Esq.</i></b></h4>
       <b>May 2013 - August 2013 </b>&#40;4mos&#41;
       <br/>
       <br/>
       Upgraded and modified software systems to increase productivity and improve stability.
       <br/>
       Created a new website complete with a new logo with a modern, flat design aesthetic.
    </div>
   </div>
  )
 }
}
export default ExperienceContent;
