import {  Sprout} from 'lucide-react';

// Note: আপানার প্রোজেক্টের ইমেজ পাথ বা URL এখানে বসিয়ে নিবেন।
const IMAGES = {
  soil: 'https://images.unsplash.com/photo-1593113598332-cd288d649433', // হাতের মাটির ছবি
  cow: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53',   // গরুর ছবি
  chickens: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7', // মুরগির ছবি
  crops: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad451'  // ফসলের ছবি
};

 function AgroBanner() {
  return (
    <div className="bg-[#FAF7F0] font-sans p-6 md:p-12 text-[#2D2219] w-full">
      {/* মেইন কন্টেইনার */}
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* বাম পাশের টেক্সট কন্টেন্ট */}
        <div className="space-y-6">
          {/* লোগো ও ব্র্যান্ড নেম বক্স */}
          <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-100">
            {/* লোগোর আইকন বা ইমেজ */}
            <Sprout className="w-4 h-4 sm:w-5 h-5 animate-pulse shrink-0" />
            <div>
              <h4 className="font-extrabold tracking-wider text-sm leading-none text-gray-800">NAHAR AGRO COMPLEX</h4>
              <span className="text-[10px] text-gray-500 font-medium uppercase tracking-tight">Agriculture & Organic Farms Company</span>
            </div>
          </div>

          {/* মেইন হেডিং */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1F1610] tracking-tight leading-tight">
            Providing The <br />
            Finest Products For <br />
            Our Community
          </h1>

          {/* প্যারাগ্রাফসমূহ */}
          <div className="space-y-4 text-gray-700 text-sm md:text-base max-w-xl leading-relaxed">
            <p>
              Our farms are dedicated to producing high-quality, organic crops that are as good for the earth as they are for you. We nurture the soil and promote biodiversity to ensure that every harvest is fresh, nutritious, and full of flavor sustainable organic produce.
            </p>
            <p>
              Our commitment to the environment and our community drives us to innovate, improving not only our farming methods but also the lives of those who enjoy our produce, right here in our local area.
            </p>
          </div>
        </div>

        {/* ডান পাশের ৪টি ইমেজের গ্রিড */}
        <div className="grid grid-cols-2 gap-4 relative">
          
          {/* ইমেজ ১ - হাতের মাটি */}
          <div className="overflow-hidden rounded-[2rem]">
            <img src={IMAGES.soil} alt="Nurturing Soil" className="w-full h-48 md:h-64 object-cover" />
          </div>

          {/* ইমেজ ২ - গরু */}
          <div className="overflow-hidden rounded-[2rem]">
            <img src={IMAGES.cow} alt="Organic Dairy" className="w-full h-48 md:h-64 object-cover" />
          </div>

          {/* ইমেজ ৩ - মুরগির বাচ্চা */}
          <div className="overflow-hidden rounded-[2rem]">
            <img src={IMAGES.chickens} alt="Poultry Farm" className="w-full h-48 md:h-64 object-cover" />
          </div>

          {/* ইমেজ ৪ - ফসল (হলুদ বর্ডার এফেক্ট সহ) */}
          <div className="overflow-hidden rounded-[2rem] border-b-[16px] border-r-[16px] border-[#FFD02B]">
            <img src={IMAGES.crops} alt="Crops Harvest" className="w-full h-48 md:h-64 object-cover" />
          </div>
        </div>

      </div>

      {/* নিচের ফুটার বা ইনফো বার */}
      <div className="mt-12 pt-6 border-t border-yellow-400  mx-auto text-center text-xs md:text-sm text-gray-600">
        <p className="font-bold text-gray-800 tracking-wider uppercase mb-3">NAHAR AGRO COMPLEX</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <span>🌐 Website: <a href="https://naharagrocomplex.com" className="hover:underline text-amber-800">https://naharagrocomplex.com</a></span>
          <span>📞 Phone: +880 1828-777617</span>
          <span>✉️ e-Mail: info@naharagrocomplex.com</span>
        </div>
      </div>
    </div>
  );
}
export default AgroBanner;