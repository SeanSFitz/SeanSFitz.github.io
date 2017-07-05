import React, {Component} from 'react';

import SectionHeader from './SectionHeader.jsx'

class Profile extends Component {
  render() {
    return (
          <div className="col-md-5 section">
            <SectionHeader text="PROFILE" />
            <div className="section-content">
              {this.props.text}
            </div>
          </div>
    );
  }
}
export default Profile;
