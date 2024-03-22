import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useThreads from '../../hooks/useThreads';
import './threadList.css';

const ThreadList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { threads, hasMore } = useThreads(currentPage);

  // ページネーションが変更された際にページ番号のスレッド一覧を表示する
  const handleChange = (value) => {
    setCurrentPage(value);
  };

  // hasMoreの値によって次のページ番号を表示するか判定
  const totalPages = hasMore ? currentPage + 1 : currentPage;

  return (
    <div className="thread-container">
      <h1 className="thread-title">新着スレッド</h1>
      {/* <div className=階層下げtる */}
      {/* スレッドが1件以上存在する場合、スレッドを表示する。0件の場合はLoading...と表示する */}
      {threads.length > 0 ? (
        threads.map((thread, index) => (
          <div className="thread-frame">
            <div key={thread.id} className="thread-item">
              <h2>{thread.title}</h2>
              <p>{thread.content}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
      <div className="pagination-container">
        <Stack spacing={2} justifyContent="center">
          <Pagination count={totalPages} page={currentPage} onChange={handleChange} />
        </Stack>
      </div>
    </div>
  );
};

export default ThreadList;