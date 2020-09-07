import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import autorizacionesApi from '../api/autorizacionesApi';

import './Styles/Home.css';
import SectionList from '../components/SectionList';
import SectionListLoader from '../components/Loaders/SectionListLoader';

const wait = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

function Home() {
  const initialState = {
    procesos: [],
    loading: true,
    error: null,
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
      setState({ procesos: [], loading: true, error: null });
      const response = await autorizacionesApi.get('/procesos');
      await wait(2000);
      setState({ error: null, procesos: [...response.data.vols], loading: false });
    };
    try {
      fetchData();
    } catch (error) {
      setState({ procesos: [], loading: false, error });
      console.log('error:', error);
    }
  }, []);

  const secciones = state.loading ? (
    <SectionListLoader />
  ) : (
    state.procesos.map((vol, index) => {
      return (
        <SectionList
          process={{ id: vol.procesoId, name: vol.nombre }}
          volArray={vol.vols}
          key={index}
        />
      );
    })
  );

  return (
    <>
      <NavBar />
      <div className="Home__Heading">Procesos Pendientes</div>
      <div className="Home__SectionListContainer">{secciones}</div>
    </>
  );
}

export default Home;
