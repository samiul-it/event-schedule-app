import Homepage from "./pages/Homepage/Homepage";
import { Routes, Route, Link } from "react-router-dom";
import Create from "./pages/Create/Create";
import Event from "./pages/Event/Event";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
