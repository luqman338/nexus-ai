'use client';

import React, { useState } from 'react';
import { CheckCircle, Zap, Shield, ArrowRight, Loader2, Code2, GitMerge, Share2 } from 'lucide-react';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    // Simulate high-performance API response
    setTimeout(() => setStatus('success'), 1200);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-50 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* BACKGROUND GLOW EFFECTS (Zero JS, CSS Only for max performance) */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <div className="flex justify-between items-center py-4 px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all">
              <Zap size={18} className="text-white fill-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              NexusDraft<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">AI</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <button className="hidden text-sm font-medium text-slate-400 hover:text-white transition-colors sm:block">
              Documentation
            </button>
            <button className="hidden text-sm font-medium text-slate-400 hover:text-white transition-colors sm:block">
              Sign In
            </button>
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-200 transition-all hover:scale-105 active:scale-95">
              Get Access
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32">
        {/* HERO SECTION */}
        <section className="relative pb-24 px-6 text-center max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[75vh]">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 text-xs font-semibold tracking-widest text-blue-300 uppercase bg-blue-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Waitlist open for Q4
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-6 leading-[1.05]">
            Documentation that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500">
              writes itself.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            NexusDraft AI connects to your GitHub repository and generates high-fidelity technical docs, API references, and READMEs in real-time as you commit.
          </p>

          {/* INTERACTIVE CONVERSION FORM */}
          <div className="w-full max-w-md mx-auto">
            {status !== 'success' ? (
              <form onSubmit={handleSubmit} className="relative group flex flex-col sm:flex-row gap-2 p-1.5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md focus-within:border-blue-500/50 focus-within:bg-white/10 transition-all">
                <input
                  required
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 bg-transparent focus:outline-none text-white text-lg placeholder:text-slate-500"
                />
                <button
                  disabled={status === 'loading'}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] transition-all duration-300 active:scale-95 disabled:opacity-70 flex items-center justify-center min-w-[150px]"
                >
                  {status === 'loading' ? (
                    <Loader2 className="animate-spin text-white" />
                  ) : (
                    <>Join Waitlist <ArrowRight className="ml-2 h-4 w-4" /></>
                  )}
                </button>
              </form>
            ) : (
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-500 backdrop-blur-md">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <CheckCircle className="text-emerald-400" size={18} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Priority Access Secured</h3>
                </div>
                <p className="text-emerald-200/70 text-sm mb-4">We've reserved a spot for <span className="font-semibold text-white">{email}</span>.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="flex items-center gap-2 mx-auto text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-wider"
                >
                  <Share2 size={14} /> Share to skip the line
                </button>
              </div>
            )}
            
            <p className="mt-6 text-sm font-medium text-slate-500 flex items-center justify-center gap-2">
              <Shield size={14} className="text-blue-400" /> SOC2 Compliant & Zero-Data Training
            </p>
          </div>
        </section>

        {/* METRICS SECTION */}
        <section className="border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { metric: "98%", label: "Time Saved on Docs" },
                { metric: "12k+", label: "Repositories Synced" },
                { metric: "<1s", label: "Delta Update Latency" },
                { metric: "Zero", label: "Code Stored or Trained" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">{item.metric}</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-32 px-6 max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Engineered for Velocity.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Your code is the source of truth. We just translate it into plain English instantly.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: <GitMerge size={24} className="text-blue-400" />, 
                title: "Real-time Delta Sync", 
                desc: "Hooks directly into your CI/CD pipeline. Every merge to main updates your docs instantly." 
              },
              { 
                icon: <Code2 size={24} className="text-purple-400" />, 
                title: "Contextual Logic Parsing", 
                desc: "It doesn't just read comments. It understands complex business logic and architectural flow." 
              },
              { 
                icon: <Shield size={24} className="text-emerald-400" />, 
                title: "Air-Gapped Privacy", 
                desc: "Your proprietary code never touches our models. Processed securely via isolated edge containers." 
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl border border-white/5 bg-[#111111] hover:bg-[#151515] hover:border-white/10 transition-all duration-300 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white tracking-tight">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center flex flex-col items-center justify-center bg-[#050505]">
        <div className="flex items-center gap-2 opacity-50 mb-4">
           <Zap size={16} className="text-white" />
           <span className="font-bold tracking-tight text-white">NexusDraft AI</span>
        </div>
        <p className="text-slate-600 text-sm">© 2026 NexusDraft Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}