import { useEffect, useState } from 'react';
import autorizacionesApi from '../api/autorizacionesApi';

const wait = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const useBlasting = (blastId) => {
  const [blastingData, setBlastingData] = useState();
  const [loadingState, setLoadingState] = useState(true);
  const [error, setError] = useState(null);

  const fetchApi = async (id) => {
    try {
      const response = await autorizacionesApi.get(`/voladura/${id}`);
      await wait(2000);
      setBlastingData(response.data.blasting);
      setLoadingState(false);
    } catch (error) {
      setError(error);
      setLoadingState(false);
    }
  };

  useEffect(() => {
    fetchApi(blastId);
  }, [blastId]);

  return { blastingData, loadingState, error };
};

export default useBlasting;
