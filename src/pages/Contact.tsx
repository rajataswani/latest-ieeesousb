
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
    // Form is inactive, just show the toast again
    toast.info("Contact us form is inactive, kindly reach us at Apple Lab, B-120 for any queries");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions or want to learn more about IEEE SOU Student Branch? Get in touch with us!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              
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
                  <Textarea id="message" placeholder="Your message" rows={4} />
                </div>
                
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Other ways to reach us</h2>
              
              <div className="glass rounded-lg p-8 mb-6">
                <h3 className="text-xl font-semibold mb-4">Visit us</h3>
                <p className="text-muted-foreground mb-4">
                  Apple Lab, B-120<br />
                  Silver Oak University<br />
                  352,353 A, Nr. Bhavik Publications, Opp. Bhagwat Vidyapith<br />
                  S.G.Highway, Ahmedabad, Gujarat - 382481
                </p>
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  {/* Embed Google Maps iframe here */}
                  <div className="w-full h-full flex items-center justify-center bg-muted">
                    <p className="text-muted-foreground">Map Placeholder</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <a href="mailto:aswanirajat@gmail.com" className="text-primary hover:underline">
                    aswanirajat@gmail.com
                  </a>
                </div>
                
                <div className="glass rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <a href="tel:+91 07966046304" className="text-primary hover:underline">
                    +91 07966046304
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
