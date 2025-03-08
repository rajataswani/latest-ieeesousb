
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function IEEESOUSSIGHTSBG() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-on-load text-foreground">IEEE SOU SIGHT SBG</h1>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-8 animate-on-load animation-delay-300" />
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-12 glass p-8 rounded-lg animate-on-load animation-delay-500">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Vision</h2>
              <p className="mb-4 text-foreground">
                To leverage technology for humanitarian causes and create lasting, impactful change in underserved communities by improving access to basic resources, education, and healthcare.
              </p>
            </section>
            
            <section className="mb-12 glass p-8 rounded-lg animate-on-load animation-delay-700">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Mission</h2>
              <ul className="list-disc pl-5 space-y-2 text-foreground">
                <li className="text-foreground">To utilize the power of technology and engineering to address real-world challenges faced by communities in need.</li>
                <li className="text-foreground">To raise awareness about social issues and inspire IEEE members to engage in projects that have a positive social impact.</li>
                <li className="text-foreground">To promote the development of sustainable solutions that align with IEEE's commitment to the advancement of technology for humanity.</li>
                <li className="text-foreground">To provide hands-on experience in humanitarian technology projects that promote skills development and encourage social responsibility.</li>
                <li className="text-foreground">To build partnerships with other organizations to amplify the positive impact on society.</li>
              </ul>
            </section>
            
            <section className="glass p-8 rounded-lg animate-on-load animation-delay-900">
              <h2 className="text-2xl font-bold mb-6 text-foreground">About IEEE SOU SIGHT SBG</h2>
              <p className="text-foreground">
                IEEE SOU SIGHT SBG (Special Interest Group on Humanitarian Technology) is formed with a goal to serve society by applying technology for the betterment of underserved and marginalized communities. The group is dedicated to addressing a variety of social issues through innovative engineering solutions. Although it is a relatively new group, the IEEE SOU SIGHT SBG has already undertaken several impactful projects and initiatives aimed at improving living conditions, access to education, and healthcare in communities facing challenges. The group encourages active participation from students and professionals alike to make a meaningful impact using technology as a tool for social good.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
