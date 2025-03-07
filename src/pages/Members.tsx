
import { useState, useEffect } from "react";
import { Search, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

type MemberType = {
  id: string;
  name: string;
  department: string;
  designation: string;
  enrolledYear: string;
  image: string;
  linkedinUrl: string;
  type: "executive" | "core" | "member";
};

const SAMPLE_MEMBERS: MemberType[] = [
  {
    id: "1",
    name: "Rajat Aswani",
    department: "Computer Engineering",
    designation: "Webmaster, IEEE SOU SB",
    enrolledYear: "2023",
    image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=1",
    linkedinUrl: "https://linkedin.com/in/rajat-aswani",
    type: "executive"
  },
  {
    id: "2",
    name: "Aryan Patel",
    department: "Electronics Engineering",
    designation: "Chairperson, IEEE SOU SB",
    enrolledYear: "2022",
    image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=2",
    linkedinUrl: "https://linkedin.com/in/",
    type: "executive"
  },
  {
    id: "3",
    name: "Priya Sharma",
    department: "Computer Science",
    designation: "Vice Chair, IEEE SOU SB",
    enrolledYear: "2022",
    image: "https://xsgames.co/randomusers/avatar.php?g=female&seed=3",
    linkedinUrl: "https://linkedin.com/in/",
    type: "executive"
  },
  {
    id: "4",
    name: "Karan Mehta",
    department: "Electrical Engineering",
    designation: "Secretary, IEEE SOU SB",
    enrolledYear: "2022",
    image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=4",
    linkedinUrl: "https://linkedin.com/in/",
    type: "core"
  },
  {
    id: "5",
    name: "Sneha Desai",
    department: "Computer Engineering",
    designation: "Treasurer, IEEE SOU SB",
    enrolledYear: "2022",
    image: "https://xsgames.co/randomusers/avatar.php?g=female&seed=5",
    linkedinUrl: "https://linkedin.com/in/",
    type: "core"
  },
  {
    id: "6",
    name: "Rohan Joshi",
    department: "Electronics & Communication",
    designation: "Technical Head, IEEE SOU SB",
    enrolledYear: "2023",
    image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=6",
    linkedinUrl: "https://linkedin.com/in/",
    type: "core"
  },
  {
    id: "7",
    name: "Neha Singh",
    department: "Information Technology",
    designation: "Event Coordinator, IEEE SOU SB",
    enrolledYear: "2023",
    image: "https://xsgames.co/randomusers/avatar.php?g=female&seed=7",
    linkedinUrl: "https://linkedin.com/in/",
    type: "core"
  },
  {
    id: "8",
    name: "Rahul Kumar",
    department: "Computer Engineering",
    designation: "Member, IEEE SOU SB",
    enrolledYear: "2023",
    image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=8",
    linkedinUrl: "https://linkedin.com/in/",
    type: "member"
  },
  {
    id: "9",
    name: "Anjali Patel",
    department: "Electronics Engineering",
    designation: "Member, IEEE SOU SB",
    enrolledYear: "2023",
    image: "https://xsgames.co/randomusers/avatar.php?g=female&seed=9",
    linkedinUrl: "https://linkedin.com/in/",
    type: "member"
  },
  {
    id: "10",
    name: "Vikram Shah",
    department: "Information Technology",
    designation: "Member, IEEE SOU SB",
    enrolledYear: "2023",
    image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=10",
    linkedinUrl: "https://linkedin.com/in/",
    type: "member"
  }
];

export default function Members() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMembers, setFilteredMembers] = useState<MemberType[]>(SAMPLE_MEMBERS);

  useEffect(() => {
    const filtered = SAMPLE_MEMBERS.filter(member => 
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.designation.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMembers(filtered);
  }, [searchTerm]);

  // Group members by type
  const executiveMembers = filteredMembers.filter(m => m.type === "executive");
  const coreMembers = filteredMembers.filter(m => m.type === "core");
  const regularMembers = filteredMembers.filter(m => m.type === "member");

  const renderMemberSection = (title: string, members: MemberType[]) => {
    if (members.length === 0) return null;
    
    return (
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map(member => (
            <div key={member.id} className="glass rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <a 
                        href={member.linkedinUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="ml-2 text-primary hover:text-primary/80"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                    <Badge variant={member.type === "executive" ? "default" : member.type === "core" ? "secondary" : "outline"} className="mt-1">
                      {member.type === "executive" ? "Executive" : member.type === "core" ? "Core" : "Member"}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Department:</span> {member.department}</p>
                  <p><span className="font-medium">Designation:</span> {member.designation}</p>
                  <p><span className="font-medium">Enrolled:</span> {member.enrolledYear}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Members</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated team behind IEEE SOU Student Branch who are working to create a vibrant technical community.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search members..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="text-sm text-muted-foreground">
              Showing <span className="font-semibold">{filteredMembers.length}</span> members
            </div>
          </div>
          
          {renderMemberSection("Executive Committee", executiveMembers)}
          {renderMemberSection("Core Team", coreMembers)}
          {renderMemberSection("Members", regularMembers)}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
