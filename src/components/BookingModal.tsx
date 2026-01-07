import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    businessEmail: '',
    countryCode: '+1',
    phoneNumber: '',
    website: '',
    companyName: '',
    canAfford: '',
    currentProblem: '',
    solveBy: ''
  });

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you! We will contact you within 48 hours.');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full my-8 pointer-events-auto relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="sticky top-4 right-4 ml-auto w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10 mr-4 mt-4"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Left Column - Heading */}
                <div className="bg-gray-50 p-8 lg:p-12 flex flex-col justify-start space-y-8">
                  <Logo />
                  
                  <div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                      Let's<br />
                      Make<br />
                      Money
                    </h2>
                    <div className="space-y-2 text-gray-600 leading-relaxed">
                      <p>Fill out the form below and we will contact you within 48 hours to find out if we can help you.</p>
                      <p className="font-medium">No costs, no obligations, no annoying sales pitch. Guaranteed.</p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Form */}
                <div className="p-8 lg:p-12">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-700 mb-2">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="businessEmail"
                        name="businessEmail"
                        value={formData.businessEmail}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className="w-20 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all text-gray-900"
                        />
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          required
                          className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                          placeholder="(555) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                        Website <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                        placeholder="www.yoursite.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Can you afford to pay $997 USD for our 30-day paid trial? <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="canAfford"
                            value="yes"
                            checked={formData.canAfford === 'yes'}
                            onChange={handleChange}
                            required
                            className="w-4 h-4 text-gray-900 focus:ring-gray-900"
                          />
                          <span className="text-gray-700">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="canAfford"
                            value="no"
                            checked={formData.canAfford === 'no'}
                            onChange={handleChange}
                            required
                            className="w-4 h-4 text-gray-900 focus:ring-gray-900"
                          />
                          <span className="text-gray-700">No</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="currentProblem" className="block text-sm font-medium text-gray-700 mb-2">
                        What is the current problem you're experiencing?
                      </label>
                      <textarea
                        id="currentProblem"
                        name="currentProblem"
                        value={formData.currentProblem}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none resize-none transition-all"
                        placeholder="Describe your current challenges..."
                      />
                    </div>

                    <div>
                      <label htmlFor="solveBy" className="block text-sm font-medium text-gray-700 mb-2">
                        By when do you want to solve this problem? <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="solveBy"
                        name="solveBy"
                        value={formData.solveBy}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                        placeholder="e.g., Within 3 months"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-black transition-all shadow-lg hover:shadow-xl"
                      style={{ backgroundColor: '#111827' }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}