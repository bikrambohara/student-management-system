// import { useState } from 'react'
// import LoginForm from './components/Auth/LoginForm'
// import Dashboard from "./pages/Dashboard";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div >

//       {/* <LoginForm/> */}
//       <Dashboard/>
//     </div>
//  )
// }

// export default App


import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/students" element={<Students />} />
      
    </Routes>
  );
}

export default App;
