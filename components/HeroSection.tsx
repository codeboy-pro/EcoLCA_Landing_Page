import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";


export function HeroSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-green-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Revolutionize Metal Sustainability with AI-Powered LCA
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Official government portal for comprehensive Life Cycle Assessments of aluminum, copper, and other metals. Support regulatory compliance, environmental stewardship, and circular economy initiatives across Indian industries.
              </p>
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gray-800 text-white px-8 py-5 text-lg font-medium hover:bg-gray-900"
              >
               
                Access Dashboard
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg font-medium border-2 hover:bg-gray-800 hover:text-white transition-colors duration-300 shadow-[20px 10px 30px rgba(0,0,0,0.1)]"
              >
                
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-card p-6 border">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMGVudmlyb25tZW50YWwlMjBkYXRhJTIwYW5hbHlzaXMlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU4MzkxNTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Indian environmental data dashboard showing metal sustainability metrics"
                className="w-full h-auto rounded-lg"
              />
              {/* Floating metrics */}
              <div className="absolute top-4 right-4 bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                MoEFCC Certified
              </div>
              <div className="absolute bottom-4 left-4 bg-card shadow-lg px-4 py-3 rounded-lg border">
                <div className="text-xs text-muted-foreground font-medium">Metal Carbon Footprint</div>
                <div className="text-lg font-bold text-primary">-52%</div>
              </div>
              <div className="absolute top-1/2 -left-2 bg-white shadow-lg px-3 py-2 rounded-lg border">
                <div className="text-xs text-muted-foreground">Compliance Rate</div>
                <div className="text-sm font-bold text-primary">99.7%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
