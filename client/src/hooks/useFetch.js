/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(url);
      setData(res.data);
      try {
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false); // Always set loading to false
      }
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, reFetch };
};

export default useFetch;
