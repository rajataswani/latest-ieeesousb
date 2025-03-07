
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Contact() {
  const [showNotification, setShowNotification] = useState(true);
  
  useEffect(() => {
    // Show notification when component mounts
    if (showNotification) {
      toast.info(
        "Contact us form is inactive, kindly reach us at Apple Lab, B-120 for any queries", 
        {
          duration: 5000,
          style: {
            fontSize: "1rem",
            padding: "1rem",
            backgroundColor: "var(--primary)",
            color: "white",
          },
          onDismiss: () => setShowNotification(false)
        }
      );
    }
    
    // Auto hide notification after 4 seconds
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Contact us form is inactive, kindly reach us at Apple Lab, B-120 for any queries", {
      style: {
        fontSize: "1rem",
        padding: "1rem",
        backgroundColor: "var(--primary)",
        color: "white",
      }
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to know more about our IEEE SOU SB? Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass rounded-lg p-8 flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="Your phone number" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" rows={4} />
                </div>
                
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
            
            <div className="space-y-6">
              <div className="glass rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Visit Us</h3>
                <p className="text-muted-foreground">
                  352,353 A, Nr. Bhavik Publications, Opp. Bhagwat Vidyapith, S.G.Highway,
                  Ahmedabad, Gujarat - 382481
                </p>
                
                <div className="mt-4 aspect-video w-full rounded-md overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8794266384166!2d72.5171118!3d22.9888346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9aee6e5a940f%3A0x85070254cd47f10a!2sSilver%20Oak%20University!5e0!3m2!1sen!2sin!4v1654321234567!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Silver Oak University Map"
                  ></iframe>
                </div>
              </div>
              
              <div className="glass rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span className="font-medium">Email:</span>{" "}
                    <a href="mailto:aswanirajat@gmail.com" className="hover:text-primary transition-colors">
                      aswanirajat@gmail.com
                    </a>
                  </li>
                  <li>
                    <span className="font-medium">Phone:</span> +91 07966046304
                  </li>
                  <li>
                    <span className="font-medium">Location:</span> Apple Lab, B-120, Silver Oak University
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
