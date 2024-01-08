"use client"
import React from "react"
import PrimaryButton from "./components/button"
import Headshot from "./components/headshot"

export default function Home() {
  return (
    <main className="">
      <div className="p-4">Tanner McDaniel Portfolio</div>
      <div className="items-center content-center">
        <Headshot />
      </div>
    </main>
  )
}
