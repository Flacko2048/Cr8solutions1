import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookiePolicyProps {
  onBookingClick: () => void;
}

export function CookiePolicy({ onBookingClick }: CookiePolicyProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header onBookingClick={onBookingClick} />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cookie Policy
          </h1>
          
          <p className="text-gray-600 mb-8">
            Last updated: December 23, 2024
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CR8 Solutions uses cookies for several purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>To enable certain functions of our website</li>
                <li>To provide analytics and track website usage</li>
                <li>To store your preferences and settings</li>
                <li>To deliver relevant advertising</li>
                <li>To improve our services and user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Essential Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Marketing Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for individual users, thereby making them more valuable for publishers and third-party advertisers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Preference Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    These cookies allow our website to remember information that changes the way the site behaves or looks, such as your preferred language or the region you are in.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use third-party services that set their own cookies on your device. These may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Google Analytics for website analytics</li>
                <li>Facebook Pixel for advertising and analytics</li>
                <li>Other social media platforms for sharing and marketing</li>
                <li>Marketing automation and email service providers</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                These third parties have their own privacy policies, and we do not have access to or control over these cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Your Cookie Preferences</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Using the cookie consent banner when you first visit our website</li>
                <li>Adjusting your browser settings to refuse all or some cookies</li>
                <li>Deleting cookies that have already been set</li>
                <li>Using browser plugins that manage cookies</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Please note that if you choose to block or delete cookies, some features of our website may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Browser Settings</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Chrome: chrome://settings/cookies</li>
                <li>Firefox: about:preferences#privacy</li>
                <li>Safari: Preferences &gt; Privacy</li>
                <li>Edge: edge://settings/privacy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Do Not Track Signals</h2>
              <p className="text-gray-700 leading-relaxed">
                Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your online activities tracked. We currently do not respond to browser "Do Not Track" signals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Updates to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about our use of cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Email: privacy@cr8solutions.com<br />
                Phone: [Your Phone Number]<br />
                Address: [Your Business Address]
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer onBookingClick={onBookingClick} />
    </div>
  );
}