import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Upload, BarChart3, Download } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: <Upload className="h-8 w-8 text-primary" />,
      title: "Upload Metal Data",
      description:
        "Submit your aluminum, copper, or other metal processing data through our secure government portal with industry-specific parameters.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "AI-Powered LCA Analysis",
      description:
        "Our artificial intelligence algorithms process your data using MoEFCC-certified methodologies and official environmental databases for comprehensive analysis.",
    },
    {
      icon: <Download className="h-8 w-8 text-primary" />,
      title: "Download Official Report",
      description:
        "Receive certified compliance reports with government seal, sustainability metrics, circular economy recommendations, and regulatory guidance.",
    },
  ];

  return (
    <section id="process" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-600">
              LCA Process
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            How AI-Powered Metal LCA Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our streamlined AI process delivers accurate, MoEFCC-compliant Life
            Cycle Assessments for metal sustainability with official government
            backing
          </p>
        </div>

        {/* Process Steps with Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1688736867121-b8adc15233d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMGdyZWVuJTIwdGVjaG5vbG9neSUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzU4MzkxMzczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Indian green technology innovation lab with AI research equipment"
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Revolutionary AI Technology for Metal Sustainability
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our cutting-edge artificial intelligence platform processes
              complex metal supply chain data, environmental impact factors, and
              circular economy metrics to deliver the most comprehensive LCA
              analysis available.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">
                  Machine learning-powered impact modeling
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">
                  Real-time processing of government databases
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">
                  Automated compliance validation
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center relative shadow-md p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-xl"
            >
              {/* Step connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-primary/30 z-0" />
              )}

              <div className="relative z-10">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-white font-bold text-lg mb-4">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mx-auto mb-6 p-4 rounded-full bg-gray-500 w-fit border-2 border-green-100">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Circular Economy Illustration */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Circular Economy Optimization
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our platform specializes in circular economy analysis for metals,
              identifying opportunities for recycling, reuse, and resource
              efficiency to minimize environmental impact and maximize economic
              value.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">
                  End-of-life metal recovery optimization
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">
                  Supply chain efficiency analysis
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">
                  Resource substitution recommendations
                </span>
              </div>
            </div>
          </div>
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1748944078380-3d12ffee7378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHN1c3RhaW5hYmxlJTIwbWFudWZhY3R1cmluZyUyMHBsYW50fGVufDF8fHx8MTc1ODM5MTM3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Indian sustainable manufacturing plant with metal recycling"
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-12 bg-gray-600 text-white rounded-xl p-6 text-center">
          <h4 className="font-bold mb-2">Secure Government Platform</h4>
          <p className="text-white-100">
            All metal sustainability data is processed through secure government
            servers with government-grade encryption and compliance with Indian
            environmental security standards.
          </p>
        </div>
      </div>
    </section>
  );
}
