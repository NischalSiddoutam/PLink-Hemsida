import { TrendingUp, Users, MapPin, Camera, Calendar } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "25,000+",
      label: "Aktiva användare",
      description: "Växande gemenskap med Parky"
    },
    {
      icon: MapPin,
      number: "8,000+",
      label: "Smarta platser",
      description: "Med digital åtkomst"
    },
    {
      icon: Camera,
      number: "95%",
      label: "Korrekt skyltskanning",
      description: "AI-driven parkeringsregelskanning"
    },
    {
      icon: Calendar,
      number: "40%",
      label: "Färre böter",
      description: "Tack vare Parkys proaktiva påminnelser"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            P Link i siffror
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Framtidens parkering med AI-assistenten Parky och smart teknologi
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-emerald-50 to-orange-50 p-6 rounded-2xl mb-4 group-hover:shadow-lg transition-shadow">
                <stat.icon className="w-12 h-12 mx-auto text-emerald-600 mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
