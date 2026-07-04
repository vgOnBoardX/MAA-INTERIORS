import { useEffect } from "react";
import { BrowserRouter, HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// Pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

// ScrollToTop helper component to reset scroll position on transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

// Meta tags manager component
function PageMetaTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    let title = "Maa Interiors | Modern & Warm Interior Design Studio";
    let desc = "Bespoke interior architecture and styling studio in Kolkata. We design full-home, single-room, and commercial workspaces with organic warmth and high structural precision.";

    if (pathname === "/portfolio") {
      title = "Our Project Portfolio | Maa Interiors";
      desc = "Explore completed residential renovations, modern minimalist living rooms, low-slung bedrooms, and heritage apartment transformations across the region.";
    } else if (pathname === "/contact") {
      title = "Schedule a Consultation | Maa Interiors";
      desc = "Contact our Park Street design studio. Send us a quick message or request an in-person layout and budget consultation for your property.";
    } else if (pathname === "/admin") {
      title = "Internal Lead Pipeline Dashboard | Maa Interiors";
      desc = "Administrative management portal.";
    }

    document.title = title;
    
    // Attempt to update meta description if present
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", desc);
    }
  }, [pathname]);

  return null;
}

export default function App() {
  // Use HashRouter to guarantee smooth subpath loading in static dev previews without server rewrites
  return (
    <HashRouter>
      <ScrollToTop />
      <PageMetaTracker />
      
      <div className="flex flex-col min-h-screen bg-linen selection:bg-mist selection:text-espresso">
        {/* Persistent sticky header navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            {/* Catch-all route redirecting to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Persistent WhatsApp contact widget */}
        <WhatsAppButton />

        {/* Persistent Footer */}
        <Footer />
      </div>
    </HashRouter>
  );
}
