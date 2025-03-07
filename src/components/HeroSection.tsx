
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroElements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    if (heroElements) {
      heroElements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (heroElements) {
        heroElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById("why-join-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/5 to-background"></div>
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto text-center">
        <h1 className="animate-on-scroll text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Welcome to <span className="text-primary">Silver Oak University IEEE Student Branch</span>
        </h1>
        <p className="animate-on-scroll text-lg md:text-xl mb-8 max-w-3xl mx-auto text-muted-foreground text-balance">
          Advancing Technology for Humanity through 360° development - 180° inner and 180° outer.
          Join us to explore technology, innovation, and leadership.
        </p>
        <div className="animate-on-scroll flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button size="lg" asChild>
            <a href="#why-join-section">Discover More</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/events">Upcoming Events</a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={scrollToNext}
          className="rounded-full"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
