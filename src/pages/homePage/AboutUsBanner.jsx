

// আপনার প্রোজেক্টের আসল ইমেজের পাথ বা URL দিয়ে এগুলো পরিবর্তন করবেন
const IMAGES = {
  farmField: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854', // ডান পাশের সবুজ ফসলের মাঠের ছবি
  bottomBookTexture: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c' // ব্যাকগ্রাউন্ডের নিচের আবছা টেক্সচার (অপশনাল)
};

 function AboutUsBanner() {
  return (
    <div className=" mt-12 relative bg-[#FAF7F0] font-sans text-[#1F1610] overflow-hidden w-full flex items-center justify-between py-12 px-6 md:px-12 lg:px-16">
      
      {/* ব্যাকগ্রাউন্ডের নিচের আবছা বই বা ল্যান্ডস্কেপ টেক্সচার (যদি রাখতে চান) */}
      <div 
        className="absolute bottom-0 left-0 w-full h-1/3 opacity-5 pointer-events-none bg-cover bg-bottom"
        style={{ backgroundImage: `url(${IMAGES.bottomBookTexture})` }}
      />

      {/* মেইন কন্টেইনার গ্রিড */}
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* ================= বাম পাশের টেক্সট কন্টেন্ট (৭ কলাম) ================= */}
        <div className="lg:col-span-7 space-y-6 pr-0 lg:pr-8">
          
          {/* লোগো, ব্র্যান্ড নেম এবং "About Us" ব্যাজ */}
          <div className="flex flex-wrap items-center gap-4">
            {/* About Us ব্যাজ */}
            <div className="bg-[#3D2B1F] text-[#EFE9DB] px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-sm">
              <span className="text-amber-400 text-xs">◆</span> About Us
            </div>
            
            {/* ব্র্যান্ড নেম */}
            <div>
              <h4 className="font-extrabold tracking-wider text-base md:text-lg leading-none text-gray-900 uppercase">
                NAHAR AGRO COMPLEX
              </h4>
              <span className="text-xs text-gray-600 font-semibold tracking-normal block mt-1">
                Agriculture & Organic Farms Company
              </span>
            </div>
          </div>

          {/* মেইন হেডিং */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1F1610] tracking-tight leading-[1.1]">
            Better Farming, <br />
            Better Future <br />
            Together
          </h1>

          {/* ডেসক্রিপশন প্যারাগ্রাফ */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl">
            Nurturing our land and communities with innovative, eco-conscious farming for over 40 years. Join us in cultivating a brighter, healthier tomorrow.
          </p>
        </div>

        {/* ================= ডান পাশের ইমেজ ও ওভারল্যাপিং কার্ড সেকশন (৫ কলাম) ================= */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          
          {/* লোগোর আইকন বা গমের শীষের ব্যাকগ্রাউন্ড শেপ (ছবির ওপরের কোনায়) */}
          <div className="absolute -top-8 left-4 text-4xl text-[#D9A74A] opacity-80 select-none z-20 animate-pulse">
            🌾
          </div>

          {/* মূল মাঠের ছবি */}
          <div className="overflow-hidden rounded-[2rem] shadow-md border-4 border-white/60">
            <img 
              src={IMAGES.farmField} 
              alt="Green Farm Field" 
              className="w-full h-[300px] md:h-[400px] object-cover" 
            />
          </div>

          {/* ================= ওভারল্যাপিং সার্কেল কার্ডসমূহ ================= */}
          <div className="absolute inset-y-0 -left-8 md:-left-12 flex flex-col justify-center gap-6 z-20">
            
            {/* কার্ড ১: 300k Tons of Harvest */}
            <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full flex flex-col items-center justify-center p-2 shadow-xl border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300">
              <span className="text-2xl md:text-3xl font-extrabold text-[#D9A74A] tracking-tight">
                300k
              </span>
              <span className="text-[10px] md:text-xs font-bold text-gray-600 mt-1 leading-tight max-w-[80px]">
                Tons of Harvest
              </span>
            </div>

            {/* কার্ড ২: 200+ Types of Products */}
            <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full flex flex-col items-center justify-center p-2 shadow-xl border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300">
              <span className="text-2xl md:text-3xl font-extrabold text-[#D9A74A] tracking-tight">
                200+
              </span>
              <span className="text-[10px] md:text-xs font-bold text-gray-600 mt-1 leading-tight max-w-[80px]">
                Types of Products
              </span>
            </div>

          </div>
          {/* ============================================================= */}

        </div>

      </div>
    </div>
  );
}


export default AboutUsBanner;