import React, {Component} from 'react';

import SectionHeader from './SectionHeader.jsx'

class Profile extends Component {
  render() {
    return (
          <div className="col-md-6 section" id="profile">
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
