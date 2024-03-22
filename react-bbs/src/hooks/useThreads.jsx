import { useState, useEffect } from 'react';
import axios from 'axios';

const useThreads = (currentPage) => {
  const [threads, setThreads] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  // swrなど他にもある（axiosと一緒に使用するもの）
  useEffect(() => {
    const offset = (currentPage - 1) * 10;
    axios.get(`https://railway.bulletinboard.techtrain.dev/threads?offset=${offset}`)
      .then(response => {
        setThreads(response.data);
        // 境界値テスト（最後が10件あったときに次のページ番号が出てしまう）
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