import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Shield, FileCheck, Database, Users, Recycle, Beaker } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "MoEFCC-Certified Assessments",
      description: "Comprehensive Life Cycle Assessments using officially certified methodologies for aluminum, copper, and other metals with government-approved environmental impact models."
    },
    {
      icon: <Recycle className="h-8 w-8 text-primary" />,
      title: "Circular Economy Focus",
      description: "Advanced modeling for metal recycling, reuse, and circular economy initiatives to optimize resource efficiency and reduce environmental impact."
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Government Data Integration",
      description: "Direct access to official government databases, Geological Survey of India mineral data, and CPCB environmental monitoring for accurate metal sustainability assessments."
    },
    {
      icon: <Beaker className="h-8 w-8 text-primary" />,
      title: "AI-Powered Analysis",
      description: "Machine learning algorithms analyze complex metal supply chains, processing efficiency, and environmental impacts with unprecedented accuracy."
    },
    {
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      title: "Regulatory Compliance",
      description: "Automated compliance reporting for Indian environmental regulations, including Water and Air Pollution Control Acts and Waste Management Rules specific to metal industries."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Technical Support",
      description: "24/7 support from certified environmental engineers and government specialists specializing in metal sustainability and LCA methodologies."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-6">
           
            <span className="text-sm font-medium text-gray-700">Government Services</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Official Metal Sustainability Assessment Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access comprehensive AI-powered LCA tools for metals backed by Indian government expertise and official environmental data sources.
          </p>
        </div>

        {/* Features with Images */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImageWithFallback
              src="/styles/images/kkl.jpg"
              alt="Indian metal recycling facility with aluminum and copper processing"
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Advanced Metal Processing Analytics
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our AI-powered platform analyzes complex metal supply chains, from mining and extraction through processing, manufacturing, and end-of-life recycling to provide comprehensive environmental impact assessments.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-muted-foreground">Real-time environmental impact tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-muted-foreground">Metal-specific sustainability metrics</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-muted-foreground">Circular economy optimization</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 shadow-lg hover:shadow-xl transition-all hover:border-primary/30 bg-card">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4           rounded-full  w-fit bg-gray-600 ">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Government Info */}
        <div className="mt-16 bg-green-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Backed by Indian Environmental Standards
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            All metal sustainability assessments follow MoEFCC guidelines and are compliant with Indian environmental regulations. 
            Our platform integrates with official government databases to ensure accuracy and legal compliance.
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <span>• ISO 14040/14044 Compliant</span>
            <span>• BIS Data Standards</span>
            <span>• Government Security Clearance</span>
          </div>
        </div>
      </div>
    </section>
  );
}