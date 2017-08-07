import React, { Component } from 'react';
import { Header } from '../navigationComponent/Header';
import { SupportSection } from '../sectionComponent/supportSection';
import { Footer } from '../navigationComponent/Footer';

export class SupportPage extends Component {
  render() {
    return(
      <div>
        <Header />
        <SupportSection />
        <Footer/>
      </div>
    );
  }
}
