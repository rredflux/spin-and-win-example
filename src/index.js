import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import Legal from "./pages/Legal";
import Instructions from "./pages/Instructions";
import Contest from "./pages/Contest";
import RewardPage from "./pages/RewardPage";
import ScrollToTop from './pages/ScrollToTop';


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
          <Route path="formPage" element={<FormPage />} />
          <Route path="legal" element={<Legal />} />
          <Route path="instructions" element={<Instructions />} />
          <Route path="contest" element={<Contest />} />
          <Route path="reward" element={<RewardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));