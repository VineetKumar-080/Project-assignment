import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Award, Users, Calendar } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.11, 0.64, 0.34, 0.99] }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const statsItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stats = [
    { 
      icon: Clock, 
      value: "25+", 
      label: "Years Experience" 
    },
    { 
      icon: Users, 
      value: "10,000+", 
      label: "Happy Clients" 
    },
    { 
      icon: Award, 
      value: "15+", 
      label: "Award Winning" 
    },
    { 
      icon: Calendar, 
      value: "7", 
      label: "Days a Week" 
    }
  ];

  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            ref={ref}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Barber Shop Interior" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-amber-500 p-6 md:p-8">
              <p className="text-black font-serif text-xl md:text-2xl font-bold">
                Established in 1998
              </p>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            <span className="text-amber-500 uppercase tracking-wider font-medium">About Us</span>
            <h2 className="section-heading mt-2 mb-6">
              A Cut Above <span className="text-amber-500">The Rest</span>
            </h2>
            <motion.div 
              className="space-y-4 text-gray-300"
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
            >
              <p>
                PMC Barber Shop has been providing premium grooming services since 1998. 
                Founded with a passion for traditional barbering and modern styles, we've grown
                to become a trusted name in the industry.
              </p>
              <p>
                Our team of master barbers combines years of experience with continuous training
                to stay at the cutting edge of men's grooming. We believe in creating an experience,
                not just a haircut, which is why our clients keep coming back.
              </p>
              <p>
                Located in the heart of the city, our shop offers a welcoming atmosphere where you can
                relax, socialize, and leave looking your best. We take pride in our craft and guarantee
                satisfaction with every service.
              </p>
            </motion.div>

            <motion.a 
              href="#booking" 
              className="btn mt-8 inline-block"
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book an Appointment
            </motion.a>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
          ref={statsRef}
          variants={statsVariants}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              variants={statsItemVariants}
            >
              <div className="inline-flex justify-center items-center w-16 h-16 bg-dark-900 rounded-full mb-4">
                <stat.icon className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 font-serif">{stat.value}</h3>
              <p className="text-gray-400 uppercase text-sm tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;