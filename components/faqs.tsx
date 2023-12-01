import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

const Faq = () => {
    return (
        <section className='flex flex-col items-center justify-center px-5' id='faq'>
            <div className='mt-28 text-center  md:w-101'>
                <h1 className='text-2xl md:text-5xl font-semibold mb-2 md:mb-3'>Frequently Asked Questions</h1>
                <p className='text-sm md:text-lg'>Want to know more about our services? Our FAQs section is here to help you with useful information about us.</p>
            </div>
            {/* faq */}     
            <div className='w-full md:w-4/5 mt-10 rounded-lg active'>
                <button
                    className='flex justify-between items-center px-7 py-3 gap-5 cursor-pointer w-full text-xl font-semibold duration-300'>
                    Why should I use BillsLink?
                    <FontAwesomeIcon icon={faChevronDown} className='w-5 h-5' />
                </button>
                <div className='pt-0 pl-5 pr-10 pb-8'>
                    <p className='leading-6 blue2 w-full text-sm md:text-lg'>
                        Billslink emerges as the optimal choice for your financial transactions, seamlessly combining efficiency, security, and user-friendly excellence. With Billslink, you gain access to a comprehensive platform that simplifies VTU top-ups and bill payments, ensuring a hassle-free experience at every step.
                    </p>
                </div>
            </div>
            {/* more faq */}
            <div className='w-full md:w-4/5 mt-5 rounded-lg'>
                <button
                    className='flex justify-between items-center px-7 py-3 gap-5 cursor-pointer w-full text-lg md:text-xl font-semibold duration-300 border-2 border-gray-300'>
                    Why should I use BillsLink?
                    <FontAwesomeIcon icon={faChevronDown} className='w-5 h-5' />
                </button>
            </div>
  
            <div className='w-full md:w-4/5 mt-5 rounded-lg'>
                <button
                    className='flex justify-between items-center px-7 py-3 gap-5 cursor-pointer w-full text-lg md:text-xl font-semibold duration-300 border-2 border-gray-300'>
                    Why should I use BillsLink?
                    <FontAwesomeIcon icon={faChevronDown} className='w-5 h-5' />
                </button>
            </div>
            <div className='w-full md:w-4/5 mt-5 rounded-lg'>
                <button
                    className='flex justify-between items-center px-7 py-3 gap-5 cursor-pointer w-full text-lg md:text-xl font-semibold duration-300 border-2 border-gray-300'>
                    Why should I use BillsLink?
                    <FontAwesomeIcon icon={faChevronDown} className='w-5 h-5' />
                </button>
            </div>
            <div className='w-full md:w-4/5 mt-5 rounded-lg'>
                <button
                    className='flex justify-between items-center px-7 py-3 gap-5 cursor-pointer w-full text-lg md:text-xl font-semibold duration-300 border-2 border-gray-300'>
                    Why should I use BillsLink?
                    <FontAwesomeIcon icon={faChevronDown} className='w-5 h-5' />
                </button>
            </div>
            <div className='w-full md:w-4/5 mt-5 rounded-lg'>
                <button
                    className='flex justify-between items-center px-7 py-3 gap-5 cursor-pointer w-full text-lg md:text-xl font-semibold duration-300 border-2 border-gray-300'>
                    Why should I use BillsLink?
                    <FontAwesomeIcon icon={faChevronDown} className='w-5 h-5' />
                </button>
            </div>
            <div className='w-full md:w-4/5 mt-5 rounded-lg'>
                <button
                    className='flex justify-between items-center px-7 py-3 gap-5 cursor-pointer w-full text-lg md:text-xl font-semibold duration-300 border-2 border-gray-300'>
                    Why should I use BillsLink?
                <FontAwesomeIcon icon={faChevronDown} className='w-5 h-5' />
                </button>
            </div>
            <div className='w-full md:w-4/5 mt-5 rounded-lg'>
                <button
                    className='flex justify-between items-center px-7 py-3 gap-5 cursor-pointer w-full text-lg md:text-xl font-semibold duration-300 border-2 border-gray-300'>
                    Why should I use BillsLink?
                    <FontAwesomeIcon icon={faChevronDown} className='w-5 h-5' />
                </button>
            </div>
        
            {/* get in touch with us */}
            <div className='flex gap-5 mt-8 px-7 py-3 items-center justify-between bg-white duration-500  rounded-lg blue1 font-semibold' id='contact'>
                <button>
                    Still have questions? Get in touch with us
                </button>
                <FontAwesomeIcon icon={faArrowRight} className='w-5 h-5' />        
            </div>
        </section>
    );
};

export default Faq;