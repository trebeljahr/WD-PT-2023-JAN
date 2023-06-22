import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
