import Navigationbar from "./Components/Navigationbar";
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";
import BookaTableComponent from "./Components/BookaTableComponent";
import Staff from "./Components/Staff";
import Dashboard from "./Components/Dashboard.js";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route
        index
        path="/"
        exact
        element={
          <div>
            <Navigationbar />
            <MainContent />
            <Footer />
          </div>
        }
      />
      <Route
        path="/bookatable"
        exact
        element={
          <div>
            <Navigationbar />
            <BookaTableComponent />
          </div>
        }
      />
      <Route
        path="/staff"
        exact
        element={
          <div>
            <Navigationbar />
            <Staff />
          </div>
        }
      />
      <Route exact path="dashboard/:id" element={<Dashboard />} />
      <Route path="*" element={<div>404 not found</div>} />
    </Routes>
  );
}

export default App;
