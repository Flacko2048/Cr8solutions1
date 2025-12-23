import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactProps {
  onBookingClick: () => void;
}

export function Contact({ onBookingClick }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    problem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you! We will be in touch shortly to discuss your solution.');
      setFormData({ name: '', email: '', phone: '', problem: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-sm uppercase tracking-wider"
          >
            Get started
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
          >
            Your Customer <span className="italic font-serif">flood</span> starts <span className="italic font-serif">right here.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Book a free 30 min call and we'll show you exactly how we'll fill your calendar with new customers.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-6"
          >
            <button
              onClick={onBookingClick}
              className="inline-block px-10 py-5 bg-gray-950 text-white font-semibold rounded-full hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              style={{ backgroundColor: '#030712' }}
            >
              Book a call
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}