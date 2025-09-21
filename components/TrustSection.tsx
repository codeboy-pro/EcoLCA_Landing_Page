import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TrustSection() {
  const agencies = [
    "Ministry of Steel",
    "Ministry of Mines", 
    "Central Pollution Control Board",
    "Bureau of Indian Standards",
    "National Environmental Engineering Research Institute",
    "Department of Science & Technology"
  ];

  const stats = [
    { value: "500+", label: "Registered Industries" },
    { value: "99.7%", label: "Compliance Rate" },
    { value: "15M+", label: "Assessments Completed" },
    { value: "24/7", label: "Government Support" }
  ];

  return (
    <section className="py-16 px-4 bg-green-50/30">
      <div className="container mx-auto">
        {/* Header with Government Building Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Trusted by Government Ministries & Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our AI-powered metal sustainability platform is the official government solution for Life Cycle Assessments, developed through extensive collaboration with Indian ministries and industry experts.
            </p>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg border">
                  <div className="text-2xl font-bold text-gray-750 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="/styles/images/Build.jpg"
              alt="Indian government environmental sustainability office building"
              className="w-full h-auto rounded-xl shadow-xl"
            />
            <div className="absolute top-4 left-4 bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium">
              Ministry Approved
            </div>
          </div>
        </div>

        {/* Agency Partnerships */}
        <div className="text-center">
          <p className="text-muted-foreground mb-8 font-medium">
            Developed in partnership with leading Indian government ministries
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {agencies.map((agency, index) => (
              <div
                key={index}
                className="flex items-center  shadow-lg justify-center p-6 rounded-lg bg-gray-200 border border-border  hover:border-primary/30 transition-all hover:shadow-xl"
              >
                <span className="text-gray-700 font-medium text-center">
                  {agency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}