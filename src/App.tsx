import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { FavouritesPage } from "./pages/FavouritesPage";
import { Navigation } from "./components/Navigation";
import { Banner } from "./components/Banner";

function App() {
  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/favourites" element={<FavouritesPage/>} />
    </Routes>
    <Banner/>
    </>
  );
}

export default App;
