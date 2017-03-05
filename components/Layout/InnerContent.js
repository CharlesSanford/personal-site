import React, { PropTypes } from 'react';
import s from './InnerContent.css';
import MasterDetailButton from '../../components/Layout/MasterDetailButton';


class InnerContent extends React.Component {
  render () {
    if (this.props.tab == 0) {
      return(
        <div className = {s.body}>
          <br/>
          <img className = {s.image} src={'https://scontent.fbna1-1.fna.fbcdn.net/v/t1.0-9/16473387_10210798772518442_4388172489413702864_n.jpg?oh=d9911980d0800f25085c4dfebb2fc7dc&oe=58FFC4BA'}/>
          <div className = {s.card}>
              I am a driven and focused young professional with diverse interests and talents. I graduated from Vanderbilt University with a degree in Neuroscience with intentions to become a psychiatrist. However, my summer job with Seequ inspired me to pursue programming and UI design. This was a relatively easy transition for me due to my years of design and computer experience. Now, I'm working at Seequ, and learning as much as I can about the field in order to continue pursuing computer science and interdisciplinary work in my future.
          </div>
        </div>
      )
    }
    if (this.props.tab == 1) {
      return(
        <div className = {s.body}>
        </div>
      )
    }
    if (this.props.tab == 2) {
      return(
        <div>
          <MasterDetailButton title = {'Experience'}/>
          <MasterDetailButton title = {'Education'}/>
          <MasterDetailButton title = {'Skills'}/>
        </div>
      )
    }
  }
}
export default InnerContent;
