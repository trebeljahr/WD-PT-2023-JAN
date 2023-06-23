import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage}></Route>
          <Route path="/createTask" Component={AddTask}></Route>
          <Route path="/editTask" Component={EditTask}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
