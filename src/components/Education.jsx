import { motion } from "framer-motion";
import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

// Individual education card component
const EducationCard = ({
  index,
  institution,
  degree,
  year,
  score,
  description,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>🎓</p>
    
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px] font-bold'>{institution}</p>
      <p className='text-secondary tracking-wider text-[16px] mt-2'>{degree}</p>
      <p className='text-white font-medium mt-2'>
        <span className='blue-text-gradient'>Score:</span> {score}
      </p>
      
      {description && (
        <p className='text-secondary text-[14px] mt-3'>{description}</p>
      )}
      
      <div className='flex items-center justify-between gap-1 mt-7'>
        <div className='flex flex-col flex-1'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>Year:</span> {year}
          </p>
        </div>
        
        {image && (
          <img
            src={image}
            alt={`${institution}-logo`}
            className='object-cover w-10 h-10 rounded-full'
          />
        )}
      </div>
    </div>
  </motion.div>
);

// Main Education component
const Education = () => {
  // Education data
  const educationData = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Science in Computer Science",
      year: "2022 - 2026",
      score: "CGPA: 8.70/10.0",
      description: "Specialization in Artificial Intelligence and Machine Learning with honors thesis on visual recognition systems.",
      image: "/university-logo.png" 
    },
    {
      institution: "Delhi Public School",
      degree: "Higher Secondary Education (Class 12)",
      year: "2020 - 2021",
      score: "91%",
      description: "Science stream with Computer Science, Mathematics, and Physics as core subjects.",
      image: "/highschool-logo.png" 
    },
    {
      institution: "Delhi Public School ",
      degree: "Secondary Education (Class 10)",
      year: "2018 - 2019",
      score: "92%",
      description: "Earned CBSE Class 10th certification with strong performance in English, Math, Science, Social Studies, Sanskrit, and Computer Fundamentals.",
      image: "/highschool-logo.png" 
    }
  ];

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Academic Journey</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {educationData.map((education, index) => (
          <EducationCard key={education.institution} index={index} {...education} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");