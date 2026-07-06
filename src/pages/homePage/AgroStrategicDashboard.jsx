
import { 
  Sprout, 
  Cpu, 
  TrendingUp, 
  Calendar, 
  ArrowUpRight, 
  Globe, 
  Phone, 
  Mail 
} from 'lucide-react';

// ডেমো ইমেজ সোর্স (আপনার প্রোজেক্টের আসল ছবি দিয়ে এগুলো রিপ্লেস করে নিবেন)
const IMAGES = {
  bgField: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854',     // মেইন ব্যাকগ্রাউন্ড মাঠের ছবি
  farmer: 'https://images.unsplash.com/photo-1595113316349-9fa4ee24f884',      // কৃষক
  cow: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53',         // গরু
  harvester: 'https://images.unsplash.com/photo-1592991538534-00972b6f59ab',   // হার্ভেস্টার
  pumpkins: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443',    // মিষ্টি কুমড়া/ফসল
  robotSprayer: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e', // রোবোটিক স্প্রেয়ার (ব্লগ ১)
  tractorField: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d'  // ট্রাক্টর মাঠ (ব্লগ ২)
};

export default function AgroStrategicDashboard() {
  return (
    <div className="bg-[#FAF7F0] font-sans text-[#1F1610]  p-4 md:p-8">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* ========================================================================= */}
        {/* ১. বাম পাশের ব্যানার ও স্ট্র্যাটেজি গাইড সেকশন (১২ ভাগের ৭ ভাগ জায়গা নেবে) */}
        {/* ========================================================================= */}
        <div 
          className="lg:col-span-7 rounded-[2.5rem] overflow-hidden bg-cover bg-center relative p-6 md:p-8 flex flex-col justify-between shadow-md min-h-[700px]"
          style={{ backgroundImage: `linear-gradient(to bottom, rgba(31,22,16,0.85), rgba(31,22,16,0.4)), url(${IMAGES.bgField})` }}
        >
          {/* ওপরের হেডার ও স্ট্যাটস ওভারলে */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start relative z-10">
            <div className="md:col-span-8 text-white space-y-2">
              <h2 className="text-xl md:text-3xl font-black tracking-tight leading-tight uppercase">
                NAHAR AGRO COMPLEX:<br />A STRATEGIC GUIDE FOR SUSTAINABLE SUCCESS
              </h2>
              <p className="text-[10px] md:text-xs text-gray-300 font-medium uppercase tracking-wider max-w-md">
                Nurturing our land and communities with innovation, eco-conscious practices, and economic growth.
              </p>
            </div>
            
            {/* ৩00k+ এবং ২০০+ স্ট্যাটস */}
            <div className="md:col-span-4 text-right text-amber-400 font-bold space-y-1">
              <div>
                <span className="text-2xl md:text-3xl font-black">300k+</span>
                <p className="text-[9px] text-white/80 uppercase font-medium">Tons of Harvest</p>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-black">200+</span>
                <p className="text-[9px] text-white/80 uppercase font-medium">Types of Products</p>
              </div>
            </div>
          </div>

          {/* মাঝখানের কন্টেন্ট এরিয়া: ৩টি সাদা বক্স এবং ৪টি ভার্টিকাল ইমেজ */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-8 relative z-10 items-stretch">
            
            {/* ৩টি কন্টেন্ট লিস্ট বক্স */}
            <div className="md:col-span-8 space-y-4 flex flex-col justify-between">
              
              {/* বক্স ১: KEY BUSINESS FIELDS */}
              <div className="bg-white/95 rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-3 items-start">
                <div className="bg-amber-100 p-2 rounded-xl text-amber-800"><Sprout className="w-5 h-5" /></div>
                <div>
                  <h4 className="text-xs md:text-sm font-black uppercase text-gray-900 tracking-wide">KEY BUSINESS FIELDS</h4>
                  <ul className="text-[11px] md:text-xs text-gray-700 font-semibold mt-1 space-y-0.5 list-disc list-inside">
                    <li>Crop Production & Marketing</li>
                    <li>Dairy Farming</li>
                    <li>Livestock & Poultry</li>
                    <li>Agro-Tourism</li>
                    <li>Organic Products</li>
                  </ul>
                </div>
              </div>

              {/* বক্স ২: TECHNOLOGICAL REQUIREMENTS */}
              <div className="bg-white/95 rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-3 items-start">
                <div className="bg-emerald-100 p-2 rounded-xl text-emerald-800"><Cpu className="w-5 h-5" /></div>
                <div>
                  <h4 className="text-xs md:text-sm font-black uppercase text-gray-900 tracking-wide">TECHNOLOGICAL REQUIREMENTS</h4>
                  <ul className="text-[11px] md:text-xs text-gray-700 font-semibold mt-1 space-y-0.5 list-disc list-inside">
                    <li>Smart Farming (Harvest AI)</li>
                    <li>Advanced Irrigation</li>
                    <li>Farm Automation</li>
                    <li>Controlled Environments</li>
                    <li>Digital Platform</li>
                  </ul>
                </div>
              </div>

              {/* باکس ৩: INVESTMENT & GROWTH STRATEGY */}
              <div className="bg-white/95 rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-3 items-start">
                <div className="bg-amber-100 p-2 rounded-xl text-amber-900"><TrendingUp className="w-5 h-5" /></div>
                <div>
                  <h4 className="text-xs md:text-sm font-black uppercase text-gray-900 tracking-wide">INVESTMENT & GROWTH STRATEGY</h4>
                  <ul className="text-[11px] md:text-xs text-gray-700 font-semibold mt-1 space-y-0.5 list-disc list-inside">
                    <li>Capital Allocation (Infrastructure, Tech, OpEx)</li>
                    <li>Revenue Diversity (Product Sale, Value Addition, Agro-Tourism)</li>
                    <li>Financial Model (KPI Tracking, Efficiency)</li>
                  </ul>
                </div>
              </div>

            </div>

            {/* ৪টি লম্বালম্বি থাম্বনেইল ছবি */}
            <div className="md:col-span-4 flex flex-row md:flex-col justify-between gap-2 md:gap-0">
              {[IMAGES.farmer, IMAGES.cow, IMAGES.harvester, IMAGES.pumpkins].map((src, i) => (
                <div key={i} className="w-full h-16 md:h-24 overflow-hidden rounded-xl border-2 border-white/80 shadow-md">
                  <img src={src} alt="Agro Thumbnail" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                </div>
              ))}
            </div>

          </div>

          {/* নিচের অ্যাকশন বাটন এবং ছোট কন্টাক্ট ইনফো */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-white/20">
            <button className="bg-white text-gray-900 font-black px-6 py-2.5 rounded-full text-xs tracking-wider uppercase shadow-md hover:bg-amber-400 hover:text-white transition-colors duration-300 w-full md:w-auto">
              GET STARTED WITH YOUR NAHAR AGRO COMPLEX JOURNEY
            </button>
            {/* <div className="text-[10px] text-white/80 font-medium flex gap-3">
              <span>🌐 naharagrocomplex.com</span>
              <span>📞 +880 1828-777617</span>
            </div> */}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ২. ডান পাশের নিউজ ও ব্লগ সেকশন (১২ ভাগের ৫ ভাগ জায়গা নেবে) */}
        {/* ========================================================================= */}
        <div className="lg:col-span-5 flex flex-col justify-between py-2">
          
          {/* নিউজ সেকশন হেডার */}
          <div className="text-center md:text-left space-y-1 px-2">
            <h3 className="text-2xl font-black text-gray-900">Nahar Agro Complex</h3>
            <p className="text-xs uppercase tracking-widest text-amber-800 font-bold">Agriculture & Organic Farms Company.</p>
          </div>

          {/* দুটি মেইন ব্লগ কার্ড */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 my-6 flex-1">
            
            {/* ব্লগ কার্ড ১ */}
            <div className="bg-white rounded-[2rem] p-4 shadow-sm border border-gray-100/80 flex flex-col justify-between group">
              <div className="overflow-hidden rounded-2xl h-44 md:h-48">
                <img src={IMAGES.robotSprayer} alt="Tech Changing Yield" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="mt-4 space-y-2">
                <div className="text-[11px] text-gray-400 font-bold flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> September 13, 2025
                </div>
                <h4 className="text-base font-black text-gray-900 leading-snug">
                  Nahar Agro Complex Tech Changing Yield
                </h4>
                <p className="text-xs text-gray-500 font-medium line-clamp-2">
                  Nahar Agro Complex deploys advanced farm technology to improve yields sustainably. Discover our tech...
                </p>
                <button className="text-xs font-bold text-amber-700 flex items-center gap-0.5 pt-1 group-hover:underline">
                  Read More <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* ব্লগ কার্ড ২ */}
            <div className="bg-white rounded-[2rem] p-4 shadow-sm border border-gray-100/80 flex flex-col justify-between group">
              <div className="overflow-hidden rounded-2xl h-44 md:h-48">
                <img src={IMAGES.tractorField} alt="Understanding Soil Health" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="mt-4 space-y-2">
                <div className="text-[11px] text-gray-400 font-bold flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> October 14, 2025
                </div>
                <h4 className="text-base font-black text-gray-900 leading-snug">
                  Understanding Soil Health with Nahar Agro Complex
                </h4>
                <p className="text-xs text-gray-500 font-medium line-clamp-2">
                  Our soil health experts guide farmers to better practices and sustainable yields. Join Nahar Agro Complex to learn...
                </p>
                <button className="text-xs font-bold text-amber-700 flex items-center gap-0.5 pt-1 group-hover:underline">
                  Read More <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>

          {/* ডান পাশের সাব-ফুটার ইনফো বার */}
          {/* <div className="border-t border-gray-200/80 pt-4 flex flex-wrap justify-center lg:justify-between items-center gap-y-2 text-[11px] font-bold text-gray-600 px-2">
            <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5 text-gray-400" /> https://naharagrocomplex.com</span>
            <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-gray-400" /> +880 1828-777617</span>
            <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-gray-400" /> info@naharagrocomplex.com</span>
          </div> */}

        </div>

      </div>
    </div>
  );
}