import "./App.css";
import Header from "./components/Header/Header";
import {
  LandingPage,
  VideoListing,
  LoginScreen,
  SignupScreen,
  WatchLaterScreen,
  VideoPreview,
  LikesScreen,
  HistoryScreen,
  PlaylistScreen,
} from "./Screen/index";
import { Routes, Route } from "react-router-dom";
import MockMan from "mockman-js";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/videos" element={<VideoListing />} />
        <Route path="/video/:id" element={<VideoPreview />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/watch-later" element={<WatchLaterScreen />} />
        <Route path="/likes" element={<LikesScreen />} />
        <Route path="/history" element={<HistoryScreen />} />
        <Route path="/myPlaylists" element={<PlaylistScreen />} />
        <Route path="/mock" element={<MockMan />} />
      </Routes>
    </div>
  );
}

export default App;
