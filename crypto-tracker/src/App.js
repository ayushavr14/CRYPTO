import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoinsPage from "./pages/CoinsPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/coins/:id" element={<CoinsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
