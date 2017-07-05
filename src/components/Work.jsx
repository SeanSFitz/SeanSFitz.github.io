import React, {Component} from 'react';
import SectionHeader from './SectionHeader.jsx'
import WorkItem from './WorkItem.jsx'


class Work extends Component {
  render() {
    return (
          <div className="col-md-12 section">
            <SectionHeader text="WORK EXPERIENCE" />
            <div className="section-content">
              {
                this.props.data.map((item, index) => {
                  return <WorkItem info={item} key={index} />
                })
              }
            </div>
          </div>
    );
  }
}
export default Work;
