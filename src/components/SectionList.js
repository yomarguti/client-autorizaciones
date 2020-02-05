import React from 'react';
import SectionItem from './SectionItem';

import { Link } from 'react-router-dom';

import './Styles/SectionList.css';

const SectionList = ({ process: { id, name: title }, volArray }) => {
  const filteredVols = volArray.filter((volItem) => volItem.processStatus === title).slice(0, 10);

  const volList = filteredVols.map((vol) => {
    return <SectionItem key={vol.id} vol={vol} />;
  });

  return (
    <div className="SectionList__Container">
      <div className="SectionList__Title">
        <Link to={`/blast-process/${id}`}>{title}</Link>
      </div>
      {volList}
      <div className="SectionList__More">
        <Link to={`/blast-process/${id}`}>Ver más</Link>
      </div>
    </div>
  );
};

export default SectionList;
