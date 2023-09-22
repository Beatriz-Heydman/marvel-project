//Libs
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import { MainPage } from "./pages/main-page";
import { ComicsHQPage } from "./pages/comics-hq";
import { CharactersHqPage } from "./pages/characters-hq";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<ComicsHQPage />} path="/comics_hqs" />
        <Route element={<CharactersHqPage />} path="/comics_hqs/:comic_id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
