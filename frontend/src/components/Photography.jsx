import React, { useState } from 'react';
import { Camera, MapPin, X } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent } from './ui/dialog';
import { photographyGallery } from '../data/mock';

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="photography" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Camera size={32} className="text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Photography & Travel
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Capturing moments from my travels and exploring the world through the lens
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photographyGallery.map((photo) => (
            <Card
              key={photo.id}
              className="group overflow-hidden border-slate-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{photo.title}</h3>
                    <div className="flex items-center gap-1 text-white/90 text-sm">
                      <MapPin size={14} />
                      <span>{photo.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                  {photo.category}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Dialog */}
        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-5xl p-0 bg-transparent border-0">
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-slate-300 transition-colors z-50"
                  aria-label="Close"
                >
                  <X size={32} />
                </button>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <div className="flex items-center gap-2 text-white/90">
                    <MapPin size={16} />
                    <span>{selectedImage.location}</span>
                    <span className="mx-2">•</span>
                    <span>{selectedImage.category}</span>
                  </div>
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