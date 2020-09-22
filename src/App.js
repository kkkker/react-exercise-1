import React, { Component } from 'react';
import './App.scss';
import avatar from './assets/avatar.jpg';
import Educations from './education/educations';

class App extends Component {
  state = {
    educations: [
      {
        id: 1,
        year: 1990,
        event: 'I was born in Katowice',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.',
      },
      {
        id: 2,
        year: 2005,
        event: 'Secondary school specializing in artistic',
        description:
          'Eos, explicato, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.',
      },
      {
        id: 3,
        year: 2009,
        event: 'First level graduation in Graphic Design',
        description:
          'Aspermatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? Iusto, quibusdam asperiores unde repellat.',
      },
      {
        id: 4,
        year: 2012,
        event: 'Second level graduation in Graphic Design',
        description: 'Ducimus, aliquam tempore autem itaque et accusantium!',
      },
    ],
    introduce:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, non, dolorem, cumque distinctio magni quam expedita veit laborum sunt amet facere tempora ut fuga aliquam ad asperiores voluptatem dolorum! Quasi.',
  };

  render() {
    return (
      <main className="app">
        <div className="header">
          <img className="image-size" src={avatar} alt="头像" />
          <h1>HELLO,</h1>
          <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
        </div>
        <div className="content">
          <h3>ABOUT ME</h3>
          <p>{this.state.introduce}</p>
          <h3>EDUCATION</h3>
          <Educations educations={this.state.educations} />
        </div>
      </main>
    );
  }
}

export default App;
