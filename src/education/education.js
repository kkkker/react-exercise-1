import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <section>
        <h4 className="year">{this.props.year}</h4>
        <article>
          <h4>{this.props.event}</h4>
          <p>{this.props.description}</p>
        </article>
      </section>
    );
  }
}

export default Education;
