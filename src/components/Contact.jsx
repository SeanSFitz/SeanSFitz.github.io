import React, {Component} from 'react';

class Contact extends Component {
  render() {
    return (
          <div className="contact-line grid-section group">
              <span className="contact phone col span_1_of_4">
                <em className="hidden-small">{this.props.info.phone}</em>
                <em className="show-small">{this.props.info.phone}</em>
              </span>
              <span className="contact col span_1_of_4">
                <a href="mailto:sean.s.fitz@gmail.com">
                  <em className="hidden-small">{this.props.info.email.text}</em>
                  <i className="fa fa-envelope-o fa-3x show-small" aria-hidden="true"></i>
                </a>
              </span>
              <span className="contact col span_1_of_4">
                <a href="https://www.linkedin.com/in/seansfitzpatrick/">
                  <em className="hidden-small">{this.props.info.linkedin.text}</em>
                  <i className="fa fa-linkedin-square fa-3x show-small" aria-hidden="true"></i>
                </a>
              </span>
              <span className="contact col span_1_of_4">
                <a href="https://github.com/SeanSFitz">
                  <em className="hidden-small">{this.props.info.github.text}</em>
                  <i className="fa fa-github fa-3x show-small" aria-hidden="true"></i>
                </a>
              </span>
          </div>
    );
  }
}
export default Contact;
