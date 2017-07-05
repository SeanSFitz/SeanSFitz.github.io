import React, {Component} from 'react';
import SectionHeader from './SectionHeader.jsx';

function createMarkup(text) {
  return {__html: text};
}

class Skills extends Component {
  render() {
    return (
          <div className="section col-md-12">
          <SectionHeader text="SKILLS" />
          <div className="section-content">
            <ul>
              {
                this.props.skills.map((skill, index) => {
                  return <li className="skill" dangerouslySetInnerHTML={createMarkup(skill)} key={index} />
                })
              }
            </ul>
          </div>
          </div>
    );
  }
}
export default Skills;
