import { Button } from "@/components/ui/button";
import { MapPin, Car, Users, Smartphone, Camera, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-blue-900">
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-emerald-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-orange-300 rounded-full opacity-25 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-emerald-200 rounded-full opacity-20 animate-bounce delay-500"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-orange-500 p-4 rounded-2xl mr-4 shadow-lg">
              <Car className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              P <span className="text-orange-400">Link</span>
            </h1>
          </div>
          
          {/* Tagline */}
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-emerald-100">
            Smart parkering. Smartare framtid.
          </h2>
          
          {/* Main heading */}
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-emerald-50 max-w-3xl mx-auto">
            Framtidens parkeringslösning med AI-assistenten Parky. Digital åtkomst, 
            skyltskanning och belöningar för hållbara val.
          </p>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-orange-400" />
              <p className="text-sm font-medium">Heta Platser</p>
            </div>
            <div className="text-center">
              <Camera className="w-8 h-8 mx-auto mb-2 text-orange-400" />
              <p className="text-sm font-medium">Skanna Skyltar</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-orange-400" />
              <p className="text-sm font-medium">AI Parky</p>
            </div>
            <div className="text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-orange-400" />
              <p className="text-sm font-medium">Digital Åtkomst</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Ladda ner P Link
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4 text-lg font-semibold bg-transparent backdrop-blur-sm"
            >
              Träffa Parky (AI)
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
