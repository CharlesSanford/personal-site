import React, { PropTypes } from 'react';
import s from './SkillsContent.css';

class SkillsContent extends React.Component {

 render () {
  return(
   <div className = {s.card}>
     <div className = {s.flex}>
       <div title={'Android'} className = {s.imageBox1}>
         <img className = {s.image} src={'skills/android.png'}/>
       </div>
       <div title={'HTML'} className = {s.imageBox2}>
         <img className = {s.image} src={'skills/html.png'}/>
       </div>
       <div title={'Indesign'} className = {s.imageBox3}>
         <img className = {s.image} src={'skills/indesign.png'}/>
       </div>
       <div title={'Photoshop'} className = {s.imageBox3}>
         <img className = {s.image} src={'skills/photoshop.png'}/>
       </div>
     </div>
     <div className = {s.flex}>
       <div title={'Javascript'} className = {s.imageBox1}>
         <img className = {s.image} src={'skills/js.png'}/>
       </div>
       <div title={'Node.js'} className = {s.imageBox2}>
         <img className = {s.image} src={'skills/node.png'}/>
       </div>
       <div title={'React'} className = {s.imageBox3}>
         <img className = {s.image} src={'skills/react.png'}/>
       </div>
       <div title={'Swift'} className = {s.imageBox3}>
         <img className = {s.image} src={'skills/swift.png'}/>
       </div>
     </div>
   </div>

 )
 }
}
export default SkillsContent;
