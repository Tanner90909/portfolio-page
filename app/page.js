"use client";
import React from "react";
import PrimaryButton from "./components/button";
import Headshot from "./components/headshot";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="flex my-12 justify-center">
        <Headshot />
      </div>
      <div className="my-12 flex justify-center items-center">
        <p className="p-4 bg-primary text-platinum text-center rounded-2xl border w-2/5">
          Hello, I'm Tanner McDaniel, a Full Stack Web Developer who honed my
          skills at Awesome Inc's web developer bootcamp in the Fall of 2023.
          Proficient in a diverse tech stack including React, Next.js, JavaScript,
          HTML, CSS, Python, FastAPI, and SQL, I thrive on the art of crafting
          digital solutions. Passionate about turning ideas into reality, let's
          collaborate and bring your projects to life!
        </p>
      </div>
    </main>
  );
}
