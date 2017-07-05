import React, {Component} from 'react';

class WorkItem extends Component {
  render() {
    return (
          <div className="education-item">
            <div className="job-header">
              <span className="job-title"><strong>{this.props.info.title}</strong></span>
              <span className="job-duration pull-right"><strong>{this.props.info.duration}</strong></span>
            </div>
            <span className="company-name"><em>{this.props.info.company}</em></span>
            <ul>
            {
              this.props.info.bullets.map((bullet) => {
                return <li>{bullet}</li>
              })
            }
            </ul>
          </div>
    );
  }
}
export default WorkItem;
