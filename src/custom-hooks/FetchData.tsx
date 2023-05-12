import { useEffect, useState } from 'react';
import { server_calls } from '../api/server';

export const useGetData = () => {
  const [contactData, setContactData] = useState([]);

  const handleDataFetch = async () => {
    const result = await server_calls.get();
    setContactData(result);
  };

  useEffect(() => {
    handleDataFetch();
  }, []);

  return { contactData, handleDataFetch };
};

export default useGetData;
