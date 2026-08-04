import { useState } from 'react'
import LoginForm from './components/Auth/LoginForm'
import Dashboard from "./components/pages/Dashboard";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >

      {/* <LoginForm/> */}
      <Dashboard/>
    </div>
 )
}

export default App
