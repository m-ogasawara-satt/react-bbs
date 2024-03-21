import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './threadList.css'

const ThreadList = () => {
  const [threads, setThreads] = useState([])

  useEffect(() => {
    axios.get('https://railway.bulletinboard.techtrain.dev/threads?offset=1')
      .then(response => {
        setThreads(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  useEffect(() => {
    // 最後のスレッドにクラスを追加
    const threadItems = document.querySelectorAll('.thread-item')
    if (threadItems.length > 0) {
      threadItems[threadItems.length - 1].classList.add('last-thread-item')
    }
  }, [threads])

  return (
    <div className="thread-container">
      <h1>新着スレッド</h1>
      {/* スレッド数が1つ以上存在する時に表示する */}
      {threads.length > 0 ? (
        threads.map(thread => (
          <div key={thread.id} className="thread-item">
            <h2>{thread.title}</h2>
            <p>{thread.content}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default ThreadList
