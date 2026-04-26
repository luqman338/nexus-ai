
'use client';

import React, { useState } from 'react';
import { CheckCircle, Zap, ArrowRight, Loader2, GitBranch, Terminal, ShieldAlert } from 'lucide-react';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1200);
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-indigo-500/30 overflow-x-hidden font-sans">
      
      {/* SAASPO STYLE BACKGROUND (Grid + Radial Glow) */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px]">
        <div className="absolute left-0 right-0 top-[-10%] -z-10 m-auto h-[600px] w-[600px] rounded-full bg-indigo-600 opacity-[0.15] blur-[120px]"></div>
      </div>

      {/* MINIMALIST NAV */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/[0.05] bg-black/50 backdrop-blur-xl">
        <div className="flex justify-between items-center h-16 px-6 max-w-6xl mx-auto">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center group-hover:scale-105 transition-transform">
              <Zap size={18} className="text-black fill-black" />
            </div>
            <span className="text-lg font-bold tracking-tight">NexusDraft</span>
          </div>
          <button className="text-sm font-semibold text-white/70 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10">
            Sign In
          </button>
        </div>
      </nav>

      <main className="pt-40 pb-20 px-6">
        {/* HERO SECTION */}
        <section className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium tracking-wide text-indigo-300 bg-indigo-500/10 rounded-full border border-indigo-500/20">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
            </span>
            NexusDraft API v2.0 is live
          </div>

          <h1 className="text-6xl md:text-[88px] font-bold tracking-tighter leading-[1.05] mb-6">
            Docs that write <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              themselves.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Connect your GitHub. We analyze your commits and instantly generate production-ready documentation, API specs, and change-logs.
          </p>

          {/* SAASPO STYLE INPUT PILL */}
          <div className="w-full max-w-md mx-auto mb-16">
            {status !== 'success' ? (
              <form onSubmit={handleSubmit} className="relative flex items-center p-1 bg-white/5 rounded-full border border-white/10 shadow-2xl focus-within:border-indigo-500/50 focus-within:bg-white/10 transition-all">
                <input
                  required
                  type="email"
                  placeholder="name@startup.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-3 bg-transparent outline-none text-white text-sm placeholder:text-white/30"
                />
                <button
                  disabled={status === 'loading'}
                  className="bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-indigo-50 transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {status === 'loading' ? <Loader2 className="animate-spin w-4 h-4" /> : 'Get Early Access'}
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                <CheckCircle size={16} /> You're on the priority list.
              </div>
            )}
          </div>
        </section>

        {/* SAASPO BENTO GRID */}
        <section className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Main Feature */}
            <div className="md:col-span-2 p-8 rounded-[32px] bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -z-10 group-hover:bg-indigo-500/20 transition-colors"></div>
              <Terminal size={32} className="text-white/80 mb-6" />
              <h3 className="text-2xl font-semibold mb-2">Automated Changelogs</h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm">Every PR merge automatically triggers a beautiful, human-readable changelog generation based on diff analysis.</p>
            </div>

            {/* Side Feature 1 */}
            <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors">
              <GitBranch size={28} className="text-white/80 mb-6" />
              <h3 className="text-xl font-semibold mb-2">Syncs to main</h3>
              <p className="text-white/50 text-sm leading-relaxed">Direct integration with GitHub Actions.</p>
            </div>

            {/* Side Feature 2 */}
            <div className="md:col-span-3 p-8 rounded-[32px] bg-gradient-to-r from-indigo-900/40 to-black border border-indigo-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-500/20 rounded-2xl">
                  <ShieldAlert className="text-indigo-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Enterprise Security</h3>
                  <p className="text-indigo-200/60 text-sm">SOC2 Type II Compliant. Zero data retention policy.</p>
                </div>
              </div>
              <button className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                View Security Trust Center <ArrowRight size={14} />
              </button>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}