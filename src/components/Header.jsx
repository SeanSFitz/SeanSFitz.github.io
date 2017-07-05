import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
          <div className="header">
            <div className="name">{this.props.name}</div>
            <div className="skyline">
              <img src="/build/toronto-skyline2.png" />
            </div>
          </div>
    );
  }
}
export default Header;
