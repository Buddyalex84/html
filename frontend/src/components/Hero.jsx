import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [nameIndex, setNameIndex] = useState(0);
  const names = [
    { text: "Ansh Verma", language: "en" },
    { text: "अंश वर्मा", language: "hi" }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Name animation switching between English and Hindi
  useEffect(() => {
    const interval = setInterval(() => {
      setNameIndex((prev) => (prev + 1) % names.length);
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      {/* Floating geometric shapes for 3D effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-gray-700/20 to-gray-900/20 rounded-lg transform rotate-45 animate-float"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-br from-gray-800/20 to-black/20 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-br from-gray-600/20 to-gray-800/20 rounded-lg transform -rotate-12 animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <div
            className={`mb-8 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-4 border-gray-600 flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-500 hover:rotate-6 shadow-2xl hover:shadow-gray-700/50">
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

          {/* Animated Name with 3D effect */}
          <div className="h-24 flex items-center justify-center mb-4">
            <h1
              key={nameIndex}
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                animation: 'fadeInRotate 1s ease-in-out',
                textShadow: '4px 4px 8px rgba(0,0,0,0.8), -2px -2px 4px rgba(255,255,255,0.1)',
                transform: 'perspective(1000px) rotateX(0deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              {names[nameIndex].text}
            </h1>
          </div>

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

          {/* CTA Buttons with 3D hover effect */}
          <div
            className={`flex flex-wrap items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-500 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                transform: 'perspective(1000px)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) translateZ(20px) rotateX(5deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) translateZ(0px) rotateX(0deg)';
              }}
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
              className="border-2 border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                transform: 'perspective(1000px)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) translateZ(20px) rotateX(5deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) translateZ(0px) rotateX(0deg)';
              }}
              onClick={() => {
                const element = document.querySelector('#projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
            </Button>
          </div>

          {/* Social Links with 3D hover */}
          <div
            className={`flex items-center justify-center gap-6 transition-all duration-1000 delay-600 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-xl"
              style={{
                transform: 'perspective(1000px)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) translateZ(30px) rotateY(15deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) translateZ(0px) rotateY(0deg)';
              }}
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-xl"
              style={{
                transform: 'perspective(1000px)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) translateZ(30px) rotateY(15deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) translateZ(0px) rotateY(0deg)';
              }}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-xl"
              style={{
                transform: 'perspective(1000px)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) translateZ(30px) rotateY(15deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) translateZ(0px) rotateY(0deg)';
              }}
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-xl"
              style={{
                transform: 'perspective(1000px)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) translateZ(30px) rotateY(15deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) translateZ(0px) rotateY(0deg)';
              }}
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