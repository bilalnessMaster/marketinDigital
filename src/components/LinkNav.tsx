import Link from 'next/link'
import React from 'react'
interface linkProps {
    href : string,
    name : string
}
const LinkNav = ({href , name} : linkProps) => {
  return (
    <li className='relative link  group/link text-sm mix-blend-difference'>
                    <Link href={href}>{name}</Link>
                    <span className="absolute bg-black -bottom-px origin-left transition-all duration-300 w-0 inset-x-0 h-px group-hover/link:w-full"></span>
    </li>
  )
}

export default LinkNav
