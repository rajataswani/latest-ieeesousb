
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function IEEESOUSCSSBC() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-on-load">IEEE SOU CS SBC</h1>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-8 animate-on-load animation-delay-300" />
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-12 glass p-8 rounded-lg animate-on-load animation-delay-500">
              <h2 className="text-2xl font-bold mb-6">Vision</h2>
              <p className="mb-4">
                To become a center of excellence in computer science and engineering education, raising innovative minds, and creating a highly skilled workforce to drive technological advancements in the field of computer science.
              </p>
            </section>
            
            <section className="mb-12 glass p-8 rounded-lg animate-on-load animation-delay-700">
              <h2 className="text-2xl font-bold mb-6">Mission</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To promote education, research, and practical applications in computer science and technology.</li>
                <li>To bridge the gap between academia and industry by providing students with hands-on experience and exposure to cutting-edge technologies.</li>
                <li>To establish strong collaborations with the industry and academic institutions to create a robust knowledge-sharing environment.</li>
                <li>To equip students with critical skills in computer science, enabling them to become leaders in the tech industry.</li>
                <li>To foster a community where students, faculty, and professionals come together to explore and innovate in computer science and related fields.</li>
              </ul>
            </section>
            
            <section className="glass p-8 rounded-lg animate-on-load animation-delay-900">
              <h2 className="text-2xl font-bold mb-6">About IEEE SOU CS SBC</h2>
              <p>
                IEEE SOU CS SBC is established with the vision of cultivating a vibrant community that connects students, professionals, and academics in the field of computer science. In just a short period, the society has gained significant traction with a rapidly growing membership base. The society aims to provide a platform for students to collaborate, share knowledge, and advance in their technical and professional skills. Through organizing workshops, seminars, and technical events, the CS SBC focuses on helping students stay up-to-date with the latest advancements in the field of computer science, preparing them for success in the ever-evolving tech industry.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
