import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Portfolio", path: "/portfolio" },
    { name: "Get in Touch", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-linen/95 backdrop-blur-md shadow-sm border-b border-stone/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2"
            aria-label="Maa Interiors Home"
          >
            <Logo size={42} className="transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-espresso leading-none">
                MAA
              </span>
              <span className="font-sans text-[10px] font-medium tracking-[0.25em] text-stone mt-1 block">
                INTERIORS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Desktop Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium tracking-wide transition-colors py-1 ${
                  isActive(link.path)
                    ? "text-espresso font-semibold"
                    : "text-stone hover:text-espresso"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-espresso"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Consultation Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-espresso hover:bg-espresso/90 text-linen text-sm font-medium tracking-wide px-5 py-2.5 rounded transition-all group focus-visible:ring-2 focus-visible:ring-espresso"
            >
              Book a Consultation
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-espresso hover:bg-stone/10 rounded transition-colors"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-linen border-b border-stone/10 overflow-hidden"
          >
            <nav className="px-4 pt-2 pb-6 space-y-4" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-lg font-medium px-3 py-2 rounded transition-colors ${
                    isActive(link.path)
                      ? "bg-mist/30 text-espresso font-semibold"
                      : "text-stone hover:text-espresso hover:bg-stone/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-stone/10 px-3">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center bg-espresso hover:bg-espresso/90 text-linen font-medium py-3 rounded"
                >
                  Book a Consultation
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
