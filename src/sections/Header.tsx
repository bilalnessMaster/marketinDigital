import Image from 'next/image'
import React, { useEffect } from 'react'
import logo from '@/assets/logo.png'
import { links } from '@/constant/links'
import LinkNav from '@/components/LinkNav'
import {useAnimate, motion, stagger} from 'framer-motion'
const Header = () => {
    const [scope, animate] = useAnimate()
    const [listScope, listAnimate] = useAnimate()

    useEffect(() => {
        animate(
            scope.current , {
                transform: "translateY(0)",
            },{
                duration : 0.5,
                delay : .3,
                ease : [0.39, 0.24, 0.3, 1]
            }
        )
        listAnimate(listScope.current.querySelectorAll("li"), {
            transform: "translateX(0)",
        },{
            duration: 0.5,
            delay: stagger(0.1),
            ease : [0.39, 0.24, 0.3, 1]
          })
    }, [scope, animate, listScope, listAnimate])

  return (
    <motion.header initial={{ translateY : '-100%'}} ref={scope}   className='w-full flex justify-between items-center py-2 fixed '>
        <nav className='flex justify-between w-full pr-8'>
            <div>
                <Image src={logo}  width={40} height={40} alt="brand logo" />
            </div>
            <ul ref={listScope}  className='flex flex-col items-end font-ibm'>
                {
                    links.map(({id , href , name}) => (
                            <LinkNav key={id} href={href} name={name} />
                    ))
                }
            </ul>
        </nav>
    </motion.header>
  )
}

export default Header
