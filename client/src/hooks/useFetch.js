import axios from "axios";
import { useEffect, useState } from "react";

// axios.defaults.baseURL = process.env.REACT_API_URL;

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    FetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
