import React, { Component } from 'react';
import { Header } from '../navigationComponent/Header';
import { PasswordSection } from '../sectionComponent/passwordSection';
import { Footer } from '../navigationComponent/Footer';

export class ResetPassword extends Component {
  render() {
    return(
      <div>
        <Header />
        <PasswordSection />
        <Footer/>
      </div>
    );
  }
}
