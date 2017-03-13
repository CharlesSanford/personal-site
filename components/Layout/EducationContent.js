import React, { PropTypes } from 'react';
import s from './EducationContent.css';

class EducationContent extends React.Component {

 render () {
   return(
     <div>
       <div className = {s.card}>
         <div className = {s.topContainer}>
           <div className = {s.headerContainer}>
             <h4><b><i>Vanderbilt University</i></b></h4>
             <b>2012 - 2016</b>
           </div>
           <div className = {s.imageContainer}>
             <img className = {s.image} src = {'cards/VU.jpg'}></img>
           </div>
         </div>
           <div className = {s.contentContainer}>
             <ul>
               <li>Graduated in 4 years with a degree in Neuroscience.</li>
               <li>Worked as Managing Editor of Vanderbilt's satire paper <i>The Slant</i> and completely revitalized its aging aesthetic.</li>
             </ul>
           </div>
       </div>
       <div className = {s.card}>
         <div className = {s.topContainer}>
           <div className = {s.headerContainer}>
             <h4><b><i>Vero Beach High School</i></b></h4>
             <b>2008 - 2012</b>
           </div>
           <div className = {s.imageContainer}>
             <img className = {s.image} src = {'cards/vb.jpg'}></img>
           </div>
         </div>
         <div className = {s.contentContainer}>
           <ul>
             <li>Participated in Trivia Team, Yearbook, Debate Club and Top Ten.</li>
           </ul>
         </div>
       </div>
     </div>
  )
 }
}
export default EducationContent;
