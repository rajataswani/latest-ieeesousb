
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export default function FounderMessage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    if (elements) {
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (elements) {
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="section-container" 
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold mb-4">
            A Message From Our Founder
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6 animate-on-scroll" />
        </div>

        <div className="animate-on-scroll">
          <div className={cn(
            "relative p-6 md:p-8 glass rounded-2xl overflow-hidden",
            "bg-ieee-blue/5 dark:bg-ieee-blue/10 border border-ieee-blue/20",
            "shadow-md hover:shadow-lg transition-all duration-300"
          )}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center md:justify-end">
                <img 
                  src="http://ieee.socet.edu.in/wp-content/uploads/2025/03/satviksir.jpg"
                  alt="Dr. Satvik Khara"
                  className="rounded-lg shadow-md max-w-[240px] h-auto"
                />
              </div>
              
              <div className="relative z-10">
                <blockquote className="text-lg italic mb-6 text-balance">
                  "My message to everyone thinking about joining Silver Oak University IEEE SB would be
                  that here you will get 360° development. You will be technically updated with various
                  new inventions and researches emerging all around the world, build a strong network
                  with other students as well as experts all around the world, you will have good
                  opportunities for your career options, by <strong>attending various seminar and
                  conferences</strong> you can build up your confidence and increase and nurture all around
                  development."
                </blockquote>
                <div className="text-right">
                  <p className="font-semibold text-lg">Dr. Satvik Khara</p>
                  <p className="text-muted-foreground">Head, Department of Computer Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
