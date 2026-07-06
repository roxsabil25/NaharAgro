import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Search, ArrowRight, 
  Home, Info, Briefcase, Layers, BookOpen, ShoppingBag 
} from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Dynamic active class generator for Desktop Links
  const desktopLinkClass = ({ isActive }) =>
    `relative py-2 transition-colors duration-200 hover:text-[#ccff33] ${
      isActive ? 'text-[#ccff33] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#ccff33]' : 'text-white'
    }`;

  // Premium Mobile Link Active UI Generator
  const mobileLinkClass = ({ isActive }) =>
    `flex items-center gap-3.5 py-3 px-4 rounded-2xl font-semibold text-[15px] transition-all duration-300 ${
      isActive 
        ? 'bg-[#ccff33] text-[#1e3a1e] shadow-lg shadow-[#ccff33]/20 scale-[1.02]' 
        : 'text-slate-300 hover:text-white hover:bg-white/5 active:scale-95'
    }`;

  return (
    <nav className="bg-[#1e3a1e]/95 text-white sticky top-0 z-50 backdrop-blur-xl shadow-lg border-b border-white/10 font-sans transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* ১. লোগো সেকশন */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-black tracking-wider text-white flex items-center gap-2 group">
              <span className="text-[#ccff33] inline-block transform group-hover:rotate-12 transition-transform duration-300">🌿</span> 
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Agrezer</span>
            </Link>
          </div>

          {/* ২. ডেক্সটপ মেনু */}
          <div className="hidden xl:flex items-center space-x-8 font-medium text-sm tracking-wide">
            <NavLink to="/" className={desktopLinkClass}>Home</NavLink>
            <NavLink to="/about-us" className={desktopLinkClass}>About Us</NavLink>
            <NavLink to="/portfolio" className={desktopLinkClass}>Portfolio</NavLink>
            
            {/* ডেক্সটপ ড্রপডাউন */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 hover:text-[#ccff33] transition-colors duration-200 focus:outline-none text-white group-hover:text-[#ccff33]">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute top-full left-0 pt-3 w-64 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                <div className="bg-slate-900/95 text-slate-200 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-xl overflow-hidden p-2 space-y-1">
                  <NavLink to="/services/car-parking-shade" className="block px-4 py-3 hover:bg-white/10 hover:text-[#ccff33] rounded-xl font-medium text-xs uppercase tracking-wider transition-all">Car Parking Shade</NavLink>
                  <NavLink to="/services/pergola-shade" className="block px-4 py-3 hover:bg-white/10 hover:text-[#ccff33] rounded-xl font-medium text-xs uppercase tracking-wider transition-all">Pergola Shade</NavLink>
                  <NavLink to="/services/swimming-pool-area" className="block px-4 py-3 hover:bg-white/10 hover:text-[#ccff33] rounded-xl font-medium text-xs uppercase tracking-wider transition-all">Swimming Pool Shade</NavLink>
                </div>
              </div>
            </div>

            <NavLink to="/blog" className={desktopLinkClass}>Blog</NavLink>
            <NavLink to="/shop" className={desktopLinkClass}>Shop</NavLink>
          </div>

          {/* ৩. ডান পাশের বাটন (ডেক্সটপ) */}
          <div className="hidden xl:flex items-center gap-6">
            <button className="text-white hover:text-[#ccff33] transition-colors p-2 hover:bg-white/5 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/contact" className="bg-[#ccff33] text-[#1e3a1e] font-bold text-xs px-6 py-3.5 rounded-full uppercase tracking-widest hover:bg-white hover:scale-105 active:scale-95 shadow-md hover:shadow-[#ccff33]/20 transition-all duration-300 flex items-center gap-2 group">
              Get In Touch <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* ৪. মোবাইল ও ট্যাব মেনু বাটন */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#ccff33] focus:outline-none p-2.5 z-50 relative bg-white/5 hover:bg-white/10 active:scale-90 rounded-xl transition-all"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* ব্যাকড্রপ ওভারলে (মোবাইল) */}
      <div 
        className={`fixed inset-0 bg-black/60 xl:hidden z-40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* ৫. ফিক্সড নো-স্ক্রল মোবাইল সাইড ড্রয়ার (ডান-বামে স্ক্রল সমস্যা ফিক্সড করা হয়েছে) */}
      <div className={`fixed top-0 right-0 h-screen w-[92%] max-w-[340px] bg-[#0f240f] text-white shadow-2xl border-l border-white/10 z-40 transform transition-all duration-300 ease-out xl:hidden flex flex-col ${
        isOpen ? "translate-x-0 visible opacity-100" : "translate-x-full invisible opacity-0"
      }`}>
        
        {/* মেনুর ভেতরের স্ক্রল কন্টেইনার */}
        <div className="flex-1 overflow-y-auto px-5 pt-24 pb-6 flex flex-col justify-between custom-scrollbar">
          
          {/* মেনু আইটেম লিস্ট */}
          <div className="space-y-1.5">
            <NavLink to="/" onClick={() => setIsOpen(false)} className={mobileLinkClass}>
              <Home className="w-5 h-5 opacity-80" />
              <span>Home</span>
            </NavLink>
            
            <NavLink to="/about-us" onClick={() => setIsOpen(false)} className={mobileLinkClass}>
              <Info className="w-5 h-5 opacity-80" />
              <span>About Us</span>
            </NavLink>
            
            <NavLink to="/portfolio" onClick={() => setIsOpen(false)} className={mobileLinkClass}>
              <Briefcase className="w-5 h-5 opacity-80" />
              <span>Portfolio</span>
            </NavLink>
            
            {/* মোবাইল ড্রপডাউন (Accordion) */}
            <div className="rounded-2xl overflow-hidden bg-white/[0.03] border border-white/5">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`w-full flex items-center justify-between py-3 px-4 focus:outline-none transition-colors ${isServicesOpen ? 'text-[#ccff33] bg-white/[0.02]' : 'text-slate-300 hover:text-white'}`}
              >
                <div className="flex items-center gap-3.5 font-semibold text-[15px]">
                  <Layers className="w-5 h-5 opacity-80" />
                  <span>Services</span>
                </div>
                <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-[#ccff33]' : 'text-slate-400'}`} />
              </button>
              
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isServicesOpen ? 'max-h-60 bg-black/40' : 'max-h-0'}`}>
                <div className="px-2 py-2 space-y-1 text-sm border-l-2 border-[#ccff33]/40 ml-6 my-1.5">
                  <NavLink to="/services/car-parking-shade" onClick={() => setIsOpen(false)} className="block py-2.5 px-3 text-slate-300 hover:text-[#ccff33] rounded-lg hover:bg-white/5 uppercase text-[11px] font-bold tracking-wider transition-all">Car Parking Shade</NavLink>
                  <NavLink to="/services/pergola-shade" onClick={() => setIsOpen(false)} className="block py-2.5 px-3 text-slate-300 hover:text-[#ccff33] rounded-lg hover:bg-white/5 uppercase text-[11px] font-bold tracking-wider transition-all">Pergola Shade</NavLink>
                  <NavLink to="/services/swimming-pool-area" onClick={() => setIsOpen(false)} className="block py-2.5 px-3 text-slate-300 hover:text-[#ccff33] rounded-lg hover:bg-white/5 uppercase text-[11px] font-bold tracking-wider transition-all">Swimming Pool Shade</NavLink>
                </div>
              </div>
            </div>

            <NavLink to="/blog" onClick={() => setIsOpen(false)} className={mobileLinkClass}>
              <BookOpen className="w-5 h-5 opacity-80" />
              <span>Blog</span>
            </NavLink>
            
            <NavLink to="/shop" onClick={() => setIsOpen(false)} className={mobileLinkClass}>
              <ShoppingBag className="w-5 h-5 opacity-80" />
              <span>Shop</span>
            </NavLink>
          </div>

          {/* মোবাইল ফুটার */}
          <div className="space-y-3.5 pt-5 border-t border-white/10 mt-6 shrink-0">
            <div className="flex items-center gap-3 bg-white/[0.04] px-4 py-3 rounded-2xl border border-white/5 focus-within:border-[#ccff33]/30 focus-within:bg-white/[0.07] transition-all">
              <Search className="w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search anything..." 
                className="bg-transparent focus:outline-none text-sm w-full placeholder-slate-500 text-white" 
              />
            </div>
            
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)} 
              className="w-full text-center bg-[#ccff33] text-[#1e3a1e] font-black text-xs py-3.5 rounded-2xl uppercase tracking-widest active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#ccff33]/10"
            >
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;