import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, Shield } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The AI-powered metal LCA platform has revolutionized our aluminum sustainability reporting. The precision of environmental impact assessments and circular economy recommendations have helped us reduce our carbon footprint by 35%.",
      author: "Dr. Rajesh Kumar",
      role: "Sustainability Director",
      company: "Hindalco Industries",
      type: "Industry Partner",
      rating: 5
    },
    {
      quote: "This government platform provides the authoritative metal sustainability data we need for policy making. The integration with GSI mineral databases and CPCB environmental standards ensures accuracy for national regulations.",
      author: "Ms. Priya Sharma",
      role: "Senior Environmental Analyst",
      company: "Ministry of Steel",
      type: "Government Ministry",
      rating: 5
    },
    {
      quote: "As a public sector undertaking in copper production, we rely on MoEFCC-certified metal LCA assessments. This portal provides the official documentation needed for government projects and regulatory compliance.",
      author: "Mr. Vikram Singh",
      role: "Environmental Program Manager",
      company: "Hindustan Copper Limited",
      type: "PSU Partner",
      rating: 4
    }
  ];

  return (
    <section className="py-20 px-4 bg-green-50/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-6">
           
            <span className="text-sm font-medium text-gray-700">Trusted Partners</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by Government and Metal Industries
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how Indian ministries and metal industry leaders benefit from our AI-powered sustainability assessment services
          </p>
        </div>

       

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 shadow-lg bg-card hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                {/* Government Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs bg-blue-200 text-gray-700 px-2 py-1 rounded-full font-medium">
                    {testimonial.type}
                  </span>
                </div>
                
                {/* Quote */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwb2ZmaWNpYWwlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4Mzg0MDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt={`${testimonial.author} headshot`}
                    className="w-12 h-12 rounded-full object-cover border-2 border-green-100"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-green-900 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Government Endorsement */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100">
          <div className="text-center">
           
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              Official Government Endorsement
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              "This AI-powered metal sustainability platform represents the gold standard for Life Cycle Assessments in India. 
              All methodologies are MoEFCC-certified and specifically designed for circular economy optimization in metal industries."
            </p>
            <div className="mt-4 text-sm text-gray-700 font-medium">
              — Ministry of Environment, Forest & Climate Change, Government of India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}