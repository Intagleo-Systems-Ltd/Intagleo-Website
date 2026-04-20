import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

export const metadata = {
  title: "Privacy Policy | Intagleo Systems",
  description: "How Intagleo Systems UK Limited collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <PageBackground />
      <Navbar />

      <main className="relative z-10 section-padding pt-32 pb-24 mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">Privacy Policy</h1>
        <p className="text-white/35 text-sm mb-12">Last updated: August 9, 2023</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-10 text-white/60 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Who We Are</h2>
            <p>
              Intagleo Systems UK Limited (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is the data controller responsible for your personal data.
              We are registered at 268 Bath Road, Slough, SL1 4DX, United Kingdom, and operate the website at{" "}
              <a href="https://www.intagleo.com" className="text-[#e8341c] hover:text-[#ff5540] transition-colors">www.intagleo.com</a>.
            </p>
            <p className="mt-3">
              If you have any questions about this policy or how we handle your data, please contact our Data Protection Officer
              at <a href="mailto:dpo@intagleo.com" className="text-[#e8341c] hover:text-[#ff5540] transition-colors">dpo@intagleo.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Legal Basis for Processing</h2>
            <p>We only process your personal information within the boundaries of applicable Data Protection Law. We will process your data when:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li>It is necessary to fulfil a contract we have with you, or to take steps at your request before entering into a contract.</li>
              <li>We are required to do so by law.</li>
              <li>You have given your consent for a specific purpose.</li>
              <li>We have a legitimate interest that does not override your fundamental rights and freedoms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. What Data We Collect</h2>
            <p>We may collect and process the following categories of personal data about you:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li><span className="text-white/80">Identity data:</span> first name, last name, username, or similar identifier.</li>
              <li><span className="text-white/80">Contact data:</span> billing address, delivery address, email address, and telephone numbers.</li>
              <li><span className="text-white/80">Technical data:</span> IP address, browser type and version, time zone, operating system, and other technology on the devices you use to access our website.</li>
              <li><span className="text-white/80">Profile data:</span> your username and password, preferences, feedback, and survey responses.</li>
              <li><span className="text-white/80">Usage data:</span> information about how you use our website and services, including clickstream behaviour.</li>
              <li><span className="text-white/80">Marketing and communications data:</span> your preferences in receiving marketing from us and your communication preferences.</li>
              <li><span className="text-white/80">Aggregated data:</span> statistical or demographic data for any purpose. Aggregated data may be derived from your personal data but is not considered personal data in law.</li>
            </ul>
            <p className="mt-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] text-white/50">
              We do <strong className="text-white/70">not</strong> collect, store, or use special category data about you, such as health information, biometric data, racial or ethnic origin, political opinions, religious beliefs, or trade union membership.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. How We Collect Your Data</h2>
            <p>We collect data through:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li><span className="text-white/80">Direct interactions:</span> information you provide by filling in forms, corresponding with us by email or phone, or otherwise contacting us.</li>
              <li><span className="text-white/80">Automated technologies:</span> as you interact with our website, we may automatically collect technical data using cookies, server logs, and similar technologies. Please see our <a href="/cookie-policy" className="text-[#e8341c] hover:text-[#ff5540] transition-colors">Cookie Policy</a> for further details.</li>
              <li><span className="text-white/80">Publicly available sources:</span> such as Companies House, credit reference agencies, and publicly accessible social media profiles.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. How We Use Your Data</h2>
            <p>We use your personal data for the following purposes:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li>To register you as a new customer or enquiry.</li>
              <li>To process and deliver our services, including managing payments and fees.</li>
              <li>To manage our relationship with you, including notifying you of changes to our terms or policies.</li>
              <li>To administer and protect our business and website, including troubleshooting, data analysis, testing, and security.</li>
              <li>To deliver relevant website content and measure the effectiveness of our communications.</li>
              <li>To use data analytics to improve our website, products, services, and marketing strategies.</li>
              <li>To make suggestions and recommendations to you about services that may be of interest.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Data Sharing</h2>
            <p>
              We do not share your personal data with third parties except with group subsidiaries and only where necessary to deliver our services. We require all third parties to respect the security of your data and to treat it in accordance with the law.
            </p>
            <p className="mt-3">
              We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process it for specified purposes and in accordance with our instructions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements.
            </p>
            <p className="mt-3">
              To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the data, the potential risk of harm from unauthorised use or disclosure, the purposes for which we process your data, and the applicable legal requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Your Rights</h2>
            <p>Under data protection law, you have the following rights in relation to your personal data:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li><span className="text-white/80">Right to access:</span> request a copy of the personal data we hold about you.</li>
              <li><span className="text-white/80">Right to rectification:</span> request correction of inaccurate or incomplete data.</li>
              <li><span className="text-white/80">Right to erasure:</span> request deletion of your personal data where there is no good reason for us to continue processing it.</li>
              <li><span className="text-white/80">Right to restrict processing:</span> request that we suspend processing of your personal data in certain circumstances.</li>
              <li><span className="text-white/80">Right to data portability:</span> request transfer of your personal data to you or a third party.</li>
              <li><span className="text-white/80">Right to object:</span> object to processing of your personal data where we are relying on a legitimate interest.</li>
              <li><span className="text-white/80">Rights related to automated decision-making:</span> request human review of any automated decision that significantly affects you.</li>
            </ul>
            <p className="mt-4">
              All requests are free of charge and will be fulfilled within 30 days. To exercise any of these rights, please contact us at{" "}
              <a href="mailto:dpo@intagleo.com" className="text-[#e8341c] hover:text-[#ff5540] transition-colors">dpo@intagleo.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users. This helps us provide a good experience and allows us to improve our site. For full details of every cookie we use, please see our{" "}
              <a href="/cookie-policy" className="text-[#e8341c] hover:text-[#ff5540] transition-colors">Cookie Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way, altered, or disclosed. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Changes to This Policy</h2>
            <p>
              We reserve the right to update this privacy policy at any time. Any changes we make will be posted on this page with an updated revision date. Where appropriate, we will notify you by email. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Contact & Complaints</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us:</p>
            <div className="mt-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.07] space-y-1.5">
              <p><span className="text-white/80">Email:</span>{" "}<a href="mailto:dpo@intagleo.com" className="text-[#e8341c] hover:text-[#ff5540] transition-colors">dpo@intagleo.com</a></p>
              <p><span className="text-white/80">Post:</span> Data Protection Officer, Intagleo Systems UK Limited, 268 Bath Road, Slough, SL1 4DX, United Kingdom</p>
            </div>
            <p className="mt-4">
              You have the right to make a complaint at any time to the Information Commissioner&apos;s Office (ICO), the UK supervisory authority for data protection issues at{" "}
              <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#e8341c] hover:text-[#ff5540] transition-colors">www.ico.org.uk</a>.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
