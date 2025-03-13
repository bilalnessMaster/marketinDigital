'use client'
// import Responsive from "@/components/Responsive";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Lenis from 'lenis'
import { useEffect } from "react";

export default function Home() {

    useEffect(() => {
       new Lenis({
            autoRaf: true,
          });

    }, [])

  return (
        <main className=" w-full px-4 pb-90900">
            <Header />
            <Hero />
            {/* <Responsive /> */}
        </main>
  );
}
