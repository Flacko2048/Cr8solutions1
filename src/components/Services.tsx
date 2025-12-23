import { Search, TrendingUp, Mail, Share2, PenTool, BarChart3, Target, Zap, Users, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const solutions = [
  {
    icon: Target,
    title: 'Precision Targeting',
    description: 'Stop wasting budget on the wrong audience. We identify and reach your ideal clients with laser-focused strategies.',
    color: 'bg-blue-100 text-blue-600',
    colSpan: 'md:col-span-2',
    bg: 'bg-blue-50'
  },
  {
    icon: Zap,
    title: 'High-Impact Campaigns',
    description: 'We design campaigns that cut through the noise, grab attention, and compel your prospects to take action.',
    color: 'bg-amber-100 text-amber-600',
    colSpan: 'md:col-span-1',
    bg: 'bg-amber-50'
  },
  {
    icon: Users,
    title: 'Customer Retention',
    description: 'It’s not just about new leads. We help you nurture relationships to turn one-time buyers into loyal advocates.',
    color: 'bg-green-100 text-green-600',
    colSpan: 'md:col-span-3',
    bg: 'bg-green-50'
  }
];

const services = [
  {
    icon: Search,
    title: 'SEO & Visibility',
    description: 'Dominate search results so customers find you exactly when they need your solution.',
  },
  {
    icon: Share2,
    title: 'Social Media Growth',
    description: 'Build authority and trust where your audience spends their time.',
  },
  {
    icon: TrendingUp,
    title: 'Paid Advertising',
    description: 'Scalable client acquisition systems with measurable ROI from day one.',
  },
  {
    icon: PenTool,
    title: 'Content Strategy',
    description: 'Educational content that positions you as the market leader and solves client problems.',
  },
  {
    icon: Mail,
    title: 'Email Automation',
    description: 'Automated follow-ups that nurture leads while you sleep.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'No more guessing. We track every dollar so you know exactly what’s working.',
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-gray-50 relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-100/40 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-purple-100/40 to-transparent rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            How we can help you grow
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Most agencies focus on "vanity metrics" like likes and impressions. 
            <span className="font-semibold text-gray-900"> We focus on what actually matters.</span>
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 * 0.1 }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-[#F5F1E8] border border-[#E8E2D5] shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform shadow-md">
              <Search className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10">Ads To Get To The Top Of Google</h3>
            <p className="text-gray-600 leading-relaxed relative z-10 text-lg">Show up when locals search for what you offer</p>
            
            {/* Decorative blob on hover */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity opacity-0 group-hover:opacity-100"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 * 0.1 }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-[#F5F1E8] border border-[#E8E2D5] shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform shadow-md">
              <Share2 className="w-10 h-10 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10">FB/IG Ads To Reach EVERY Local Client</h3>
            <p className="text-gray-600 leading-relaxed relative z-10 text-lg">Be everywhere. Google, Instagram, Facebook, YouTube...</p>
            
            {/* Decorative blob on hover */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity opacity-0 group-hover:opacity-100"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 2 * 0.1 }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-[#F5F1E8] border border-[#E8E2D5] shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform shadow-md">
              <TrendingUp className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10">Reach Number 1 On Google For Free</h3>
            <p className="text-gray-600 leading-relaxed relative z-10 text-lg">Be the #1 on Google Maps organically.</p>
            
            {/* Decorative blob on hover */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity opacity-0 group-hover:opacity-100"></div>
          </motion.div>
        </div>

        {/* Dark Section */}
        <div className="bg-[#F5F1E8] rounded-[3rem] p-8 md:p-20 overflow-hidden relative">
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-gray-600 text-sm uppercase tracking-wider mb-4">How we work</p>
              <h3 className="text-4xl md:text-6xl text-gray-900 mb-4">
                It's <span className="italic font-serif">Straightforward</span>
              </h3>
            </div>

            {/* Three Steps */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto relative">
              {/* Connecting Lines - Desktop Only */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5">
                <svg className="w-full h-24" viewBox="0 0 800 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M 100 50 Q 200 20, 300 50" stroke="#D1C7B7" strokeWidth="2" fill="none" />
                  <path d="M 500 50 Q 600 20, 700 50" stroke="#D1C7B7" strokeWidth="2" fill="none" />
                </svg>
              </div>

              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="7" height="7" fill="#1F2937" />
                    <rect x="14" y="3" width="7" height="7" fill="#1F2937" />
                    <rect x="3" y="14" width="7" height="7" fill="#1F2937" />
                    <rect x="14" y="14" width="7" height="7" fill="#1F2937" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Plan Your Success</h4>
                <p className="text-gray-600 leading-relaxed">
                  We figure out who your customers are and what they want to hear before we start
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="7" y="2" width="10" height="20" rx="2" fill="#1F2937" />
                    <rect x="9" y="4" width="6" height="1" fill="#F5F1E8" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Handle Everything Daily</h4>
                <p className="text-gray-600 leading-relaxed">
                  We create ads, schedule them, and manage all your campaigns so you don't have to
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="16" height="16" rx="2" fill="#1F2937" />
                    <line x1="7" y1="9" x2="17" y2="9" stroke="#F5F1E8" strokeWidth="1.5" />
                    <line x1="7" y1="12" x2="17" y2="12" stroke="#F5F1E8" strokeWidth="1.5" />
                    <line x1="7" y1="15" x2="14" y2="15" stroke="#F5F1E8" strokeWidth="1.5" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Track What Works</h4>
                <p className="text-gray-600 leading-relaxed">
                  We see which posts bring in customers and do more of what's working
                </p>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}