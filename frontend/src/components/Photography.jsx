import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';
import { Dialog, DialogContent } from './ui/dialog';
import { photographyGallery } from '../data/mock';
import ScrollReveal from './ScrollReveal';

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="photography" className="py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Camera size={24} className="text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Life beyond the terminal
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Capturing moments from my travels and exploring the world through the lens
            </p>
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {photographyGallery.map((photo, index) => (
            <ScrollReveal key={photo.id} delay={index * 100} direction="up">
              <div
                className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 cursor-pointer hover:shadow-xl bg-white dark:bg-gray-800 break-inside-avoid mb-6"
                onClick={() => setSelectedImage(photo)}
              >
                {/* Image */}
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg mb-1">{photo.title}</h3>
                    <p className="text-blue-300 text-sm">{photo.location}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Lightbox Dialog */}
        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-5xl p-0 bg-white border-2 border-gray-200">
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-gray-700 hover:text-blue-600 transition-colors z-50 bg-white rounded-full p-2"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-blue-300">{selectedImage.location}</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default Photography;