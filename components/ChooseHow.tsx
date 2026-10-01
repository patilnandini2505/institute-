import React from 'react';

export default function ChooseHow() {
  return (
    <section className="w-full bg-[#f4f2ff] py-16">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          <div 
            className="border-[#d2c4f8] bg-[#e7dfff]/50 backdrop-blur-sm inline-flex items-center justify-center text-[10px] font-bold text-[#5c428a] tracking-wider uppercase shadow-sm whitespace-nowrap mb-4"
            style={{ 
              borderWidth: '1px', 
              borderRadius: '40px', 
              padding: '6px 12px' 
            }}
          >
            LEARN YOUR WAY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111]">
            Choose How You Want <span className="text-[#6419e6]">To Learn</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Offline */}
          <div className="flex flex-col">
            <div className="bg-[#e8e6df] p-4 rounded-[32px] mb-6">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] w-full">
                <img 
                  src="/121d79df4f4f4266515daf4df546a08b84245a44.jpg" 
                  alt="Offline Learning" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Offline</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Learn in a focused classroom environment with trainers, peers, and hands-on practice.
            </p>
          </div>

          {/* Hybrid */}
          <div className="flex flex-col">
            <div className="bg-[#e8e6df] p-4 rounded-[32px] mb-6">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] w-full">
                <img 
                  src="/febe480ccf0ee1d48d4ed031f5247103c84df08b.jpg" 
                  alt="Hybrid Learning" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Hybrid</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Get the flexibility of online learning with the connection and support of classroom training.
            </p>
          </div>

          {/* Online */}
          <div className="flex flex-col">
            <div className="bg-[#e8e6df] p-4 rounded-[32px] mb-6">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] w-full">
                <img 
                  src="/3950e98c62f14d1adeb83351595cdcc14963b751.jpg" 
                  alt="Online Learning" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Online</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Learn from anywhere, with live sessions, mentor support, and practical learning at your pace.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
