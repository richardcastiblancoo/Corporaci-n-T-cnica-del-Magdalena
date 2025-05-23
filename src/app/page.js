import Header from '../components/Header';
import Careers from '../components/Careers';
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
      </main>
      <Footer />
    </>
  );
}
