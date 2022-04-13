import "./App.css";
import Header from "./components/Header/Header";
import LandingPage from "./Screen/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import VideoListing from "./Screen/VideoListing/VideoListing";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/videos" element={<VideoListing />} />
      </Routes>
    </div>
  );
}

export default App;
