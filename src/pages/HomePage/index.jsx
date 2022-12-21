import React from 'react';
import BannerSlider from 'containers/BannerSlider';
import Elementor from 'containers/Elementor';
import Strength from 'containers/StrengthList';

const Homepage = () => {
  return (
    <>
      <BannerSlider />
      <Elementor />
      <Strength />
    </>
  );
};

export default Homepage;
