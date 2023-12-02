import React from "react";
import { inView, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import bills from '../public/images/bills.png';
import transaction from '../public/images/transaction.png';
import user from '../public/images/user.png';
import secure from '../public/images/secure.png';

const Review = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };
    
      useEffect(() => {
        if(inView) { }
        // Add a delay before starting the animation
        const delayTimeout = setTimeout(() => {
        }, 30);
    
        // Clear the timeout to avoid memory leaks
        return () => clearTimeout(delayTimeout);
      }, [inView]);

    return (
        <section>
        {/* reviews */}
            <motion.ul
                initial="hidden"
                animate={'visible'}
                variants={variants}
                transition={{duration: 0.8}}
                className='grid grid-cols-2 grid-rows-2 md:flex w-full text-sm md:text-2xl gap-5 md:gap-14 lg:gap-36 mt-10 px-5 md:px-14  flex-wrap md:flex-nowrap'>
                <li className='text-xs md:text-sm pt-3 md:pt-0 w-36 md:w-auto'>Trusted by more than <span className='blue1 font-semibold'>1000+</span> active users across the country</li>
                <li className='flex gap-2 m-auto md:m-0 md:gap-4'>
                    <span className='blue1 text-4xl md:text-5xl font-semibold'>1k</span>
                    <span className='w-5 text-xs md:text-sm'>User Ratings</span>  
                </li>
                <li className='flex gap-2 w-36 md:w-auto md:gap-4'>
                    <span className='blue1 text-4xl md:text-5xl font-semibold'>20k</span>
                    <span className='text-xs md:text-sm'>Successful Transactions</span>
                </li>
                <li className='flex gap-2 m-auto md:m-0 md:gap-4'>
                    <span className='blue1 text-4xl md:text-5xl font-semibold'>90%</span>
                    <span className='text-xs md:text-sm leading-5 w-26'>Satisfied and Happy Clients</span>
                </li>
            </motion.ul>
  
            <motion.div
                ref={ref}
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
                variants={variants}
                transition={{duration: 0.8}}

                className='text-center mt-20 md:mt-28'>
                <h1 className='text-2xl md:text-5xl font-semibold md:mb-5'>Why Choose <span className='blue1'>BillsLink</span></h1>
                <p className='text-sm md:text-lg'>Your top payment platform with reliable user-service experience</p>
            </motion.div>
  
            {/* cards */}
            <div 
                className="grid md:grid-cols-2 md:grid-rows-2 gap-5 px-5 md:px-14 mt-10">
                {/* card1 */}
                <motion.div
                    ref={ref}
                    initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={variants}
                    transition={{duration: 0.8}}
                    className="flex items-center gap-4 bg-gray-200 h-80 w-97 px-3 py-9 md:px-5 md:py-14">
                    <Image
                        className=' w-10 h-10 md:w-16 md:h-16'
                        src={bills}
                        alt='Bills icon'
                    />
                    <div>
                        <h3 className='text-xl font-semibold mb-3'>Pay bills on the go</h3>
                        <p className='text-sm md:text-lg'>Experience unparalleled convenience with Billslink&apos;s &apos;Pay Bills on the Go&apos; feature, allowing you to effortlessly manage and settle your bills anytime, anywhere. Enjoy the freedom to stay on top of your financial commitments without being tied to a desk or burdened by paperwork.
                        </p>
                    </div>
                </motion.div>
  
                {/* card2 */}
                <div className="flex items-center gap-4 bg-gray-200 h-80 w-97 px-5 py-14">
                    <Image
                        className=' w-10 h-10 md:w-16 md:h-16'
                        src={transaction}
                        alt='transaction icon'
                    />
                    <div>
                        <h3 className='text-xl font-semibold mb-3'>Seamless Transaction</h3>
                        <p className='text-sm md:text-lg'>At Billslink, we prioritize delivering a seamless transaction experience that sets us apart. Our platform is meticulously designed to ensure that every transaction, whether it&apos;s a VTU top-up or a bill payment, is executed effortlessly. From a user-friendly interface to a streamlined process.
                        </p>
                    </div>
                </div>
  
                {/* card3 */}
                <div className="flex items-center gap-4 bg-gray-200 h-80 w-97 px-5 py-14">
                    <Image
                        className='w-10 h-10 md:w-16 md:h-16'
                        src={secure}
                        alt='security icon'
                    />
                    <div>
                        <h3 className='text-xl font-semibold mb-3'>Swift and Secure</h3>
                        <p className='text-sm md:text-lg'>Our platform is engineered to ensure rapid transactions without compromising on safety. With cutting-edge technology and robust security measures in place, we guarantee that your financial information remains confidential and protected. Enjoy the efficiency of swift transactions on Billslink.
                        </p>
                    </div>
                </div>
  
                {/* card4 */}
                <div className="flex items-center gap-4 bg-gray-200 h-80 w-97 px-5 py-14">
                    <Image
                        className='w-10 h-10 md:w-16 md:h-16'
                        src={user}
                        alt='Bills icon'
                    />
                    <div>
                        <h3 className='text-xl font-semibold mb-3'>User-Friendly Excellence</h3>
                        <p className='text-sm md:text-lg'>Navigating through our intuitive interface is designed to be effortless, ensuring that users of all backgrounds can easily access and utilize our services. Choose Billslink for a user-friendly experience that combines efficiency with ease, redefining how you manage your VTU and bills payments.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Review;