import React, {Component} from 'react';

class SectionHeader extends Component {
  render() {
    return (
          <div className="sectionHeader">
            {this.props.text}
          </div>
    );
  }
}
export default SectionHeader;
