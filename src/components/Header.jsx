import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
          <div className="header">
            <div className="name">{this.props.name[0]}<span className="peng">{this.props.name[1]}</span></div>
            <div className="skyline">
              <img src="/build/images/toronto-skyline2.png" />
            </div>
          </div>
    );
  }
}
export default Header;
