import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";

import ScrollToTop from "./ScrollToTop";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  return (
    <div className="app">
      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipes/:recipeName"element={<RecipeDetails />}
/>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;