

export default function FeaturedPractices() {
  const features = [
    {
      id: 1,
      title: "Fresh Produce by Nahar Agro Complex",
      description: "Pure and fresh fruits & vegetables, harvested by Nahar Agro Complex at peak ripeness.",
      image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=600", // ফুলকপির কাছাকাছি রিপ্রেজেন্টেটিভ ইমেজ
      icon: (
        <svg className="w-6 h-6 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Dairy Products by Nahar Agro Complex",
      description: "Pure, farm-fresh dairy products made by Nahar Agro Complex with care and quality.",
      image: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&q=80&w=600", // ডেইরি/গরুর রিপ্রেজেন্টেটিভ ইমেজ
      icon: (
        <svg className="w-6 h-6 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="mt-6 bg-[#FAF8F5] text-[#2C3E2A] font-sans antialiased px-6 py-6 md:px-16 md:py-20">
      <div className=" mx-auto space-y-12">
        
        {/* Top Header Section */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <span className="bg-[#4D3227] text-amber-200 text-xs font-semibold px-4 py-1.5 rounded-full inline-flex items-center gap-1 uppercase tracking-wider">
              🔸 Featured
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Nahar Agro Complex – Eco-Friendly Farming Practices
          </h2>
          <p className="text-sm text-neutral-500 max-w-xl mx-auto">
            Delivering sustainable, high-quality farming solutions with innovation and care.
          </p>
        </div>

        {/* Featured Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {features.map((item) => (
            <div key={item.id} className="bg-white rounded-[2rem] p-5 shadow-sm border border-neutral-100 flex flex-col justify-between">
              <div>
                {/* Image Container with rounded top */}
                <div className="overflow-hidden rounded-2xl h-64 md:h-80 w-full relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Overlapping Info Card */}
                <div className="relative -mt-10 mx-2 bg-[#4D3227] text-white p-6 rounded-2xl flex items-start gap-4 shadow-lg">
                  {/* Floating Circular Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-amber-500/30 bg-[#3a251d] flex items-center justify-center shadow-md">
                    {item.icon}
                  </div>
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold leading-snug text-white hover:text-amber-200 transition-colors cursor-pointer">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🌿</span>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-900 leading-none">Nahar Agro</h4>
                    <p className="text-[10px] text-neutral-400">Complex</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🌿</span>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-900 leading-none">Nahar Agro</h4>
                    <p className="text-[10px] text-neutral-400">Complex</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Contact Details */}
        <div className="mt-16 pt-8 border-t border-neutral-200 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-sm text-neutral-700">
          {/* Left Column Contact */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#4D3227] flex items-center justify-center flex-shrink-0 text-amber-200 text-lg">
              🏢
            </div>
            <div>
              <h4 className="font-bold text-neutral-900">Nahar Agro Complex</h4>
              <p className="text-xs text-neutral-500">Agriculture & Organic Farms Company.</p>
              <a href="https://naharagrocomplex.com" className="text-xs text-emerald-700 hover:underline block mt-1">
                🔗 https://naharagrocomplex.com
              </a>
            </div>
          </div>

          {/* Right Column Contact */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#4D3227] flex items-center justify-center flex-shrink-0 text-amber-200 text-lg">
              📞
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-neutral-900">Phone & Email</h4>
              <p className="text-xs text-neutral-500">Phone: +880 1828-777617</p>
              <p className="text-xs text-neutral-500">e-Mail: info@naharagrocomplex.com</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}