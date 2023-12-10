'use client'

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faWrench, faUserTie, faQuestionCircle, faPhoneAlt, faArrowRight, faX } from '@fortawesome/free-solid-svg-icons';
import { motion, Variants } from "framer-motion";

const links = [
    { id:1, title: "Home", url: "/", icon:faHome},
    { id:2, title: "Our Services", url: "/#services", icon:faWrench},
    { id:3, title: "Become An Agent", url: "/#agent",icon: faUserTie},
    { id:4, title: "FAQ", url: "/#faq", icon: faQuestionCircle},
    { id:5, title: "Contact Us", url: "/#contact", icon: faPhoneAlt},
];

const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex w-2/3 justify-end">
            {!open ? (
                <FontAwesomeIcon 
                    icon={faBars} 
                    className='w-7 h-7 text-white md:hidden'
                    onClick={() => setOpen(true)}
                />
            ) : (
                <FontAwesomeIcon 
                    icon={faX}
                    className='w-7 h-7 text-white md:hidden'
                    onClick={() => setOpen(false)}
                /> 
            )
            }

            {open && (
                <motion.div 
                    className="absolute flex flex-col gap-5 px-5 py-10 blue1 text-lg font-semibold right-2 mt-12 h-[calc(100vh-7rem)] w-[calc(100vw-5rem)] bg-white border-gray-300 border-2 text-black rounded-lg">

                        {links.map((item) => (
                            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
                                <FontAwesomeIcon icon={item.icon} className="mr-3" />
                                {item.title}
                                <hr />

                            </Link>    
                        ))}
                            <div className='flex px-4 py-3 items-center cursor-pointer justify-between blue2 w-40 duration-500  rounded-lg blue1 font-semibold place-self-center mt-3'>
                                <button className=" text-sm mr-1  ">
                                    Download App 
                                </button>
                                <FontAwesomeIcon icon={faArrowRight} className='w-3 h-3' />        
                           </div>                        
                </motion.div>
            )

            }
        </div>
    );
};

export default Menu;