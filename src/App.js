import NavBarPage from "./pages/NavBarPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import AuthorsPage from "./pages/AuthorsPage";
import MostLikedPostPage from "./pages/MostLikedPostPage";
import MostCommentedPost from "./pages/MostCommentedPost";

function App() {
  return (
    <BrowserRouter>
        <NavBarPage />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/authors" element={<AuthorsPage />} />
        <Route path="/mostLikedPost" element={<MostLikedPostPage />} />
        <Route path="/mostCommentedPost" element={<MostCommentedPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
