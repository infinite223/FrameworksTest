import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import MicroComponents from "./pages/MicroComponents";
import SvgRender from "./pages/SvgRender";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="MicroComponents" element={<MicroComponents />} />
          <Route path="SvgRender" element={<SvgRender />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
