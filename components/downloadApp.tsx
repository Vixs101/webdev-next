'use client'
import React from "react";
import { inView, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import google from '../public/images/googleplay.png';
import apple from '../public/images/applestore.png';
import phones from '../public/images/phones.png';
import getInTouch from '../public/images/getintouch.png';
import facebook from '../public/images/facebook.png';
import twitter from '../public/images/twitter.png';
import insta from '../public/images/insta.png';
import linkedin from '../public/images/linkedin.png';

const DownloadApp = () => {
    const [ref, inView] = useInView ({
        triggerOnce: true,
    });

    const variants = {
        hidden: {opacity: 0, y : 50},
        hide: {opacity: 0, y : 5},
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
            className='px-5 md:px-14 mt-10'>
            {/* download */}
            <div className='flex flex-col md:flex-row gap-5 items-center md:justify-between px-10 pt-12 rounded-xl blue3 w-full'>
                <div className='flex flex-col gap-5 md:gap-10 h-64 md:h-96 md:w-1/2'>
                 {/* texts section */}
                    <a href="" className='blue1 font-semibold'>Download The BillsLink App </a>
                    <h1 className='text-xl md:text-4xl font-semibold md:leading-12'>
                     Join The New Billing & VTU Platform For Seamless Transactions
                    </h1>

                <div className='flex flex-col md:flex-row items-center md:items-start gap-7'>
                    <Image 
                    className='w-32 md:w-auto md:h-auto h-10'
                    src={google} 
                    alt='google playstore'
                    />
                    <Image 
                    className='w-32 md:w-auto md:h-auto h-10'
                    src={apple} 
                    alt='apple store'
                    />
                </div>
                </div>

                {/* phone image */}
                <div className='md:w-1/2'>
                <Image 
                    className='h-64 md:h-96 w-64 md:w-10/12 ml-auto '
                    src={phones} 
                    alt='phones'
                />
                </div>
            </div>
            {/* get in touch */}
            <motion.div
                ref={ref}
                initial='hide'
                animate={inView ? 'visible' : 'hide'}
                variants={variants}
                transition={{duration: 0.9}}  
                className='flex flex-col md:flex-row items-center justify-between mt-10 md:mt-20 w-full'
                id="contactUs">
                <div className='flex flex-col gap-4 text-center md:text-left w-full md:w-1/2'>
                <h1 className='blue1 text-2xl md:text-5xl font-semibold'>Let’s get in touch</h1> 
                <p className=' md:w-10/12 leading-6'>
                    We&apos;d love to hear from you! Whether you have questions about our services, need assistance, or want to explore partnership opportunities, let&apos;s get in touch.
                </p>

                <div className='flex flex-col items-center md:items-start gap-3 blue1 underline font-semibold'>
                    <a href="">Email us:help@BillsLink.com</a>
                    <p>Phone number: +234 123 456 7890</p>
                    <div className='flex gap-3 mt-2'>
                    <Image
                        src={facebook}
                        alt='facebook icon'
                    />  
                    <Image
                        src={twitter}
                        alt='twitter icon'
                    />
                    <Image
                        src={insta}
                        alt='instagram icon'
                    />
                    <Image
                        src={linkedin}
                        alt='linkedin icon'
                    />
                    </div>
                </div>
                </div>
                {/* illustration */}
                <div className='mt-10 md:mt-0 w-4/5 md:w-2/5'>
                <Image
                    className='w-full'
                    src={getInTouch}
                    alt='get in touch illustration'
                /> 
                </div>
            </motion.div>
        </motion.section>        
    );
};

export default DownloadApp;