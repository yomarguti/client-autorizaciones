import React from 'react';
import { Link } from 'react-router-dom';

import './Styles/SectionItem.css';

const SectionItem = ({ vol: { voladuraId, nombre, tipoVoladura, comentario } }) => {
  return (
    <Link className="SectionItem__Container" to={`/blast/${voladuraId}`}>
      <div className="SectionItem__Name">{nombre}</div>
      <div className="SectionItemText__Container">
        <div className="SectionItem__Type">{tipoVoladura}</div>
        <div className="SectionItem__Comment">{comentario}</div>
      </div>
    </Link>
  );
};

export default SectionItem;
