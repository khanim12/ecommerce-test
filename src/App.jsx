import "./App.css";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import PageContainer from "./containers/PageContainer";
import HeaderTop from "./components/HeaderTop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
function App() {
  return (
              <Router>

      <HeaderTop />
      <Header />

      <PageContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </PageContainer>
        </Router>

  );
}

export default App;
