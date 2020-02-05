import React from 'react';
import { Link } from 'react-router-dom';

import './Styles/SectionItem.css';

const SectionItem = ({ vol: { id, name, type, comment } }) => {
  return (
    <Link className="SectionItem__Container" to={`/blast/${id}`}>
      <div className="SectionItem__Name">{name}</div>
      <div className="SectionItemText__Container">
        <div className="SectionItem__Type">{type}</div>
        <div className="SectionItem__Comment">{comment}</div>
      </div>
    </Link>
  );
};

export default SectionItem;
