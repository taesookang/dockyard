import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { chevronVariants } from "./variants";
import { getImageUrl } from "../../utils";

export const ChevronSpring: React.FC = () => {
  return (
    <motion.div
      variants={chevronVariants}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 1, type: "spring", bounce: 0.6 }}
      viewport={{ once: true }}
      className="absolute-center-x top-auto w-[10%] md:w-[3%] h-auto bottom-[-20%] md:bottom-[5%] pt-6"
    >
      <Image
        alt="chevron down"
        src={getImageUrl("chevron-down.svg")}
        width={300}
        height={200}
      />
    </motion.div>
  );
};

export default ChevronSpring;
