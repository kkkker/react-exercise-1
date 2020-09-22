import React, { Component } from 'react';
import './App.scss';
import avatar from './assets/avatar.jpg';

class App extends Component {
  render() {
    return (
      <main className="app">
        <img src={avatar} alt="头像" />
        <h1>HELLO,</h1>
        <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
        <h3>ABOUT ME</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
          non, dolorem, cumque distinctio magni quam expedita veit laborum sunt
          amet facere tempora ut fuga aliquam ad asperiores voluptatem dolorum!
          Quasi.
        </p>
        <h3>EDUCATION</h3>
        <section>
          <h4>1990</h4>
          <article>
            <h4>I was born in Katowice</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Sapiente, exercitationem, totam, dolores iste dolore est aut modi.
            </p>
          </article>
        </section>
        <section>
          <h4>2005</h4>
          <article>
            <h4>Secondary school specializing in artistic</h4>
            <p>
              Eos, explicato, nam, tenetur et ab eius deserunt aspernatur ipsum
              ducimus quibusdam quis voluptatibus.
            </p>
          </article>
        </section>
        <section>
          <h4>2009</h4>
          <article>
            <h4>First level graduation in Graphic Design</h4>
            <p>A</p>
          </article>
        </section>
        <section>
          <h4>2012</h4>
          <article>
            <h4>Second level graduation in Graphic Design</h4>
            <p>Ducimus, aliquam tempore autem itaque et accusantium!</p>
          </article>
        </section>
      </main>
    );
  }
}

export default App;
