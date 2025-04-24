import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

// Individual achievement card component
const AchievementCard = ({ index, title, description, icon, date }) => {
  // Determine if the card should be on the left or right
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      variants={fadeIn(isEven ? "right" : "left", "spring", index * 0.5, 0.75)}
      className={`relative flex ${isEven ? 'justify-start' : 'justify-end'} w-full`}
    >
      <motion.div 
        className={`w-full md:w-5/6 lg:w-3/4 xl:w-2/3`}
        whileHover={{ 
          scale: 1.03,
          transition: { duration: 0.3 }
        }}
      >
        <motion.div 
          className="bg-tertiary p-5 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300"
          initial={{ borderColor: "rgba(145, 94, 255, 0)" }}
          whileHover={{ 
            borderColor: "rgba(145, 94, 255, 0.7)",
            boxShadow: "0 0 15px rgba(145, 94, 255, 0.5)",
            transition: { duration: 0.3 }
          }}
          style={{ border: "2px solid rgba(145, 94, 255, 0)" }}
        >
          {/* Card Header with Icon and Date */}
          <div className="flex justify-between items-center mb-4">
            <motion.div 
              className="bg-black/30 p-3 rounded-full"
              whileHover={{ 
                rotate: [0, -10, 10, -5, 0],
                transition: { duration: 0.5 }
              }}
            >
              {icon}
            </motion.div>
            <span className="text-secondary text-[14px]">{date}</span>
          </div>
          
          {/* Card Title */}
          <motion.h3 
            className="text-white font-bold text-[24px] mb-2"
            initial={{ color: "#FFFFFF" }}
            whileHover={{ color: "#915EFF" }}
          >
            {title}
          </motion.h3>
          
          {/* Card Description */}
          <p className="text-secondary text-[16px]">{description}</p>
          
          {/* Decorative line at the bottom */}
          <motion.div 
            className="h-1 bg-gradient-to-r from-[#915EFF] to-transparent mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ 
              scaleX: 1.05, 
              originX: 0,
              background: "linear-gradient(to right, #915EFF, #6D28D9, transparent)"
            }}
          />
        </motion.div>
      </motion.div>
      
      {/* Decorative connector */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <motion.div 
          className="w-4 h-4 rounded-full bg-[#915EFF]"
          whileHover={{ scale: 1.5 }}
        />
        <div className="w-1 h-full bg-gradient-to-b from-[#915EFF] to-transparent absolute left-1/2 transform -translate-x-1/2" />
      </div>
    </motion.div>
  );
};

// Achievement icons - simple SVG elements
const icons = [
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#915EFF]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#915EFF]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#915EFF]" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#915EFF]" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z" clipRule="evenodd" />
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#915EFF]" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#915EFF]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.5 7.5h-9v9h9v-9z" />
    <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z" clipRule="evenodd" />
  </svg>
];

// Main Achievements component
const Achievements = () => {
  // Achievement data
  const achievements = [
    {
      title: "Vice President – Team7, LPU",
      description: "Led a dynamic student organization focused on tech innovation, project development, and peer mentorship. As Vice President, I spearheaded multiple initiatives, organized technical workshops, and fostered a collaborative environment that empowered students to excel in competitive coding and real-world problem-solving.",
      date: "2023-2024",
      icon: icons[0]
    },
    {
      title: "Tech Lead – Team7, LPU",
      description: "Led the technical wing of Team7, managing project development, mentoring junior developers, and ensuring high-quality output across initiatives. Played a key role in driving technical excellence and fostering hands-on learning among members.",
      date: "2022-2023",
      icon: icons[0]
    }
    // {
    //   title: "Anchor – Department of Youth Capital, LPU",
    //   description: "Hosted high-impact events including advertisement campaigns and team selection rounds. As an anchor, I played a key role in audience engagement and smooth event execution, contributing to the department’s dynamic campus presence and outreach efforts.",
    //   date: "2022",
    //   icon: icons[2]
    // },
    // {
    //   title: "Recognized Speaker – Model United Nations, DPS K",
    //   description: "Recognized as a standout delegate at the All India Inter-DPS MUN hosted by DPS K. Delivered impactful speeches among international participants and judges, showcasing diplomatic insight, negotiation skills, and public speaking excellence.",
    //   date: "2021",
    //   icon: icons[3]
    // },
    // {
    //   title: "Best Cadet Commander – Scouts, DPS Vindhyanagar",
    //   description: "Honored with the Best Cadet Commander Award by the CISF Commander during the 26th January Parade. Represented the Scouts of DPS Vindhyanagar with distinction, demonstrating leadership, discipline, and dedication to service.",
    //   date: "2021",
    //   icon: icons[3]
    // },
    // {
    //   title: "Student Council President – DPS Vindhyanagar",
    //   description: "Elected as the Student Council President at Delhi Public School Vindhyanagar. Led school-wide initiatives, coordinated inter-house activities, and represented the student body, promoting leadership, unity, and student engagement.",
    //   date: "2021 - 2022",
    //   icon: icons[3]
    // }
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Successes</p>
        <h2 className={`${styles.sectionHeadText}`}>Achievements.</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following achievements highlight significant milestones in my career journey.
          Each represents my commitment to technical excellence, continuous learning, and impactful contributions
          to the development community.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-col gap-12 relative">
        {/* Central timeline line */}
        <motion.div 
          className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#915EFF] via-[#915EFF] to-transparent transform -translate-x-1/2 hidden md:block"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Achievement cards */}
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={`achievement-${index}`}
            index={index}
            {...achievement}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");