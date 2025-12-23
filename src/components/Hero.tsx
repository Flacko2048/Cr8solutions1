import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onBookingClick: () => void;
}

export function Hero({ onBookingClick }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-1 gap-16 items-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight italic leading-tight">
              More sales. <br />
              More clients. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 not-italic">
                Guaranteed.
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Do what you do best, while we put your business in front of locals actively searching for your services.
            </p>

            <div className="space-y-4 pt-2">
              {[
                "Stop worrying about where your next client is coming from.",
                "Eliminate the guesswork with our data-driven strategies.",
                "Focus on your expertise while we scale your reach."
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{text}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBookingClick}
                className="px-8 py-4 bg-gray-950 text-white font-semibold rounded-2xl hover:bg-black transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group"
                style={{ backgroundColor: '#030712' }}
              >
                Get Your Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
            
            <div className="flex items-center gap-8 pt-8 border-t border-gray-100">
              {[
                { label: "Happy Clients", value: "250+" },
                { label: "Success Rate", value: "98%" },
                { label: "Years Exp.", value: "15+" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                  <span className="text-sm text-gray-500 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}