"use client";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import CustomButton from "./CustomButton";

export default function Hero() {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-5 padding-x">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="hero__title"
        >
          Find, book or rent a car—quick and super easy!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="hero__subtitle"
        >
          Streamline your car rental experience with our effortless booking
          process.
        </motion.p>
        {/* 
      <CustomButton
        title="Explore Cars"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}
      /> */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <CustomButton
            title="Explore Cars"
            containerStyles="mt-10 bg-blue-500 text-white hover:text-black hover:bg-gray-200"
            handleClick={handleScroll}
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="hero__image-container"
      >
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 1 }}
          className="hero__image"
        >
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </motion.div>

        <div className="hero__image-overlay" />
      </motion.div>
    </div>
  );
}
