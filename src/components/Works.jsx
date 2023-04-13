import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useUser } from "../contexts/UserContext";
import { gradientClasses } from "../constants/gradientClassname";

const ProjectCard = ({
  index,
  liveurl,
  githuburl,
  title,
  image,
  description,
  techStack,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full min-h-[600px]"
      >
        <div className="relative w-full h-[230px] ">
          <img
            src={image.url}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          {githuburl !== "" && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <a
                // onClick={() => window.open(githuburl, "_blank")}
                href={githuburl !== "" && githuburl}
                target="blank"
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </a>
            </div>
          )}
        </div>

        <div className="mt-5">
          <div className="flex justify-between  items-center  w-full gap-2">
            <h3 className="text-white font-bold text-[24px]">{title}</h3>

            {liveurl !== "" && (
              <a href={liveurl} target="blank" className="  text-[14px]">
                <button class="  bg-gradient-to-r from-pink-500 to-purple-500 text-white font-light py-1 px-4 rounded-full shadow-lg hover:shadow-xl neon-text">
                  Live
                </button>
              </a>
            )}
          </div>

          <p className="mt-2 text-secondary text-[14px]  min-h-[200px]">
            {/* {description?.slice(0,300)}... */}
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {techStack?.map((tag) => (
            <p
              key={`${title}-${tag}`}
              className={`text-[14px] ${
                gradientClasses[
                  Math.floor(Math.random() * gradientClasses.length)
                ]
              } `}
            >
              {/* ${tag.color} */}#{tag}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { user } = useUser();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {user?.projects
          ?.sort((a, b) => a?.sequence - b?.sequence) // sort projects by sequence
          .map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
