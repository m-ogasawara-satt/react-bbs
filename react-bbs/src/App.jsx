import React from 'react'
import Header from './components/header/header'
import ThreadList from './components/threadlist/threadList'

function App() {
  return (
    <div className="App">
      <Header header="掲示板" />
      <ThreadList />
    </div>
  )
}

export default App