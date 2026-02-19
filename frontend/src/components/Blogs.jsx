import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { blogs, personalInfo } from '../data/mock';
import { BookOpen } from 'lucide-react';

const Blogs = () => {
  return (
    <section id="blogs" className="py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
              <BookOpen size={24} className="text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recent Blogs
          </h2>
          <div className="w-20 h-1 bg-white/50 mx-auto mb-6"></div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on cloud engineering and DevOps practices
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              className="group p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-white/50 hover:bg-white/20 transition-all duration-300 flex flex-col hover:-translate-y-2"
            >
              {/* Date and Read Time */}
              <div className="flex items-center gap-4 mb-4 text-sm text-white/60">
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
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors leading-tight">
                {blog.title}
              </h3>

              {/* Excerpt */}
              <p className="text-white/70 mb-4 flex-grow leading-relaxed">
                {blog.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    className="bg-white/20 text-white hover:bg-white/30 border border-white/30 text-xs font-semibold"
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
                className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors font-medium text-sm"
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
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            onClick={() => window.open(personalInfo.socialLinks.medium, '_blank')}
          >
            <BookOpen size={20} className="mr-2" />
            Read All Blogs on Medium
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;