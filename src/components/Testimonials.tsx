import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "James Wilson",
    position: "Regular Client",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    rating: 5,
    text: "I've been coming to PMC Barber for over 5 years now. The quality of service is consistently excellent, and the atmosphere is always welcoming. My barber knows exactly how I like my haircut without me having to explain every time."
  },
  {
    id: 2,
    name: "Robert Johnson",
    position: "New Client",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600",
    rating: 5,
    text: "As someone who's always been particular about their hair, finding a good barber has been a challenge. PMC exceeded my expectations from the first visit. The attention to detail and the skill of their barbers is outstanding."
  },
  {
    id: 3,
    name: "Michael Brown",
    position: "Monthly Subscriber",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    rating: 4,
    text: "The combination of traditional techniques with modern styles is what sets PMC apart. Their hot towel shave is a must-try experience. The shop has a great ambiance, and the team is always professional."
  },
  {
    id: 4,
    name: "David Miller",
    position: "Long-time Client",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    rating: 5,
    text: "I appreciate the consistency at PMC. No matter which barber I see, I always walk out looking sharp. The online booking system makes scheduling easy, and they're always on time with appointments."
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-black relative py-24">
      <div className="container-fluid">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-amber-500 uppercase tracking-wider font-medium">Testimonials</span>
          <h2 className="section-heading mt-2">What Our <span className="text-amber-500">Clients Say</span></h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Large quote icon */}
          <div className="absolute -top-16 -left-8 opacity-10">
            <Quote size={120} />
          </div>
          
          {/* Testimonial Slider */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={testimonials[current].image} 
                    alt={testimonials[current].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, index) => (
                      <Star 
                        key={index} 
                        size={20} 
                        className={index < testimonials[current].rating ? "text-amber-500 fill-amber-500" : "text-gray-600"} 
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl font-serif mb-6 italic">
                    "{testimonials[current].text}"
                  </blockquote>
                  
                  <div>
                    <h4 className="text-lg font-bold">{testimonials[current].name}</h4>
                    <p className="text-gray-400">{testimonials[current].position}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <motion.button 
              onClick={prev}
              className="p-2 border border-dark-800 hover:border-amber-500 hover:text-amber-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => {
                    setAutoplay(false);
                    setCurrent(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === current ? "bg-amber-500 w-6" : "bg-dark-700"
                  }`}
                />
              ))}
            </div>
            
            <motion.button 
              onClick={next}
              className="p-2 border border-dark-800 hover:border-amber-500 hover:text-amber-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;