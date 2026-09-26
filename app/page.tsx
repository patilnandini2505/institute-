import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhereHeaded from '../components/WhereHeaded';
import ChooseHow from '../components/ChooseHow';
import WhyLearnWithUs from '../components/WhyLearnWithUs';
import CourseSection from '../components/CourseSection';
import InstructorsSection from '../components/InstructorsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

export default function Page() { 
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhereHeaded />
        <ChooseHow />
        <WhyLearnWithUs />
        <CourseSection />
        <InstructorsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  ); 
}
