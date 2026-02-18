import React, { useState } from 'react'

const Features = () => {

  const [selectedTemplate, setSelectedTemplate] = useState(0)
  const templateNames = ['Classic Dark', 'Fresh Green', 'Cool Blue']

  const saveToasts = [
    { icon: '✅', title: 'Auto saved',        sub: 'All changes stored',    time: 'now'    },
    { icon: '🔒', title: 'No account needed', sub: 'Stays in your browser', time: 'always' },
    { icon: '🔄', title: 'Restore anytime',   sub: 'Come back & continue',  time: '∞'      },
  ]

  const aiChips = [
    '💡 Product Designer',
    '⚡ Team Leadership',
    '🎯 Problem Solving',
    '📊 Data Analysis',
    '✨ New!',
  ]

  const templateStyles = [
    'bg-gradient-to-br from-slate-900 to-blue-900',
    'bg-gradient-to-br from-green-400 to-green-300',
    'bg-gradient-to-br from-blue-500 to-blue-300',
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      {/* ── HEADER ── */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-5">
          ✦ Features
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
          Everything you need to get{' '}
          <span className="text-green-500">hired faster</span>
        </h2>
        <p className="text-gray-500 text-base mt-4 max-w-md mx-auto leading-relaxed">
          Powerful tools, beautiful design — all packed into one free resume builder that just works.
        </p>
      </div>

      {/* ── BENTO GRID ── */}
      <div className="grid grid-cols-12 gap-4">

        {/* ── 1. LIVE PREVIEW (wide) ── */}
        <div className="col-span-12 md:col-span-7 relative bg-gradient-to-br from-green-50 to-cyan-50 border border-green-100 rounded-3xl p-8 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-100 transition-all duration-300">
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-green-400 to-green-200" />
          <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase">⚡ Live Preview</span>
          <h3 className="text-lg font-bold mt-2 mb-1 text-slate-900">See your resume update as you type</h3>
          <p className="text-sm text-gray-500 leading-relaxed">Every keystroke instantly reflects on your resume preview. Zero delay, zero refresh.</p>

          <div className="grid grid-cols-2 gap-4 mt-5">
            <div className="flex flex-col gap-2">
              <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                <div className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-1">Full Name</div>
                <div className="text-sm font-semibold text-slate-900 flex items-center gap-0.5">
                  Sarah Ahmed
                  <span className="inline-block w-0.5 h-3.5 bg-green-500 animate-pulse ml-0.5" />
                </div>
              </div>
              <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                <div className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-1">Job Title</div>
                <div className="text-sm font-semibold text-slate-900">Frontend Developer</div>
              </div>
              <div className="bg-green-50 rounded-xl py-2.5 text-center text-sm font-extrabold text-green-500">
                ↓ Live Preview
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="text-sm font-extrabold text-slate-900 mb-0.5">Sarah Ahmed</div>
              <div className="text-xs text-gray-400 mb-3">Frontend Developer · Dhaka</div>
              <div className="h-1 rounded-full mb-1.5 bg-gradient-to-r from-green-400 to-green-200" style={{ width: '85%' }} />
              <div className="h-1 rounded-full mb-1.5 bg-gradient-to-r from-blue-400 to-blue-200" style={{ width: '70%' }} />
              <div className="h-1 rounded-full bg-gradient-to-r from-purple-400 to-purple-200" style={{ width: '60%' }} />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full mt-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
            Updating live
          </div>
        </div>

        {/* ── 2. TEMPLATES ── */}
        <div className="col-span-12 md:col-span-5 relative bg-white border border-gray-100 rounded-3xl p-8 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-50 transition-all duration-300">
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-blue-500 to-blue-300" />
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase">🎨 Templates</span>
          <h3 className="text-lg font-bold mt-2 mb-1 text-slate-900">Switch designs with one click</h3>
          <p className="text-sm text-gray-500 leading-relaxed">Your data stays — only the look changes.</p>

          <div className="flex gap-2.5 mt-5">
            {templateStyles.map((style, i) => (
              <div
                key={i}
                onClick={() => setSelectedTemplate(i)}
                className={`flex-1 h-24 rounded-2xl cursor-pointer relative overflow-hidden flex flex-col justify-end p-2.5 transition-all duration-200 hover:scale-105 ${style} ${selectedTemplate === i ? 'ring-2 ring-green-500 ring-offset-1 shadow-lg shadow-green-100' : ''}`}
              >
                {selectedTemplate === i && (
                  <div className="absolute top-2 right-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                )}
                <div className="space-y-1">
                  <div className="h-1 rounded-full bg-white/30" style={{ width: '60%' }} />
                  <div className="h-1 rounded-full bg-white/30" style={{ width: '85%' }} />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center text-xs font-bold text-green-700 bg-green-50 rounded-full px-4 py-1.5 mt-4">
            ✓ {templateNames[selectedTemplate]} — Active
          </div>
        </div>

        {/* ── 3. PDF EXPORT ── */}
        <div className="col-span-12 md:col-span-4 relative bg-white border border-gray-100 rounded-3xl p-8 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-50 transition-all duration-300">
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-red-400 to-orange-400" />
          <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase">📄 PDF Export</span>
          <h3 className="text-lg font-bold mt-2 mb-1 text-slate-900">Download in one click</h3>
          <p className="text-sm text-gray-500 leading-relaxed">Get a pixel-perfect, print-ready PDF instantly.</p>

          <div className="flex items-center gap-3 bg-orange-50 rounded-2xl px-4 py-3 mt-5">
            <span className="text-2xl">📄</span>
            <div>
              <div className="text-sm font-bold text-slate-900">my_resume.pdf</div>
              <div className="text-xs text-gray-400">142 KB</div>
            </div>
            <button className="ml-auto bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors">↓ Save</button>
          </div>
          <div className="bg-gray-100 rounded-full h-1.5 overflow-hidden mt-4">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-red-400 to-orange-400" />
          </div>
          <div className="text-xs text-gray-400 mt-2">Ready to send to employers ✓</div>
        </div>

        {/* ── 4. AUTO SAVE ── */}
        <div className="col-span-12 md:col-span-4 relative bg-white border border-gray-100 rounded-3xl p-8 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-50 transition-all duration-300">
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-purple-500 to-pink-400" />
          <span className="inline-flex items-center gap-1.5 bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase">💾 Auto Save</span>
          <h3 className="text-lg font-bold mt-2 mb-1 text-slate-900">Your data is always safe</h3>
          <p className="text-sm text-gray-500 leading-relaxed">Saved automatically. No account needed.</p>

          <div className="flex flex-col gap-2 mt-5">
            {saveToasts.map((t, i) => (
              <div key={i} className="flex items-center gap-3 bg-purple-50 rounded-xl px-3.5 py-2.5">
                <span className="text-base">{t.icon}</span>
                <div>
                  <div className="text-xs font-semibold text-slate-900">{t.title}</div>
                  <div className="text-xs text-gray-400">{t.sub}</div>
                </div>
                <span className="ml-auto text-xs text-gray-300">{t.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. AI SUGGESTIONS ── */}
        <div className="col-span-12 md:col-span-4 relative bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-100 rounded-3xl p-8 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-100 transition-all duration-300">
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-yellow-400 to-orange-300" />
          <span className="inline-flex items-center gap-1.5 bg-yellow-50 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase">🤖 AI Suggestions</span>
          <h3 className="text-lg font-bold mt-2 mb-1 text-slate-900">Smart writing help</h3>
          <p className="text-sm text-gray-500 leading-relaxed">AI suggests better job titles, skills & descriptions.</p>

          <div className="flex flex-wrap gap-2 mt-5">
            {aiChips.map((chip, i) => (
              <div key={i} className="inline-flex items-center bg-white border border-yellow-200 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm">
                {chip}
              </div>
            ))}
          </div>
        </div>

        {/* ── 6. DYNAMIC SECTIONS ── */}
        <div className="col-span-12 md:col-span-5 relative bg-white border border-gray-100 rounded-3xl p-8 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-50 transition-all duration-300">
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-teal-400 to-cyan-300" />
          <span className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-700 text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase">➕ Dynamic Sections</span>
          <h3 className="text-lg font-bold mt-2 mb-1 text-slate-900">Add unlimited entries</h3>
          <p className="text-sm text-gray-500 leading-relaxed">Work experience, education, skills — add as many as you need.</p>

          <div className="flex flex-col gap-2 mt-5">
            {[
              { num: '01', title: 'Senior Designer — Acme', sub: '2022 – Present' },
              { num: '02', title: 'UI Designer — StartupXYZ', sub: '2020 – 2022' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-teal-50 rounded-xl px-3.5 py-2.5">
                <span className="text-xs font-extrabold text-teal-600 w-5">{item.num}</span>
                <div>
                  <div className="text-xs font-semibold text-slate-900">{item.title}</div>
                  <div className="text-xs text-gray-400">{item.sub}</div>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-2 border-2 border-dashed border-teal-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-teal-600 cursor-pointer hover:bg-teal-50 transition-colors">
              ＋ Add experience
            </div>
          </div>
        </div>

        {/* ── 7. MOBILE FRIENDLY (wide) ── */}
        <div className="col-span-12 md:col-span-7 relative bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 rounded-3xl p-8 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-100 transition-all duration-300">
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-pink-400 to-rose-300" />
          <span className="inline-flex items-center gap-1.5 bg-pink-50 text-pink-700 text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase">📱 Works Everywhere</span>
          <h3 className="text-lg font-bold mt-2 mb-1 text-slate-900">Build your resume on any device</h3>
          <p className="text-sm text-gray-500 leading-relaxed">Fully responsive — phone, tablet, or laptop. Works beautifully on every screen.</p>

          <div className="flex items-end gap-4 mt-5">
            <div className="w-20 h-36 bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col flex-shrink-0">
              <div className="h-1.5 bg-gradient-to-r from-pink-400 to-rose-300 flex-shrink-0" />
              <div className="p-2 flex-1 space-y-1.5">
                <div className="h-1 rounded-full bg-gray-100" style={{ width: '70%' }} />
                <div className="h-1 rounded-full bg-gray-100" style={{ width: '50%' }} />
                <div className="h-1 rounded-full bg-gray-100" style={{ width: '85%' }} />
                <div className="h-1 rounded-full bg-gray-100" style={{ width: '40%' }} />
              </div>
              <div className="text-center text-xs font-bold text-pink-500 py-1.5">Phone</div>
            </div>
            <div className="w-32 h-28 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col flex-shrink-0">
              <div className="h-1.5 bg-gradient-to-r from-pink-400 to-rose-300 flex-shrink-0" />
              <div className="p-2 flex-1 space-y-1.5">
                <div className="h-1 rounded-full bg-gray-100" style={{ width: '60%' }} />
                <div className="h-1 rounded-full bg-gray-100" style={{ width: '90%' }} />
                <div className="h-1 rounded-full bg-gray-100" style={{ width: '45%' }} />
              </div>
              <div className="text-center text-xs font-bold text-pink-500 py-1.5">Tablet</div>
            </div>
            <div className="flex-1 h-24 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
              <div className="h-1.5 bg-gradient-to-r from-pink-400 to-rose-300 flex-shrink-0" />
              <div className="p-2 flex-1 space-y-1.5">
                <div className="h-1 rounded-full bg-gray-100" style={{ width: '75%' }} />
                <div className="h-1 rounded-full bg-gray-100" style={{ width: '55%' }} />
              </div>
              <div className="text-center text-xs font-bold text-pink-500 py-1.5">Laptop</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Features
