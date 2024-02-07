import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./profile";
import Store from "./store";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Profile />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
