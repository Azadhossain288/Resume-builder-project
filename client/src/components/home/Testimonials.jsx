import React, { useState } from 'react'

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Software Engineer',
    company: 'Google',
    avatar: '👨‍💻',
    rating: 5,
    text: 'SmartCV helped me land my dream job at Google! The live preview feature made it so easy to see exactly how my resume looked. I got 3 interview calls within a week of using it.',
    tag: '🎯 Got hired in 1 week',
    bg: 'bg-green-50',
    border: 'border-green-100',
    tagBg: 'bg-green-100 text-green-700',
  },
  {
    name: 'Priya Patel',
    role: 'Product Manager',
    company: 'Meta',
    avatar: '👩‍💼',
    rating: 5,
    text: 'I tried 5 different resume builders before SmartCV. This is by far the best — clean, fast, and the PDF output is absolutely perfect. No formatting issues at all!',
    tag: '⚡ Best resume builder',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    tagBg: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'James Wilson',
    role: 'UX Designer',
    company: 'Apple',
    avatar: '🧑‍🎨',
    rating: 5,
    text: "As a designer, I care a lot about how things look. SmartCV's templates are genuinely beautiful. The attention to typography and spacing is impressive. My resume finally looks professional.",
    tag: '🎨 Love the design',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    tagBg: 'bg-purple-100 text-purple-700',
  },
  {
    name: 'Ayesha Khan',
    role: 'Data Analyst',
    company: 'Microsoft',
    avatar: '👩‍🔬',
    rating: 5,
    text: "The AI suggestions feature is a game changer! It helped me write better job descriptions and highlight skills I didn't even think to include. Got my first interview in 3 days.",
    tag: '🤖 AI made the difference',
    bg: 'bg-yellow-50',
    border: 'border-yellow-100',
    tagBg: 'bg-yellow-100 text-yellow-700',
  },
  {
    name: 'Carlos Mendez',
    role: 'Marketing Lead',
    company: 'Spotify',
    avatar: '👨‍💼',
    rating: 5,
    text: 'I built my resume in under 10 minutes. No exaggeration. The form is intuitive, the templates are ready-made, and the PDF download just works. Zero frustration.',
    tag: '⏱️ Done in 10 minutes',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
    tagBg: 'bg-teal-100 text-teal-700',
  },
  {
    name: 'Nadia Rahman',
    role: 'Frontend Developer',
    company: 'Shopify',
    avatar: '👩‍💻',
    rating: 5,
    text: 'Free, fast, no sign-up required. I was skeptical at first but SmartCV completely exceeded my expectations. The auto-save feature means I never lost my work. Absolutely recommend!',
    tag: '✅ 100% Recommended',
    bg: 'bg-pink-50',
    border: 'border-pink-100',
    tagBg: 'bg-pink-100 text-pink-700',
  },
]

const Testimonials = () => {
  const [active, setActive] = useState(0)

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      {/* ── HEADER ── */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-5">
          ✦ Testimonials
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
          Loved by{' '}
          <span className="text-green-500">10,000+ users</span>
        </h2>
        <p className="text-gray-500 text-base mt-4 max-w-md mx-auto leading-relaxed">
          Real people, real results. See what our users say about building their resume with SmartCV.
        </p>

        {/* Star rating */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>
          <span className="text-slate-900 font-bold text-lg">4.9</span>
          <span className="text-gray-400 text-sm">/ 5.0 · 10,000+ reviews</span>
        </div>
      </div>

      {/* ── FEATURED TESTIMONIAL ── */}
      <div
        className={`relative rounded-3xl p-8 md:p-12 border mb-6 transition-all duration-500 ${testimonials[active].bg} ${testimonials[active].border}`}
      >
        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-green-400 to-green-200" />

        <div className="text-7xl font-black text-green-200 leading-none mb-4 select-none">"</div>

        <p className="text-slate-800 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mb-8">
          {testimonials[active].text}
        </p>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-3xl">
              {testimonials[active].avatar}
            </div>
            <div>
              <div className="font-bold text-slate-900 text-base">{testimonials[active].name}</div>
              <div className="text-sm text-gray-500">
                {testimonials[active].role} ·{' '}
                <span className="font-semibold text-slate-700">{testimonials[active].company}</span>
              </div>
              <div className="flex gap-0.5 mt-1">
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
            </div>
          </div>
          <div className={`text-xs font-bold px-4 py-2 rounded-full ${testimonials[active].tagBg}`}>
            {testimonials[active].tag}
          </div>
        </div>
      </div>

      {/* ── TESTIMONIAL GRID ── */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            className={`relative rounded-2xl p-5 border cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
              active === i
                ? `${t.bg} ${t.border} ring-2 ring-green-400 ring-offset-1 shadow-lg`
                : 'bg-white border-gray-100 hover:border-green-200'
            }`}
          >
            {active === i && (
              <div className="absolute top-3 right-3 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                ✓
              </div>
            )}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl flex-shrink-0">
                {t.avatar}
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">{t.name}</div>
                <div className="text-xs text-gray-400">{t.company}</div>
              </div>
            </div>
            {/* line-clamp replaced with overflow hidden + max-height */}
            <p
              className="text-xs text-gray-500 leading-relaxed overflow-hidden"
              style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
            >
              {t.text}
            </p>
            <div className={`inline-flex text-xs font-bold px-2.5 py-1 rounded-full mt-3 ${t.tagBg}`}>
              {t.tag}
            </div>
          </div>
        ))}
      </div>

      {/* ── DOT NAVIGATION ── */}
      <div className="flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-300 ${
              active === i
                ? 'bg-green-500 w-6 h-2.5'
                : 'bg-gray-200 hover:bg-gray-300 w-2.5 h-2.5'
            }`}
          />
        ))}
      </div>

      {/* ── STATS STRIP ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
        {[
          { num: '10K+',  label: 'Happy Users',       icon: '😊', bg: 'bg-green-50',  text: 'text-green-600'  },
          { num: '4.9★',  label: 'Average Rating',    icon: '⭐', bg: 'bg-yellow-50', text: 'text-yellow-600' },
          { num: '95%',   label: 'Got Interviews',    icon: '🎯', bg: 'bg-blue-50',   text: 'text-blue-600'   },
          { num: '< 10m', label: 'To Build a Resume', icon: '⚡', bg: 'bg-purple-50', text: 'text-purple-600' },
        ].map((s, i) => (
          <div key={i} className={`${s.bg} rounded-2xl p-6 text-center border border-gray-100`}>
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className={`text-2xl font-extrabold tracking-tight ${s.text}`}>{s.num}</div>
            <div className="text-xs text-gray-500 mt-1 font-medium">{s.label}</div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Testimonials
