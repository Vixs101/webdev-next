'use client'
import React from "react";
import { inView, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import logo from '../public/images/logo.png';
import facebook from '../public/images/facebook.png';
import twitter from '../public/images/twitter.png';
import insta from '../public/images/insta.png';
import linkedin from '../public/images/linkedin.png';


const Footer = () => {
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
        <motion.footer
          ref={ref}
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{duration: 0.9}} 
          className='w-full px-14 pt-14 mt-20 text-white footer'>
          <div className='gap-5 flex-wrap md:flex-nowrap flex justify-between'>
            <Image
              className=' w-8 h-10'
              src={logo}
              alt='logo'
            />
  
            <ul className='flex flex-col gap-1 md:gap-3'>
              <li className='font-semibold text-lg md:text-xl'>Services</li>
              <li className='text-sm md:text-lg leading-1 md:leading-none'>
                <a>Airtime Top-up</a>
              </li>
              <li className='text-sm md:text-lg leading-1 md:leading-none'>
                <a>Data Bundles</a>
              </li>
              <li className='text-sm md:text-lg leading-1 md:leading-none'>
                <a>Utility Bill Payments</a>
              </li>
              <li className='text-sm md:text-lg leading-1 md:leading-none'>
                <a>Education Bill Payment</a>
              </li>
              <li className='text-sm md:text-lg leading-1 md:leading-none'>
                <a>TV subscriptions</a>
              </li>
              <li className='text-sm md:text-lg leading-1 md:leading-none'>
                <a>User Gifting</a>
              </li>
            </ul>
  
            <ul className='flex flex-col gap-1 md:gap-3'>
              <li className='font-semibold text-lg md:text-xl'>Company</li>
              <li className='text-sm md:text-lg leading-1 md:leading-none'>
                <a>About Us</a>
              </li>
              <li className='text-sm md:text-lg leading-1 md:leading-none'>
                <a>FAQs</a>
              </li>
              <li className='text-sm md:text-lg leading-1 md:leading-none'>
                <a>Contact Info</a>
              </li>
            </ul>
  
            <ul className='flex flex-col pr-4 md:pr-0 md:ml-0 gap-1 md:gap-3'>
              <li className='font-semibold text-lg md:text-xl'>Legal</li>
              <li className='text-sm md:text-lg leading-1 md:leading-none'>
                <a>Privacy Policy</a>
              </li>
              <li className='text-sm md:text-lg leading-1 md:leading-none'>
                <a>Terms & Conditions</a>
              </li>
              <li className='text-sm md:text-lg leading-1 md:leading-none'>
                <a>Security</a>
              </li>
            </ul>
  
            <div className='flex flex-col items-center pl-4 md:pl-0 md:items-start sm:ml-16 md:ml-0 gap-5'>
              <div className='flex gap-3 mt-2 ml-6 md:ml-0'>
                <Image
                  className='w-10 h-10'
                  src={facebook}
                  alt='facebook icon'
                />  
                <Image
                  className='w-10 h-10'
                  src={twitter}
                  alt='twitter icon'
                />
                <Image
                  className='w-10 h-10'
                  src={insta}
                  alt='instagram icon'
                />
                <Image
                  className='w-10 h-10'
                  src={linkedin}
                  alt='linkedin icon'
                />
              </div>
              <a href="" className='mt-3 text-sm md:text-lg leading-1 md:leading-none'>Email: help@BillsLink.com</a>
              <p>+234 123 456 7890</p>                  
            </div>
      
          </div>
        
          <hr className=' mt-12 ' />
          <p className='my-5 text-sm md:text-lg text-center'>&copy; 2023. BillsLink. All rights reserved</p>
      </motion.footer>        
    );
};

export default Footer;