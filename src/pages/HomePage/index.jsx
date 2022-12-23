import React from 'react';
import Footer from 'containers/global/Footer';
import TopBar from 'containers/global/Topbar';
import BannerSlider from 'containers/BannerSlider';
import Elementor from 'containers/Elementor';
import Strength from 'containers/StrengthList';

const Homepage = () => {
  return (
    <>
      <TopBar />
      <BannerSlider />
      <Elementor />
      <Strength />
      <Footer />
    </>
  );
};

export default Homepage;
