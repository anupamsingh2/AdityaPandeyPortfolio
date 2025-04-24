import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

// Hobby card component with flip animation
const HobbyCard = ({ index, title, icon, description, bgColor, images }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full md:w-[48%]"
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className={`relative w-full h-[400px] rounded-2xl overflow-hidden cursor-pointer`}
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ 
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front of the card */}
        <motion.div
          className={`absolute inset-0 ${bgColor} p-8 flex flex-col justify-between items-center rounded-2xl`}
          style={{
            backfaceVisibility: "hidden",
          }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="text-white text-8xl mb-6">
              {icon}
            </div>
            <h3 className="text-white text-3xl font-bold mb-2">{title}</h3>
            <motion.div 
              className="w-20 h-1 bg-white rounded-full mb-4"
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ duration: 0.5 }}
            />
            <p className="text-white/80 text-lg">Tap to learn more</p>
          </div>
        </motion.div>

        {/* Back of the card */}
        <motion.div
          className={`absolute inset-0 bg-tertiary p-8 flex flex-col justify-between rounded-2xl`}
          style={{
            backfaceVisibility: "hidden",
          }}
          initial={{ rotateY: -180 }}
          animate={{ rotateY: isFlipped ? 0 : -180 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
            <p className="text-secondary text-lg mb-6">{description}</p>
          </div>

          {images && images.length > 0 && (
            <div className="grid grid-cols-2 gap-2">
              {images.map((img, i) => (
                <div 
                  key={`img-${i}`} 
                  className="relative h-32 overflow-hidden rounded-lg"
                >
                  <img 
                    src={img} 
                    alt={`${title} image ${i+1}`}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-4">
            <p className="text-white/80 text-sm">Tap to flip back</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Main Hobbies component
const Hobbies = () => {
  const hobbiesData = [
    {
      title: "Cardistry",
      icon: "🃏",
      description: "Cardistry is sleight of hand with cards, focusing on intricate flourishes and manipulations.",
      bgColor: "bg-gradient-to-br from-purple-600 to-blue-500",
      images: [
        "/cardistry-1.jpg", // Replace with actual image paths
        "/cardistry-2.jpg",
        "/cardistry-3.jpg",
        "/cardistry-4.jpg"
      ]
    },
    {
      title: "Light Novel Reading",
      icon: "📖",
      description: "Light novels are unpublished manhwas, and I enjoy reading and discovering them before they are officially released.",
      bgColor: "bg-gradient-to-br from-emerald-600 to-teal-500",
      images: [
        "/lightnovel-1.jpg", // Replace with actual image paths
        "/lightnovel-2.jpg",
        "/lightnovel-3.jpg",
        "/lightnovel-4.jpg"
      ]
    }
  ];

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative z-0"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gradient-to-br from-purple-600/20 to-transparent blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-teal-600/20 to-transparent blur-3xl -z-10" />
      
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Beyond Coding</p>
        <h2 className={`${styles.sectionHeadText}`}>My Hobbies.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Life is about balance. When I'm not coding, these are the passions that keep me inspired,
        refresh my mind, and contribute to my creative approach to problem-solving.
      </motion.p>

      <motion.div 
        className="mt-16 flex flex-wrap justify-between gap-7"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
      >
        {hobbiesData.map((hobby, index) => (
          <HobbyCard 
            key={`hobby-${index}`} 
            index={index} 
            {...hobby} 
          />
        ))}
      </motion.div>

      {/* Decorative vector at bottom */}
      <svg 
        className="w-full h-24 mt-20 text-[#915EFF]/10" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,00,0,321.39,56.44Z" 
          fill="currentColor"
        ></path>
      </svg>
    </motion.section>
  );
};

export default SectionWrapper(Hobbies, "hobbies");
