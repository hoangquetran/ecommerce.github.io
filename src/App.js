import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Homepage from "./pages/homepage/Homepage";
import DetailProduct from "./pages/detail/DetailProduct";
import AboutUs from "./pages/about/AboutUs";
import ContactUs from "./pages/contact/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="detail/:id" element={<DetailProduct />} />
            <Route path="about-us" element={<AboutUs />} />{" "}
            <Route path="contact" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
