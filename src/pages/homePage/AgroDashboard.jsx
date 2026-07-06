

// ধানের শীষের PNG ছবির লিংক (আপনার প্রোজেক্টের আসল বা লোকাল ইমেজের পাথ দিয়ে এগুলো পরিবর্তন করবেন)
const PADDY_ICON = "/public/img/paddy.png"; // ডেমো হিসেবে ধানের শীষের ইমেজ

const IMAGES = {
  combineHarvester: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9TDqhqjKV-ivm90OGeRCuNtFg2CYLPmM82xKq86BKQ&s=10', // বড় কম্বাইন হার্ভেস্টার
  paddyField: 'https://media.bighaat.com/kvplus/articles/piece-golden-rice-rice-waiting-be-harvested-2.jpg',       // ধানের শীষের ক্লোজআপ
  paddyField2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZ7AxYzepuuhr02auBcEsL3Acn85rrKaNh7B8-n_RGQ&s=10', // ধানের শীষের ক্লোজআপ ২
  tractor: '/public/img/Gemini_Generated_Image_puhsmipuhsmipuhs.png'          // হলুদ ও লাল ট্রাক্টর
};

 function AgroDashboard() {
  return (
    // মেইন কন্টেইনার (চার কোণায় ব্যাকগ্রাউন্ড ইমেজ রাখার জন্য relative ব্যবহার করা হয়েছে)
    <div className="mt-12 relative bg-[#FAF7F0] p-8 md:p-16 font-sans text-[#1F1610] overflow-hidden select-none w-full">
      
      {/* ================= চার কোণার ধানের শীষ (Paddy Corner Elements) ================= */}
     {/* ওপরের বাম কোণা (গোড়া ওপরে, ধান নিচের দিকে মুখ করা) */}
<img 
  src={PADDY_ICON} 
  alt="paddy" 
  // -scale-y-100 দেওয়ার কারণে গোড়া ওপরে চলে যাবে এবং ধান নিচে content-এর দিকে ঝুলে থাকবে
  className="absolute top-0 left-0 w-24 md:w-40 h-auto object-contain -scale-y-100 pointer-events-none opacity-90" 
/>

{/* ওপরের ডান কোণা (গোড়া ওপরে, ডানে-বামে ফ্লিপ করা এবং ধান নিচের দিকে মুখ করা) */}
<img 
  src={PADDY_ICON} 
  alt="paddy" 
  // -scale-x-100 দিয়ে ডানে ঘোরানো হয়েছে এবং -scale-y-100 দিয়ে ওপর-নিচে উল্টানো হয়েছে
  className="absolute top-0 right-0 w-24 md:w-40 h-auto object-contain -scale-x-100 -scale-y-100 pointer-events-none opacity-90" 
/>
      
      {/* নিচের বাম কোণা (সম্পূর্ণ সোজা) */}
<img 
  src={PADDY_ICON} 
  alt="paddy" 
  // এখানে -scale-y-100 মুছে ফেলা হয়েছে, তাই এটি ডিফল্ট সোজাই থাকবে
  className="absolute bottom-0 left-0 w-24 md:w-40 h-auto object-contain pointer-events-none opacity-90" 
/>

{/* নিচের ডান কোণা (শুধু ডানে-বামে ফ্লিপ করা, ওপরে-নিচে সোজা) */}
<img 
  src={PADDY_ICON} 
  alt="paddy" 
  // এখানে -scale-y-100 মুছে ফেলা হয়েছে, শুধু -scale-x-100 আছে 
  // যাতে ছবিটি ডানদিকের দিকে ঘুরে থাকে
  className="absolute bottom-0 right-0 w-24 md:w-40 h-auto object-contain -scale-x-100 pointer-events-none opacity-90" 
/>
      {/* ============================================================================== */}


      <div className=" mx-auto space-y-8 relative z-10 w-full p-4 md:p-8 lg:px-16">
        
        {/* মেইন হেডার */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            Nahar Agro Complex - Agriculture  & Organic Farms Company.
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 pt-2">
            Growing a Greener Future, Naturally
          </h2>
        </div>

        {/* গ্রিড লেআউট (ছবি ও কন্টেন্ট সেকশন) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* ১. বামের বড় ইমেজ (Advanced Farm Tech) */}
          <div className="lg:col-span-5 relative overflow-hidden rounded-[2rem] shadow-sm group">
            <img src={IMAGES.combineHarvester} alt="Advanced Farm Tech" className="w-full h-full min-h-[350px] object-cover" />
            <div className="absolute bottom-4 left-4 bg-[#2D2219]/90 text-white px-6 py-2 rounded-xl text-sm font-bold">
              Advanced Farm Tech
            </div>
          </div>

          {/* ২. মাঝের সেকশন (Text + Heritage Card) */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-6">
            <p className="text-sm text-gray-700 leading-relaxed font-medium">
              Nahar Agro Complex delivers sustainable, high-quality farming solutions with innovation and care.
            </p>
            
            {/* Heritage Farm Tour আর্চ কার্ড */}
            <div className="bg-transparent border-2 border-amber-800/20 rounded-t-[5rem] rounded-b-xl p-6 text-center space-y-4 flex flex-col items-center justify-center bg-white/40 backdrop-blur-sm relative py-8">
              <h3 className="text-xl font-extrabold max-w-[150px]">Heritage Farm Tour</h3>
              <button className="text-sm font-bold text-amber-900 flex items-center gap-1 hover:underline">
                Read More <span>➔</span>
              </button>
              <div className="w-10 h-10 bg-[#3D2B1F] rounded-full flex items-center justify-center text-white text-xs shadow-inner">
                🌾
              </div>
            </div>
            <img src={IMAGES.paddyField2} alt="Paddy Field" className="w-full h-48 md:h-64 object-cover rounded-xl shadow-sm" />
          </div>

{/* ৩. ডান পাশের ক্লোজআপ ইমেজ এবং সোলার চার্ট সেকশন */}

<div className="lg:col-span-4 grid grid-cols-12 gap-4 items-stretch">
  
  {/* বাম পাশের কলাম: ধানের শীষের লম্বালম্বি ইমেজ (১২ ভাগের ৭ ভাগ জায়গা নিবে) */}
  <div className="col-span-7 overflow-hidden rounded-[2rem] h-full">
    <img 
      src={IMAGES.paddyField} 
      alt="Paddy close up" 
      className="w-full h-full min-h-[320px] md:min-h-[380px] object-cover" 
    />
  </div>
  
  {/* ডান পাশের কলাম: সোলার চার্ট এবং ট্রাক্টর ইমেজ (১২ ভাগের ৫ ভাগ জায়গা নিবে এবং ওপর-নিচে থাকবে) */}
  <div className="col-span-5 flex flex-col justify-between gap-20">
    
    {/* ৪. এনার্জি বা সোলার সার্কেল চার্ট */}
    <div className="flex items-center justify-center">
      <div className="w-full bg-white rounded-full aspect-square border-2 border-dashed border-amber-800/30 flex flex-col items-center justify-center p-3 shadow-sm text-center">
        <span className="text-[10px] font-bold text-gray-500 uppercase leading-tight">
          Energy from solar
        </span>
        <span className="text-lg md:text-xl font-extrabold text-[#1F1610] mt-1">
          80%
        </span>
      </div>
    </div>

    {/* ৫. নিচের ছোট ট্রাক্টর ইমেজ */}
    <div className="overflow-hidden rounded-[2rem] flex-1">
      <img 
        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw5_VeYm4EQfqxVAb-Yos39aYSWY2lszXWT-CyPBgNtg&s=10'} 
        alt="Tractor in field" 
        className="w-full h-full object-cover" 
      />
    </div>

  </div>

</div>

        </div>

        {/* ছোট মিডল ট্যাগলাইন */}
        <div className="text-center">
          <span className="bg-[#EFE9DB] text-gray-800 font-bold px-6 py-2 rounded-full text-xs md:text-sm shadow-sm inline-block">
            Your sustainable farm experience starts here.
          </span>
        </div>

        {/* বটম ফুটার বা ইনফো বার */}
        <div className="border-t border-gray-300/80 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm font-medium text-gray-700">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌱</span>
            <div>
              <p className="font-extrabold text-base leading-tight">Nahar Agro</p>
              <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Agriculture & Organic Farms Company</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span>🌐 <a href="https://naharagrocomplex.com" className="hover:underline">https://naharagrocomplex.com</a></span>
            <span>📞 +880 1828-777617</span>
            <span>✉️ info@naharagrocomplex.com</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AgroDashboard;