'use client'
import React from "react";
import { inView, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import airtime from '../public/images/airtime.png';
import data from '../public/images/data.png';
import bills1 from '../public/images/bills1.png';
import cable from '../public/images/cable.png';

const Services = () => {
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
            transition={{duration: 0.8}}
            
            className='blue3 pb-5' id='services'>
            <div className='text-center pt-5 mt-28'>
                <h1 className='text-2xl md:text-5xl font-semibold md:mb-5'>Our Services</h1>
                <p className='text-sm md:text-lg'>Our comprehensive suite of services encompasses seamless VTU transactions</p>
            </div>
            <div className="grid md:grid-cols-2 md:grid-rows-2 gap-5 px-5 md:px-14 mt-10">
                {/* card1 */}
                <div className='card relative h-96 md:h-98 md:w-98'>
                    <div className='front absolute h-full w-full px-8 pt-11 bg-white rounded-lg'>
                        <div>
                            <h3 className='text-2xl font-semibold mb-3'>Airtime Top-up</h3>
                            <p className='text-sm md:text-lg'>
                                Now, topping up your mobile airtime has never been easier – whether you&apos;re on the go or at home. Say goodbye to the hassle of searching for physical recharge cards or dealing with complex codes
                            </p>
                        </div>
                    </div>
  
                    <div className='back absolute flex flex-col justify-between h-full w-full px-8 pt-11 rounded-lg blue2'>
                        <div>
                            <h3 className='text-2xl font-semibold mb-3'>Airtime Top-up</h3>
                            <p className='text-sm md:text-lg'>
                            Now, topping up your mobile airtime has never been easier – whether you&apos;re on the go or at home. Say goodbye to the hassle of searching for physical recharge cards or dealing with complex codes
                            </p>
                        </div>
                        <Image
                            className='place-self-start w-44 h-44 md:w-72 md:h-64'
                            src={airtime}
                            alt='buying airtime on phone'
                        />  
                    </div>
                </div>
  
                {/* card 2 */}
                <div className='card relative h-96 md:h-98 md:w-98'>
                    <div className='front absolute h-full w-full px-8 pt-11 bg-white rounded-lg'>
                        <div>
                            <h3 className='text-2xl font-semibold mb-3'>Data Bundle Top-up</h3>
                            <p className='text-sm md:text-lg'>
                                Experience the convenience of instant data top-ups with Billslink, your go-to VTU and bill payment platform.
                            </p>
                        </div>
                    </div>
  
                    <div className='back absolute flex flex-col justify-between h-full w-full px-8 pt-11 rounded-lg blue2'>
                        <div>
                            <h3 className='text-2xl font-semibold mb-3'>Data Bundle Top-up</h3>
                            <p className='text-sm md:text-lg'>
                                Experience the convenience of instant data top-ups with Billslink, your go-to VTU and bill payment platform.
                            </p>
                        </div>
                        <Image
                            className='place-self-end w-44 h-44 md:w-72 md:h-64'
                            src={data}
                            alt='buying airtime on phone'
                        />  
                    </div>
                </div>      
  
                {/*card 3*/}
                <div className='card relative h-96 md:h-98 md:w-98'>
                    <div className='front absolute h-full w-full px-8 pt-11 bg-white rounded-lg'>
                        <div>
                            <h3 className='text-2xl font-semibold mb-3'>Electricity Bill</h3>
                            <p className='text-sm md:text-lg'>
                                Our user-friendly interface allows you to effortlessly access and pay your electricity bills, putting the power of hassle-free transactions in your hands.
                            </p>
                        </div>
                    </div>
  
                    <div className='back absolute flex flex-col justify-between h-full w-full px-8 pt-11 rounded-lg blue2'>
                        <div>
                            <h3 className='text-2xl font-semibold mb-3'>Electricity Bill</h3>
                            <p className='text-sm md:text-lg'>
                                Our user-friendly interface allows you to effortlessly access and pay your electricity bills, putting the power of hassle-free transactions in your hands.
                            </p>
                        </div>
                        <Image
                            className='place-self-start w-44 h-44 md:w-72 md:h-64'
                            src={bills1}
                            alt='buying airtime on phone'
                        />  
                    </div>
                </div>      
  
                {/* card 4  */}
                <div className='card relative h-96 md:h-98 md:w-98'>
                    <div className='front absolute h-full w-full px-8 pt-11 bg-white rounded-lg'>
                        <div>
                            <h3 className='text-2xl font-semibold mb-3'>TV Subscription</h3>
                            <p className='text-sm md:text-lg'>
                                Our platform seamlessly integrates TV subscription services, allowing you to effortlessly renew and manage your subscriptions with a few clicks.
                            </p>
                        </div>
                    </div>

                    <div className='back absolute flex flex-col justify-between h-full w-full px-8 pt-11 rounded-lg blue2'>
                        <div>
                            <h3 className='text-2xl font-semibold mb-3'>TV Subscription</h3>
                            <p className='text-sm md:text-lg'>
                                Our platform seamlessly integrates TV subscription services, allowing you to effortlessly renew and manage your subscriptions with a few clicks.
                            </p>
                        </div>
                        <Image
                            className='place-self-end w-44 h-44 md:w-72 md:h-64'
                            src={cable}
                            alt='Pay for transactub e on phone'
                        />  
                    </div>
                </div>          
            </div>
        </motion.section>

    );
};

export default Services;