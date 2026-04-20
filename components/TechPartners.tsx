"use client";

const partners = [
  {
    name: "AWS",
    logo: (
      <svg viewBox="0 0 60 36" className="h-7 w-auto" fill="none">
        <path d="M17 22.5c0 .5.1 1 .2 1.3.1.3.3.7.5 1 .1.1.1.2.1.4 0 .2-.1.3-.4.5l-1 .7c-.2.1-.3.1-.4.1-.2 0-.3-.1-.5-.2-.2-.3-.4-.5-.5-.8-.1-.3-.3-.6-.5-1-1.2 1.4-2.6 2-4.4 2-1.3 0-2.3-.4-3-.1-.7-.7-1.1-1.7-1.1-2.9 0-1.3.5-2.3 1.4-3.1.9-.8 2.1-1.1 3.6-1.1.5 0 1 0 1.6.1.6.1 1.1.2 1.7.3v-1c0-1.1-.2-1.9-.7-2.4-.5-.5-1.2-.7-2.3-.7-1 0-1.9.2-2.9.5-.4.1-.8.3-1 .3-.4 0-.5-.3-.5-.9v-.9c0-.4.1-.7.2-.9.1-.2.4-.3.7-.5.9-.4 2-.8 3.1-.8 2.4 0 4.2.5 5.3 1.6 1.1 1.1 1.7 2.8 1.7 5.1v6.7h.1zm-6.1 2.3c.5 0 1-.1 1.5-.3.5-.2 1-.5 1.4-.9.2-.3.4-.6.5-1 .1-.3.1-.8.1-1.3v-.7c-.4-.1-.9-.2-1.4-.2-.5-.1-.9-.1-1.3-.1-.9 0-1.6.2-2.1.6-.5.4-.7.9-.7 1.6 0 .7.2 1.2.5 1.5.4.5.8.8 1.5.8zm11.4 1.5c-.4 0-.7-.1-.9-.3-.2-.1-.3-.4-.5-.9l-3.7-12.3c-.1-.5-.2-.8-.2-1 0-.4.2-.6.6-.6h2.4c.5 0 .8.1.9.3.2.1.3.4.4.9l2.7 11.3 2.6-11.3c.1-.5.2-.8.4-.9.2-.1.5-.3.9-.3h1.9c.5 0 .8.1.9.3.2.1.3.4.4.9l2.6 11.4 2.8-11.4c.1-.5.3-.8.4-.9.2-.1.5-.3.9-.3h2.3c.4 0 .6.2.6.6 0 .1 0 .3-.1.4l-.1.6-3.3 11.4c-.1.5-.3.8-.5.9-.2.1-.5.3-.9.3h-2c-.5 0-.8-.1-.9-.3-.2-.1-.3-.4-.4-.9l-2.6-11-2.6 11c-.1.5-.3.8-.4.9-.2.1-.5.3-.9.3h-2zm17.6.4c-1 0-2-.1-2.9-.4-.9-.2-1.6-.5-2.1-.7-.3-.2-.5-.4-.6-.6-.1-.2-.1-.4-.1-.6v-1c0-.6.2-.9.6-.9.2 0 .3 0 .4.1.1 0 .3.1.6.3.8.3 1.6.6 2.5.8.9.2 1.7.3 2.5.3 1.3 0 2.3-.2 3-.7.7-.5 1.1-1.1 1.1-2 0-.6-.2-1.1-.6-1.5-.4-.4-1.1-.7-2.2-1.1l-3.1-1c-1.6-.5-2.7-1.2-3.4-2.2-.7-.9-1.1-2-1.1-3.1 0-.9.2-1.7.6-2.4.4-.7.9-1.3 1.6-1.7.7-.5 1.4-.8 2.2-1 .8-.3 1.7-.4 2.7-.4.5 0 1 0 1.5.1.5.1 1 .2 1.5.3.5.1.9.3 1.3.4.4.1.7.3.9.4.3.2.5.4.6.6.1.2.2.5.2.8v.9c0 .6-.2.9-.6.9-.2 0-.5-.1-1-.3-1.2-.6-2.6-.9-4.1-.9-1.2 0-2.1.2-2.7.6-.6.4-1 1-.1 1.9 0 .6.2 1.1.6 1.5.4.4 1.3.8 2.4 1.1l3 1c1.5.5 2.6 1.2 3.3 2.1.7.9 1 1.9 1 3 0 .9-.2 1.8-.6 2.5-.4.7-.9 1.4-1.6 1.9-.7.5-1.5 1-2.5 1.2-1 .4-2 .5-3.2.5z" fill="#FF9900"/>
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    logo: (
      <svg viewBox="0 0 120 28" className="h-6 w-auto" fill="none">
        <path d="M24.5 14a10.5 10.5 0 11-21 0 10.5 10.5 0 0121 0z" fill="none"/>
        <path d="M14 5.5C9.3 5.5 5.5 9.3 5.5 14S9.3 22.5 14 22.5c2.5 0 4.7-1 6.3-2.6l-2.1-2.1C17.1 18.9 15.6 19.5 14 19.5c-3 0-5.5-2.5-5.5-5.5S11 8.5 14 8.5c1.4 0 2.7.5 3.6 1.4l2.1-2.1C18.3 6.4 16.2 5.5 14 5.5z" fill="#EA4335"/>
        <path d="M22.4 14.3h-8.7v3h5c-.5 2-2 3.5-5 3.5-3 0-5.5-2.5-5.5-5.5S10.7 9.8 14 9.8c1.4 0 2.6.5 3.5 1.3l2.2-2.2C18.3 7.5 16.3 6.8 14 6.8c-4 0-7.2 3.3-7.2 7.2 0 4 3.3 7.2 7.2 7.2 3.2 0 6.4-2.3 6.4-7.2 0-.5-.1-.9-.2-1.2l.2.3z" fill="#4285F4"/>
        <path d="M6.8 11.4l-2.5-1.8C5.3 7.8 7 6.3 9.1 5.5L9.7 8.5C8.5 9 7.5 10.1 6.8 11.4z" fill="#FBBC05"/>
        <path d="M14 6.8c1.5 0 2.9.5 4 1.4l2.1-2.1C18.5 4.8 16.4 4 14 4 10.2 4 6.9 6 5 9l2.5 1.8C8.5 8 11.1 6.8 14 6.8z" fill="#EA4335"/>
        <path d="M4.3 14c0-.7.1-1.3.3-1.9L2.1 10.3C1.5 11.4 1.2 12.7 1.2 14c0 1.3.3 2.5.8 3.6l2.5-1.9C4.4 15.2 4.3 14.6 4.3 14z" fill="#FBBC05"/>
        <path d="M14 21.2c-2.8 0-5.3-1.1-7.1-2.8l-2.4 1.8C6.6 22.5 10.1 24 14 24c2.3 0 4.4-.6 6.3-1.7l-2.2-2.1c-1.1.6-2.6 1-4.1 1z" fill="#34A853"/>
        <text x="28" y="20" fill="white" fontSize="13" fontFamily="Arial" fontWeight="500" opacity="0.75">Google Cloud</text>
      </svg>
    ),
  },
  {
    name: "Microsoft Azure",
    logo: (
      <svg viewBox="0 0 130 28" className="h-6 w-auto" fill="none">
        <path d="M4 22l7.5-13 4 7-4 2.5 6.5 3.5H4z" fill="#0078D4"/>
        <path d="M9.5 8l6 3-8 11 11-3.5L9.5 8z" fill="#0078D4" opacity="0.75"/>
        <text x="28" y="20" fill="white" fontSize="12" fontFamily="Arial" fontWeight="500" opacity="0.75">Microsoft Azure</text>
      </svg>
    ),
  },
  {
    name: "Vercel",
    logo: (
      <svg viewBox="0 0 80 28" className="h-6 w-auto" fill="none">
        <path d="M14 4L26 26H2L14 4z" fill="white" opacity="0.85"/>
        <text x="32" y="20" fill="white" fontSize="14" fontFamily="Arial" fontWeight="600" opacity="0.75">Vercel</text>
      </svg>
    ),
  },
  {
    name: "Supabase",
    logo: (
      <svg viewBox="0 0 100 28" className="h-6 w-auto" fill="none">
        <path d="M12 3l6 10.5H8L12 3z" fill="#3ECF8E"/>
        <path d="M12 3l-4 10.5 6 6V3h-2z" fill="#3ECF8E" opacity="0.55"/>
        <text x="24" y="20" fill="white" fontSize="13" fontFamily="Arial" fontWeight="500" opacity="0.75">Supabase</text>
      </svg>
    ),
  },
  {
    name: "Stripe",
    logo: (
      <svg viewBox="0 0 80 28" className="h-6 w-auto" fill="none">
        <rect x="2" y="4" width="20" height="20" rx="4" fill="#635BFF"/>
        <path d="M12 14.5c0-.8.7-1.2 1.7-1.2 1.5 0 2.8.6 3.7 1.5v-3.2c-1.1-.4-2.1-.6-3.7-.6C11 11 9.3 12.3 9.3 14.6c0 3.4 4.5 2.8 4.5 4.2 0 .9-.8 1.2-1.9 1.2-1.6 0-3-.7-4-1.7v3.1c1.2.5 2.4.7 4 .7 3.1 0 4.8-1.4 4.8-3.6 0-3.5-4.5-3-4.5-4z" fill="white"/>
        <text x="28" y="20" fill="white" fontSize="14" fontFamily="Arial" fontWeight="500" opacity="0.75">Stripe</text>
      </svg>
    ),
  },
  {
    name: "OpenAI",
    logo: (
      <svg viewBox="0 0 90 28" className="h-6 w-auto" fill="none">
        <path d="M21.7 11.8a5.4 5.4 0 00-.4-4.4 5.5 5.5 0 00-5.9-2.6A5.4 5.4 0 0011.5 3a5.5 5.5 0 00-5.2 3.8 5.4 5.4 0 00-3.6 2.6 5.5 5.5 0 00.7 6.4 5.4 5.4 0 00.4 4.4 5.5 5.5 0 005.9 2.6 5.4 5.4 0 003.9 1.7 5.5 5.5 0 005.2-3.8 5.4 5.4 0 003.6-2.6 5.5 5.5 0 00-.7-6.3zm-8.1 11.3a4 4 0 01-2.6-.9l.1-.1 4.4-2.5a.7.7 0 00.4-.6v-6.1l1.8 1.1v5a4.1 4.1 0 01-4.1 4.1zm-8.8-3.8a4 4 0 01-.5-2.8l.1.1 4.4 2.5a.7.7 0 00.7 0l5.4-3.1v2.2l-4.5 2.6a4.1 4.1 0 01-5.6-1.5zm-1.1-9.5a4 4 0 012.1-1.8v5.1a.7.7 0 00.4.6l5.4 3.1-1.9 1.1-4.4-2.6a4.1 4.1 0 01-1.6-5.5zm13.3 3.5L11.6 10l1.8-1.1 4.4 2.6a4 4 0 01.6 6.5v-5.1a.7.7 0 00-.4-.6zm1.9-2.9l-.1-.1-4.4-2.5a.7.7 0 00-.7 0L8.3 10.9V8.7l4.5-2.6a4.1 4.1 0 016.1 4.3zm-11.8 3.9L5.2 13.2v-5a4.1 4.1 0 016.7-3.2l-.1.1L7.4 7.6a.7.7 0 00-.4.6l.1 6.1zm1-2.1l2.4-1.4 2.4 1.4v2.8l-2.4 1.4-2.4-1.4V12.2z" fill="white" opacity="0.85"/>
        <text x="28" y="20" fill="white" fontSize="13" fontFamily="Arial" fontWeight="500" opacity="0.75">OpenAI</text>
      </svg>
    ),
  },
  {
    name: "Twilio",
    logo: (
      <svg viewBox="0 0 80 28" className="h-6 w-auto" fill="none">
        <circle cx="13" cy="14" r="11" fill="#F22F46"/>
        <circle cx="10" cy="11" r="2" fill="white"/>
        <circle cx="16" cy="11" r="2" fill="white"/>
        <circle cx="10" cy="17" r="2" fill="white"/>
        <circle cx="16" cy="17" r="2" fill="white"/>
        <text x="30" y="20" fill="white" fontSize="13" fontFamily="Arial" fontWeight="500" opacity="0.75">Twilio</text>
      </svg>
    ),
  },
  {
    name: "GitHub",
    logo: (
      <svg viewBox="0 0 85 28" className="h-6 w-auto" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M13 2C7 2 2 7 2 13c0 4.9 3.2 9 7.6 10.5.6.1.8-.3.8-.6v-2c-3.2.7-3.8-1.5-3.8-1.5-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1 1-.3 1.9-.4 2.8-.4.9 0 1.8.1 2.8.4 2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.2-5.1 5.5.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6C20.8 22 24 17.9 24 13c0-6-5-11-11-11z" fill="white" opacity="0.8"/>
        <text x="30" y="20" fill="white" fontSize="13" fontFamily="Arial" fontWeight="500" opacity="0.75">GitHub</text>
      </svg>
    ),
  },
  {
    name: "Docker",
    logo: (
      <svg viewBox="0 0 82 28" className="h-6 w-auto" fill="none">
        <rect x="2" y="10" width="5" height="4" rx="0.5" fill="#2496ED"/>
        <rect x="8" y="10" width="5" height="4" rx="0.5" fill="#2496ED"/>
        <rect x="14" y="10" width="5" height="4" rx="0.5" fill="#2496ED"/>
        <rect x="8" y="5" width="5" height="4" rx="0.5" fill="#2496ED"/>
        <rect x="14" y="5" width="5" height="4" rx="0.5" fill="#2496ED"/>
        <path d="M24.5 13c-.4-2-2.3-2.8-4-2.4-1.6.4-1.6 1.2-1.6 1.2H4.5C4.5 16.5 6.8 20 11 20h6.5c3.3 0 5.8-1.6 6.6-4.4" fill="#2496ED" opacity="0.6"/>
        <text x="28" y="20" fill="white" fontSize="13" fontFamily="Arial" fontWeight="500" opacity="0.75">Docker</text>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    logo: (
      <svg viewBox="0 0 92 28" className="h-6 w-auto" fill="none">
        <path d="M13 2s-6 5.5-6 11.5c0 3.3 2.7 6 6 6s6-2.7 6-6C19 7.5 13 2 13 2z" fill="#00ED64"/>
        <path d="M13 2v17.5" stroke="#00684A" strokeWidth="1.2"/>
        <text x="26" y="20" fill="white" fontSize="13" fontFamily="Arial" fontWeight="500" opacity="0.75">MongoDB</text>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    logo: (
      <svg viewBox="0 0 105 28" className="h-6 w-auto" fill="none">
        <ellipse cx="13" cy="9" rx="8" ry="5" stroke="#336791" strokeWidth="1.5" fill="none"/>
        <path d="M5 9v10c0 2.8 3.6 5 8 5s8-2.2 8-5V9" stroke="#336791" strokeWidth="1.5"/>
        <line x1="5" y1="14" x2="21" y2="14" stroke="#336791" strokeWidth="1"/>
        <ellipse cx="13" cy="9" rx="8" ry="5" fill="#336791" opacity="0.25"/>
        <text x="27" y="20" fill="white" fontSize="12" fontFamily="Arial" fontWeight="500" opacity="0.75">PostgreSQL</text>
      </svg>
    ),
  },
  {
    name: "Redis",
    logo: (
      <svg viewBox="0 0 78 28" className="h-6 w-auto" fill="none">
        <ellipse cx="13" cy="19" rx="9" ry="3.5" fill="#DC382C" opacity="0.35"/>
        <polygon points="13,4 22,9.5 13,15 4,9.5" fill="#DC382C"/>
        <polygon points="13,7 20,11 13,15 6,11" fill="#FF6B6B" opacity="0.55"/>
        <text x="27" y="20" fill="white" fontSize="13" fontFamily="Arial" fontWeight="500" opacity="0.75">Redis</text>
      </svg>
    ),
  },
  {
    name: "Cloudflare",
    logo: (
      <svg viewBox="0 0 105 28" className="h-6 w-auto" fill="none">
        <path d="M20.5 16.5c.1-.4.2-.9.1-1.3-.7-2.8-3.7-3.8-5.8-2.2-.9-1.4-2.5-2.3-4.2-2.3-2.7 0-4.9 2-5.2 4.6H5.2C4.1 15.3 3 16.2 3 17.5c0 1.2 1 2.2 2.2 2.2h14.7c1 0 1.7-.7 1.8-1.6h.3z" fill="#F6821F"/>
        <path d="M20.5 16.5c.1-.4.2-.9.1-1.3-.3-1.1-1-2-2-2.5-1 .7-2.2 1.6-2.2 2.9 0 .2 0 .5.1.7" fill="#FBAD41"/>
        <text x="27" y="20" fill="white" fontSize="12" fontFamily="Arial" fontWeight="500" opacity="0.75">Cloudflare</text>
      </svg>
    ),
  },
  {
    name: "Figma",
    logo: (
      <svg viewBox="0 0 72 28" className="h-6 w-auto" fill="none">
        <rect x="4" y="3" width="7" height="7" rx="3.5" fill="#F24E1E"/>
        <rect x="4" y="10.5" width="7" height="7" rx="0" fill="#FF7262"/>
        <rect x="4" y="18" width="7" height="7" rx="0 0 3.5 3.5" fill="#0ACF83"/>
        <rect x="11" y="3" width="7" height="7" rx="0 3.5 3.5 0" fill="#A259FF"/>
        <circle cx="14.5" cy="14" r="3.5" fill="#1ABCFE"/>
        <text x="24" y="20" fill="white" fontSize="13" fontFamily="Arial" fontWeight="500" opacity="0.75">Figma</text>
      </svg>
    ),
  },
];

const tripled = [...partners, ...partners, ...partners];

export default function TechPartners() {
  return (
    <section className="bg-[#0b0f1a] border-t border-white/5 py-16 overflow-hidden">
      <h2 className="text-white text-xl md:text-2xl font-semibold text-center mb-10 tracking-wide">
        Technology Partners
      </h2>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#0b0f1a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#0b0f1a] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {tripled.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 mx-3 flex items-center justify-center
                         bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.07]
                         rounded-xl px-6 transition-all duration-300 cursor-default"
              style={{ minWidth: "150px", height: "72px" }}
              title={partner.name}
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
