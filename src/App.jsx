import { motion } from "framer-motion";
import React from "react";

const projects = [
  {
    title: "AI Lead Generation Web App",
    description: "Automates lead generation using AI workflows.",
    link: "https://res.cloudinary.com/dgzdv7gve/video/upload/v1776727068/Screen_Recording_20260226_084906_2_ohbczx.mp4ing_20260226_084906_2_ohbczx.mp4",
  },
  {
    title: "Football News Aggregation Agent",
    description: "Transforms sports news into engaging AI content.",
    link: "/images/IMG_20260203_182442_853.jpg",
  },
  {
    title: "HR Assistant Agent",
    description: "AI assistant that streamlines HR operations.",
    link: "/images/IMG_20260112_164615_630.jpg",
  },
  {
    title: "Whatsapp Order Automation",
    description: "AI assistant that improves order accuracy.",
    link: "https://res.cloudinary.com/dgzdv7gve/video/upload/v1776731332/VID_20250918_174455_4_gpo0he.mp4o0he/mp4",
  }
];

const videos = [
  {
    title: "AI Ad video - FarmStack",
    src: "https://res.cloudinary.com/dgzdv7gve/video/upload/v1776726878/VID-20260115-WA0003_i6hkax.mp4",
  },
  {
    title: "AI Ad video - FMN",
    src: "https://res.cloudinary.com/dgzdv7gve/video/upload/v1776726995/lv_0_20260220062145_q8bdq8.mp4",
  },

  {
    title: "AI Educational Clip - Body Safety",
    src: "https://res.cloudinary.com/dgzdv7gve/video/upload/v1776726750/Poetic_Animator_1_znexvr.mp4",
  },
  {
    title: "AI Educational Clip - Internet Safety",
    src: "https://res.cloudinary.com/dgzdv7gve/video/upload/v1776730403/Poetic_Animator_2_gkjp3m.mp4",
  },
  {
    title: "AI Educational Clip - Personal Hygiene",
    src: "https://res.cloudinary.com/dgzdv7gve/video/upload/v1776726605/Poetic_Animator_20251014_031959_0001_cisbeo.mp4",
  },
  {
    title: "AI Educational Clip - Balanced Diet",
    src: "https://res.cloudinary.com/dgzdv7gve/video/upload/v1776726757/Poetic_Animator_pkmqop.mp4",
  }
];

export default function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-white"
        >
          Arosoye Helen Adetomi
        </motion.h1>

        <p className="mt-4 text-slate-400">
          AI Automation Specialist | AI Video Creator
        </p>
      </section>

      {/* SUMMARY */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
        <p className="text-slate-400 leading-relaxed">
          I specialize in building AI-powered automation systems and creating
          engaging AI video content. I help startups and businesses streamline
          operations, generate content at scale, and improve efficiency using
          modern AI tools and workflows.
        </p>
      </section>

      {/* CORE COMPETENCIES */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 py-12"
      >
        <h2 className="text-2xl font-semibold mb-6">Core Competencies</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-slate-300">
          {[
            "AI Agent Development & Workflow Automation",
            "AI Video Creation",
            "No-code Frontend Design",
            "Python (FastAPI, APIs)",
            "n8n Automation",
            "Telegram Bots",
            "3D Animation",
            "Sales & Partnerships",
            "Problem Solving"
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 p-4 rounded-lg"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-8">
          AI Automation Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-slate-400 mt-3">
                {project.description}
              </p>
              <a
                href={project.link}
                className="inline-block mt-4 text-blue-400"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VIDEOS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-8">
          AI Videos / Educational Clips
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((video, i) => (
            <div
              key={i}
              className="bg-slate-900 p-4 rounded-2xl"
            >
              <h3 className="text-lg font-semibold mb-3">
                {video.title}
              </h3>

              <video
                src={video.src}
                controls
                className="w-full rounded-xl"
              />
            </div>
          ))}
        </div>
      </section>

      {/* WHY HIRE ME */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Why Hire Me
        </h2>

        <p className="text-slate-400 leading-relaxed">
          I don’t just create AI solutions — I build systems that solve real
          problems. I focus on delivering efficient, scalable, and practical
          solutions that bring measurable value to your business.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto py-12 text-center">
        <h2 className="text-2xl font-semibold">
          Let’s Work Together
        </h2>

        <p className="text-slate-400 mt-3">
          Ready to build something impactful with AI?
        </p>

        <a
          href="https://wa.me/2347035130806"
          target="_blank"
          className="inline-block mt-6 bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-600"
        >
          Contact Me on WhatsApp
        </a>
      </section>

      {/* CONTACT */}
      <section className="text-center py-12 text-slate-400">
        <p>
          Email:{" "}
          <a
            href="mailto:arosoye.helen@gmail.com"
            className="text-blue-400 hover:underline"
          >
            arosoye.helen@gmail.com
          </a>
        </p>
      </section>

    </div>
  );
}