'use client'

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {faX} from '@fortawesome/free-solid-svg-icons';
import { motion, Variants } from "framer-motion";

const links = [
    { id:1, title: "Home", url: "/"},
    { id:2, title: "Our Services", url: "/#services"},
    { id:3, title: "Become An Agent", url: "/#agent"},
    { id:4, title: "FAQ", url: "/#faq"},
    { id:5, title: "Contact Us", url: "/#contact"},
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
                    animate={open ? "open" : "closed"}
                    variants={{
                        open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.7,
                            delayChildren: 0.3,
                            staggerChildren: 0.05
                        }
                        },
                        closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.3
                        }
                        }
                    }}
                    className="absolute right-2 mt-12 h-[calc(100vh-7rem)] w-[calc(100vw-6rem)] bg-white text-black rounded-lg">

                </motion.div>
            )

            }
        </div>
    );
};

export default Menu;