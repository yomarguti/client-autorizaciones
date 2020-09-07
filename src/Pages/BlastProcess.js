import React from 'react';

import NavBar from '../components/NavBar';
import BlastList from '../components/BlastList';

import './Styles/BlastProcess.css';

const BlastProcess = (props) => {
  const process = [
    {
      id: 1,
      name: 'Caracterizar Voladura'
    },
    {
      id: 2,
      name: 'Crear Estructuras'
    },
    {
      id: 3,
      name: 'Autorizar Geotecnia'
    },
    {
      id: 4,
      name: 'Crear Malla con Guía'
    },
    {
      id: 5,
      name: 'Validar Diseño de Perforación'
    },
    {
      id: 6,
      name: 'Cargar Voladura a Modular'
    },
    {
      id: 7,
      name: 'Diseñar Cargue de Precorte/Buffer'
    },
    {
      id: 8,
      name: 'Validar Diseño de Cargue'
    },
    {
      id: 9,
      name: 'Entregar Perfiles a Voladura'
    }
  ];

  const filteredProcess = process.filter(
    (proc) => proc.id === parseInt(props.match.params.processId)
  );

  return (
    <>
      <NavBar />
      <div className="BlastProcess__Container">
        <BlastList processTitle={filteredProcess[0].name} />
      </div>
    </>
  );
};

export default BlastProcess;
