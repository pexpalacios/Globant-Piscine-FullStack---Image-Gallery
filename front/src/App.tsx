import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="top-bar">
        <a href="https://unsplash.com/" target="_blank">
        	<img src="https://www.svgrepo.com/show/315538/unsplash.svg" className="logo" alt="Unsplash logo" />
		</a>
		<p>Using Unsplash API</p>
      	<h1>Image Gallery</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
