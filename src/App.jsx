import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home.jsx";
import { Game } from "./components/Game/Game.jsx";
import { NotFound } from "./components/NotFound/NotFound.jsx";
import { Layout } from "./components/Layout.jsx";

function App() {
  return (
    <div className="App">
       <Routes>
       <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/:provider/:game" element={<Game />} />
      <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;