import React, {Component} from 'react';

import SectionHeader from './SectionHeader.jsx'

class Profile extends Component {
  render() {
    return (
          <div className="section col span_2_of_4" id="profile">
            <SectionHeader text="PROFILE" />
            <div className="section-content">
              {
                this.props.text.map((paragraph, index) => {
                  return <p key={index}>{paragraph}</p>
                })
              }
            </div>
          </div>
    );
  }
}
export default Profile;
