
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import WhyJoinSection from "@/components/WhyJoinSection";
import CountUpSection from "@/components/CountUpSection";
import FounderMessage from "@/components/FounderMessage";
import EventsSection from "@/components/EventsSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Index() {
  useEffect(() => {
    // Smooth scroll to element when hash is in URL
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    // Animate on-load elements
    const animateOnLoadElements = document.querySelectorAll(".animate-on-load");
    setTimeout(() => {
      animateOnLoadElements.forEach((el) => {
        el.classList.add("animated");
      });
    }, 100);

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <WhyJoinSection />
        <CountUpSection />
        <FounderMessage />
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
}
