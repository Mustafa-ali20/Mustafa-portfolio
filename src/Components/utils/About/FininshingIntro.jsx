import React from "react";
import TiltedCard from "../../animation/TiltedCard";
import DecryptedText from "../../animation/DecryptedText";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const lineVariants = {
  hidden: { y: "105%" },
  visible: {
    y: "0%",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
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
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="absolute inset-0 flex flex-col items-center justify-center px-4"
              >
                <div className="overflow-hidden">
                  <motion.p
                    variants={lineVariants}
                    className="text-white text-5xl font-[regular] leading-tight text-center max-w-[750px] uppercase"
                  >
                    For me, a website is not
                  </motion.p>
                </div>
                <div className="overflow-hidden">
                  <motion.p
                    variants={lineVariants}
                    className="text-white text-5xl font-[regular] leading-tight text-center max-w-[750px] uppercase"
                  >
                    just code on a screen.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Center - Image (Elevated) */}
          <div className="flex justify-center -translate-y-40">
            <TiltedCard
              imageSrc="/Images/Me3.jpg"
              containerHeight="300px"
              containerWidth="250px"
              imageHeight="300px"
              imageWidth="250px"
              rotateAmplitude={9}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent
              overlayContent={
                <p className="text-white text-sm font-[light] text-center m-0">
                  Mustafa Ali - Developer
                </p>
              }
            />
          </div>

          {/* Right Side - 2025 with Overlay Text */}
          <div className="relative flex justify-start">
            <div className="relative">
              <h2 className="text-[16rem] font-[bold] text-[rgb(90,90,90)] leading-none select-none">
                2026
              </h2>

              {/* Overlay Text */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="absolute inset-0 flex flex-col items-center justify-center px-4"
              >
                <div className="overflow-hidden">
                  <motion.p
                    variants={lineVariants}
                    className="text-white text-base font-[regular] leading-tight text-right items-end max-w-[750px] uppercase"
                  >
                    Since 2024, I've been dedicated to building digital
                    experiences defined
                  </motion.p>
                </div>
                <div className="overflow-hidden">
                  <motion.p
                    variants={lineVariants}
                    className="text-white text-base font-[regular] leading-tight text-right items-end max-w-[750px] uppercase"
                  >
                    by smooth animations, minimalistic interfaces, and immersive
                    3D.
                  </motion.p>
                </div>
              </motion.div>
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
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center px-6"
            >
              <div className="overflow-hidden">
                <motion.p
                  variants={lineVariants}
                  className="text-white text-[1.7rem] md:text-5xl font-[regular] uppercase leading-tight text-center max-w-[380px] md:max-w-[650px]"
                >
                  For me, a website is not
                </motion.p>
              </div>
              <div className="overflow-hidden">
                <motion.p
                  variants={lineVariants}
                  className="text-white text-[1.7rem] md:text-5xl font-[regular] uppercase leading-tight text-center max-w-[380px] md:max-w-[650px]"
                >
                  just code on a screen.
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Second Text - Below the Years */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            className="flex flex-col w-full px-2.5 md:px-11"
          >
            <div className="overflow-hidden">
              <motion.p
                variants={lineVariants}
                className="uppercase text-white text-base md:text-lg font-[light] leading-none text-left max-w-[600px] md:max-w-[700px] "
              >
                Since 2024, I've been dedicated to building
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p
                variants={lineVariants}
                className="uppercase text-white text-base md:text-lg font-[light] leading-none text-left max-w-[500px] md:max-w-[700px]"
              >
                digital experiences defined by smooth
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p
                variants={lineVariants}
                className="uppercase text-white text-base md:text-lg font-[light] leading-none text-left max-w-[500px] md:max-w-[700px]"
              >
                animations, minimalistic interfaces, and
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p
                variants={lineVariants}
                className="uppercase text-white text-base md:text-lg font-[light] leading-none text-left max-w-[500px] md:max-w-[700px]"
              >
                immersive 3D.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinishingIntro;
