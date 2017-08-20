import React, { Component } from 'react';
import { Header } from '../navigationComponent/Header';
import { SignInSection } from '../sectionComponent/signinSection';
import { Footer } from '../navigationComponent/Footer';

export class SignInPage extends Component {
  render() {
    return(
      <div>
        <Header />
        <SignInSection />
        <Footer/>
      </div>
    );
  }
}
