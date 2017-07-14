import React, {Component} from 'react';

class ProjectItem extends Component {
  render() {
    return (
          <div className="project-item">
            <div className="project-header">
              <span className="project-title">
                <a href={this.props.info.link}>
                  <strong>{this.props.info.title}</strong>
                </a>
              </span>
            </div>
            <ul>
            {
              this.props.info.bullets.map((bullet, index) => {
                return <li key={index} >{bullet}</li>
              })
            }
            </ul>
          </div>
    );
  }
}
export default ProjectItem;
