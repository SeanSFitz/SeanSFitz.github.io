import React, {Component} from 'react';

class Contact extends Component {
  render() {
    return (
          <div className="contact-line row">
              <span className="contact col-md-3">
                <em className="hidden-small">{this.props.info.phone}</em>
                <em className="show-small">{this.props.info.phone}</em>
              </span>
              <span className="contact col-md-3">
                <a href="">
                  <em className="hidden-small">{this.props.info.email.text}</em>
                  <img className="show-small" src="/build/images/Mail-Logo.png" />
                </a>
              </span>
              <span className="contact col-md-3">
                <a href="">
                  <em className="hidden-small">{this.props.info.linkedin.text}</em>
                  <img className="show-small" src="/build/images/LinkedIn-Logo.png" />
                </a>
              </span>
              <span className="contact col-md-3">
                <a href="">
                  <em className="hidden-small">{this.props.info.github.text}</em>
                  <img className="show-small" src="/build/images/Github-Logo.png" />
                </a>
              </span>
          </div>
    );
  }
}
export default Contact;
