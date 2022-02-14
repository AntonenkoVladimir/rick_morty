import {FC} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Main from "./components/pages/Main/Main";
import "./App.scss";

const App: FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/main/:page" element={<Main/>}/>
        <Route path="/" element={<Navigate to="/main/1"/>}/>
      </Routes>
    </div>
  );
}

export default App;
