
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const DEPARTMENTS = [
  "Computer Engineering",
  "Information Technology",
  "Electronics & Communication",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Chemical Engineering",
  "Other"
];

const SEMESTERS = ["1", "2", "3", "4", "5", "6", "7", "8"];

export default function Join() {
  const [showNotification, setShowNotification] = useState(true);
  
  useEffect(() => {
    // Show notification when component mounts
    if (showNotification) {
      toast.info(
        "Join IEEE form is inactive, kindly reach us at Apple Lab, B-120 for IEEE membership", 
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
    // Form is inactive, just show the toast again
    toast.info("Join IEEE form is inactive, kindly reach us at Apple Lab, B-120 for IEEE membership", {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join IEEE SOU SB</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get access to cutting-edge information, networking opportunities, career enhancement, and other exclusive member benefits.
            </p>
          </div>
          
          <div className="glass rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
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
                  <Label htmlFor="college">College</Label>
                  <Input id="college" defaultValue="Silver Oak University" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="enrollmentNo">Enrollment Number</Label>
                  <Input id="enrollmentNo" placeholder="Your college enrollment number" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      {DEPARTMENTS.map(dept => (
                        <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="semester">Semester</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select semester" />
                    </SelectTrigger>
                    <SelectContent>
                      {SEMESTERS.map(sem => (
                        <SelectItem key={sem} value={sem}>{sem}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="interests">Technical Interests</Label>
                <Input id="interests" placeholder="e.g., Artificial Intelligence, IoT, Web Development" />
              </div>
              
              <div className="pt-4">
                <Button type="submit" className="w-full">Submit Application</Button>
              </div>
            </form>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Membership Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Technical Development</h3>
                <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                  <li>Access to cutting-edge technical publications and research</li>
                  <li>Workshops and hands-on sessions on emerging technologies</li>
                  <li>Mentorship from industry professionals and academic experts</li>
                </ul>
              </div>
              
              <div className="glass rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Networking Opportunities</h3>
                <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                  <li>Connect with like-minded students from various institutions</li>
                  <li>Meet and learn from industry leaders and professionals</li>
                  <li>Build relationships that can last throughout your career</li>
                </ul>
              </div>
              
              <div className="glass rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Career Enhancement</h3>
                <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                  <li>Leadership and soft skills development through various roles</li>
                  <li>Resume building through participation in IEEE activities</li>
                  <li>Internship and job opportunities through IEEE network</li>
                </ul>
              </div>
              
              <div className="glass rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Personal Growth</h3>
                <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                  <li>Develop confidence through presentations and public speaking</li>
                  <li>Enhance organizational skills by participating in event planning</li>
                  <li>Cultivate a global mindset through IEEE's international network</li>
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
