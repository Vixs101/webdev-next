'use client'
import React from "react";
import { inView, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Faqs from './faqComponent';

const Faq = () => {
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
            className='flex flex-col items-center justify-center px-5' id='faq'>
            <div className='mt-28 mb-12 text-center  md:w-101'>
                <h1 className='text-2xl md:text-5xl font-semibold mb-2 md:mb-3'>Frequently Asked Questions</h1>
                <p className='text-sm md:text-lg'>Want to know more about our services? Our FAQs section is here to help you with useful information about us.</p>
            </div>
            {/* faq */}     
            < Faqs/>
            < Faqs/>
            < Faqs/>
            < Faqs/>
            < Faqs/>
            < Faqs/>
            < Faqs/>
            < Faqs/>        
            {/* get in touch with us */}
            <div className='flex gap-5 mt-3 px-7 py-3 items-center justify-between bg-white duration-500  rounded-lg blue1 font-semibold' id='contact'>
                <button>
                    Still have questions? Get in touch with us
                </button>
                <FontAwesomeIcon icon={faArrowRight} className='w-5 h-5' />        
            </div>
        </motion.section>
    );
};

export default Faq;