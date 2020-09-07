import React from 'react';
import { Link } from 'react-router-dom';

import './Styles/BlastListItem.css';

const BlastListItem = ({ blastData: { id, name, year, type, comment } }) => {
  return (
    <Link to={`/blast/${id}`}>
      <div className="BlastListItem">
        <div className="BlastListItem__Title">
          <div className="BlastListItem__NameContainer">
            <span className="BlastListItem__Name">{name}</span>
            <span className="BlastListItem__Type">- {type}</span>
          </div>

          <span className="BlastListItem__Year">{year}</span>
        </div>
        <div className="BlastListItem__Comment">{comment}</div>
      </div>
    </Link>
  );
};

export default BlastListItem;
