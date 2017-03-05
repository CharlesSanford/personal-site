import React, { PropTypes } from 'react';
import s from './ExperienceContent.css';
import {Button} from 'react-mdl';
var classNames = require('classnames/bind');


var cx = classNames.bind(s)

class ExperienceContent extends React.Component {

 render () {
   var contentClass = cx({
       'content-collapsed': this.props.buttonSelected,
       'content-expanded': !this.props.buttonSelected
     })

     return(
   <div>
   <div className = {s.card}>
       <h4><b>UX Developer - <i>Seequ</i></b></h4>
         Consulted on style, created and edited icons in Photoshop.
       <br/>
         Created components and refined style in the Android application using Android Studio, Java and XML.
       <br/>
         Fixed bugs and added new features to the iOS application using X Code, Objective C and Swift.
       <br/>
         Created and styled an inhouse web chat client using ReactJS.
   </div>
   <div className = {s.card}>
       <h4><b>Undergraduate Researcher - <i>Vanderbilt University</i></b></h4>
         Trained rhesus macaques daily for neuroscience study.
       <br/>
         Read through and dissected several relevant research papers.
       <br/>
         Learned from mandatory classes and first hand experience a good deal of animal handling technique.
   </div>
   <div className = {s.card}>
     <h4><b>Technology Consultant - <i>Self-Employed</i></b></h4>
         Fixed computer problems, and arranged preventative measures for end users.
       <br/>
         I also gave copious advice on hardware and software choices.
   </div>
   </div>
 )
 }
}
export default ExperienceContent;
