import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./app/login/page";
import SignUp from "./app/signup/page";
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/signup" element={ <SignUp /> }/>
        <Route path="/" element={ <h1>CHECKOV</h1> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
