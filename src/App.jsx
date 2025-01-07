import React, { useState } from "react";
import Banner from "./Banner";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";


// const App = () => {
//   return (
//     <Navbar />
//   );
// };
function App() {
  return (
    <Router  basename="/Grow-learn">
   
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
export default App;
// justify-content-center align-items-center
