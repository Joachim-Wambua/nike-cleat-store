import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  CustomerReviews,
  Hero,
  Footer,
  PopularProducts,
  Subscribe,
  SuperQuality,
  SpecialOffer,
  Services,
} from "./sections";
import Nav from "./components/Nav";
import Product from "./pages/Product";

const App = () => (
  <Router>
    <main className="relative">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular-products" element={<PopularProducts />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/super-quality" element={<SuperQuality />} />
        <Route path="/services" element={<Services />} />
        <Route path="/special-offer" element={<SpecialOffer />} />
        <Route path="/customer-reviews" element={<CustomerReviews />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  </Router>
);

const Home = () => (
  <>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
  </>
);

export default App;
