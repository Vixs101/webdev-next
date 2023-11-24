import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import logo from '../public/images/logo.png';
import google from '../public/images/googleplay.png';
import apple from '../public/images/applestore.png';
import phones from '../public/images/phones.png';
import bills from '../public/images/bills.png';
import transaction from '../public/images/transaction.png';
import user from '../public/images/user.png';
import secure from '../public/images/secure.png';
import download from '../public/images/download.png';
import signup from '../public/images/signup.png';
import fund from '../public/images/fundwallet.png';
import gettingstarted from '../public/images/gettingStarted.png';
import agent from '../public/images/agent.png';
import getInTouch from '../public/images/getintouch.png';
import facebook from '../public/images/facebook.png';
import twitter from '../public/images/twitter.png';
import insta from '../public/images/insta.png';
import linkedin from '../public/images/linkedin.png';
import airtime from '../public/images/airtime.png';
import data from '../public/images/data.png';
import bills1 from '../public/images/bills1.png';
import cable from '../public/images/cable.png';



export default function Home() {
  return (
  <main className='h-screen relative'>
    {/* hero section */}
    <section className='flex flex-col gap-20 md:gap-0 justify-between px-5 md:px-14  w-full h-3/5 md:h-99 bg-cover bg-center' style={{backgroundImage:"url(/images/herosection.png)"}}>
      {/* nav bar */}
      <nav className='pt-9 flex md:items-center md:justify-between '>
      <div className='flex items-center justify-between w-full md:w-8'>
          <span className='cursor-pointer'>
            <Image 
              src={logo} 
              alt='Logo'
            />
          </span>
          <FontAwesomeIcon icon={faBars} className='w-9 h-9 text-white md:hidden' />
        </div>

        {/* navs */}  
        {/* i was supposed to use js to make the links appear onclick but i had issues with importing it which is part of the main reasons why i didn't breakdown the page into componenst cos when i tried importing i get an issue about client and server rendering.
        same thing with the frequently asked question section */}
        <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 
        md:w-auto md:opacity-100 opacity-0 top-[-400px] transition-all ease-out duration-700 md:text-sm lg:text-lg'>

          <li className='mx-4 my-5 md:my-0 text-white font-semibold hover:border-b-2 hover:border-white'>
            <a href="http://" target="" rel="noopener noreferrer">
              Home</a>
          </li>
          <li className='mx-4 my-5 md:my-0 text-white font-semibold hover:border-b-2 hover:border-white'>
            <a href="#services">
              Our Services
              </a>
          </li>
          <li className='mx-4 my-5 md:my-0 text-white font-semibold hover:border-b-2 hover:border-white'>
            <a href="#agent">
              Become An Agent
              </a>
          </li>
          <li className='mx-4 my-5 md:my-0 text-white font-semibold hover:border-b-2 hover:border-white'>
            <a href="#faq">
              FAQ
              </a>
          </li>
          <li className='mx-4 my-5 md:my-0 text-white font-semibold hover:border-b-2 hover:border-white'>
            <a href="#contact">
              Contact Us
              </a>
          </li>
        </ul>

        <div className='hidden md:flex px-7 py-3 items-center justify-between bg-white w-52 duration-500  rounded-lg blue1 font-semibold'>
          <button>
            Download App 
          </button>
          <FontAwesomeIcon icon={faArrowRight} className='w-5 h-5' />        
        </div>
      </nav>
      {/* hero text and image */}

      <div className='flex justify-between gap-5 md:gap-28 mt-5 md:mt-24 '
           style={{height: '69.886%'}}>
        {/* hero text */}
        <div className='text-white md:mt-10 leading-6 '>
          <h1 className='text-sm md:text-2xl lg:text-4xl xl:text-5xl font-bold '>
            Manage and Pay Your Bills, All From One Place!
          </h1>
          <p className='md:leading-6 text-xs md:text-sm lg:text-base mt-3 md:mt-0'>
            Your Trusted VTU and Bill Payment Platform for Quick & Seamless Transactions. Anywhere, Anytime!
          </p>

          <div className='flex gap-3 md:gap-7 md:mt-10 mt-3'>
            <Image 
              className='w-1/2 md:w-36 md:h-12'
              src={google} 
              alt='google playstore'
            />
            <Image 
              className='w-1/2 md:w-36 md:h-12'
              src={apple} 
              alt='apple store'
            />
          </div>
        </div>
        {/* hero image */}
        <Image 
              className=' h-48 w-44  md:h-full md:w-1/2 '
              src={phones} 
              alt='phones'
            />
      </div>
    </section>

    {/* review section */}
    <section>
      {/* reviews */}
      <ul className='grid grid-cols-2 grid-rows-2  md:flex w-full text-sm md:text-2xl gap-5 md:gap-36 mt-10 px-5 md:px-14  flex-wrap md:flex-nowrap'>
        <li className='text-xs md:text-sm  w-36 md:w-auto'>Trusted by more than <span className='blue1 font-semibold'>1000+</span> active users across the country</li>
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
          <span className='text-xs md:text-sm leading-5 w-28'>Satisfied and Happy Clients</span>
        </li>
      </ul>

      <div className='text-center mt-5 md:mt-28'>
        <h1 className='text-2xl md:text-5xl font-semibold md:mb-5'>Why Choose <span className='blue1'>BillsLink</span></h1>
        <p className='text-sm md:text-lg'>Your top payment platform with reliable user-service experience</p>
      </div>

      {/* cards */}
      <div className="grid md:grid-cols-2 md:grid-rows-2 gap-5 px-5 md:px-14 mt-10">

        {/* card1 */}
        <div className="flex items-center gap-4 bg-gray-200 h-80 w-97 px-3 py-9 md:px-5 md:py-14">
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
        </div>

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

    {/* services section */}
    <section className='blue3 pb-5' id='services'>
      <div className='text-center pt-5 mt-10 md:mt-28'>
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
                className='place-self-end w-44 h-44 md:w-72 md:h-64'
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
                className='place-self-end w-44 h-44 md:w-72 md:h-64'
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
    </section>

    {/* getting started section */}
    <section className='flex flex-col md:flex-row items-center justify-between px-5 md:px-14 mt-10'>
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
            className=' w-16 h-16'
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
            className=' w-16 h-16'
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
    </section>

    {/* agent section */}
    <section className='px-5 md:px-14 pt-3 md:pt-10 mt-3 md:mt-10' id='agent'>
      <div className='flex flex-col gap-5 md:gap-0 md:flex-row items-center justify-between blue2 rounded-lg pl-5 md:pl-20 pr-10 md:pr-36 pt-5 pb-5 md:pt-32 md:pb-0'>
        <div className=' '>
          <Image
            className='h-64 md:h-96 w-44 md:w-full '
            src={agent}
            alt='agent section mockup'
         />
        </div>
        <div className=' md:w-2/4 text-center md:text-left '>
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
    </section>

    {/* frequently asked questions */}
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
      <div className='w-full md:w-4/5 mt-10 rounded-lg'>
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

    {/* download the bills app section */}
    <section className='px-5 md:px-14 mt-10'>
      {/* download */}
      <div className='flex flex-col md:flex-row gap-5 items-center md:justify-between px-10 pt-12 rounded-xl blue3 w-full'>
        <div className='flex flex-col gap-5 md:gap-10 h-64 md:h-96 md:w-1/2'>
          {/* texts section */}
          <a href="" className='blue1 font-semibold'>Download The BillsLink App </a>

          <h1 className='text-xl md:text-4xl font-semibold md:leading-12'>
            Join The New Billing & VTU Platform For Seamless Transactions
          </h1>

          <div className='flex gap-7'>
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
      <div className='flex flex-col md:flex-row items-center justify-between mt-10 md:mt-20 w-full'>
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
      </div>
    </section>

    {/* footer */}
    <footer className='w-full  px-14 pt-14 mt-20 text-white footer'>
      <div className='gap-5 flex-wrap md:flex-nowrap flex justify-between'>
        <Image
          className=' w-8 h-10'
          src={logo}
          alt='logo'
         />

        <ul className='flex flex-col gap-1 md:gap-3'>
         <li className='font-semibold text-lg md:text-xl'>Services</li>
         <li className='text-sm md:text-lg leading-1 md:leading-none'><a>Airtime Top-up</a></li>
         <li className='text-sm md:text-lg leading-1 md:leading-none'><a>Data Bundles</a></li>
         <li className='text-sm md:text-lg leading-1 md:leading-none'><a>Utility Bill Payments</a></li>
         <li className='text-sm md:text-lg leading-1 md:leading-none'><a>Education Bill Payment</a></li>
         <li className='text-sm md:text-lg leading-1 md:leading-none'><a>TV subscriptions</a></li>
         <li className='text-sm md:text-lg leading-1 md:leading-none'><a>User Gifting</a></li>
        </ul>

        <ul className='flex flex-col gap-1 md:gap-3'>
         <li className='font-semibold text-lg md:text-xl'>Company</li>
         <li className='text-sm md:text-lg leading-1 md:leading-none'><a>About Us</a></li>
         <li className='text-sm md:text-lg leading-1 md:leading-none'><a>FAQs</a></li>
         <li className='text-sm md:text-lg leading-1 md:leading-none'><a>Contact Info</a></li>
        </ul>

        <ul className='flex flex-col sm:ml-16 md:ml-0 gap-1 md:gap-3'>
         <li className='font-semibold text-lg md:text-xl'>Legal</li>
         <li className='text-sm md:text-lg leading-1 md:leading-none'><a>Privacy Policy</a></li>
         <li className='text-sm md:text-lg leading-1 md:leading-none'><a>Terms & Conditions</a></li>
         <li className='text-sm md:text-lg leading-1 md:leading-none'><a>Security</a></li>
        </ul>

        <div className='flex flex-col sm:ml-16 md:ml-0 gap-5'>
          <div className='flex gap-3 mt-2'>
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
      <p className='my-5'>&copy; 2023. BillsLink. All rights reserved</p>
    </footer>
  </main>
  )
}
