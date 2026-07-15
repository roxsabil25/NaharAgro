const IMAGES = {
    handLogo: '/img/handlogo.PNG',
}

export default function InnovatingAgriculture() {
  const features = [
    {
      id: 1,
      title: "Farm Development",
      description: "Lorem Ipsum is simply dummy text of the printing industry.",
      icon: "🌱" // আপনি এখানে Lucide বা FontAwesome আইকন ব্যবহার করতে পারেন
    },
    {
      id: 2,
      title: "Crop Management",
      description: "Lorem Ipsum is simply dummy text of the printing industry.",
      icon: "🌾"
    },
    {
      id: 3,
      title: "Soil Restoration",
      description: "Lorem Ipsum is simply dummy text of the printing industry.",
      icon: "🚜"
    },
    {
      id: 4,
      title: "Organic Cultivation",
      description: "Lorem Ipsum is simply dummy text of the printing industry.",
      icon: "🌽"
    }
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#2C3E2A] font-sans antialiased px-6 py-6 md:px-12 mt-6">
      <div className=" mx-auto space-y-12">
        
        {/* Top Header Section */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
            <img src={IMAGES.handLogo} alt="Hand Logo" className="w-6 h-6" />
            <span className="tracking-wide">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#231F20] tracking-tight leading-tight">
            Innovating Agriculture,<br />Sustaining Our Future
          </h2>
        </div>

        {/* 4-Column Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
          {features.map((feature) => (
            <div key={feature.id} className="space-y-3 group">
              {/* Icon */}
              <div className="text-4xl text-emerald-800/80 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              {/* Title & Description */}
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-[#231F20] group-hover:text-emerald-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Dual Image Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-8">
          
          {/* Left Image Card */}
          <div className="overflow-hidden rounded-[1.5rem] h-[300px] md:h-[400px] shadow-sm relative group">
            <img 
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800" 
              alt="Tractor in field" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right Image Card with Bottom Overlay Banner */}
          <div className="overflow-hidden rounded-[1.5rem] h-[300px] md:h-[400px] shadow-sm relative group flex flex-col justify-end">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfAh45bP9BPOgMojV-bSmifB8Z9302w-R278HqW42_Zw&s=10" 
              alt="Farmer in field" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Dark Semi-Transparent Bottom Banner overlay */}
            <div className="relative z-10 bg-black/40 backdrop-blur-sm p-4 md:p-6 mx-4 mb-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-white/10">
              <p className="text-white text-sm font-medium max-w-xs leading-relaxed">
                Agriculture nurtures life through organic growth, sustainable farming.
              </p>
              
              {/* About Us Button */}
              <button className="bg-[#C1D243] hover:bg-[#b0c034] text-[#2C3E2A] text-xs font-bold px-5 py-3 rounded-xl transition-colors inline-flex items-center justify-center gap-1 shadow-md flex-shrink-0">
                About Us <span className="text-sm">↗</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}