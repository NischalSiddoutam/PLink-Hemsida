import { Search, MapPin, Camera, Star } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      step: "1",
      title: "Öppna P Link & träffa Parky",
      description: "Starta appen och låt AI-assistenten Parky hjälpa dig hitta den perfekta parkeringsplatsen baserat på dina behov och vanor."
    },
    {
      icon: MapPin,
      step: "2", 
      title: "Utforska Heta Platser",
      description: "Se populära parkeringsplatser på kartan, filtrera efter pris och tillgänglighet. Digital åtkomst via app."
    },
    {
      icon: Camera,
      step: "3",
      title: "Skanna & boka smart",
      description: "Skanna parkeringsskyltar för att förstå regler, boka platsen och få påminnelser. Betala säkert via Swish eller kort."
    },
    {
      icon: Star,
      step: "4",
      title: "Tjäna belöningar",
      description: "Betygsätt upplevelsen, tjäna grön status för hållbara val och få poäng som kan användas för framtida parkeringar."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Så fungerar P Link
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fyra enkla steg till stress-fri parkering med AI-assistenten Parky
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-emerald-200 to-orange-200 z-0"></div>
                )}
                
                <div className="relative z-10">
                  {/* Step number */}
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
