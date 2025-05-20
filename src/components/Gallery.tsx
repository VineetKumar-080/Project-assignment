import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Classic men's haircut",
    category: "haircut"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Beard trim and styling",
    category: "beard"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Barber shop interior",
    category: "shop"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Vintage barber chair",
    category: "shop"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/1570806/pexels-photo-1570806.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Haircut in progress",
    category: "haircut"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Beard grooming",
    category: "beard"
  },
];

const categories = ["all", "haircut", "beard", "shop"];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<null | number>(null);
  const [category, setCategory] = useState("all");

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [galleryRef, galleryInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredImages = category === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === category);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="gallery" className="section bg-dark-950">
      <div className="container-fluid">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-amber-500 uppercase tracking-wider font-medium">Our Gallery</span>
          <h2 className="section-heading mt-2">Our Finest <span className="text-amber-500">Work</span></h2>
          <p className="text-gray-400 mt-4">
            Browse through our gallery to see examples of our work and get inspiration for your next visit.
          </p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 text-sm uppercase tracking-wider ${
                  category === cat 
                    ? 'bg-amber-500 text-black' 
                    : 'bg-dark-900 text-gray-300 hover:bg-dark-800'
                } transition-colors`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          ref={galleryRef}
          variants={containerVariants}
          initial="hidden"
          animate={galleryInView ? "visible" : "hidden"}
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden cursor-pointer aspect-square group"
              variants={itemVariants}
              onClick={() => setSelectedImage(image.id)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-medium">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-white p-2 bg-dark-900 rounded-full"
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>
            <motion.div
              className="relative max-w-4xl max-h-[80vh] w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryImages.find(img => img.id === selectedImage)?.src} 
                alt={galleryImages.find(img => img.id === selectedImage)?.alt}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;