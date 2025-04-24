import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import cvPreview from "../assets/cv.png"; // Import the image using React's import system 
import videop from "../assets/video_cv.mp4";
import previewImage from "../assets/previewImage.png";

// CV display component with GitHub link
const CVSection = () => {
  return (
    <motion.div variants={fadeIn("left", "spring", 0.5, 0.75)}>
      <div className="bg-tertiary p-5 rounded-2xl w-full">
        <h3 className="text-white font-bold text-[20px] mb-5">Curriculum Vitae</h3>
        
        <div className="w-full h-[500px] bg-black/50 rounded-2xl flex items-center justify-center relative overflow-hidden">
          {/* Use imported image instead of direct path */}
          {/* new comment to commit */}
          <img 
            src={cvPreview} 
            alt="CV Preview" 
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="mt-4 flex justify-end">
          <button 
            onClick={() => window.open("https://github.com/yourusername/your-cv-repo", "_blank")} 
            className="py-2 px-4 bg-[#915EFF] hover:bg-purple-600 text-white rounded-lg transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            View CV on GitHub
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Video CV section using simple HTML5 video tag
// Video CV section using HTML5 video with poster image
const VideoCV = () => {
  return (
    <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)}>
      <div className="bg-tertiary p-5 rounded-2xl w-full">
        <h3 className="text-white font-bold text-[20px] mb-5">Video Introduction</h3>

        {/* Video with new preview image as poster */}
        <div className="w-full h-[300px] bg-black/50 rounded-2xl flex items-center justify-center relative overflow-hidden">
          <video 
            className="w-full h-full object-cover"
            controls
            poster={previewImage} // Set the new image as poster
          >
            <source src={videop} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <p className="mt-4 text-secondary text-[14px]">
          A brief video introduction highlighting my skills, experience and what drives me as a developer.
        </p>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My credentials</p>
        <h2 className={`${styles.sectionHeadText}`}>Portfolio.</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Below you'll find my professional credentials, including my detailed CV and a video introduction.
          These represent my professional journey, skill set, and personality better than words alone could express.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-20">
        <CVSection />
        <VideoCV />
      </div>
    </>
  );
};

export default SectionWrapper(Portfolio, "portfolio");