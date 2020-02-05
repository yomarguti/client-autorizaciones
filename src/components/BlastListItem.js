import React from 'react';

import './Styles/BlastListItem.css';

const BlastListItem = ({ blastData: { name, year, type, comment } }) => {
  return (
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
  );
};

export default BlastListItem;
