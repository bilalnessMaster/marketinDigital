import React, { useEffect } from 'react'
import { motion, stagger, useAnimate, useInView, useScroll, useTransform } from 'framer-motion'
import SplitType from 'split-type';
const services =[
    {
        id: 1 ,
        title : "Prospection Ciblée",
        description : "Identification précise des opportunités de marché les plus prometteuses",


    },
    {
        id: 2 ,
        title : "Déclenchement d'Intérêt",
        description : "Stratégies de conversion avancées qui maximisent votre taux de transformation",

    },
    {
        id: 3 ,
        title : "Transformation Commerciale",
        description : "Conception et mise en œuvre de projets innovants et efficaces",

    },
    {
        id: 4 ,
        title : "Fidélisation Dynamique",
        description : "Techniques innovantes pour créer une relation client durable et engageante",

    },{
        id: 5 ,
        title : "Amplification Relationnelle",
        description : "Transformer vos clients en véritables ambassadeurs de votre marque",

    },{
        id: 6 ,
        title : "Croissance Intelligente",
        description : "Ajustements permanents et stratégiques pour une croissance exponentielle",

    }
]
const Services = () => {
    const [scope, animate] = useAnimate()
    const inView = useInView(scope);
    const { scrollYProgress } = useScroll({
      target: scope,
      offset :  ["start end", "end 120%"]
    });
    const X = useTransform(scrollYProgress, [0, 1], [0.98, 1])
    const Y = useTransform(scrollYProgress, [0, 1], ['5%', "-5%"])
    useEffect(() => {
        if (inView) {
            new SplitType(scope.current?.querySelector("h1"), {
                types: "lines,chars",
                tagName: "span",
            });
        }
    },[scope, inView])
    useEffect(() => {
        if(inView) {
        animate(scope.current.querySelectorAll('.char'),
                {
                    transform: "translateY(0)",
                    filter : "blur(0px)"
                },
                {
                    duration : 0.5,
                    delay : stagger(0.04),
                    ease : [0.39, 0.24, 0.3, 1]
                }
        )
        }
    }, [scope, animate, inView])



    return (
    <motion.section  ref={scope} style={{
        scaleX : X ,
        marginTop: Y
    }}     className='h-full grid md:grid-cols-12 w-full z-20 bg-primary  rounded-t-xl  p-2 lg:p-8'>


        <div className='col-span-6 lg:col-span-7 h-fit md:sticky top-8'>
                <motion.h1   className='text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-uncut'>
                NOTRE STRATEGIE
                </motion.h1>
        </div>
        <div className='col-span-6 lg:col-span-5'>
                {
                    services.map((service, index) => (
                        <motion.div key={service.id} whileInView={{opacity : 1 , scale : 1 , y : 0}} transition={{duration : 0.5}} initial={{opacity : 0 , scale : .95 , y : 50}}  className='flex   divide-x  py-10 border-b border-white divide-white text-white gap-3 mb-3 last:border-none'>
                            <div className=' px-4 md:px-8 text-2xl font-ibm md:text-3xl'>
                                [{index.toString().padStart(2, "0")}]
                            </div>
                            <div className='pl-3 max-w-xs text-xl font-uncut'>
                                <motion.h2   className='md:text-4xl text-white font-uncut uppercase'>
                                    {service.title}
                                </motion.h2>
                                <motion.p   className='text-sm text-white font-ibm'>
                                    {service.description}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))
                }
        </div>


    </motion.section>
  )
}

export default Services
