import React, { PropTypes } from 'react';
import s from './InnerContent.css';
import MasterDetailButton from '../../components/Layout/MasterDetailButton';


class InnerContent extends React.Component {
  render () {
    return(
      <div className = {s.body}>
        <br/>
        <img className = {s.image} src={'https://scontent.fbna1-1.fna.fbcdn.net/v/t1.0-9/16473387_10210798772518442_4388172489413702864_n.jpg?oh=d9911980d0800f25085c4dfebb2fc7dc&oe=58FFC4BA'}/>
        <div className = {s.card}>
          <b>23 year old front-end developer with a passion for design and a thirst for knowledge.</b>
          <br/>
          <b>Email: Charles.H.Sanford@Vanderbilt.edu</b>
        </div>
        <MasterDetailButton id={'button1'} title = {'Experience'}/>
        <MasterDetailButton id={'button2'} title = {'Education'}/>
        <MasterDetailButton id={'button3'} title = {'Skills'}/>
      </div>
    )
  }
}
export default InnerContent;
