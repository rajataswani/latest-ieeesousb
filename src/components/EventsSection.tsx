
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Event } from "@/types";

const SAMPLE_EVENTS: Event[] = [
  {
    id: "1",
    title: "Technical Workshop on AI",
    description: "Learn about the fundamentals of Artificial Intelligence and its applications in today's world.",
    date: "May 15, 2023",
    time: "10:00 AM - 12:00 PM",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",
    link: "https://example.com/event1"
  },
  {
    id: "2",
    title: "IEEE Day Celebration",
    description: "Join us for the celebration of IEEE Day with exciting activities and networking opportunities.",
    date: "October 4, 2023",
    time: "2:00 PM - 5:00 PM",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    link: "https://example.com/event2"
  },
  {
    id: "3",
    title: "Webinar on Quantum Computing",
    description: "Discover the future of computing with leading experts in the field of quantum computing.",
    date: "June 22, 2023",
    time: "11:00 AM - 1:00 PM",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    link: "https://example.com/event3"
  }
];

export default function EventsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
      <div className="text-center mb-12">
        <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold mb-4">
          Upcoming Events
        </h2>
        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6 animate-on-scroll" />
      </div>

      <div 
        ref={scrollContainerRef}
        className="animate-on-scroll flex overflow-x-auto gap-6 pb-8 -mx-4 px-4 snap-x snap-mandatory scrollbar-none"
      >
        {SAMPLE_EVENTS.map((event) => (
          <div 
            key={event.id}
            className="min-w-[320px] md:min-w-[400px] flex-none snap-center glass rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <div className="flex items-center text-sm text-muted-foreground mb-1">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <Clock className="h-4 w-4 mr-2" />
                <span>{event.time}</span>
              </div>
              <p className="mb-4 text-sm line-clamp-2">{event.description}</p>
              <Button 
                variant="ghost" 
                className="group text-primary p-0 h-auto" 
                asChild
              >
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button asChild>
          <a href="/events">View All Events</a>
        </Button>
      </div>
    </div>
  );
}
