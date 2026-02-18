import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  const contactInfo = [
    { icon: '📧', label: 'Email Me',      value: 'azadhossain016288@gmail.com',    bg: 'bg-green-50',  text: 'text-green-600'  },
    { icon: '💬', label: 'Live Chat',     value: 'Available 9am – 6pm',  bg: 'bg-blue-50',   text: 'text-blue-600'   },
    { icon: '🐦', label: 'Twitter / X',   value: '@SmartCVApp',          bg: 'bg-purple-50', text: 'text-purple-600' },
    { icon: '📍', label: 'Based In',      value: 'Dhaka, Bangladesh',    bg: 'bg-yellow-50', text: 'text-yellow-600' },
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      {/* ── HEADER ── */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-5">
          ✦ Contact
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
          We'd love to{' '}
          <span className="text-green-500">hear from you</span>
        </h2>
        <p className="text-gray-500 text-base mt-4 max-w-md mx-auto leading-relaxed">
          Have a question, feedback, or just want to say hi? Send us a message and we'll get back to you within 24 hours.
        </p>
      </div>

      {/* ── MAIN GRID ── */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

        {/* ── LEFT: Contact Info ── */}
        <div className="md:col-span-2 flex flex-col gap-4">

          {/* Info cards */}
          {contactInfo.map((item, i) => (
            <div
              key={i}
              className={`${item.bg} rounded-2xl p-5 border border-gray-100 flex items-center gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-200`}
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">{item.label}</div>
                <div className={`text-sm font-bold ${item.text}`}>{item.value}</div>
              </div>
            </div>
          ))}

          {/* FAQ quick tip */}
          <div className="bg-slate-900 rounded-2xl p-6 mt-2">
            <div className="text-2xl mb-3">💡</div>
            <h4 className="text-white font-bold text-sm mb-2">Quick Tip</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Most questions are answered in our FAQ. Check there first — you might get an instant answer!
            </p>
            <button className="mt-4 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors">
              Visit FAQ →
            </button>
          </div>
        </div>

        {/* ── RIGHT: Contact Form ── */}
        <div className="md:col-span-3 bg-white border border-gray-100 rounded-3xl p-8 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-green-400 to-green-200" />

          {submitted ? (
            /* ── SUCCESS STATE ── */
            <div className="flex flex-col items-center justify-center h-full py-16 text-center">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-4xl mb-5">
                ✅
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
              <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-6">
                Thanks for reaching out! We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                className="bg-green-500 hover:bg-green-600 text-white text-sm font-bold px-6 py-2.5 rounded-xl transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            /* ── FORM ── */
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Send a Message</h3>
                <p className="text-sm text-gray-400">Fill out the form below and we'll respond shortly.</p>
              </div>

              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-gray-300 focus:outline-none focus:border-green-400 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@email.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-gray-300 focus:outline-none focus:border-green-400 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 block">
                  Subject
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-green-400 focus:bg-white transition-all"
                >
                  <option value="">Select a topic...</option>
                  <option value="general">General Question</option>
                  <option value="bug">Report a Bug</option>
                  <option value="feature">Feature Request</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 block">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-gray-300 focus:outline-none focus:border-green-400 focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-200 flex items-center justify-center gap-2
                  ${loading
                    ? 'bg-green-300 cursor-not-allowed'
                    : 'bg-green-500 hover:bg-green-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-100'
                  }`}
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>📨 Send Message</>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

    </section>
  )
}

export default Contact
