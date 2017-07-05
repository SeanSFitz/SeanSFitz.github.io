import React, {Component} from 'react';
import SectionHeader from './SectionHeader.jsx'
import ProjectItem from './ProjectItem.jsx'


class Work extends Component {
  render() {
    return (
          <div className="col-md-12 section">
            <SectionHeader text="WEB DEVELOPMENT PROJECTS" />
            <div className="section-content">
              {
                this.props.data.map((item, index) => {
                  return <ProjectItem info={item} key={index} />
                })
              }
            </div>
          </div>
    );
  }
}
export default Work;
