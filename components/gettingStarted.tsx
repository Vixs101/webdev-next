import React from "react";
import { inView, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import download from '../public/images/download.png';
import signup from '../public/images/signup.png';
import fund from '../public/images/fundwallet.png';
import gettingstarted from '../public/images/gettingStarted.png';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GettingStarted = () => {
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
            className='flex flex-col md:flex-row items-center justify-between px-5 md:px-14 mt-28 md:mt-10'>
            <div className='start flex flex-col items-center gap-5 px-10'>
                <div className='w-3/4 text-center md:w-auto' >
                    <h1 className='text-2xl md:text-4xl font-semibold md:mb-5'> 
                        Here are 
                        <span className='blue1'> 3 Simple Ways </span>
                        to Get Started with
                        <span className='blue1'> BillsLink</span>
                    </h1>
                    <p className='text-sm md:text-lg'>We’ve made it seamlessly easy to onboard on the BillsLink App</p>
                </div>
                 {/* step1 */}
                <div className="flex items-center gap-4 py-3 pl-2 md:pl-5 pr-10 md:pr-14 bg-gray-100 w-3/4 md:w-auto">
                    <Image
                        className=' w-10 h-10 md:w-16 md:h-16'
                        src={download}
                        alt='download icon'
                    />
                    <div>
                        <h3 className='text-lg md:text-xl font-semibold mb-3'>Download & Install the App</h3>
                        <p className='text-sm md:text-lg'>Go to your app store, search and download the “BillsLink” app, then install it.</p>
                    </div>
                </div>
                {/* step2 */}
                <div className="flex items-center gap-4 py-3 pl-2 md:pl-5 pr-10 md:pr-14 bg-gray-100 w-3/4 md:w-auto">
                    <Image
                        className=' w-10 h-10 md:w-16 md:h-16'
                        src={signup}
                        alt='signup icon'
                    />
                    <div>
                        <h3 className='text-xl font-semibold mb-3'>Sign-up on the BillsLink App</h3>
                        <p className='text-sm md:text-lg'>Open the app and follow the quick sign-up process. It’s free and easy.</p>
                    </div>
                </div>
                {/* step3 */}
                <div className="flex items-center gap-4 py-3 pl-2 md:pl-5 pr-10 md:pr-14 bg-gray-100 w-3/4 md:w-auto">
                    <Image
                    className='w-10 h-10 md:w-16 md:h-16'
                    src={fund}
                    alt='fund wallet icon'
                    />
                    <div>
                        <h3 className='text-xl font-semibold mb-3'>Fund Wallet and Pay Bills</h3>
                        <p>Add funds to your account wallet and start paying your bills.</p>
                    </div>
                </div>
  
                {/* download button */}
                <div className='flex px-7 py-3 items-center cursor-pointer justify-between blue2 w-52 duration-500  rounded-lg blue1 font-semibold'>
                    <button>
                        Download App 
                    </button>
                    <FontAwesomeIcon icon={faArrowRight} className='w-5 h-5' />        
                </div>
            </div>
  
            <Image
            className=' ml-5 height1'
            src={gettingstarted}
            alt='A phone showing how to get started'
            />
        </motion.section>

    );
};

export default GettingStarted;