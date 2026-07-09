import { Link } from "react-router-dom";
import { Mail, Phone, ArrowRight } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-linen pt-16 pb-8 border-t border-stone/20" aria-label="Main Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Studio Brand Info */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <Logo size={46} isDarkBackground={true} className="transition-transform duration-300 group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-linen leading-none">
                  MAA
                </span>
                <span className="font-sans text-[10px] font-medium tracking-[0.25em] text-mist mt-1 block">
                  INTERIORS
                </span>
              </div>
            </Link>
            <p className="text-linen/80 text-base max-w-sm leading-relaxed mb-6">
              Designing and building thoughtful, warm, and highly personalized spaces from first sketch to final cushion. Serving homeowners and commercial clients with care.
            </p>
            <div className="space-y-3 font-sans">
              <div className="flex items-center text-linen/75 hover:text-mist transition-colors">
                <Phone size={18} className="mr-3 flex-shrink-0" />
                <span>
                  <a href="tel:+917980546849" className="hover:underline">+91 79805 46849</a>
                  {" / "}
                  <a href="tel:+919903538451" className="hover:underline">+91 99035 38451</a>
                </span>
              </div>
              <div className="flex items-center text-linen/75 hover:text-mist transition-colors">
                <Mail size={18} className="mr-3 flex-shrink-0" />
                <a href="mailto:maapvtofficial@gmail.com" className="hover:underline">maapvtofficial@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-mist mb-6">Explore</h3>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <Link to="/" className="text-linen/75 hover:text-mist hover:underline transition-colors block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-linen/75 hover:text-mist hover:underline transition-colors block">
                  Portfolio Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-linen/75 hover:text-mist hover:underline transition-colors block">
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-linen/40 hover:text-mist/70 transition-colors block">
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-mist mb-6">Studio Hours</h3>
            <ul className="space-y-3 font-sans text-sm text-linen/75">
              <li className="flex justify-between border-b border-linen/10 pb-2">
                <span>Monday - Friday:</span>
                <span className="font-medium text-linen">10:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-linen/10 pb-2">
                <span>Saturday:</span>
                <span className="font-medium text-linen">11:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday:</span>
                <span className="text-stone">Closed (By Appointment)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-linen/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-linen/60 font-sans">
          <p>© {currentYear} Maa Interiors. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Designed to feel like home.</span>
            <span>Free-tier Secure Infrastructure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
