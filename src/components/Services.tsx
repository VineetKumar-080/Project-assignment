import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Scissors, Bean as Beard, SprayCan as Spray } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Classic Haircut',
    description: 'Traditional haircut with modern styling techniques',
    price: '$35',
    icon: Scissors,
    duration: '45 min'
  },
  {
    id: 2,
    title: 'Beard Trim',
    description: 'Expert beard shaping and grooming for the perfect look',
    price: '$25',
    icon: Beard,
    duration: '30 min'
  },
  {
    id: 3,
    title: 'Haircut & Beard',
    description: 'Complete grooming package for hair and facial hair',
    price: '$55',
    icon: Scissors,
    duration: '60 min'
  },
  {
    id: 4,
    title: 'Hot Towel Shave',
    description: 'Luxurious straight razor shave with hot towel treatment',
    price: '$40',
    icon: Beard,
    duration: '45 min'
  },
  {
    id: 5,
    title: 'Hair Styling',
    description: 'Professional styling with premium products',
    price: '$30',
    icon: Spray,
    duration: '30 min'
  },
  {
    id: 6,
    title: 'Kids Haircut',
    description: 'Stylish haircuts for youngsters under 12',
    price: '$25',
    icon: Scissors,
    duration: '30 min'
  },
];

const Services = () => {
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
      }
    }
  };

  return (
    <section id="services" className="section bg-dark-950 relative py-24">
      <div className="container-fluid">
        <motion.div 
          ref={headingRef}
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-amber-500 uppercase tracking-wider font-medium">Our Services</span>
          <h2 className="section-heading mt-2">Premium Grooming <span className="text-amber-500">Services</span></h2>
          <p className="text-gray-400 mt-4">
            We offer a range of professional services to keep you looking sharp. 
            Our expert barbers combine traditional techniques with modern styles.
          </p>
        </motion.div>

        <motion.div 
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-dark-900 border border-dark-800 p-6 group hover:border-amber-500 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="flex justify-between items-start mb-6">
                <service.icon className="text-amber-500 w-10 h-10" />
                <span className="text-2xl font-bold text-amber-500">{service.price}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 font-serif group-hover:text-amber-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Duration: {service.duration}</span>
                <motion.a 
                  href="#booking" 
                  className="text-amber-500 text-sm font-medium uppercase tracking-wider hover:underline"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Book Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;