import React, {Component} from 'react';

class Contact extends Component {
  render() {
    return (
          <div className="contact-line row">
            <div className="hidden-small">
              <span className="contact col-md-3"><em>{this.props.info.phone}</em></span>
              <span className="contact col-md-3"><em>{this.props.info.email.text}</em></span>
              <span className="contact col-md-3"><em>{this.props.info.linkedin.text}</em></span>
              <span className="contact col-md-3"><em>{this.props.info.github.text}</em></span>
            </div>
            <div className="show-small">
              <span className="contact col-md-3">{this.props.info.phone}</span>
              <span className="contact col-md-3"><img src="/build/images/Mail-Logo.png" /></span>
              <span className="contact col-md-3"><img src="/build/images/LinkedIn-Logo.png" /></span>
              <span className="contact col-md-3"><img src="/build/images/Github-Logo.png" /></span>
            </div>
          </div>
    );
  }
}
export default Contact;
