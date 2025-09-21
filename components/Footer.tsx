import { Shield, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const footerLinks = {
    "Metal LCA Services": ["Aluminum Assessment", "Copper Analysis", "Steel Sustainability", "Circular Economy", "AI-Powered Reports"],
    "Resources": ["MoEFCC Guidelines", "LCA Methodologies", "Training Materials", "Research Papers", "Metal Industry Data"],
    "Support": ["Contact Ministry", "Technical Support", "Help Center", "Submit Request", "Portal Access"],
    "Compliance": ["Privacy Policy", "RTI Act", "Accessibility", "Digital India", "Environmental Regulations"]
  };

  return (
    <footer className="bg-gray-800 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Government Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
             
              <div className="flex flex-col">
                <span className="font-bold text-xl">EcoLCA</span>
                <span className="text-xs text-green-200 -mt-1">Metal Sustainability Portal</span>
              </div>
            </div>
            <p className="text-green-100 mb-6 max-w-md leading-relaxed">
              Official Ministry of Environment, Forest & Climate Change portal for AI-powered Life Cycle Assessments of metals. 
              Revolutionizing sustainability through advanced technology and circular economy optimization.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gray-200" />
                <span className="text-gray-100">1800-11-0031 (Toll Free)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-green-200" />
                <span className="text-green-100">ecolca@gov.in</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-green-200" />
                <span className="text-green-100">New Delhi 110003, India</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-white">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-green-200 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Government Notices */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="bg-gray-700 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-white mb-3">Official Government Website</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-100">
              <div>
                <p className="mb-2">
                  <strong>Security:</strong> This AI-powered metal sustainability platform is maintained by the Ministry of Environment, Forest & Climate Change. 
                  All LCA data is secured through government-grade encryption and processed on secure servers.
                </p>
              </div>
              <div>
                <p>
                  <strong>Accessibility:</strong> We are committed to providing access to our metal sustainability services for all users. 
                  If you need assistance with LCA assessments, please contact our accessibility coordinator.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex justify-around md:flex-row  text-sm text-gray-200 mb-4 md:mb-0">
              <span>Made by Team Brainstorm</span>
         
            </div>
          
          </div>
        </div>
      </div>
    </footer>
  );
}