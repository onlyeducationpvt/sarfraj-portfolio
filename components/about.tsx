"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <section className="mt-4 ">
  <p className="text-base leading-relaxed text-gray-700">
  As a <strong>passionate Frontend Developer with two years of professional experience</strong>, I specialize in creating dynamic, responsive web applications using <em>modern technologies like Next.js, React.js, TypeScript, and Tailwind CSS</em>. My professional journey has been focused on developing comprehensive web solutions that <em>drive user engagement and meet complex business requirements</em>. <br /> I excel in <strong>crafting intuitive user interfaces, implementing robust frontend architectures, and collaborating effectively with cross-functional teams</strong> to deliver high-performance digital experiences. My technical expertise spans <em>frontend development, UI/UX design, API integration, and responsive web design</em>, with a proven track record of transforming innovative concepts into functional, user-friendly web applications.
  </p>
</section>

    
    </motion.section>
  );
}
