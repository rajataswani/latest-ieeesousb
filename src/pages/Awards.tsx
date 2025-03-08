import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Award = {
  id: string;
  title: string;
  description: string;
  image: string;
  year: string;
};

const BRANCH_AWARDS: Award[] = [
  {
    id: "b1",
    title: "IEEE R10 SAC Outstanding Student Branch Award",
    description: "We are immensely proud to announce that Silver Oak University IEEE Student Branch, taking the legacy ahead, has received the award of \"IEEE R10 SAC Outstanding Student Branch 2021\" at IEEE Sparklers International SB 2021 consisting of over 1644 Student Branches. The Award is most prestigious for any Student Branch at the Regional Level.",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=600&q=80",
    year: "2021"
  },
  {
    id: "b2",
    title: "Best Student Branch Award - Gujarat Section",
    description: "Silver Oak University IEEE Student Branch was honored with the Best Student Branch Award by IEEE Gujarat Section for outstanding activities, membership growth, and innovative initiatives throughout the year.",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=600&q=80",
    year: "2022"
  },
  {
    id: "b3",
    title: "Exemplary Student Branch Award",
    description: "The IEEE SOU SB received the Exemplary Student Branch Award for its exceptional contribution to the development of technical skills and professional growth of its members through various activities.",
    image: "https://images.unsplash.com/photo-1569389397653-c04fe624e663?auto=format&fit=crop&w=600&q=80",
    year: "2022"
  },
  {
    id: "b4",
    title: "Outstanding Membership Recruitment Award",
    description: "Our Student Branch was recognized for exceptional growth in membership, demonstrating effective strategies for engaging and recruiting student members to be a part of the IEEE community.",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=600&q=80",
    year: "2023"
  },
  {
    id: "b5",
    title: "Technical Activities Excellence Award",
    description: "The IEEE SOU SB was awarded for organizing high-quality technical workshops, seminars, and hands-on sessions that helped students develop practical skills and knowledge in emerging technologies.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    year: "2023"
  }
];

const STUDENT_AWARDS: Award[] = [
  {
    id: "s1",
    title: "IEEE Young Professionals Award",
    description: "Our student Aryan Patel received the IEEE Young Professionals Award for his exceptional technical contributions and leadership in organizing impactful events within the student branch.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    year: "2022"
  },
  {
    id: "s2",
    title: "Outstanding Student Volunteer Award",
    description: "Priya Sharma was recognized with the Outstanding Student Volunteer Award for her dedication, commitment, and significant contributions to the IEEE SOU Student Branch activities.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    year: "2023"
  },
  {
    id: "s3",
    title: "Technical Paper Presentation Award",
    description: "Karan Mehta won the first prize in the Technical Paper Presentation competition at the IEEE R10 Student Congress for his innovative research work on sustainable energy solutions.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    year: "2023"
  },
  {
    id: "s4",
    title: "IEEE Leadership Award",
    description: "Sneha Desai was honored with the IEEE Leadership Award for demonstrating exceptional leadership qualities in managing and growing the IEEE Student Branch activities at Silver Oak University.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    year: "2022"
  }
];

export default function Awards() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Awards & Achievements</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating the accomplishments of our IEEE SOU Student Branch and its members in recognition of their hard work and dedication.
            </p>
          </div>
          
          <Tabs defaultValue="branch" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="branch">Branch Achievements</TabsTrigger>
              <TabsTrigger value="student">Student Achievements</TabsTrigger>
            </TabsList>
            
            <TabsContent value="branch">
              <div className="space-y-8">
                {BRANCH_AWARDS.map(award => (
                  <div key={award.id} className="glass rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 h-60">
                        <img 
                          src={award.image} 
                          alt={award.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl md:text-2xl font-bold">{award.title}</h3>
                          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {award.year}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{award.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="student">
              <div className="space-y-8">
                {STUDENT_AWARDS.map(award => (
                  <div key={award.id} className="glass rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 h-60">
                        <img 
                          src={award.image} 
                          alt={award.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl md:text-2xl font-bold">{award.title}</h3>
                          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {award.year}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{award.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
