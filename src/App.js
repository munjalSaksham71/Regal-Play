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
  UserProfile,
} from "./Screen/index";
import { Routes, Route } from "react-router-dom";
import MockMan from "mockman-js";
import PrivateRoute from "./components/Utils/privateRoute";

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
        <Route path="/watch-later" element={<PrivateRoute><WatchLaterScreen /></PrivateRoute>} />
        <Route path="/likes" element={<PrivateRoute><LikesScreen /></PrivateRoute>} />
        <Route path="/history" element={<PrivateRoute> <HistoryScreen /> </PrivateRoute>} />
        <Route path="/myPlaylists" element={<PrivateRoute><PlaylistScreen /></PrivateRoute>} />
        <Route path="/myprofile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
        <Route path="/mock" element={<MockMan />} />
      </Routes>
    </div>
  );
}

export default App;
