import React, {Component} from 'react';

class EducationItem extends Component {
  render() {
    return (
          <div className="education-item">
            <span className="title"><strong>{this.props.info.title}</strong></span>
            <span className="description">{this.props.info.description} - {this.props.info.duration}</span>
          </div>
    );
  }
}
export default EducationItem;
