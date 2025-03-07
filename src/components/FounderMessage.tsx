
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
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold mb-4">
            A Message From Our Founder
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6 animate-on-scroll" />
        </div>

        <div className={cn(
          "animate-on-scroll relative p-8 md:p-10 glass rounded-2xl",
          "before:content-[''] before:absolute before:-left-3 before:-top-3",
          "before:w-16 before:h-16 before:bg-primary/10 before:rounded-full before:z-0"
        )}>
          <div className="relative z-10">
            <blockquote className="text-lg md:text-xl italic mb-6 text-balance">
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
  );
}
