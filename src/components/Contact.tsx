import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["123 Barber Street", "New York, NY 10001"]
    },
    {
      icon: Phone,
      title: "Contact Info",
      details: ["+1 (555) 123-4567", "info@pmcbarber.com"]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon-Sat: 9am - 8pm", "Sunday: 10am - 6pm"]
    }
  ];

  const formControls = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: custom * 0.1
      }
    })
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <section id="contact" className="section bg-dark-950">
      <div className="container-fluid">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-500 uppercase tracking-wider font-medium">Book Now</span>
          <h2 className="section-heading mt-2">Reserve Your <span className="text-amber-500">Appointment</span></h2>
          <p className="text-gray-400 mt-4">
            Book your next grooming session with us. Fill out the form below or call us directly to schedule an appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <motion.div
            ref={formRef}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={{ 
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { 
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" id="booking">
              <motion.div variants={formControls} custom={1}>
                <label className="block text-gray-300 mb-2 text-sm">Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-dark-900 border border-dark-800 p-3 focus:border-amber-500 transition-colors outline-none text-white" 
                  placeholder="John Doe"
                  required
                />
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={formControls} custom={2}>
                  <label className="block text-gray-300 mb-2 text-sm">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-dark-900 border border-dark-800 p-3 focus:border-amber-500 transition-colors outline-none text-white" 
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </motion.div>
                
                <motion.div variants={formControls} custom={3}>
                  <label className="block text-gray-300 mb-2 text-sm">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-dark-900 border border-dark-800 p-3 focus:border-amber-500 transition-colors outline-none text-white" 
                    placeholder="your@email.com"
                    required
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={formControls} custom={4}>
                  <label className="block text-gray-300 mb-2 text-sm">Preferred Date</label>
                  <input 
                    type="date" 
                    className="w-full bg-dark-900 border border-dark-800 p-3 focus:border-amber-500 transition-colors outline-none text-white" 
                    required
                  />
                </motion.div>
                
                <motion.div variants={formControls} custom={5}>
                  <label className="block text-gray-300 mb-2 text-sm">Preferred Time</label>
                  <select 
                    className="w-full bg-dark-900 border border-dark-800 p-3 focus:border-amber-500 transition-colors outline-none text-white" 
                    required
                  >
                    <option value="">Select a time</option>
                    <option value="9:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                  </select>
                </motion.div>
              </div>
              
              <motion.div variants={formControls} custom={6}>
                <label className="block text-gray-300 mb-2 text-sm">Service</label>
                <select 
                  className="w-full bg-dark-900 border border-dark-800 p-3 focus:border-amber-500 transition-colors outline-none text-white" 
                  required
                >
                  <option value="">Select a service</option>
                  <option value="haircut">Classic Haircut - $35</option>
                  <option value="beard">Beard Trim - $25</option>
                  <option value="haircut-beard">Haircut & Beard - $55</option>
                  <option value="hot-shave">Hot Towel Shave - $40</option>
                  <option value="styling">Hair Styling - $30</option>
                  <option value="kids">Kids Haircut - $25</option>
                </select>
              </motion.div>
              
              <motion.div variants={formControls} custom={7}>
                <label className="block text-gray-300 mb-2 text-sm">Special Requests</label>
                <textarea 
                  className="w-full bg-dark-900 border border-dark-800 p-3 focus:border-amber-500 transition-colors outline-none text-white min-h-[120px]" 
                  placeholder="Any special requests or notes..."
                ></textarea>
              </motion.div>
              
              <motion.button 
                type="submit" 
                className="btn btn-primary flex items-center gap-2"
                variants={formControls}
                custom={8}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Appointment
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
          
          {/* Contact Information and Map */}
          <motion.div
            ref={infoRef}
            initial={{ opacity: 0, x: 50 }}
            animate={infoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-dark-900 p-8 mb-8">
              <h3 className="text-xl font-bold mb-6 font-serif">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-dark-800 flex items-center justify-center">
                      <item.icon className="text-amber-500" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-400">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Instagram, link: "#" },
                    { icon: Facebook, link: "#" },
                    { icon: Twitter, link: "#" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      className="w-10 h-10 border border-dark-800 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="h-[300px] bg-dark-900 flex items-center justify-center p-4 border border-dark-800">
              <div className="text-center">
                <MapPin size={40} className="mx-auto mb-4 text-amber-500" />
                <p className="text-gray-300">
                  123 Barber Street, New York, NY 10001
                </p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-500 mt-2 inline-block hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;