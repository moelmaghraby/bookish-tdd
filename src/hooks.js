import axios from "axios";
import { useState, useEffect } from "react";

export const useRemoteService = (initial,url) => {
    const [data, setData] = useState(initial);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
      const fetchBooks = async () => {
        setError(false);
        setLoading(true);
        try {
          const res = await axios.get(url);
          setData(res.data);
        } catch (e) {
          setError(true);
        } finally {
          setLoading(false);
        }
      };
      fetchBooks();
    }, []);
    return {data, loading, error};
  }