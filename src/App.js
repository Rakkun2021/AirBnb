import "./App.css";

// import GoogleMap from "./components/mapLocation/GoogleMap";
// import Swiper from "./components/swiper/Swiper";
import SignUp from "./pages/signUp/SignUp";
import Home from "./pages/home/Home";
import Rooms from "./pages/rooms/Rooms";
// import Somedata from "./components/somedata/Somedata.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/room/:id" element={<Rooms />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {/* <Home /> */}
      {/* <Swiper /> */}
      {/* <Somedata /> */}
      {/* <SignUp /> */}
      {/* <Rooms /> */}
      {/* <GoogleMap/> */}
    </div>
  );
}

export default App;

// openTripMapApiKey : 5ae2e3f221c38a28845f05b6d8059747f9d1ad239da149aa130d65d3

// pixabayApiKey : 33031030-cb09e0360f8133b1a3b615aa2
