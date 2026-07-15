import  { useState } from 'react';

export default function FaqAndContact() {
  // FAQ এর জন্য স্টেট (বর্তমানে ১ নম্বর প্রশ্নটি খোলা থাকবে)
  const [openFaq, setOpenFaq] = useState(1);

  const faqs = [
    {
      id: 1,
      question: "Do you use chemical pesticides?",
      answer: "No, we follow organic and sustainable farming methods for healthy crops and soil."
    },
    {
      id: 2,
      question: "Can I visit the farm?",
      answer: "Yes! We welcome visitors by prior appointment. Please contact us via email to schedule your tour."
    },
    {
      id: 3,
      question: "Do you deliver farm produce?",
      answer: "We offer local delivery options and wholesale shipping depending on the order size and distance."
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and local digital payment gateways."
    }
  ];

  const contactInfo = [
    { id: 1, label: "Address", value: "+800 45 6789 01 & 02", icon: "📞" },
    { id: 2, label: "Email", value: "getsupport@farmland.com", icon: "✉️" },
    { id: 3, label: "Address", value: "Farm Lane Brisbane, QLD 4000", icon: "📍" },
    { id: 4, label: "Farm Hours", value: "Mon - Sat: 8.00am to 5.30pm", icon: "⏰" }
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#2C3E2A] font-sans antialiased px-6 py-6 md:px-12 md:py-6 overflow-hidden mt-6">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* ================= LEFT COLUMN: CONTACT CARD WITH OVERLAPPING IMAGE (5 out of 12 cols) ================= */}

<div className="lg:col-span-5 relative flex justify-center lg:justify-start">
  
  {/* Main White Card Frame - (relative এবং z-20 দেওয়া হয়েছে যাতে এটি ইমেজের উপরে থাকে) */}
  <div className=" rounded-[2rem] p-6 md:p-8 w-full max-w-md shadow-sm border border-neutral-100/50 space-y-6 pb-20 relative z-20">
    
    {/* Contact Rows - (নিশ্চিত করতে এখানে আলাদা করে relative এবং z-30 ব্যবহার করা হয়েছে) */}
    {contactInfo.map((info) => (
      <div key={info.id} className="bg-[#4D3227] text-white rounded-xl flex items-center overflow-hidden shadow-sm group cursor-pointer relative z-30">
        {/* Yellow Icon Box */}
        <div className="bg-[#FCD34D] text-[#4D3227] w-14 h-14 md:w-16 md:h-16 flex items-center justify-center text-xl font-bold flex-shrink-0 rounded-r-xl transition-transform duration-300 group-hover:scale-105">
          {info.icon}
        </div>
        {/* Text Content */}
        <div className="px-4 py-2">
          <h4 className="text-xs font-bold text-amber-300 underline decoration-amber-500/30 underline-offset-2">
            {info.label}
          </h4>
          <p className="text-xs md:text-sm text-neutral-100 font-medium mt-0.5">
            {info.value}
          </p>
        </div>
      </div>
    ))}

    {/* Social Connect Link */}
    <div className="pt-4 space-y-3 relative z-30">
      <h5 className="text-sm font-bold text-neutral-800">Social Connect</h5>
      <div className="flex gap-3">
        {['f', '𝕏', '📸', '📺', 'v'].map((social, idx) => (
          <span 
            key={idx} 
            className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-neutral-200 flex items-center justify-center text-xs font-bold cursor-pointer hover:bg-[#4D3227] hover:text-white transition-colors"
          >
            {social}
          </span>
        ))}
      </div>
    </div>
  </div>

  {/* Overlapping Crop Sack PNG Image - (z-index কমিয়ে z-10 করা হয়েছে) */}
  <div className="absolute right-[-40px] bottom-[-30px] w-64 md:w-72 pointer-events-none transform translate-x-10 lg:translate-x-0 z-10">
    <img 
      src="/img/paddyBahg.PNG" 
      alt="Rice Sack overlapping" 
      className="w-full object-contain drop-shadow-2xl"
      onError={(e) => {
        e.target.style.display = 'none';
      }}
    />
  </div>

</div>

        {/* ================= RIGHT COLUMN: ACCORDION FAQ (7 out of 12 cols) ================= */}
        <div className="lg:col-span-7 space-y-8 z-10">
          
          {/* Top Title Group */}
          <div className="space-y-3">
            <div className="flex">
              <span className="bg-[#4D3227] text-amber-200 text-xs font-semibold px-4 py-1.5 rounded-md inline-flex items-center gap-1 uppercase tracking-wider">
                🔸 FAQ's
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#231F20] tracking-tight leading-tight">
              Everything You Need<br />to Know
            </h2>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`rounded-xl overflow-hidden border border-neutral-200/60 transition-all duration-300 ${
                    isOpen ? 'bg-[#EBE7DF]' : 'bg-[#FAF8F5]'
                  }`}
                >
                  {/* Question Header button */}
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className={`w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 font-bold text-sm md:text-base transition-colors ${
                      isOpen ? 'bg-[#4D3227] text-amber-300' : 'text-neutral-800 hover:bg-neutral-100/50'
                    }`}
                  >
                    <span>{faq.question}</span>
                    {/* Plus / Minus Icon Toggle */}
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border ${
                      isOpen ? 'border-amber-400 bg-[#3d271e] text-amber-300 rotate-45' : 'border-neutral-400 text-neutral-600'
                    } transform transition-transform duration-300`}>
                      ➕
                    </span>
                  </button>

                  {/* Answer Body Panel with dynamic height transition */}
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-40 border-t border-neutral-300/40' : 'max-h-0'
                  }`}>
                    <p className="p-4 md:p-5 text-xs md:text-sm text-neutral-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Explore Link */}
          <div className="pt-2">
            <a href="#all-faqs" className="text-sm font-bold text-[#4D3227] hover:text-[#3d271e] inline-flex items-center gap-1 group">
              <span className="group-hover:translate-x-0.5 transition-transform">Explore All FAQ's</span>
              <span>→</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}