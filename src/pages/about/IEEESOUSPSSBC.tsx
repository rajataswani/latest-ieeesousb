
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function IEEESOUSPSSBC() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-on-load">IEEE SOU SPS SBC</h1>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-8 animate-on-load animation-delay-300" />
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-12 glass p-8 rounded-lg animate-on-load animation-delay-500">
              <h2 className="text-2xl font-bold mb-6">Vision</h2>
              <p className="mb-4">
                Silver Oak University IEEE Signal Processing Society is a dynamic organization that is the preeminent source of signal processing information and resources to a global community. We do this by: being a one-stop source of signal processing resources; providing a variety of high quality resources to a variety of users in formats customized to their interests; adapting to a rapidly changing technical community.
              </p>
            </section>
            
            <section className="mb-12 glass p-8 rounded-lg animate-on-load animation-delay-700">
              <h2 className="text-2xl font-bold mb-6">Mission</h2>
              <p className="mb-4">
                Silver Oak University IEEE Signal Processing Society Student Branch Chapter enables technology for the generation, transformation, and interpretation of information whose purpose is to advance and disseminate state-of-the-art scientific information and resources; and provide a venue for people to interact and exchange ideas. It provides opportunities to collaborate and connect with industry professionals, academics and students alike working towards the advancement of signal processing and the technology it enables.
              </p>
            </section>
            
            <section className="glass p-8 rounded-lg animate-on-load animation-delay-900">
              <h2 className="text-2xl font-bold mb-6">About IEEE SOU SPS SBC</h2>
              <p className="mb-4">
                Signal Processing Society is the first IEEE society, founded in 1948, whose perspective is to advance and spread scientific information and resources, educate the signal processing community, and present a platform for individuals to communicate and exchange ideas.
              </p>
              
              <p>
                Silver Oak University IEEE SPS SBC was established this year in 2021. In Spite of the short time span we are the largest society in the Gujarat Section with 63 members and we have successfully organized various events. We have organized different specialized symposia on the various emerging technologies to accomplish its objective to keep the members acquainted with the latest information and to serve the society at ample.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
