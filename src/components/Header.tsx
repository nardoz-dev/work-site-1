import { Button } from "./ui/button";
import { Phone, MapPin, Calendar, Facebook, Linkedin, Mail } from "lucide-react";

export function Header() {
  return (
    <header className="w-full absolute top-0 left-0 right-0 z-50">
      {/* Minimal top navigation for mobile */}
      <div className="md:hidden bg-black/50 backdrop-blur-sm text-white py-2 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-red-600 rounded"></div>
            <span className="text-lg tracking-wider">STUDIO  VENTURIERO</span>
          </div>
          <Button variant="ghost" className="text-white">
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
}