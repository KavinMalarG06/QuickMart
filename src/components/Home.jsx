// src/components/Home.js
import React from 'react';
import Hero from './Hero/Hero';
import Products from './Products/Products';
import TopProducts from './TopProducts/TopProducts';
import Banner from './Banner/Banner';
import Subscribe from './Subscribe/Subscribe';
import Testimonnial from './Testimonnial/Testimonnial';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Testimonnial />
      <Footer />
    </div>
  );
};

export default Home;
