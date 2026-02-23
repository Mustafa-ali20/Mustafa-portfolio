import React from "react";

const FinishingIntro = () => {
  return (
    <section className="h-fit bg-[#121315] py-16 px-4 lg:py-40 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Desktop Layout - 3 Columns */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-center">
          
          {/* Left Side - 2019 with Overlay Text */}
          <div className="relative flex justify-end">
            <div className="relative">
              <h2 className="text-[16rem] font-[semibold] text-[rgb(90,90,90)] leading-none select-none">
                2024
              </h2>
              
              {/* Overlay Text */}
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <p className="text-white text-5xl font-[regular] leading-tight text-center max-w-[750px] uppercase">
                  For me, a website is not just code on a screen.
                </p>
              </div>
            </div>
          </div>

          {/* Center - Image (Elevated) */}
          <div className="flex justify-center -translate-y-40">
            <div className="w-60 h-74">
              <img
                src="/Images/Me3.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - 2025 with Overlay Text */}
          <div className="relative flex justify-start">
            <div className="relative">
              <h2 className="text-[16rem] font-[bold] text-[rgb(90,90,90)] leading-none select-none">
                2026
              </h2>
              
              {/* Overlay Text */}
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <p className="text-white text-base font-[regular] leading-tight text-right items-end max-w-[750px] uppercase">
                  Since 2024, I've been dedicated to building digital experiences defined by smooth animations, minimalistic interfaces, and immersive 3D.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout - Stacked Years with Different Text Positioning */}
        <div className="lg:hidden flex flex-col items-center">
             <div className="w-38 h-44 md:w-48 md:h-56 mb-10">
              <img
                src="/Images/Me3.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          
          {/* Stacked Years (2019 + 2025) with First Text Overlay */}
          <div className="relative">
            {/* Both Years Stacked */}
            <div className="flex flex-col items-center leading-none font-[semibold]">
              <h2 className="text-[10rem] md:text-[18.5rem] bg-ed-500 font-[bold] text-[rgb(90,90,90)] leading-none select-none">
                2024
              </h2>
              <h2 className="text-[10rem] md:text-[18.5rem] font-[bold] text-[rgb(90,90,90)] leading-none select-none">
                2026
              </h2>
            </div>
            
            {/* First Text - Overlay on Both Years (Centered) */}
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <p className="text-white text-2xl md:text-5xl font-[regular] uppercase leading-tight text-center max-w-[340px] md:max-w-[650px]">
                For me, a website is not just code on a screen.
              </p>
            </div>
          </div>

          {/* Second Text - Below the Years */}
          <div className="px-2">
            <p className="md:w-[60%] uppercase text-white text-base md:text-lg font-[light] leading-none text-left max-w-[500px] md:max-w-[700px]">
              Since 2024, I've been dedicated to building digital experiences defined by smooth animations, minimalistic interfaces, and immersive 3D.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinishingIntro;