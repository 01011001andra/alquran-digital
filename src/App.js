import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { DetailSurah, Home } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<DetailSurah />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
