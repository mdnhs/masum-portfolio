"use client";
import { motion } from "framer-motion";

type PageTitleProps = { title: string; description?: string };

const PageTitle = (props: PageTitleProps) => {
  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0, rotateX: 90 }} // Flip-up animation
        whileInView={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.7 }}
        className="flex gap-3 items-center align-middle"
      >
        <span className="w-5 h-5 bg-blue-600"></span>
        <p className="font-bold text-xl lg:text-3xl">{props.title}</p>
      </motion.div>
      {props.description && (
        <motion.p
          initial={{ opacity: 0, y: -50 }} // Zoom-in animation
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-center font-medium text-lg text-justify w-1/3"
        >
          {props.description}
        </motion.p>
      )}
    </>
  );
};

export default PageTitle;
