"use client";
import React from "react";
import PrimaryButton from "./components/button";
import Headshot from "./components/headshot";

export default function Home() {
  return (
    <main className="">
      <div className="p-4">Tanner McDaniel Portfolio</div>
      <div className="flex justify-center">
        <Headshot />
      </div>
      <div className="flex justify-center text-center">
        <p className="my-5 w-3/5">
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
