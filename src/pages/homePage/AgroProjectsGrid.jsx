

// ডেমো ইমেজ সোর্স (আপনার প্রোজেক্টের আসল ছবি দিয়ে এগুলো পরিবর্তন করে নিবেন)
const IMAGES = {
  harvester: 'https://images.unsplash.com/photo-1592991538534-00972b6f59ab', // কম্বাইন হার্ভেস্টার
  cow: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53',       // গরু
  tourism: 'https://images.unsplash.com/photo-1595113316349-9fa4ee24f884',   // এগ্রো-ট্যুরিজম / কৃষক
  broccoli: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7',  // ব্রোকোলি
  pumpkin: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443'    // মিষ্টি কুমড়া
};

// গ্রিড কার্ডের ডাটা অ্যারে
const PROJECTS = [
  { category: "Farm Life", title: "Green Harvest Initiative", img: IMAGES.harvester },
  { category: "Farm Life", title: "Green Harvest Initiative", img: IMAGES.harvester },
  { category: "Livestock", title: "Healthy Herd Initiative", img: IMAGES.cow },
  { category: "Agro-Tourism", title: "Farmstay Retreat", img: IMAGES.tourism },
  { category: "Agro-Tourism", title: "Farmstay Retreat", img: IMAGES.tourism },
  { category: "Fruit & Vegetable", title: "Pure Produce Project", img: IMAGES.broccoli },
  { category: "Agri-Tech", title: "Pure Produce Project", img: IMAGES.pumpkin },
];

export default function AgroProjectsGrid() {
  return (
    <div className="bg-white font-sans text-[#1F1610] py-12 px-6 md:px-12 lg:px-16 flex flex-col justify-between  mt-12">
      
      {/* ================= ওপরের হেডার সেকশন ================= */}
      <div className=" mx-auto text-center space-y-4 mb-12">
        {/* লোগো ও ব্র্যান্ড নেম */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-2xl">🌱</span>
          <h4 className="font-extrabold text-sm tracking-wider uppercase text-gray-800 leading-none">
            Nahar Agro Complex
          </h4>
        </div>

        {/* মেইন বড় টাইটেল */}
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Exploring Nahar Agro Complex <br /> Farm Projects
        </h1>

        {/* ছোট ডেসক্রিপশন */}
        <p className="text-xs md:text-sm text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
          Nahar Agro Complex is a premier Agriculture & Organic Farms Company, delivering sustainable, high-quality farming solutions with innovation and care.
        </p>
      </div>

      {/* ================= ৪-কলাম প্রোজেক্ট গ্রিড সেকশন ================= */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className="relative h-48 rounded-2xl overflow-hidden shadow-sm group cursor-pointer"
          >
            {/* ব্যাকগ্রাউন্ড ইমেজ এবং জুম অ্যানিমেশন */}
            <img 
              src={project.img} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* ইমেজের ওপর ডার্ক গ্রাডিয়েন্ট ওভারলে (টেক্সট ক্লিয়ার দেখানোর জন্য) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

            {/* কার্ডের ভেতরের কন্টেন্ট */}
            <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
              {/* ক্যাটাগরি (হলুদ টেক্সট) */}
              <span className="text-xs font-bold text-amber-400 tracking-wide italic">
                {project.category}
              </span>
              
              {/* মেইন টাইটেল */}
              <h3 className="text-base font-extrabold text-white leading-snug tracking-tight">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* ================= নিচের ফুটার ইনফো বার ================= */}
      <div className="w-full border-t border-gray-200 pt-6 text-xs md:text-sm font-medium text-gray-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* লোগো ও ব্র্যান্ড স্লোগান */}
          <div className="flex items-center gap-2">
            <span className="text-xl">🌱</span>
            <div>
              <p className="font-extrabold text-gray-800 leading-tight">Nahar Agro Complex</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Agriculture & Organic Farms Company</p>
            </div>
          </div>

          {/* কন্টাক্ট লিঙ্কসমূহ */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-semibold">
            <span className="flex items-center gap-1">🌐 <a href="https://naharagrocomplex.com" className="hover:underline">https://naharagrocomplex.com</a></span>
            <span>📞 +880 1828-777617</span>
            <span>✉️ info@naharagrocomplex.com</span>
          </div>

        </div>
      </div>

    </div>
  );
}