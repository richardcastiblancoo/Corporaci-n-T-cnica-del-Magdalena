import Header from '../components/Header';
import Careers from '../components/Careers';
import Services from '../components/Services';
import Practices from '@/components/Practices';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>

      <main className="relative">
      <Header />
        <div className="w-full h-[955px] relative">
          <Image 
            src="/images/about-v1.png"
            alt="About image"
            fill
            priority
            className="object-cover"
          />
        </div>
        <Careers />
        <Services />
        <Practices />
      </main>
      <Footer />
    </>
  );
}
