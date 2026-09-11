import React from "react";
import logoText from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
          
          {/* Brand Block with Imported Image Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src={logoText} 
                alt="DevStack Logo" 
                className="h-7 w-auto object-contain"
              />
            </div>
            
            <p className="text-gray-400 text-xs max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="flex items-center gap-4 text-xs font-semibold text-gray-700 pt-1">
              <a href="#github" className="hover:text-pink-500 transition-colors">GitHub</a>
              <a href="#twitter" className="hover:text-pink-500 transition-colors">Twitter</a>
              <a href="#linkedin" className="hover:text-pink-500 transition-colors">LinkedIn</a>
            </div>
          </div>

          <div className="grid grid-cols-3 lg:col-span-3 gap-6">
            
            <div>
              <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">
                Product
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                <li><a href="#home" className="hover:text-gray-900 transition-colors">Home</a></li>
                <li><a href="#technologies" className="hover:text-gray-900 transition-colors">Technologies</a></li>
                <li><a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                <li><a href="#about" className="hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a></li>
                <li><a href="#careers" className="hover:text-gray-900 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">
                Legal
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                <li><a href="#privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
              </ul>
            </div>

          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;