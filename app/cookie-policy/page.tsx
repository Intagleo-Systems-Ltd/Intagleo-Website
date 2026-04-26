import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

export const metadata = {
  title: "Cookie Policy | Intagleo Systems",
  description: "How Intagleo Systems uses cookies and how you can manage your preferences.",
};

export default function CookiePolicyPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <PageBackground />
      <Navbar />

      <main className="relative z-10 section-padding pt-32 pb-24 mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">Cookie Policy</h1>
        <p className="text-white/35 text-sm mb-12">Last updated: August 9, 2023</p>

        <div className="space-y-10 text-white/60 leading-relaxed text-sm">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners. Cookies allow a website to recognise your device and remember certain information about your visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">How We Use Cookies</h2>
            <p>Intagleo Systems uses cookies for the following purposes:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li>To ensure our website functions correctly and delivers a consistent experience.</li>
              <li>To understand how visitors interact with our website and to analyse traffic patterns.</li>
              <li>To monitor website performance and identify areas for improvement.</li>
              <li>To enhance security and protect against fraudulent activity.</li>
              <li>To deliver a better user experience by remembering your preferences.</li>
            </ul>
            <p className="mt-4">
              We use both <span className="text-white/80">first-party cookies</span> (set by us directly) and <span className="text-white/80">third-party cookies</span> (set by our trusted partners). First-party cookies are essential for website functionality and do not collect personally identifiable information. Third-party cookies help us understand user interactions and improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Necessary Cookies</h2>
            <p className="mb-4">These cookies are essential for the website to function and cannot be switched off. They are usually set in response to actions you take such as setting your privacy preferences, logging in, or filling in forms.</p>
            <div className="overflow-x-auto rounded-xl border border-white/[0.07]">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/[0.07] bg-white/[0.03]">
                    <th className="text-left px-4 py-3 text-white/60 font-medium">Cookie</th>
                    <th className="text-left px-4 py-3 text-white/60 font-medium">Duration</th>
                    <th className="text-left px-4 py-3 text-white/60 font-medium">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {[
                    { name: "cookieyes-consent", duration: "1 year", purpose: "Remembers users' consent preferences so the banner is not shown on every visit." },
                    { name: "elementor", duration: "Never expires", purpose: "Enables real-time content modifications on the website." },
                    { name: "cookielawinfo-checkbox-necessary", duration: "1 year", purpose: "Records the user's consent for necessary cookies." },
                    { name: "cookielawinfo-checkbox-non-necessary", duration: "1 year", purpose: "Records the user's consent preferences for non-necessary cookies." },
                  ].map((row) => (
                    <tr key={row.name} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-4 py-3 font-mono text-white/70">{row.name}</td>
                      <td className="px-4 py-3 text-white/40 whitespace-nowrap">{row.duration}</td>
                      <td className="px-4 py-3 text-white/50">{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Analytics Cookies</h2>
            <p className="mb-4">These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. All data collected is aggregated and anonymous.</p>
            <div className="overflow-x-auto rounded-xl border border-white/[0.07]">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/[0.07] bg-white/[0.03]">
                    <th className="text-left px-4 py-3 text-white/60 font-medium">Cookie</th>
                    <th className="text-left px-4 py-3 text-white/60 font-medium">Duration</th>
                    <th className="text-left px-4 py-3 text-white/60 font-medium">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {[
                    { name: "_ga", duration: "1 year", purpose: "Google Analytics. Tracks visitor data and site usage anonymously to help us understand how the site is used." },
                    { name: "_gid", duration: "1 day", purpose: "Google Analytics. Creates performance reports and visitor analysis." },
                    { name: "_gat_UA-*", duration: "1 minute", purpose: "Google Analytics. Used to throttle request rate and monitor user behaviour patterns." },
                  ].map((row) => (
                    <tr key={row.name} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-4 py-3 font-mono text-white/70">{row.name}</td>
                      <td className="px-4 py-3 text-white/40 whitespace-nowrap">{row.duration}</td>
                      <td className="px-4 py-3 text-white/50">{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Managing Your Cookie Preferences</h2>
            <p>You can manage your cookie preferences at any time in the following ways:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>
                <span className="text-white/80">Cookie banner:</span> When you first visit our site, you will be presented with a cookie consent banner. You can accept all cookies, reject non-essential cookies, or customise your preferences.
              </li>
              <li>
                <span className="text-white/80">Browser settings:</span> Most browsers allow you to control cookies through their settings. You can set your browser to refuse cookies, or to alert you when cookies are being sent.
              </li>
            </ul>

            <h3 className="text-base font-semibold text-white/80 mt-6 mb-3">Browser-specific instructions</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { browser: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
                { browser: "Safari", url: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" },
                { browser: "Mozilla Firefox", url: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" },
                { browser: "Microsoft Edge", url: "https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge" },
              ].map((b) => (
                <a
                  key={b.browser}
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all text-white/60 hover:text-white text-xs"
                >
                  <svg className="w-3.5 h-3.5 flex-shrink-0 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {b.browser}
                </a>
              ))}
            </div>
            <p className="mt-4 text-white/40">
              Please note that restricting cookies may impact the functionality of our website and some features may not work as intended.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this page periodically to stay informed about how we use cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
            <p>If you have any questions about our use of cookies, please contact our Data Protection Officer:</p>
            <div className="mt-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.07] space-y-1.5">
              <p><span className="text-white/80">Email:</span>{" "}<a href="mailto:dpo@intagleo.com" className="text-[#6366f1] hover:text-[#4f46e5] transition-colors">dpo@intagleo.com</a></p>
              <p><span className="text-white/80">Post:</span> Data Protection Officer, Intagleo Systems UK Limited, 268 Bath Road, Slough, SL1 4DX, United Kingdom</p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
