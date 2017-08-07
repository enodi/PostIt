import React, { Component } from 'react';
import { Header } from '../navigationComponent/Header';
import { IndexSection } from '../sectionComponent/indexSection';
import { Footer } from '../navigationComponent/Footer';

export class IndexPage extends Component {
  render() {
    return(
      <div>
        <Header />
        <IndexSection />
        <Footer/>
      </div>
    );
  }
}
