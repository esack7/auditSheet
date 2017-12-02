import React from 'react';
import Header from './../header';
import Main from './../main';
import Aside from './../aside';
import Footer from './../footer';
import '../../style/_main.scss';

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <section className="section-main">
          <Main />
          <Aside />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;