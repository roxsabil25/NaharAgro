import { Sprout, Factory, TrendingUp, CircleDollarSign, Banknote, FileText } from 'lucide-react';

// আপনার প্রজেক্টের আসল ইমেজের পাথ বা ইউআরএল দিয়ে এগুলো পরিবর্তন করে নিবেন
const IMAGES = {
  farmField: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854', // ডান পাশের ফসলি মাঠের ছবি
};

// বাম পাশের ৬টি ফিচারের ডেটা অ্যারে (বাংলা কন্টেন্ট সহ)
const FEATURES = [
  {
    icon: <Sprout className="w-6 h-6 text-emerald-600" />,
    title: "ব্যবসার ক্ষেত্রসমূহ",
    desc: "শস্য চাষ, বিপণন, ডেইরি, পোল্ট্রি, এগ্রো-ট্যুরিজম, জৈব পণ্য।"
  },
  {
    icon: <Factory className="w-6 h-6 text-amber-700" />,
    title: "প্রযুক্তিসঙ্গত প্রয়োজনীয়তা",
    desc: "স্মার্ট ফার্মিং, উন্নত সেচ, আধুনিক যন্ত্রপাতি, পরিবেশ নিয়ন্ত্রণ, ডিজিটাল প্ল্যাটফর্ম।"
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
    title: "এগ্রো কমপ্লেক্স গড়ে তোলার ধাপসমূহ",
    desc: "পরিকল্পনা, লাইসেন্স, অবকাঠামো, দক্ষ জনবল, বিপণন।"
  },
  {
    icon: <CircleDollarSign className="w-6 h-6 text-emerald-700" />,
    title: "মূলধন বিনিয়োগের খাত",
    desc: "অবকাঠামো, প্রযুক্তি, পরিচালন খরচ।"
  },
  {
    icon: <Banknote className="w-6 h-6 text-green-600" />,
    title: "আয়ের উৎস ও টেকসই মডেল",
    desc: "পণ্যের বিক্রয়, মূল্য সংযোজন, এগ্রো-ট্যুরিজম।"
  },
  {
    icon: <FileText className="w-6 h-6 text-amber-800" />,
    title: "আর্থিক মডেলের উপাদানসমূহ",
    desc: "বাজেট, উৎপাদনশীলতা লক্ষ্য, কর্মদক্ষতা প্রবৃদ্ধি, ঝুঁকি ব্যবস্থাপনা।"
  }
];

export default function AgroGuideComponent() {
  return (
    <div className="w-full mt-12 relative bg-[#FAF7F0] font-sans text-[#1F1610]  flex flex-col justify-between">
      
      {/* মেইন কন্টেন্ট এরিয়া */}
      <div className=" w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 md:p-12 lg:px-16 flex-1">
        
        {/* ================= বাম পাশের সেকশন: টেক্সট ও ৬টি গাইডলাইন কার্ড (৭ কলাম) ================= */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* ব্র্যান্ড হেডার */}
          <div className="flex items-center gap-2">
            <span className="text-amber-500 text-xl">◆</span>
            <div>
              <h4 className="font-extrabold tracking-wider text-sm md:text-base leading-none uppercase">
                Nahar Agro Complex
              </h4>
              <span className="text-[10px] md:text-xs text-gray-500 font-bold block mt-0.5">
                Agriculture & Organic Farms Company.
              </span>
            </div>
          </div>

          {/* মেইন হেডিংস */}
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1F1610] leading-tight">
              Building Your Nahar Agro Complex: A Detailed Guide for Sustainable Success
            </h1>
            <p className="text-sm md:text-base text-gray-600 font-medium">
              Nurturing Our Land and Communities with Innovative, Eco-Conscious Practices
            </p>
          </div>

          {/* ৬টি ফিচারের ৩-কলাম গ্রিড লেআউট */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4 relative">
            
            {FEATURES.map((item, index) => (
              <div 
                key={index} 
                className={`space-y-2 pr-2 ${
                  // ডেস্কটপে কলামগুলোর মাঝে সূক্ষ্ম ডিভাইডার বর্ডার দেওয়ার জন্য ট্রিকস
                  index % 3 !== 2 ? 'md:border-r border-gray-300/60' : ''
                }`}
              >
                {/* আইকন কন্টেইনার */}
                <div className="text-3xl bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                  {item.icon}
                </div>
                {/* টাইটেল */}
                <h3 className="text-base font-extrabold text-[#1F1610] leading-snug">
                  {item.title}
                </h3>
                {/* ডেসক্রিপশন */}
                <p className="text-xs text-gray-700 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* ================= ডান পাশের সেকশন: ইমেজ ও গোল সার্কেল কার্ড (৫ কলাম) ================= */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0">
          
          {/* গমের শীষের আইকনটি ইমেজের উপরে বাম পাশে */}
          <div className="absolute -top-8 left-6 text-4xl text-[#D9A74A] opacity-90 select-none z-20 animate-pulse">
            🌾
          </div>

          {/* মূল ফসলের মাঠের ছবি */}
          <div className="overflow-hidden rounded-[2rem] shadow-lg border-2 border-white">
            <img 
              src={IMAGES.farmField} 
              alt="Sustainable Green Farm Field" 
              className="w-full h-[350px] md:h-[450px] object-cover" 
            />
          </div>

          {/* ওভারল্যাপিং বৃত্তাকার স্ট্যাটস কার্ডসমূহ */}
          <div className="absolute inset-y-0 -left-10 md:-left-14 flex flex-col justify-center gap-6 z-20">
            
            {/* কার্ড ১: 300k */}
            <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full flex flex-col items-center justify-center p-3 shadow-xl border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300">
              <span className="text-2xl md:text-3xl font-extrabold text-[#D9A74A] tracking-tight">
                300k
              </span>
              <span className="text-[10px] md:text-xs font-bold text-gray-500 mt-0.5 leading-tight max-w-[80px]">
                Tons of Harvest
              </span>
            </div>

            {/* কার্ড ২: 200+ */}
            <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full flex flex-col items-center justify-center p-3 shadow-xl border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300">
              <span className="text-2xl md:text-3xl font-extrabold text-[#D9A74A] tracking-tight">
                200+
              </span>
              <span className="text-[10px] md:text-xs font-bold text-gray-500 mt-0.5 leading-tight max-w-[80px]">
                Types of Products
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* ================= বটম ফুটার বার ================= */}
      <div className="w-full bg-[#1F1610] text-[#FAF7F0] py-4 px-6 text-xs md:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px]">🌐</span>
            <span>Website: <a href="https://naharagrocomplex.com" className="hover:underline text-amber-400">https://naharagrocomplex.com</a></span>
          </div>
          <div className="flex items-center gap-2">
            <span>📞 Phone: +880 1828-777617</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✉️ e-Mail: info@naharagrocomplex.com</span>
          </div>
        </div>
      </div>

    </div>
  );
}