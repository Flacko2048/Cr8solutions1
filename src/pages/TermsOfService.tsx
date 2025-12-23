import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TermsOfServiceProps {
  onBookingClick: () => void;
}

export function TermsOfService({ onBookingClick }: TermsOfServiceProps) {
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
            Terms of Service
          </h1>
          
          <p className="text-gray-600 mb-8">
            Last updated: December 23, 2024
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using CR8 Solutions' services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
              <p className="text-gray-700 leading-relaxed">
                CR8 Solutions provides marketing and business growth services including but not limited to SEO, PPC advertising, social media marketing, content marketing, and strategic consulting. The specific services provided will be outlined in individual service agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Service Guarantee</h2>
              <p className="text-gray-700 leading-relaxed">
                We stand behind our work with a results guarantee as outlined in your specific service agreement. If we don't deliver the agreed-upon results within the specified timeframe, you may be eligible for a refund as detailed in your service agreement. Terms and conditions apply, and each guarantee is subject to the client's compliance with agreed-upon requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Client Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide accurate and complete information</li>
                <li>Respond to our requests for information in a timely manner</li>
                <li>Grant necessary access to accounts and platforms required for service delivery</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Pay all fees as agreed in your service agreement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                Payment terms will be specified in your individual service agreement. Unless otherwise stated, services are billed monthly in advance. Late payments may result in suspension of services and may incur additional fees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content, materials, and deliverables created by CR8 Solutions remain our intellectual property until full payment is received. Upon full payment, you receive a license to use the materials for their intended purpose. We retain the right to use project work in our portfolio and marketing materials unless otherwise agreed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Confidentiality</h2>
              <p className="text-gray-700 leading-relaxed">
                Both parties agree to maintain confidentiality of proprietary information shared during the course of our business relationship. This obligation continues after termination of services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                Either party may terminate services with written notice as specified in the service agreement. You remain responsible for payment of all services rendered up to the termination date. Our no long-term commitment policy allows flexibility as outlined in individual agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                To the maximum extent permitted by law, CR8 Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modifications to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify clients of significant changes via email or through our website. Continued use of our services after changes constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Email: legal@cr8solutions.com<br />
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