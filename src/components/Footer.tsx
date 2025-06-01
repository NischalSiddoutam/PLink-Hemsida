import { Car, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-orange-500 p-3 rounded-xl mr-3">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">
                P<span className="text-orange-400"> Link</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Framtidens parkering med AI-assistenten Parky. Smart teknologi, hållbara val och digital åtkomst för en stressfri parkeringsupplevelse.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                <span>nischa060706@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                <span>076-229 98 99</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Stockholm, Sverige</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Funktioner</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Träffa Parky</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Heta Platser</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Skanna Skyltar</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Digital Åtkomst</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Belöningar</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Företag</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Om P Link</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Integritetspolicy</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Användarvillkor</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Kontakt</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Karriär</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 P Link. Alla rättigheter förbehållna.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
