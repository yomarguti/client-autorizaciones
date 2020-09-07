import React from 'react';
import SectionItemLoader from './SectionItemLoader';

import './SectionListLoader.css';

const SectionListLoader = () => {
  return (
    <div className="SectionListLoader__Container">
      <SectionItemLoader />
      <SectionItemLoader />
      <SectionItemLoader />
    </div>
  );
};

export default SectionListLoader;
