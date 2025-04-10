import { motion, stagger, useAnimate, useInView, useScroll, useTransform } from 'framer-motion'
import React, { useEffect } from 'react'
import SplitType from 'split-type';

const Processus = () => {
    const [scope, animate] = useAnimate()
    const { scrollYProgress } = useScroll({
        target: scope,
        offset: ["start end", "end start"]
    });
    const inView = useInView(scope);
    useEffect(() => {
        if (inView) {
            new SplitType(scope.current?.querySelector("h1"), {
                types: "lines,chars",
                tagName: "span",
            });
        }
    }, [scope, inView])
    useEffect(() => {
        if (inView) {
            animate(scope.current.querySelectorAll('.char'),
                {
                    transform: "translateY(0)",
                    filter: "blur(0px)"
                },
                {
                    duration: 0.5,
                    delay: stagger(0.04),
                    ease: [0.39, 0.24, 0.3, 1]
                }
            )
        }
    }, [scope, animate, inView])
    const scale = useTransform(scrollYProgress, [0, 1], [0, 1])
    return (
        <section ref={scope} className='h-full  bg-primary  overflow-hidden  p-2 lg:p-8 space-y-12'>
            <div className='col-span-6 lg:col-span-7 h-fit  top-8'>
                <motion.h1 className='text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-uncut'>
                    NOTRE PROCESSUS
                </motion.h1>
            </div>
            <div className='grid grid-cols-12 '>
                <div

                    className='col-span-5 py-100 space-y-100'>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -500
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            ease: [0.39, 0.24, 0.3, 1],
                            duration: 0.5,
                            delay: 0.5
                        }}

                        className='border border-[#514F4F] rounded h-64'>

                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -500
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            ease: [0.39, 0.24, 0.3, 1],
                            duration: 0.5,
                            delay: 0.5
                        }}

                        className='border border-[#514F4F] rounded h-64'>

                    </motion.div>
                </div>
                <div className='col-span-2 flex justify-center'>
                    <motion.div
                        style={{
                            scaleY: scale
                        }}
                        className='w-2  origin-top  bg-[#514F4F]'>

                    </motion.div>
                </div>
                <div className='col-span-5 space-y-100 py-12'>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 500
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: .5,
                            ease: [0.39, 0.24, 0.3, 1],
                            delay: 0.5


                        }}

                        className='border border-[#514F4F] rounded h-64 flex items-center justify-start px-12 relative w-full max-w-2xl p-6  py-12 '>
                        <div className="flex items-start font-uncut gap-3">
                            <div className="size-14 bg-neutral-700 items-center flex justify-center rounded-full">
                            <i className="hgi hgi-stroke hgi-seal text-4xl"></i>
                            </div>
                            <div className='py-3'>
                                <h3 className="text-xl font-medium mb-4">Étape 1</h3>
                                <h2 className="text-4xl  uppercase mb-2">EXPLORATION STRATÉGIQUE</h2>
                                <p className="text-gray-400  font-ibm text-lg">
                                    analyse approfondie de votre écosystème,<br />
                                    identification des opportunités cachées et<br />
                                    définition des objectifs stratégiques<br />
                                    précis.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 500
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: .5,
                            ease: [0.39, 0.24, 0.3, 1],
                            delay: 0.5


                        }}

                        className='border border-[#514F4F] rounded h-64'>

                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Processus