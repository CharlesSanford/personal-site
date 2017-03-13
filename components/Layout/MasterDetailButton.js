import React, { PropTypes } from 'react';
import s from './MasterDetailButton.css';
var classNames = require('classnames/bind');
import {Button} from 'react-mdl';
import ExperienceContent from '../../components/Layout/ExperienceContent';
import EducationContent from '../../components/Layout/EducationContent';
import SkillsContent from '../../components/Layout/SkillsContent';


var cx = classNames.bind(s)

class MasterDetailButton extends React.Component {

  constructor(props) {
    super(props)
    this.state = {buttonSelected: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ buttonSelected: !this.state.buttonSelected })
  }

  render () {
    var contentClass = cx({
        'content-collapsed': this.state.buttonSelected,
        'content-expanded': !this.state.buttonSelected
    })

    if (this.state.buttonSelected == false) {
      return (
        <div>
          <Button ripple raised primary className={s.button} onClick= {this.handleClick}>
            <h3><b>{this.props.title}</b></h3>
          </Button>
          <div className={contentClass}>
          </div>
        </div>
      )
    } else {
      if (this.props.title == 'Experience') {
        return (
          <div>
            <Button ripple raised primary className={s.selectedButton} onClick= {this.handleClick}>
              <h3><b>{this.props.title}</b></h3>
            </Button>
            <div className={contentClass}>
              <ExperienceContent/>
            </div>
          </div>
        )
      }
      if (this.props.title == 'Education') {
        return (
          <div>
            <Button ripple raised primary className={s.selectedButton} onClick= {this.handleClick}>
              <h3><b>{this.props.title}</b></h3>
            </Button>
            <div className={contentClass}>
              <EducationContent/>
            </div>
          </div>
        )
      }
      if (this.props.title == 'Skills') {
        return (
          <div>
            <Button ripple raised primary className={s.selectedButton} onClick= {this.handleClick}>
              <h3><b>{this.props.title}</b></h3>
            </Button>
            <div className={contentClass}>
              <SkillsContent/>
            </div>
          </div>
        )
      }
    }
  }
}
export default MasterDetailButton;
