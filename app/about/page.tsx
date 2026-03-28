import Header from "@/components/Header";
import AdBanner from "@/components/AdBanner";

export default function About() {
  return (
    <div>
      <Header />
      <div className="min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#800000]">About Explore Tirupati</h1>
            <div className="divider-ornament mt-4">
              <span>❀</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 space-y-6 border border-[#E0D5C5]">
            <p className="text-lg text-[#2D2D2D]">
              Welcome to <span className="font-semibold text-[#FF6F00]">Explore Tirupati</span> - your ultimate guide to discovering the beautiful city of Tirupati and its surrounding areas.
            </p>
            
            <p className="text-[#8B7355]">
              Tirupati, located in the Chittoor district of Andhra Pradesh, is famous for its sacred temples, 
              breathtaking waterfalls, and serene natural landscapes. Our mission is to help travelers 
              explore the best places this region has to offer.
            </p>

            <div className="border-t border-[#E0D5C5] pt-6">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">What We Offer</h2>
              <ul className="list-disc list-inside text-[#8B7355] space-y-2">
                <li>Comprehensive guides to temples and religious sites</li>
                <li>Information about scenic waterfalls and nature spots</li>
                <li>Travel tips and best time to visit recommendations</li>
                <li>Local insights and hidden gems</li>
              </ul>
            </div>

            <div className="border-t border-[#E0D5C5] pt-6">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">Contact Us</h2>
              <p className="text-[#8B7355]">
                Have questions or suggestions? Reach out to us through our admin panel.
              </p>
            </div>
          </div>

          <AdBanner />
        </div>
      </div>
    </div>
  );
}