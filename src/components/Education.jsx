import React, {Component} from 'react';
import SectionHeader from './SectionHeader.jsx'
import EducationItem from './EducationItem.jsx'


class Education extends Component {
  render() {
    return (
          <div className="col-md-7 section">
            <SectionHeader text="EDUCATION" />
            <div className="section-content">
              {
                this.props.data.map((item, index) => {
                  return <EducationItem info={item} key={index} />
                })
              }
            </div>
          </div>
    );
  }
}
export default Education;
