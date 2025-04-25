
import TrialComponent from "./api-trial.jsx"
import Landing from "./landing.jsx"
import SignUp from "./components/SignUp.jsx"
import Login        from "./components/Login.jsx"
import { Route, Routes } from "react-router-dom"
function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Landing/>}/> 
      <Route path="/signup"element={<SignUp/>}/>
      <Route path="/login"element={<Login/>}/>
      <Route path="/chat"element={<TrialComponent/>}/>
      
    </Routes>
    
    </>
  )
}

export default App
