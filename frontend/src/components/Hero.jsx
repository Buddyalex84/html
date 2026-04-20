import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <div
            className={`mb-8 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-4 border-gray-600 flex items-center justify-center overflow-hidden">
              {personalInfo.profileImage ? (
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-5xl font-bold text-gray-400">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </span>
              )}
            </div>
          </div>

          {/* Name */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 transition-all duration-1000 delay-100 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {personalInfo.name}
          </h1>

          {/* Title */}
          <p
            className={`text-2xl sm:text-3xl text-gray-300 mb-3 transition-all duration-1000 delay-200 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {personalInfo.title}
          </p>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl text-gray-400 mb-8 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {personalInfo.subtitle}
          </p>

          {/* Location */}
          <div
            className={`flex items-center justify-center text-gray-400 mb-12 transition-all duration-1000 delay-400 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <MapPin size={20} className="mr-2" />
            <span>{personalInfo.location}</span>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-500 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:scale-105"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 hover:scale-105"
              onClick={() => {
                const element = document.querySelector('#projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div
            className={`flex items-center justify-center gap-6 transition-all duration-1000 delay-600 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;