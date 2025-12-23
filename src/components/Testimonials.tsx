import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechStart Inc.',
    content: 'Working with this team transformed our digital presence. Our leads increased by 350% in just 3 months.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1554384645-13eab165c24b?w=100&h=100&fit=crop'
  },
  {
    name: 'Michael Chen',
    role: 'Founder, GreenLeaf Co.',
    content: 'The ROI speaks for itself. Best marketing investment we\'ve ever made. Highly professional and results-driven.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Dir., Urban Spaces',
    content: 'Finally, a team that understands our business goals. They don\'t just execute—they strategize with us.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop'
  }
];

const faqs = [
  {
    question: "Can you show me examples of other businesses like mine that you've helped?",
    answer: "Yes, feel free to take a look at our case studies. We've worked with businesses across various industries including plumbing, HVAC, landscaping, dental practices, and more. Each case study shows the specific strategies we used and the results we achieved."
  },
  {
    question: "What exactly are you going to do for my business?",
    answer: "We create and manage targeted ad campaigns on Google, Facebook, and Instagram to get your business in front of local customers actively searching for your services. We handle everything from strategy and ad creation to daily optimization and reporting, so you can focus on running your business."
  },
  {
    question: "How long before I see results?",
    answer: "Most clients start seeing increased inquiries within the first 2-4 weeks. However, we optimize campaigns continuously, and results typically improve significantly after 60-90 days as we gather data and refine our approach based on what's working best for your specific business."
  },
  {
    question: "What if it doesn't work for my business?",
    answer: "That's why we offer a guarantee. If you don't see results within the agreed timeframe, we'll refund you. We're confident in our approach because we've seen it work across different industries and business types."
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer: "No. We believe in earning your business every month. While we recommend at least 90 days to see optimal results, you're not locked into a long-term contract. You can start small and scale as you see results."
  },
  {
    question: "How much does it cost?",
    answer: "Our pricing depends on your goals, your market, and the platforms we'll be using. We'll discuss your budget during our free strategy call and create a custom plan that makes sense for your business. Investment typically starts around $1,500-$2,500 per month for management, plus your ad spend."
  }
];

export function Testimonials() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-sm uppercase tracking-wider mb-4"
          >
            Questions
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Frequently Asked <span className="italic font-serif">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-5 h-5 text-white" />
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6 pt-2">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}