import React, { PropTypes } from 'react';
import s from './InnerContent.css';

class InnerContent extends React.Component {
  render () {
    if (this.props.tab == 0) {
      return(
        <div>
        <div className = {s.name}>
        Charles Sanford
        </div>
        <br/>
        <img className = {s.image} src={'https://scontent.fbna1-1.fna.fbcdn.net/v/t1.0-9/16473387_10210798772518442_4388172489413702864_n.jpg?oh=d9911980d0800f25085c4dfebb2fc7dc&oe=58FFC4BA'}/>
        </div>
      )
    }
    if (this.props.tab == 1) {
      return(
        <div>2</div>
      )
    }
    if (this.props.tab == 2) {
      return(
        <div>3</div>
      )
    }
  }
}
export default InnerContent;
