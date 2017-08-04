import React, { Component } from 'react';
import { Header } from '../navigationComponent/Header';
import { ProductSection } from '../sectionComponent/productSection';
import { Footer } from '../navigationComponent/Footer';

export class ProductPage extends Component {
  render() {
    return(
      <div>
        <Header />
        <ProductSection />
        <Footer/>
      </div>
    );
  }
}
