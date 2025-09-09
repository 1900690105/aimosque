// App.jsx
import "./App.css"; // Assuming you have styles for your app
import Footer from "./components/Footer";
import HomeMain from "./components/Home-main";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Donate from "./components/pages/Donate";
import Chat from "./components/pages/Chat";
import Mosque from "./components/pages/Mosque";
import MyPrayer from "./components/pages/MyPrayer";
import Resource from "./components/pages/Resource";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import AiNoorMosque from "./components/pages/AiNoorMosque";
import AdminPanel from "./components/pages/auth/AdminPanel";
import ProfilePanel from "./components/pages/auth/ProfilePanel";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Terms from "./components/pages/Terms";
import ProductPage from "./components/pages/Product";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        {/* Main layout */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/mosque" element={<Mosque />} />
          <Route path="/player" element={<MyPrayer />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<AdminPanel />} />
          <Route path="/profile" element={<ProfilePanel userData={JSON.parse(localStorage.getItem("userData") || "{}")} onSave={(data) => { localStorage.setItem("userData", JSON.stringify(data)); alert("Profile updated successfully!"); }} />} />
          <Route path="/ai_noor_mosque" element={<AiNoorMosque />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
