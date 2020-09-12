import { useEffect, useState } from 'react';
import autorizacionesApi from '../api/autorizacionesApi';

const wait = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const useBlastingsData = () => {
  const initialState = {
    procesos: [],
    loading: true,
    error: null,
  };

  const [state, setState] = useState(initialState);

  const fetchData = async () => {
    try {
      setState({ procesos: [], loading: true, error: null });
      const response = await autorizacionesApi.get('/procesos');
      await wait(2000);
      setState({ error: null, procesos: [...response.data.blastProcesses], loading: false });
    } catch (error) {
      setState({ procesos: [], loading: false, error });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { state };
};

export default useBlastingsData;
