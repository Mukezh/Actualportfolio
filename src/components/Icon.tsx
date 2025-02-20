import { MagicSphere } from "@magiclabs/ui";
import { FaReact, FaNodeJs, FaPython, FaGithub, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiPostgresql, SiTailwindcss, SiMysql } from "react-icons/si";

const IconCloud = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <MagicSphere className="w-[400px] h-[400px]">
        <FaReact size={50} color="#61DBFB" />
        <SiNextdotjs size={50} color="white" />
        <FaNodeJs size={50} color="#8CC84B" />
        <SiTypescript size={50} color="#3178C6" />
        <FaPython size={50} color="#FFD43B" />
        <FaGithub size={50} color="white" />
        <FaDocker size={50} color="#0db7ed" />
        <SiPostgresql size={50} color="#336791" />
        <SiTailwindcss size={50} color="#38B2AC" />
        <SiMysql size={50} color="#00758F" />
      </MagicSphere>
    </div>
  );
};

export default IconCloud;
