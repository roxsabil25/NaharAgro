const IMAGES = {
    handLogo: '/img/handlogo.PNG',
}

export default function AgroExcellence() {
  // নিচের ৩টি কার্ডের ডেটা
  const services = [
    {
      id: 1,
      title: "Organic Produce Supply",
      image: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=500", // Representative loading truck/veggies
      link: "#"
    },
    {
      id: 2,
      title: "Agri-Technology Innovations",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=500", // Tractor image
      link: "#"
    },
    {
      id: 3,
      title: "Organic Farm Solutions",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoDao8S-Mn23QVq18xxTwot9qg1R9aonwt2OjPkiQYg&s=10", // Farmer pruning trees
      link: "#"
    }
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#2C3E2A] font-sans antialiased px-6 py-6 md:px-12 md:py-6">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* ================= LEFT COLUMN: BIG IMAGE (Takes 4 out of 12 cols) ================= */}
        <div className="lg:col-span-4 h-full">
          <div className="overflow-hidden rounded-[2rem] shadow-sm h-[400px] lg:h-[620px] w-full group">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB_Djv0QdfA5RdCgSYM_cX4TJXpGwFmqep548enp-TOQ&s=10" // মাটির কাজ করার রিপ্রেজেন্টেটিভ ইমেজ
              alt="Farmer working on land" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* ================= RIGHT COLUMN: CONTENT & GRIDS (Takes 8 out of 12 cols) ================= */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Top Info & Statistics Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
              <img src={IMAGES.handLogo} alt="Hand Logo" className="w-6 h-6" />
              <span className="tracking-wide uppercase">Agro Excellence</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#231F20] tracking-tight">
              Building a Greener Farming
            </h2>

            {/* Stats Sub-grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
              {/* Stat 01 */}
              <div className="space-y-2 group">
                <div className="text-3xl text-emerald-800">🚜</div> {/* আইকন বা SVG এখানে বসাতে পারেন */}
                <h4 className="text-xl font-bold text-neutral-800">80% Pure Growth</h4>
                <p className="text-sm text-neutral-500 leading-relaxed max-w-sm">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>

              {/* Stat 02 */}
              <div className="space-y-2 group">
                <div className="text-3xl text-emerald-800">🌾</div>
                <h4 className="text-xl font-bold text-neutral-800">95% Organic Roots</h4>
                <p className="text-sm text-neutral-500 leading-relaxed max-w-sm">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom 3-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((card) => (
              <div 
                key={card.id} 
                className="bg-white rounded-[1.8rem] p-4 shadow-sm border border-neutral-100 flex flex-col justify-between group hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  {/* Card Image Wrapper */}
                  <div className="overflow-hidden rounded-2xl h-44 w-full mb-4">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Card Title */}
                  <h3 className="font-extrabold text-lg text-[#231F20] leading-snug group-hover:text-emerald-700 transition-colors px-1">
                    {card.title}
                  </h3>
                </div>

                {/* Card CTA Link */}
                <div className="pt-4 px-1">
                  <a 
                    href={card.link} 
                    className="text-xs font-bold text-[#C1D243] group-hover:text-[#b0c034] inline-flex items-center gap-1 transition-colors"
                  >
                    Read More <span className="text-sm">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}