import React, { PropTypes } from 'react';
import s from './SkillsContent.css';
import {Button} from 'react-mdl';
var classNames = require('classnames/bind');


var cx = classNames.bind(s)

class SkillsContent extends React.Component {

 render () {
   var contentClass = cx({
       'content-collapsed': this.props.buttonSelected,
       'content-expanded': !this.props.buttonSelected
     })

     return(
   <div className = {s.card}>
     <div title={'Swift'} className = {s.imageBox1}>
       <img className = {s.image1} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/2000px-Swift_logo.svg.png'}/>
     </div>
     <div title={'Java'} className = {s.imageBox2}>
      <img className = {s.image2} src={'http://i.imgur.com/komTVCK.png'}/>
     </div>
     <div title={'React'} className = {s.imageBox3}>
       <img className = {s.image3} src={'http://builtwithreact.io/img/share-logo.jpg'}/>
     </div>
 </div>

 )
 }
}
export default SkillsContent;
