import React from 'react';
import { Link } from 'react-router-dom';

import './Styles/SectionItem.css';

const SectionItem = ({ vol: { voladuraId, nombre, tiposVoladura, comentario } }) => {
  return (
    <Link className="SectionItem__Container" to={`/blast/${voladuraId}`}>
      <div className="SectionItem__Name">{nombre}</div>
      <div className="SectionItemText__Container">
        <div className="SectionItem__Type">{tiposVoladura.nombre}</div>
        <div className="SectionItem__Comment">{comentario}</div>
      </div>
    </Link>
  );
};

export default SectionItem;
