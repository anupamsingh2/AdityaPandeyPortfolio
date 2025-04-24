import { motion } from 'framer-motion';
import React from 'react';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import profile from '../assets/AdityaPandey.jpg';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row justify-between items-start gap-5`}>

        {/* Left side: dot + text */}
        <div className="flex flex-row gap-5 items-start">
          <div className="flex flex-col items-center justify-center mt-5">
            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
            <div className="w-1 h-40 sm:h-80 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]">Aditya Pandey</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Develop Programs and Manage Databases, <br className="hidden sm:block" />
              interfaces and web applications
            </p>
          </div>
        </div>

        {/* Right side: Profile image */}
        <img
          src={profile}
          alt="Anupam Singh"
          className="w-40 h-40 rounded-full object-cover border-4 border-purple-500 shadow-lg mt-5 hidden sm:block"
        />
      </div>

      {/* 3D Canvas Component */}
      <ComputersCanvas />

      {/* Scroll down indicator */}
      <div className='absolute flex items-center justify-center w-full xs:bottom-5 bottom-32'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 mb-1 rounded-full bg-secondary'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
