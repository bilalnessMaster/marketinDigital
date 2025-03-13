'use client'
import { stagger, useAnimate } from 'framer-motion';
import React, { useEffect } from 'react'
import SplitType from "split-type";
import btn from '@/assets/BUTTON.png'
import Image from 'next/image';
import {motion} from 'framer-motion'
const Hero = () => {
    const [titleScope, titleAnimate] = useAnimate();
    const [paraScope, paraAnimate] = useAnimate()
    const [miniScope, miniAnimate] = useAnimate()
    useEffect(() => {
        new SplitType(titleScope.current, {
          types: "lines,words",
          tagName: "span",
        });
        new SplitType(paraScope.current, {
            types: "lines,words",
            tagName: "span",
          });
        new SplitType(miniScope.current, {
            types: "lines,words",
            tagName: "span",
          });
        titleAnimate(
          titleScope.current.querySelectorAll(".word"),
          {
            transform: "translateY(0)",
             filter : "blur(0px)"
          },
          {
            duration: 0.5,
            delay: stagger(0.04),
            ease : [0.39, 0.24, 0.3, 1]
          }
        );
        paraAnimate(  paraScope.current.querySelectorAll(".word"),
        {
          transform: "translateY(0)",
          filter : "blur(0px)"
        },
        {
          duration: 0.5,
          delay: stagger(0.03),
          ease : [0.39, 0.24, 0.3, 1]
        })
        miniAnimate(
            miniScope.current.querySelectorAll(".word"),
        {
          transform: "translateY(0)",
           filter : "blur(0px)"
        },
        {
          duration: 0.5,
          delay: stagger(0.04),
          ease : [0.39, 0.24, 0.3, 1]
        })
    }, [titleScope, titleAnimate , paraScope ,paraAnimate,  miniAnimate, miniScope]);

  return (
    <section   className='h-screen flex items-center text-primary px-4'>
        <section  className=' grid items-center w-full gap-1'>
            <div className='xl:max-w-lg'>
                <p ref={miniScope}  className='uppercase font-uncut  text-sm md:text-xl'>
                Bonne lecture et belle découverte !
                </p>
            </div>
            <div className='max-w-full lg:max-w-[90rem]'>
                <h1  ref={titleScope}   className='text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-wide font-uncut uppercase font-medium'>
                <span>95% de nos clients </span>
                <span>augmentent leurs </span>
                <span>VENTES .</span>
                </h1>
            </div>
            <div className='flex justify-end w-full mb-12'>
                <p  ref={paraScope}   className='max-w-sm text-sm md:text-xl font-sans '>
                Une approche 100% opérationnelle et orientée résultats, pragmatique et centrée sur vos objectifs
                </p>
            </div>
            <motion.div initial={{
                transform : "translateY(100%)",
                opacity : 0
            }}
            animate={{
                transform : "translateY(0)",
                opacity : 1
            }}
            transition={{
                ease : [0.39, 0.24, 0.3, 1],
                 duration: .5
            }}

            className='flex w-full items-center justify-center mt-12 '>
                    <motion.button
                     whileHover={{ scale: 1.01 }}
                     whileTap={{ scale: 0.8 }}

                    className='cursor-pointer '>
                        <Image src={btn} alt="button for contact" />
                    </motion.button>
            </motion.div>
        </section>
    </section>
  )
}

export default Hero
