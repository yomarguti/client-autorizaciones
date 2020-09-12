import React, { useState } from 'react';
import * as R from 'ramda';

import './Styles/BlastList.css';

import useBlastList from '../hooks/useBlastList';
import BlastListItem from './BlastListItem';
import BlastListLoader from '../components/Loaders/BlastListLoader';
import ErrorMessage from '../components/ErrorMessage';

const BlastList = (props) => {
  const processId = props.processId;

  const [query, setQuery] = useState('');

  const {
    blastingList,
    filteredBlastingList,
    processName,
    loading,
    error,
    setFilteredBlastingList,
  } = useBlastList(processId);

  const onChangeInput = (e) => {
    const input = e.target.value.toUpperCase();
    setQuery(input);
    const blastings = blastingList.filter((blast) => {
      return `${blast.nombre}`.toLowerCase().includes(input.toLowerCase());
    });
    setFilteredBlastingList(blastings);
  };

  const getList = (blast) => {
    return (
      <li key={blast.voladuraId}>
        <BlastListItem blastData={blast} />
      </li>
    );
  };

  const getContent = (loadingState, error, blastings) => {
    if (loadingState) {
      return <BlastListLoader />;
    }
    if (error) {
      return <ErrorMessage errorDescription="Error al obtener información del servidor" />;
    }
    return (
      <>
        <div className="BlastList__Heading">
          <span className="BlastList__HeadingProcess">Proceso:</span>
          <span className="BlastList__HeadingTitle">{` ${processName}`}</span>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control BlastList__Filter"
            placeholder="Escriba el nombre de una voladura"
            value={query}
            onChange={(e) => onChangeInput(e)}
          />
        </div>
        <ul className="list-unstyled">{R.map(getList, blastings)}</ul>
      </>
    );
  };

  return (
    <>
      <div className="BlastList">{getContent(loading, error, filteredBlastingList)}</div>
    </>
  );
};

export default BlastList;
