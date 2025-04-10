'use client'
// import Responsive from "@/components/Responsive";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Processus from "@/sections/Processus";
import Services from "@/sections/Services";
import Lenis from 'lenis'
import { useEffect } from "react";

export default function Home() {

    useEffect(() => {
       new Lenis({
            autoRaf: true,
            lerp: 0.1,
            smoothWheel: true
        });

    }, [])

  return (
        <main className=" w-full  pb-90900">
            <Header />
            <Hero />
            {/* <Responsive /> */}
            <Services />
            <Processus />
        </main>
  );
}
