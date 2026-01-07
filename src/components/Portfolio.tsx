import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CheckCircle, X } from 'lucide-react';
import logoImage from 'figma:asset/9c2d3c19be82e59be5ce9a5868cc83ebf06e3902.png';
import logoFallback from 'figma:asset/83f1a68c6083c486041008246f28c8d84260cf87.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'E-commerce Revolution',
    category: 'SEO & PPC',
    result: '300% increase in online sales',
    image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc2NjE5ODA3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    metrics: ['300% Sales', '2.5M Impressions', '180% ROI']
  },
  {
    title: 'Brand Awareness Campaign',
    category: 'Social Media',
    result: '5M+ social media reach',
    image: 'https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjYyODgxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    metrics: ['5M Reach', '850K Engagement', '45% Growth']
  },
  {
    title: 'Lead Generation Success',
    category: 'Content Marketing',
    result: '10,000+ qualified leads',
    image: 'https://images.unsplash.com/photo-1763191213523-1489179a1088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjYyNTY5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    metrics: ['10K Leads', '35% Conversion', '250% ROI']
  }
];

interface PortfolioProps {
  onBookingClick: () => void;
}

export function Portfolio({ onBookingClick }: PortfolioProps) {
  return (
    <section id="portfolio" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 uppercase tracking-wider text-sm mb-4"
          >
            The Difference
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Why choose Cr8solutions?
          </motion.h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto">
          {/* Other Agencies - Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-400 mb-2">Other Agencies</h3>
            </div>
            
            <div className="space-y-6">
              {[
                'Generic content templates',
                'Monthly reporting only',
                'Separate teams for different platforms',
                'Long-term contracts required',
                'One-size-fits-all approach'
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50/50"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center mt-1">
                    <X className="w-4 h-4 text-gray-600" />
                  </div>
                  <p className="text-lg text-gray-500">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CR8 Solutions - Right Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center mb-4">
                <ImageWithFallback
                  src={logoImage}
                  fallback={logoFallback}
                  className="h-32 w-auto object-contain"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              {[
                "If it doesn't work, we refund you",
                "Start small and see if we're a good fit",
                'Facebook, Instagram, Google, we cover it all',
                'Stay flexible - no long-term commitments required',
                "Regular calls to review what's working"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-blue-50/50 border border-blue-100/50"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white fill-white" />
                  </div>
                  <p className="text-lg text-gray-900 font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA at bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to Create Solutions?
          </p>
          <button 
            onClick={onBookingClick}
            className="px-8 py-4 bg-gray-950 text-white font-semibold rounded-2xl hover:bg-black transition-all shadow-xl hover:shadow-2xl inline-flex items-center gap-2 group"
            style={{ backgroundColor: '#030712' }}
          >
            Book a call
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}