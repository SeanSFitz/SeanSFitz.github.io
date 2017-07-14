import React, {Component} from 'react';

import resume from './resume-data';

import Header from './components/Header.jsx'
import Contact from './components/Contact.jsx'
import Profile from './components/Profile.jsx'
import Education from './components/Education.jsx'
import Work from './components/Work.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = resume;
  }

  render() {
    return (
      <div className="container">
        <Header name={this.state.info.name}/>
        <div className="body">
          <Contact info={this.state.info} />
          <div className="grid-section group">
            <Profile text={this.state.profile}/>
            <Education data={this.state.education}/>
          </div>
          <Skills skills={this.state.skills} />
          <Work data={this.state.jobs}/>
          <Projects data={this.state.projects} />
        </div>
      </div>
    );
  }
}
export default App;
