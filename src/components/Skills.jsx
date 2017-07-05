import React, {Component} from 'react';
import SectionHeader from './SectionHeader.jsx';


class Skills extends Component {
  render() {
    return (
          <div className="section col-md-12">
          <SectionHeader text="SKILLS" />
          <div className="section-content">
            <ul>
              {
                this.props.skills.map((skill) => {
                  return <li>{skill}</li>
                })
              }
            </ul>
          </div>
          </div>
    );
  }
}
export default Skills;
