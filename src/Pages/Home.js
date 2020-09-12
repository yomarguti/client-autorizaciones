import React from 'react';
import * as R from 'ramda';
import NavBar from '../components/NavBar';

import './Styles/Home.css';

import useBlastingsData from '../hooks/useBlastingsData';
import SectionList from '../components/SectionList';
import SectionListLoader from '../components/Loaders/SectionListLoader';

const getSectionList = ({ procesoId, nombre, vols }) => {
  return <SectionList process={{ id: procesoId, name: nombre }} volArray={vols} key={procesoId} />;
};

const getProcessBySections = (loadingState, error, proceses) => {
  if (loadingState) {
    return <SectionListLoader />;
  }
  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        No se pudo obtener la información del servidor
      </div>
    );
  }
  return R.map(getSectionList, proceses);
};

const Home = () => {
  const {
    state: { procesos, loading, error },
  } = useBlastingsData();

  const secciones = getProcessBySections(loading, error, procesos);

  return (
    <>
      <NavBar />
      <div className="Home__Heading">Procesos Pendientes</div>
      <div className="Home__SectionListContainer">{secciones}</div>
    </>
  );
};

export default Home;
