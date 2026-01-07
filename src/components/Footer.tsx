import { Facebook, Linkedin } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { useState } from 'react';

interface FooterProps {
  onBookingClick: () => void;
}

export function Footer({ onBookingClick }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter signup:', email);
      alert(`Thank you for subscribing! We'll send updates to ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-950 text-gray-300 py-8 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
               <Logo variant="inverted" />
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed text-sm">
              Stop guessing and start growing with custom solutions tailored to your specific business problem.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=61585889685893" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/cr8solutions" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Company</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={(e) => { e.preventDefault(); handleSectionClick('services'); }} 
                  className="hover:text-blue-400 transition-colors text-left text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => { e.preventDefault(); handleSectionClick('faq'); }} 
                  className="hover:text-blue-400 transition-colors text-left text-sm"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={onBookingClick} 
                  className="hover:text-blue-400 transition-colors text-left text-sm"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Stay Ahead</h4>
            <p className="text-gray-400 mb-3 text-xs">
              Join 5,000+ business owners receiving our weekly growth tips.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-3 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-xs"
              />
              <button className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs font-semibold" onClick={handleNewsletterSubmit}>
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
            <p className="text-gray-500">
              © {currentYear} Cr8solutions. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="text-gray-500 hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" onClick={() => window.scrollTo(0, 0)} className="text-gray-500 hover:text-blue-400 transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" onClick={() => window.scrollTo(0, 0)} className="text-gray-500 hover:text-blue-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}