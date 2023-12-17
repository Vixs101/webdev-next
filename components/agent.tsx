'use client'
import React from "react";
import { inView, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import agent from '../public/images/agent.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

const Agent = () => {
    const [ref, inView] = useInView ({
        triggerOnce: true,
    });

    const variants = {
        hidden: {opacity: 0, y : 50},
        visible: {opacity: 1, y : 0},
    };

    useEffect (() => {
        if(inView) { }
    }, [inView]);

    return (
        <motion.section
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{duration: 0.9}}        
            className='px-5 md:px-14 pt-3 md:pt-10 mt-28 md:mt-10'
            id='agent'>
            <div className='flex flex-col gap-5 md:gap-0 md:flex-row items-center justify-between blue2 rounded-lg pl-5 md:pl-20 pr-5 md:pr-36 pt-5 md:pt-32 md:pb-0'>
                <div className=' order-2 md:order-1'>
                    <Image
                    className='h-64 md:h-96 w-44 md:w-full '
                    src={agent}
                    alt='agent section mockup'
                    />
                </div>
                <div className='order-1 md:order-2 md:w-2/4 text-center md:text-left '>
                    <h1 className='text-xl md:text-4xl font-extrabold md:mb-5'>Become a BillsLink Agent</h1>
                    <p className='mb-3 md:mb-10 leading-7 text-sm md:text-lg'>As a Billslink agent, you&apos;ll be part of a dynamic platform that empowers you to offer VTU and bill payment services to your community. Enjoy the benefits of a simple onboarding process, competitive commissions, and access to a wide range of services. Become a valued partner in the Billslink network by joining us as an agent and unlock a world of opportunities in financial services.</p>
          
                    {/* button */}
                    <div className='flex m-auto px-7 py-3 items-center justify-between bg-white w-52 duration-500  rounded-lg blue1 font-semibold'>
                        <button>
                            Get Started Now 
                        </button>
                        <FontAwesomeIcon icon={faArrowRight} className='w-5 h-5' />        
                    </div>
                </div>
            </div>
      </motion.section>
    );
};

export default Agent;