import Footer from '@/components/footer';
import DownloadApp from '@/components/downloadApp';
import Faq from '@/components/faqs';
import Agent from '@/components/agent';
import GettingStarted from '@/components/gettingStarted';
import Services from '@/components/services';
import Review from '@/components/review';
import HeroSection from '@/components/heroSection';


export default function Home() {
  return (
    <main className='h-screen relative overflow-x-hidden'>
      <HeroSection />
      <Review />  
      <Services /> 
      <GettingStarted />
      <Agent />
      <Faq />
      <DownloadApp />
      <Footer />
    </main>
  )
}
