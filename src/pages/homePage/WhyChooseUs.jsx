

export default function WhyChooseUs() {
  return (
    <div className="bg-[#FAF8F5] text-[#2C3E2A] font-sans antialiased px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Header Section */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <span className="bg-[#4D3227] text-amber-200 text-xs font-semibold px-4 py-1.5 rounded-full inline-flex items-center gap-1 uppercase tracking-wider">
              🌾 Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#231F20] tracking-tight">
            Eco-Friendly Farming Practices
          </h2>
          <p className="text-sm md:text-base text-neutral-500 max-w-xl mx-auto leading-relaxed">
            Delivering sustainable, high-quality farming solutions with innovation and care.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative">
          
          {/* ================= LEFT SIDE FEATURES ================= */}
          <div className="space-y-12 md:space-y-20 z-10 Order-2 lg:order-1">
            
            {/* Feature 01 */}
            <div className="text-center lg:text-right relative group">
              <div className="text-6xl md:text-7xl font-light text-amber-500/20 font-serif leading-none select-none">
                01
              </div>
              <div className="mt-[-10px] space-y-2">
                <h3 className="text-xl font-bold text-neutral-800 group-hover:text-amber-600 transition-colors">
                  Quality Products
                </h3>
                <p className="text-sm text-neutral-500 max-w-xs mx-auto lg:mr-0">
                  Committed to eco-friendly & chemical free farming practices.
                </p>
                {/* Icon */}
                <div className="flex justify-center lg:justify-end pt-3">
                  <span className="text-4xl filter drop-shadow">🌱</span>
                </div>
              </div>
              
              {/* Curved Arrow Pointing to Center (Only on Desktop) */}
              <div className="hidden lg:block absolute -right-16 top-1/2 transform -translate-y-1/2 opacity-60">
                <svg className="w-12 h-12 text-neutral-400 transform scale-x-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h10a4 4 0 014 4v1m0 0l-3-3m3 3l3-3" />
                </svg>
              </div>
            </div>

            {/* Feature 03 */}
            <div className="text-center lg:text-right relative group">
              <div className="text-6xl md:text-7xl font-light text-amber-500/20 font-serif leading-none select-none">
                03
              </div>
              <div className="mt-[-10px] space-y-2">
                <h3 className="text-xl font-bold text-neutral-800 group-hover:text-amber-600 transition-colors">
                  Locally Grown
                </h3>
                <p className="text-sm text-neutral-500 max-w-xs mx-auto lg:mr-0">
                  As a local farm, Proud to support our community with fresh products.
                </p>
                {/* Icon */}
                <div className="flex justify-center lg:justify-end pt-3">
                  <span className="text-4xl filter drop-shadow">🏡</span>
                </div>
              </div>

              {/* Curved Arrow Pointing to Center (Only on Desktop) */}
              <div className="hidden lg:block absolute -right-16 top-1/2 transform -translate-y-1/2 opacity-60">
                <svg className="w-12 h-12 text-neutral-400 transform -rotate-180 scale-y-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h10a4 4 0 014 4v1m0 0l-3-3m3 3l3-3" />
                </svg>
              </div>
            </div>

          </div>

          {/* ================= CENTER HERO IMAGE ================= */}
          <div className="flex justify-center items-center relative order-1 lg:order-2 my-8 lg:my-0">
            {/* Soft Circle Background behind Image */}
            <div className="absolute w-72 h-72 md:w-[420px] md:h-[420px] bg-amber-100/40 rounded-full blur-2xl -z-10" />
            <div className="absolute w-64 h-64 md:w-[360px] md:h-[360px] bg-amber-50 rounded-full -z-10 border border-amber-100/50" />
            
            <img 
              src="/img/paddyBahg.PNG" // আপনার ইমেজের পাথ এখানে বসাবেন
              alt="Eco-Friendly Agriculture Sack" 
              className="w-[250px] object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105"
              onError={(e) => {
                // Fallback sample image if link is broken
                e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBWQcozLauubAy8ErTdya7WO1-93bjlg9RwRFXIetOg&s=10";
              }}
            />
          </div>

          {/* ================= RIGHT SIDE FEATURES ================= */}
          <div className="space-y-12 md:space-y-20 z-10 order-3">
            
            {/* Feature 02 */}
            <div className="text-center lg:text-left relative group">
              <div className="text-6xl md:text-7xl font-light text-amber-500/20 font-serif leading-none select-none">
                02
              </div>
              <div className="mt-[-10px] space-y-2">
                <h3 className="text-xl font-bold text-neutral-800 group-hover:text-amber-600 transition-colors">
                  Chemical-Free
                </h3>
                <p className="text-sm text-neutral-500 max-w-xs mx-auto lg:ml-0">
                  Our products are certified organic, free from harmful chemicals.
                </p>
                {/* Icon */}
                <div className="flex justify-center lg:justify-start pt-3">
                  <span className="text-4xl filter drop-shadow">🧪</span>
                </div>
              </div>

              {/* Curved Arrow Pointing to Center (Only on Desktop) */}
              <div className="hidden lg:block absolute -left-16 top-1/2 transform -translate-y-1/2 opacity-60">
                <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h10a4 4 0 014 4v1m0 0l-3-3m3 3l3-3" />
                </svg>
              </div>
            </div>

            {/* Feature 04 */}
            <div className="text-center lg:text-left relative group">
              <div className="text-6xl md:text-7xl font-light text-amber-500/20 font-serif leading-none select-none">
                04
              </div>
              <div className="mt-[-10px] space-y-2">
                <h3 className="text-xl font-bold text-neutral-800 group-hover:text-amber-600 transition-colors">
                  Ethically Sourced
                </h3>
                <p className="text-sm text-neutral-500 max-w-xs mx-auto lg:ml-0">
                  We offer high-quality farm products at affordable prices.
                </p>
                {/* Icon */}
                <div className="flex justify-center lg:justify-start pt-3">
                  <span className="text-4xl filter drop-shadow">👨‍🌾</span>
                </div>
              </div>

              {/* Curved Arrow Pointing to Center (Only on Desktop) */}
              <div className="hidden lg:block absolute -left-16 top-1/2 transform -translate-y-1/2 opacity-60">
                <svg className="w-12 h-12 text-neutral-400 -rotate-180 scale-y-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h10a4 4 0 014 4v1m0 0l-3-3m3 3l3-3" />
                </svg>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}