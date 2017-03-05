import React, { PropTypes } from 'react';
import s from './EducationContent.css';
import {Button} from 'react-mdl';
var classNames = require('classnames/bind');


var cx = classNames.bind(s)

class EducationContent extends React.Component {

 render () {
   var contentClass = cx({
       'content-collapsed': this.props.buttonSelected,
       'content-expanded': !this.props.buttonSelected
     })

     return(
   <div>
   <div className = {s.card}>
       <h4><b><i>Vanderbilt University</i>
        <br/>
       2012-2016
     </b></h4>
       Graduated in 4 years with a degree in Neuroscience
       <br/>
       Worked as Managing Editor of Vanderbilt's satire paper <i>The Slant</i> and completely revitalized its aging aesthetic
   </div>
   <div className = {s.card}>
       <h4><b><i>Vero Beach High School</i>
       <br/>
     2008-2012
   </b></h4>
 Trivia Team, Yearbook, Debate Club, Top Ten
 <br/>
   </div>
   </div>
 )
 }
}
export default EducationContent;
