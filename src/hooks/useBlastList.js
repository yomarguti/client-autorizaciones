import { useEffect, useState } from 'react';
import autorizacionesApi from '../api/autorizacionesApi';

const wait = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const useBlastList = (processId) => {
  const [blastingList, setBlastingList] = useState([]);
  const [filteredBlastingList, setFilteredBlastingList] = useState([]);
  const [processName, setProcessName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApi = async (id) => {
    try {
      const response = await autorizacionesApi.get(`/blast-process/${id}`);
      setBlastingList(response.data.blastings);
      setProcessName(response.data.processName);
      setFilteredBlastingList(response.data.blastings);
    } catch (error) {
      setError(error);
    }
    await wait(2000);
    setLoading(false);
  };

  useEffect(() => {
    fetchApi(processId);
  }, [processId]);

  return {
    blastingList,
    filteredBlastingList,
    processName,
    loading,
    error,
    setFilteredBlastingList,
  };
};

export default useBlastList;
