import React, { PropTypes } from 'react';
import s from './EducationContent.css';
import {Button} from 'react-mdl';
var classNames = require('classnames/bind');


var cx = classNames.bind(s)

class EducationContent extends React.Component {

 render () {
   return(
     <div>
       <div className = {s.card}>
         <h4><b><i>Vanderbilt University</i></b></h4>
         <b>2012-2016</b>
         <br/>
         <br/>
         Graduated in 4 years with a degree in Neuroscience
         <br/>
         Worked as Managing Editor of Vanderbilt's satire paper <i>The Slant</i> and completely revitalized its aging aesthetic
       </div>
       <div className = {s.card}>
         <h4><b><i>Vero Beach High School</i></b></h4>
         <b>2008-2012</b>
         <br/>
         <br/>
         Trivia Team, Yearbook, Debate Club, Top Ten
         <br/>
       </div>
     </div>
  )
 }
}
export default EducationContent;
