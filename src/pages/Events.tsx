
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Event } from "@/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
  },
  {
    id: "4",
    title: "Hackathon: Build for Tomorrow",
    description: "A 24-hour coding challenge to build innovative solutions for real-world problems.",
    date: "July 10, 2023",
    time: "9:00 AM - 9:00 AM (Next day)",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    link: "https://example.com/event4"
  },
  {
    id: "5",
    title: "IoT Workshop Series",
    description: "A hands-on workshop on Internet of Things with practical project implementation.",
    date: "August 5, 2023",
    time: "10:00 AM - 4:00 PM",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=600&q=80",
    link: "https://example.com/event5"
  },
  {
    id: "6",
    title: "Tech Talk: Future of Cybersecurity",
    description: "Join industry experts for a discussion on the future landscape of cybersecurity.",
    date: "September 15, 2023",
    time: "3:00 PM - 5:00 PM",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80",
    link: "https://example.com/event6"
  },
];

export default function Events() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(SAMPLE_EVENTS);

  useEffect(() => {
    const filtered = SAMPLE_EVENTS.filter(event => 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(filtered);
  }, [searchTerm]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our upcoming and past events, workshops, and conferences designed to enhance your technical knowledge and professional network.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search events..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="text-sm text-muted-foreground">
              Showing <span className="font-semibold">{filteredEvents.length}</span> events
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div key={event.id} className="glass rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 line-clamp-1">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{event.date} • {event.time}</p>
                  <p className="text-sm mb-4 line-clamp-2">{event.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium">Speakers:</span> Dr. John Doe, Prof. Jane Smith
                  </p>
                  <Button size="sm" asChild>
                    <a href={event.link} target="_blank" rel="noopener noreferrer">Read More</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
