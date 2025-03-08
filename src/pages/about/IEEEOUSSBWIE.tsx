
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function IEEEOUSSBWIE() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-on-load">IEEE SOU WIE AG</h1>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-8 animate-on-load animation-delay-300" />
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-12 glass p-8 rounded-lg animate-on-load animation-delay-500">
              <h2 className="text-2xl font-bold mb-6">Vision</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Equal access to knowledge.</li>
                <li>Encourage women in the potency of engineering.</li>
                <li>Enhance the share of women's voices.</li>
              </ul>
            </section>
            
            <section className="mb-12 glass p-8 rounded-lg animate-on-load animation-delay-700">
              <h2 className="text-2xl font-bold mb-6">Mission</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Betterment of society.</li>
                <li>Empower women in leadership roles.</li>
                <li>Technical enhancement of women.</li>
              </ul>
              <p className="mt-4">
                Our goal is to facilitate the recruitment and retention of women in technical disciplines globally. We envision a vibrant community of IEEE women and men collectively using their diverse talents to innovate for the benefit of humanity.
              </p>
            </section>
            
            <section className="glass p-8 rounded-lg animate-on-load animation-delay-900">
              <h2 className="text-2xl font-bold mb-6">About IEEE SOU WIE AG</h2>
              <p className="mb-4">
                IEEE WIE is a global network of IEEE members and volunteers dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering and science. It envisions a vibrant community of IEE women and men by collectively using their diverse talents to innovate for the benefit of humanity.
              </p>
              
              <p>
                With the same vision and mission, IEEE SOU WIE AG was established in 2019, and today, it is the largest affinity group in the Gujarat Section with 32 members. Starting from its inception, IEEE SOU WIE AG has carried out multiple campaigns and initiatives emphasizing the betterment of society. Alongside this, the AG has organized various technical and non-technical events & talks, that have helped many students to uplift their technical and interpersonal skills.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
