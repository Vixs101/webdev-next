'use client'
import React, { useState } from "react";
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Faqs = () => {
    const [open, setOpen] = useState(false);
    
    return (
        <div className="w-full md:w-4/5 mb-5">
            {!open ? (
                <div  className='w-full rounded-lg'>
                    <button
                        className='flex justify-between items-center px-7 py-3 gap-5 cursor-pointer w-full textlg md:text-xl font-semibold duration-300 border-2 border-gray-300'
                        onClick={() => setOpen(true)}>
                            Why should I use BillsLink?
                        <FontAwesomeIcon icon={faChevronDown} className='w-5 h-5' />
                    </button>
                </div>
            ) : (
                <div className="w-full rounded-lg blue2">
                    <button
                        className='flex justify-between items-center px-7 py-3 gap-5 cursor-pointer w-full text-lg md:text-xl font-semibold'
                        onClick={() => setOpen(false)}>
                            Why should I use BillsLink?
                        <FontAwesomeIcon icon={faChevronUp} className='w-5 h-5' />
                    </button>
                    <div className='pt-0 pl-5 pr-10 pb-8 '>
                        <p className='leading-6 blue2 w-full text-sm md:text-lg duration-500'>
                            Billslink emerges as the optimal choice for your financial transactions, seamlessly combining efficiency, security, and user-friendly excellence. With Billslink, you gain access to a comprehensive platform that simplifies VTU top-ups and bill payments, ensuring a hassle-free experience at every step.
                        </p>
                    </div>
                </div>
                
            )
            }               
        </div>
    );
};


export default Faqs;