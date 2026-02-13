import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { Suspense, useEffect, lazy } from "react";

const Home = lazy(() => import("./screens/home/Home"));
const AboutUs = lazy(() => import("./screens/aboutUs/AboutUs"));
const Products = lazy(() => import("./screens/products/Products"));
const ContactUs = lazy(() => import("./screens/contactUs/ContactUs"));
const MensProduct = lazy(() => import("./screens/productCategory/mensProduct/MensProduct"));
const WomensProduct = lazy(() => import("./screens/productCategory/womensProduct/WomensProduct"));
const KidsProduct = lazy(() => import("./screens/productCategory/kidsProduct/KidsProduct"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      offset: 140,
    });
  }, []); // also fix this (important)

  return (
    <Router>
      <div className="overflow-x-hidden">
        <ScrollToTop />

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/mens-product" element={<MensProduct />} />
            <Route path="/womens-product" element={<WomensProduct />} />
            <Route path="/kids-product" element={<KidsProduct />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
