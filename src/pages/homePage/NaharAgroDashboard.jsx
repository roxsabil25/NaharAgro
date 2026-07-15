import  { useState } from 'react';

const IMAGES = {
    handLogo: '/img/handlogo.PNG',
}

export default function NaharAgroDashboard() {
  // রাইট সাইডের প্রজেক্ট কার্ডের ডেটা
  const projects = [
    {
      id: 1,
      category: "Farm Life",
      title: "Green Harvest Initiative",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      category: "Livestock",
      title: "Healthy Herd Initiative",
      image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      category: "Agro-Tourism",
      title: "Farmstay Retreat",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBWQcozLauubAy8ErTdya7WO1-93bjlg9RwRFXIetOg&s=10"
    },
    {
      id: 4,
      category: "Fruit & Vegetable",
      title: "Pure Produce Project",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 5,
      category: "Agri-Tech",
      title: "Harvest AI",
      image: "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?auto=format&fit=crop&q=80&w=600"
    }
  ];

  // বাম পাশের সার্কেল হুইলের একটিভ সেগমেন্ট ট্র্যাক করার জন্য স্টেট (ইন্টারঅ্যাক্টিভ করার জন্য)
  const [activeSegment, setActiveSegment] = useState(null);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C3E2A] font-sans antialiased px-4 py-8 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="space-y-16">
          
          {/* SECTION 1: Greener Farming & Stats */}
          <div className="space-y-6">
            <span className="text-sm font-semibold tracking-wide text-emerald-800 uppercase block">Nahar Agro Complex</span>
            <h2 className="text-2xl md:text-2xl font-extrabold tracking-tight leading-tight text-neutral-900">
              Building a Greener Farming with Nahar Agro Complex
            </h2>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="text-2xl font-bold text-emerald-700">80% Pure Growth</h4>
                <p className="text-sm text-neutral-500 mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-emerald-700">95% Organic Roots</h4>
                <p className="text-sm text-neutral-500 mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>

            {/* Farm Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {/* Card 1 */}
              <div className="bg-[#EBF1E9] p-4 rounded-2xl flex flex-col justify-between">
                <img 
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600" 
                  alt="Organic" 
                  className="rounded-xl h-44 w-full object-cover mb-4"
                />
                <div>
                  <h3 className="font-bold text-lg mb-2">Organic Farm Solutions</h3>
                  <a href="#more" className="text-sm font-semibold text-emerald-700 inline-flex items-center hover:underline">
                    Read More <span className="ml-1">→</span>
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#EBF1E9] p-4 rounded-2xl flex flex-col justify-between">
                <img 
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=500" 
                  alt="Eco-friendly" 
                  className="rounded-xl h-44 w-full object-cover mb-4"
                />
                <div>
                  <h3 className="font-bold text-lg mb-2">The Eco-Friendly Farming</h3>
                  <a href="#more" className="text-sm font-semibold text-emerald-700 inline-flex items-center hover:underline">
                    Read More <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: Soil to Soul & Interactive Wheel */}
          <div className="space-y-8">
            <div className="text-center md:text-left space-y-2">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block"><img src={IMAGES.handLogo} alt="" /> Nahar Agro Complex</span>
              <h2 className="text-2xl md:text-3xl font-bold">From Soil to Soul, Nahar Agro Complex Grows Naturally</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Sub-Info 1 */}
              <div className="space-y-4 text-center md:text-left">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-amber-500 text-amber-600 font-bold text-sm bg-amber-50">
                  01
                </div>
                <h4 className="font-bold text-lg">Data-Driven Agricultural</h4>
                <p className="text-xs text-neutral-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <button className="bg-[#C1D243] hover:bg-[#b0c034] text-xs font-bold px-4 py-2 rounded-lg transition-colors inline-flex items-center shadow-sm">
                  More Details <span className="ml-1">↗</span>
                </button>
              </div>

              {/* Interactive SVG Circular Wheel */}
              <div className="flex justify-center my-6">
                <div className="relative w-64 h-64 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background Wheel Slices */}
                    {[...Array(6)].map((_, i) => {
                      const angle = i * 60;
                      const strokeDash = activeSegment === i ? "48, 100" : "46, 100";
                      const color = activeSegment === i ? "#619330" : "#8CC63F";
                      return (
                        <circle
                          key={i}
                          cx="50"
                          cy="50"
                          r="35"
                          fill="transparent"
                          stroke={color}
                          strokeWidth="15"
                          strokeDasharray="10.4, 100" // 6 slices
                          strokeDashoffset={-i * 11.66}
                          className="transition-all duration-300 cursor-pointer hover:stroke-[#619330]"
                          onMouseEnter={() => setActiveSegment(i)}
                          onMouseLeave={() => setActiveSegment(null)}
                        />
                      );
                    })}
                  </svg>
                  {/* Inside Central Icon/Logo */}
                  <div className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#8CC63F]">
                    <img src={IMAGES.handLogo} alt="" />
                  </div>
                </div>
              </div>

              {/* Sub-Info 2 */}
              <div className="space-y-4 text-center md:text-right">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-amber-500 text-amber-600 font-bold text-sm bg-amber-50">
                  02
                </div>
                <h4 className="font-bold text-lg">Planting Material</h4>
                <p className="text-xs text-neutral-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="space-y-8 bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-neutral-100 flex flex-col justify-between">
          <div>
            {/* Top Badge */}
            <div className="flex justify-center mb-4">
              <span className="bg-[#4D3227] text-amber-200 text-xs font-semibold px-4 py-1.5 rounded-full inline-flex items-center gap-1">
                <img src={IMAGES.handLogo} alt="" /> Projects
              </span>
            </div>

            {/* Title */}
            <div className="text-center space-y-2 mb-8">
              <h2 className="text-3xl font-extrabold text-neutral-900 leading-snug">
                Nahar Agro Complex - Exploring Our Farm Projects
              </h2>
              <p className="text-sm text-neutral-500 max-w-md mx-auto">
                Nahar Agro Complex delivers sustainable, high-quality farming solutions with innovation and care.
              </p>
            </div>

            {/* Responsive Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="group relative overflow-hidden rounded-2xl h-56 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                >
                  {/* Background Image */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Card Details */}
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                    <span className="text-xs font-medium text-amber-400 uppercase tracking-wider block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold leading-tight group-hover:text-amber-100 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Contact Banner inside right column (As seen in capture) */}


        </div>

      </div>
    </div>
  );
}