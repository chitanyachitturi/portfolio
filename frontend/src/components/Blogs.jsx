import React from 'react';
import { Calendar, Clock, ExternalLink, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { blogs, personalInfo } from '../data/mock';

const Blogs = () => {
  return (
    <section id="blogs" className="py-20 md:py-32 bg-black relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Recent Blogs
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on cloud engineering and DevOps practices
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              className="group p-6 bg-gradient-to-br from-gray-900 to-black border-orange-500/20 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 flex flex-col"
            >
              {/* Date and Read Time */}
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{blog.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors leading-tight">
                {blog.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-400 mb-4 flex-grow leading-relaxed">
                {blog.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    className="bg-orange-500/10 text-orange-500 border border-orange-500/30 hover:bg-orange-500/20 text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Read More Link */}
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors font-medium text-sm"
              >
                Read More
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70"
            onClick={() => window.open(personalInfo.socialLinks.medium, '_blank')}
          >
            <ExternalLink size={20} className="mr-2" />
            Read All Blogs on Medium
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;