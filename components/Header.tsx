import { Button } from "./ui/button";


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* Government Alert Bar */}
      <div className="bg-gray-900 text-white py-1 px-4">
        <div className="container mx-auto">
            <p className="text-sm text-center">
            <span className="font-medium">Official EcoLCA Platform</span> — 
            Secure sustainability services for Indian industries
            </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Government Logo */}
          <div className="flex items-center gap-3">
          
            <div className="flex flex-col">
              <span className="font-bold text-4xl text-gray-900">EcoLCA</span>
              
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-muted-foreground hover:text-black transition-colors font-medium">
              Home
            </a>
            <a href="#services" className="text-muted-foreground hover:text-black transition-colors font-medium">
              Services
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-black transition-colors font-medium">
              Process
            </a>
            <a href="#resources" className="text-muted-foreground hover:text-black transition-colors font-medium">
              Resources
            </a>
            <a href="#about" className="text-muted-foreground hover:text-black transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-black transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <Button className="bg-black  font-medium text-white">
           
            Access Dashboard
          </Button>
        </div>
      </div>
    </header>
  );
}