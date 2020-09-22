import React, { Component } from 'react';
import Education from './education';

class Educations extends Component {
  render() {
    return this.props.educations.map((education) => (
      <Education
        key={education.id}
        year={education.year}
        event={education.event}
        description={education.description}
      />
    ));
  }
}

export default Educations;
