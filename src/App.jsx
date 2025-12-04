import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Forums from "./pages/forums";
import Events from "./pages/events";
import Members from "./pages/members";
import Login from "./pages/login";
// import Signup from "./pages/signup";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Home Page uses MainNavbar */}
        <Route path="/" element={<Home />} />

        {/* Other pages use OtherNavbar */}
        <Route path="/about" element={<About />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/events" element={<Events />} />
        <Route path="/members" element={<Members />} />

        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
