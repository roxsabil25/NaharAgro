
const IMAGES = {
    handLogo: '/img/handlogo.PNG',
}
export default function WorldClassProducts() {
  const products = [
    {
      id: 1,
      title: "Efficient Agra Machines",
      description: "Enhancing Farming Productivity with Advanced Machinery.",
      // Tractor Icon Emoji + Yellow Blob simulation
      icon: "🚜"
    },
    {
      id: 2,
      title: "Golden Fields of Wheat",
      description: "Nature's Bounty, Harvested with Great Care and Dedication.",
      icon: "🌾"
    },
    {
      id: 3,
      title: "Feeding Generations",
      description: "Sustaining Lives with Healthy, and Nutritious Harvests Daily.",
      icon: "👨‍🌾"
    },
    {
      id: 4,
      title: "Pure Vegetables Sweet",
      description: "Grown with Care, Packed with Freshness and Flavor.",
      icon: "🥕"
    },
    {
      id: 5,
      title: "Healthy Livestock",
      description: "Nurtured with Care for Strong Healthy, Productive Farms.",
      icon: "🐂"
    },
    {
      id: 6,
      title: "Best Sesame Harvest",
      description: "Carefully Grown, Packed with Nutrients and Natural Flavor.",
      icon: "💰" // বস্তা বা স্যাক রিপ্রেজেন্ট করতে
    }
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#2C3E2A] font-sans antialiased px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Top Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-amber-600 font-semibold text-sm">
            <img src={IMAGES.handLogo} alt="Hand Logo" />
            <span className="uppercase tracking-wider">Grown With Care</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#231F20] tracking-tight">
            World-Class Products
          </h2>
        </div>

        {/* 3x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 pt-8">
          {products.map((item) => (
            <div key={item.id} className="flex items-start gap-4 group">
              
              {/* Icon Container with Yellow Artistic Blob Background */}
              <div className="relative flex-shrink-0 w-16 h-16 flex items-center justify-center">
                {/* Yellow Hand-drawn looking Blob */}
                <div className="absolute inset-0 bg-[#FCD34D] opacity-60 rounded-full w-12 h-12 m-auto -rotate-12 rounded-tl-[40%] rounded-br-[30%] rounded-tr-[50%] rounded-bl-[60%] group-hover:rotate-45 transition-transform duration-500" />
                
                {/* Main Icon */}
                <span className="text-4xl z-10 filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
              </div>

              {/* Text Content */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[#231F20] group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Button Section */}
        <div className="flex justify-center pt-8">
          <button className="flex items-center bg-[#4D3227] hover:bg-[#3d271e] text-amber-100 rounded-full pl-2 pr-6 py-2 gap-3 shadow-md hover:shadow-lg transition-all duration-300 group">
            {/* Round Arrow Circle inside Button */}
            <div className="w-10 h-10 rounded-full bg-[#3d271e] flex items-center justify-center text-amber-400 group-hover:translate-x-1 transition-transform">
              <span className="text-lg">→</span>
            </div>
            <span className="text-sm font-bold tracking-wide">All Products</span>
          </button>
        </div>

      </div>
    </div>
  );
}