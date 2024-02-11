import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home.jsx";
import { Game } from "./components/Game/Game.jsx";
import { NotFound } from "./components/NotFound/NotFound.jsx";
import { Layout } from "./components/Layout.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":provider/:game" element={<Game />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
