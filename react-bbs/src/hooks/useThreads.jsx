import { useState, useEffect } from 'react';
import axios from 'axios';

const useThreads = (currentPage) => {
  const [threads, setThreads] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const offset = (currentPage - 1) * 10;
    axios.get(`https://railway.bulletinboard.techtrai.dev/threads?offset=${offset}`)
      .then(response => {
        setThreads(response.data);
        setHasMore(response.data.length === 10);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        return { error }
      });
  }, [currentPage]);

  return { threads, hasMore };
};

export default useThreads;