export default function Privacy() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm text-muted-foreground">Last Updated: December 1, 2025</p>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, phone number, and other contact information</li>
              <li>Payment and billing information</li>
              <li>Project details and communications</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Personalize your experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Sharing and Third Parties</h2>
            <p>
              We may share your information with third parties for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Analytics:</strong> PostHog for user behavior analysis</li>
              <li><strong>Marketing:</strong> Google Analytics and advertising partners</li>
              <li><strong>Customer Support:</strong> Intercom for communication</li>
              <li><strong>Data Sales:</strong> We reserve the right to sell anonymized, aggregated data to third parties for marketing and research purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to collect and track information. 
              You can control cookie preferences through your browser settings, but disabling cookies 
              may limit functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights (California Residents)</h2>
            <p>
              Under the California Consumer Privacy Act (CCPA), California residents have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Know what personal information is collected</li>
              <li>Know if personal information is sold or disclosed and to whom</li>
              <li>Request deletion of personal information</li>
              <li>Opt-out of the sale of personal information</li>
              <li>Non-discrimination for exercising CCPA rights</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at privacy@dobeu.cloud
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. SMS Communication Opt-In</h2>
            <p>
              By providing your phone number and opting in, you consent to receive SMS messages 
              from DOBEU regarding your account, projects, and promotional offers. Message and 
              data rates may apply. You can opt out at any time by replying STOP to any message.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your information. However, 
              no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 18. We do not knowingly 
              collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to Privacy Policy</h2>
            <p>
              We may update this policy periodically. We will notify you of material changes 
              by posting the new policy on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Us</h2>
            <p>
              For questions about this Privacy Policy, contact us at:
              <br />
              Email: privacy@dobeu.cloud
              <br />
              Address: [Your Business Address]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
