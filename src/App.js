import "./App.css";
import Header from "./components/Header/Header";
import LandingPage from "./Screen/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import VideoListing from "./Screen/VideoListing/VideoListing";
import MockMan from "mockman-js";
import LoginScreen from "./Screen/LoginScreen/LoginScreen";
import SignupScreen from "./Screen/SignupScreen/SignupScreen";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/videos" element={<VideoListing />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/mock" element={<MockMan />} />
      </Routes>
    </div>
  );
}

export default App;
