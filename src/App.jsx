import { Route, Routes, useLocation } from "react-router";
import Footer from "./components/common/Footer";

import Homepage from "./pages/Homepage";
import NotFoundPage from "./pages/NotfoundPage";
import { useEffect } from "react";
import Navbar from "./components/common/Navbar";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-orange-100 selection:text-[#E65100">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
