import React, {Component} from 'react';

class ProjectItem extends Component {
  render() {
    return (
          <div className="project-item">
            <div className="project-header">
              <span className="project-title"><strong>{this.props.info.title}</strong></span>
            </div>
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
export default ProjectItem;
