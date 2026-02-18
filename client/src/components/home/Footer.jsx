import React, { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  const productLinks = ['Features', 'Templates', 'AI Suggestions', 'PDF Export', 'Pricing']
  const companyLinks = ['About Us', 'Blog', 'Careers', 'Press Kit']
  const supportLinks = ['Help Center', 'FAQ', 'Privacy Policy', 'Terms of Service']

  return (
    <footer className="relative bg-slate-950 overflow-hidden">

      {/* ── GRID PATTERN BACKGROUND ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(34,197,94,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* ── HERO CTA — full-width diagonal split ── */}
      <div className="relative border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Left: Big headline */}
            <div>
              {/* Floating tag */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-px bg-green-500" />
                <span className="text-green-400 text-xs font-bold tracking-widest uppercase">Free Forever</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-white mb-6">
                Your next job<br />
                starts with a<br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-slate-950 px-3">great resume.</span>
                  <span className="absolute inset-0 bg-green-400 rounded-lg -rotate-1 z-0" />
                </span>
              </h2>

              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
                Join 10,000+ job seekers who built their perfect resume with SmartCV — no sign-up, no credit card, just results.
              </p>

              <div className="flex gap-3 flex-wrap">
                <button className="bg-green-500 hover:bg-green-400 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-green-500/30 flex items-center gap-2">
                  🚀 Build My Resume
                </button>
                <button className="bg-transparent border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200">
                  See Templates →
                </button>
              </div>
            </div>

            {/* Right: Newsletter + stats */}
            <div className="flex flex-col gap-4">

              {/* Newsletter card */}
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">📬</span>
                  <span className="text-white font-bold text-sm">Get Resume Tips</span>
                  <span className="ml-auto bg-green-500/10 text-green-400 text-xs font-bold px-2 py-0.5 rounded-full border border-green-500/20">Free</span>
                </div>
                <p className="text-slate-500 text-xs mb-4 leading-relaxed">
                  Weekly tips on resume writing, job hunting, and career growth.
                </p>
                {subscribed ? (
                  <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-2.5 text-green-400 text-sm font-semibold">
                    <span>✅</span> You're in! Check your inbox.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="flex-1 min-w-0 bg-slate-800 border border-slate-700 focus:border-green-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                    <button
                      type="submit"
                      className="bg-green-500 hover:bg-green-400 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors flex-shrink-0"
                    >
                      Join →
                    </button>
                  </form>
                )}
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  { num: '10K+', label: 'Users',    color: 'text-green-400'  },
                  { num: '4.9',  label: 'Rating',   color: 'text-yellow-400' },
                  { num: '95%',  label: 'Hired',    color: 'text-blue-400'   },
                  { num: '0',    label: 'Cost ($)',  color: 'text-pink-400'   },
                ].map((s, i) => (
                  <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center hover:border-slate-600 transition-colors">
                    <div className={`text-lg font-black ${s.color}`}>{s.num}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['👨‍💻','👩‍💼','🧑‍🎨','👩‍🔬','👨‍💼'].map((av, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-sm">
                      {av}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xs">★</span>
                    ))}
                  </div>
                  <div className="text-slate-500 text-xs">Loved by 10,000+ users</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── LINKS SECTION ── */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">

          {/* Brand — spans 3 cols */}
          <div className="col-span-2 md:col-span-3">
            <div className="text-3xl font-black mb-3 tracking-tight">
              <span className="text-green-400">Smart</span>
              <span className="text-white">CV</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
              Build a professional resume in minutes. Free forever. Trusted by thousands of job seekers worldwide.
            </p>

            {/* Socials */}
            <div className="flex gap-2">
              {[
                { label: 'X',   icon: '𝕏' },
                { label: 'Li',  icon: 'in' },
                { label: 'Gh',  icon: '⌥' },
                { label: 'Yt',  icon: '▷' },
                { label: 'Ig',  icon: '◈' },
              ].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 bg-slate-900 hover:bg-green-500 border border-slate-800 hover:border-green-500 rounded-lg flex items-center justify-center text-xs font-bold text-slate-500 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-slate-400 hover:text-green-400 transition-colors duration-150 flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-1.5 h-0.5 bg-green-400 rounded-full transition-all duration-200" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-slate-400 hover:text-green-400 transition-colors duration-150 flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-1.5 h-0.5 bg-green-400 rounded-full transition-all duration-200" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-slate-400 hover:text-green-400 transition-colors duration-150 flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-1.5 h-0.5 bg-green-400 rounded-full transition-all duration-200" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()}{' '}
            <span className="text-green-500 font-semibold">SmartCV</span>
            . All rights reserved. Made with ❤️ in Dhaka, Bangladesh.
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs text-slate-500">All systems operational</span>
            </div>
            <div className="h-3 w-px bg-slate-800" />
            <div className="flex gap-4">
              {['Privacy', 'Terms', 'Cookies'].map((item, i) => (
                <a key={i} href="#" className="text-xs text-slate-600 hover:text-green-400 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer
