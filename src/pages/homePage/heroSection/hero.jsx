import { ArrowUpRight, Leaf, ShieldCheck, Sprout, Globe, Phone, Mail } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative w-full font-sans overflow-hidden bg-white">
      
      {/* ১. মেইন হিরো ব্যানার (মোবাইল ও ল্যাপটপের জন্য হাইট ও প্যাডিং অপ্টিমাইজড) */}
      <div className="relative  w-full bg-[#162e16] flex items-center">
        
        {/* ব্যাকগ্রাউন্ড ইমেজ ওভারলে */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-35 z-0"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200')` 
          }}
        />
        {/* স্মুথ ডার্ক গ্রেডিয়েন্ট ওভারলে */}
        <div className="absolute inset-0  z-10" />

        {/* হিরো কন্টেন্ট এরিয়া */}
        <div className="relative  mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-6 z-20 w-full">
          <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            
            {/* ছোট সাব-হেডিং */}
            <div className="flex items-center gap-2 text-[#ccff33] font-bold text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 uppercase tracking-widest">
              <Sprout className="w-4 h-4 sm:w-5 h-5 animate-pulse shrink-0" />
              <span>Agrezer Complex</span>
            </div>

            {/* মেইন ক্যাচ-ফ্রেজ হেডিং (মোবাইল ও ল্যাপটপের জন্য আলাদা সাইজ ফিক্সড) */}
            <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.2] sm:leading-[1.15] mb-5 sm:mb-6">
              Rooted in Nature, Growing the Future
            </h1>

            {/* ছোট ডেসক্রিপশন */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-xl lg:max-w-2xl mb-6 sm:mb-8">
              Agrezer Complex is a premier provider of sustainable agricultural solutions, committed to organic farming practices and community well-being.
            </p>

            {/* কল-টু-অ্যাকশন বাটন */}
            <button className="bg-[#ccff33] text-[#1e3a1e] font-black text-xs sm:text-sm px-6 sm:px-7 py-3.5 sm:py-4 rounded-full inline-flex items-center gap-2 hover:bg-white transition-all duration-300 group shadow-lg shadow-[#ccff33]/15 active:scale-95 mb-10 sm:mb-12">
              Explore More 
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform font-bold" />
            </button>

            {/* ৩ টি ছোট ফিচার হাইলাইট রো (মোবাইলে নিচে নিচে, ল্যাপটপে পাশাপাশি বসবে) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-white/10 max-w-xs sm:max-w-xl lg:max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#ccff33]/10 text-[#ccff33] rounded-xl border border-[#ccff33]/20 shrink-0">
                  <Leaf className="w-4 h-4 sm:w-5 h-5" />
                </div>
                <span className="text-white font-semibold text-xs sm:text-[11px] md:text-xs lg:text-sm tracking-wide">Healthy Soil Solutions</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#ccff33]/10 text-[#ccff33] rounded-xl border border-[#ccff33]/20 shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 h-5" />
                </div>
                <span className="text-white font-semibold text-xs sm:text-[11px] md:text-xs lg:text-sm tracking-wide">Pure Organic Growth</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#ccff33]/10 text-[#ccff33] rounded-xl border border-[#ccff33]/20 shrink-0">
                  <Sprout className="w-4 h-4 sm:w-5 h-5" />
                </div>
                <span className="text-white font-semibold text-xs sm:text-[11px] md:text-xs lg:text-sm tracking-wide">Nature-Driven Innovation</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ২. ইনফো ও কন্টাক্ট সেকশন কার্ড (Capture.jpg এর রেসপন্সিভ গ্রিড লেআউট) */}
     <div className="w-full grid grid-cols-1 lg:grid-cols-12 border-t border-slate-200">
  
  {/* ১. বাম পাশের ইমেজ কার্ড (ল্যাপটপে ৮ কলাম, মোবাইলে ফুল উইথ) */}
  <div className="relative lg:col-span-8 p-6 sm:p-10 lg:p-16 flex flex-col justify-end min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] bg-slate-900 overflow-hidden group">
    {/* ব্যাকগ্রাউন্ড ইমেজ */}
    <div 
      className="absolute inset-0 bg-cover bg-center opacity-60 sm:opacity-70 group-hover:scale-105 transition-transform duration-700 z-0"
      style={{ 
        backgroundImage: `url('/public/img/Gemini_Generated_Image_puhsmipuhsmipuhs.png')` 
      }}
    />
    {/* ডার্ক ও লাইট মিক্সড ওভারলে - টেক্সট রিডিবিলিটি ১০০% নিশ্চিত করার জন্য */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent lg:bg-gradient-to-r lg:from-black/90 lg:via-black/50 lg:to-transparent z-10" />
    
    {/* কার্ড কন্টেন্ট */}
    <div className="relative z-20 max-w-md space-y-3">
      <div className="inline-flex items-center gap-2 bg-[#ccff33]/10 backdrop-blur-sm border border-[#ccff33]/20 px-3 py-1.5 rounded-full text-[#ccff33] font-bold text-xs uppercase tracking-wider">
        <Sprout className="w-3.5 h-3.5 shrink-0" />
        <span>Sustainable Farming</span>
      </div>
      
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight">
        Empowering Farmers with Modern Solutions
      </h3>
      
      <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed hidden sm:block">
        Discover how Agrezer Complex integrates technology with traditional farming to produce the purest organic products.
      </p>
    </div>
  </div>

  {/* ২. ডান পাশের ক্লিন হোয়াইট কন্টাক্ট কার্ড (ল্যাপটপে ৪ কলাম, মোবাইলে নিচে নামবে) */}
  <div className="lg:col-span-4 bg-white p-6 sm:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col justify-center">
    <div className="space-y-6">
      {/* ব্র্যান্ডিং */}
      <div className="flex items-center gap-2 text-[#1e3a1e] font-black text-lg lg:text-xl border-b border-slate-100 pb-3">
        <Sprout className="w-5 h-5 text-[#4a7c2c] shrink-0" />
        <span>Contact Info</span>
      </div>
      
      {/* কন্টাক্ট লিস্ট */}
      <div className="space-y-5">
        {/* ওয়েবসাইট */}
        <div className="flex items-start gap-3 group">
          <div className="p-2.5 bg-slate-50 text-slate-500 rounded-xl group-hover:bg-[#4a7c2c]/10 group-hover:text-[#4a7c2c] transition-colors shrink-0">
            <Globe className="w-4 h-4" />
          </div>
          <div className="space-y-0.5 min-w-0">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Website</span>
            <a href="https://agrezercomplex.com" target="_blank" rel="noreferrer" className="text-slate-800 font-bold text-sm sm:text-base hover:text-[#4a7c2c] hover:underline break-all block">
              agrezercomplex.com
            </a>
          </div>
        </div>

        {/* ফোন */}
        <div className="flex items-start gap-3 group">
          <div className="p-2.5 bg-slate-50 text-slate-500 rounded-xl group-hover:bg-[#4a7c2c]/10 group-hover:text-[#4a7c2c] transition-colors shrink-0">
            <Phone className="w-4 h-4" />
          </div>
          <div className="space-y-0.5">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Phone Contact</span>
            <span className="text-slate-800 font-bold text-sm sm:text-base block">
              +880 1828-777617
            </span>
          </div>
        </div>

        {/* ইমেইল */}
        <div className="flex items-start gap-3 group">
          <div className="p-2.5 bg-slate-50 text-slate-500 rounded-xl group-hover:bg-[#4a7c2c]/10 group-hover:text-[#4a7c2c] transition-colors shrink-0">
            <Mail className="w-4 h-4" />
          </div>
          <div className="space-y-0.5 min-w-0">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">e-Mail Us</span>
            <a href="mailto:info@agrezercomplex.com" className="text-slate-800 font-bold text-sm sm:text-base hover:text-[#4a7c2c] break-all block">
              info@agrezercomplex.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
    </section>
  );
}

export default HeroSection;