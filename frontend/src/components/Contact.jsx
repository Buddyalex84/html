import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Github, Linkedin, Instagram, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl sm:text-5xl font-bold text-white mb-12 text-center transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Get In Touch
        </h2>
        <p
          className={`text-xl text-gray-300 text-center mb-12 transition-all duration-1000 delay-100 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Feel free to reach out for collaborations, opportunities, or just a friendly chat!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            className={`bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/50 transform hover:-translate-y-1 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-800 rounded-lg">
                <Mail size={24} className="text-gray-300" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <p className="text-white font-semibold">{personalInfo.email}</p>
              </div>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${personalInfo.phone}`}
            className={`bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/50 transform hover:-translate-y-1 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-800 rounded-lg">
                <Phone size={24} className="text-gray-300" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Phone</p>
                <p className="text-white font-semibold">{personalInfo.phone}</p>
              </div>
            </div>
          </a>

          {/* Location */}
          <div
            className={`bg-gray-900 border border-gray-800 rounded-lg p-6 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-800 rounded-lg">
                <MapPin size={24} className="text-gray-300" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Location</p>
                <p className="text-white font-semibold">{personalInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div
            className={`bg-gray-900 border border-gray-800 rounded-lg p-6 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <p className="text-sm text-gray-500 mb-4">Connect on Social</p>
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;