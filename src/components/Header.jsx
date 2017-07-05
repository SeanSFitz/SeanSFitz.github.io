import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
          <div className="header">
            <div className="name">{this.props.name}</div>
            <div className="skyline">
              <img src="http://localhost:3000/build/toronto-skyline2.png" />
            </div>
          </div>
    );
  }
}
export default Header;
