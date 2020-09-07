import React from 'react';
import SectionItem from './SectionItem';

import { Link } from 'react-router-dom';

import './Styles/SectionList.css';

const SectionList = ({ process: { id, name }, volArray }) => {
  const volList = volArray.map((vol) => {
    return <SectionItem key={vol.voladuraId} vol={vol} />;
  });

  return (
    <div className="SectionList__Container">
      <div className="SectionList__Title">
        <Link to={`/blast-process/${id}`}>{name}</Link>
      </div>
      {volList}
      <div className="SectionList__More">
        <Link to={`/blast-process/${id}`}>Ver más</Link>
      </div>
    </div>
  );
};

export default SectionList;
