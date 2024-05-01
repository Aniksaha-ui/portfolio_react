import "./App.css";
import Header from "./components/common/header/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/home";
import Service from "./components/pages/Service/service";
import Footer from "./components/common/footer/footer";
import About from "./components/pages/About/About";
import ServicePage from "./components/pages/ServicePage/ServicePage";
import Contact from "./components/pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
