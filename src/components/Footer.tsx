import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark-950 text-white">
      <div className="container-fluid py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <a href="#" className="flex items-center gap-2 text-amber-500 mb-6">
              <Scissors className="h-6 w-6" />
              <span className="text-xl font-serif font-bold">PMC BARBER</span>
            </a>
            <p className="text-gray-400 mb-6">
              Premium barbershop providing quality haircuts and grooming services since 1998.
              Our skilled barbers combine traditional techniques with modern styles.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, link: "#" },
                { icon: Facebook, link: "#" },
                { icon: Twitter, link: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  className="w-8 h-8 border border-dark-800 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-amber-500 transition-colors flex items-center gap-2"
                  >
                    <span className="w-2 h-0.5 bg-amber-500"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Services</h4>
            <ul className="space-y-3">
              {[
                'Classic Haircut', 
                'Beard Trim', 
                'Hot Towel Shave', 
                'Hair Styling', 
                'Kids Haircut'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="text-gray-400 hover:text-amber-500 transition-colors flex items-center gap-2"
                  >
                    <span className="w-2 h-0.5 bg-amber-500"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Opening Hours</h4>
            <ul className="space-y-3">
              {[
                { day: 'Monday - Friday', hours: '9:00 AM - 8:00 PM' },
                { day: 'Saturday', hours: '9:00 AM - 8:00 PM' },
                { day: 'Sunday', hours: '10:00 AM - 6:00 PM' },
              ].map((item, index) => (
                <li key={index} className="border-b border-dark-800 pb-2">
                  <span className="block text-gray-400">{item.day}</span>
                  <span className="block text-amber-500">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-dark-900">
        <div className="container-fluid py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} PMC Barber. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm">
              Premium Barber Shop
            </span>
            <motion.button 
              onClick={scrollToTop}
              className="w-8 h-8 bg-amber-500 text-black flex items-center justify-center"
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;