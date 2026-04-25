'use client'; // Required for interactivity in Next.js App Router

import React, { useState } from 'react';
import { CheckCircle, Zap, Shield, ArrowRight, Loader2, Share2 } from 'lucide-react';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  // Simulated Submission Logic
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    
    // Simulate API delay for realism
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 font-sans">
      {/* NAVIGATION */}
      <nav className="flex justify-between items-center py-6 px-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Zap size={18} className="text-white fill-current" />
          </div>
          NexusDraft<span className="text-blue-600">AI</span>
        </div>
        <button className="hidden sm:block text-sm font-semibold hover:text-blue-600 transition">
          Sign In
        </button>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="pt-16 pb-24 px-6 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 rounded-full border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Waitlist open for Q4
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
            Documentation that <br />
            <span className="text-blue-600">writes itself.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            NexusDraft AI turns your GitHub commits into beautiful, human-readable documentation. Stop stalling your releases for README updates.
          </p>

          {/* DYNAMIC FORM STATE */}
          <div className="max-w-md mx-auto">
            {status !== 'success' ? (
              <form onSubmit={handleSubmit} className="relative group">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    required
                    type="email"
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-blue-500 focus:outline-none transition-all text-lg shadow-sm"
                  />
                  <button
                    disabled={status === 'loading'}
                    className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95 disabled:opacity-70 flex items-center justify-center min-w-[160px]"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>Join Waitlist <ArrowRight className="ml-2 h-5 w-5" /></>
                    )}
                  </button>
                </div>
                <p className="mt-4 text-sm text-gray-400">
                  Secure. Private. SOC2 compliant.
                </p>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-100 p-8 rounded-3xl animate-in fade-in zoom-in duration-300">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">You're on the list!</h3>
                <p className="text-green-700 mb-6">We've sent a confirmation to <span className="font-bold">{email}</span>.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="flex items-center gap-2 mx-auto text-sm font-bold text-green-800 hover:opacity-70"
                >
                  <Share2 size={16} /> Move up the queue by sharing
                </button>
              </div>
            )}
          </div>
        </section>

        {/* PROOF SECTION */}
        <section className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-4xl font-black text-slate-900 mb-1">98%</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-slate-900 mb-1">12k+</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Repos Synced</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-slate-900 mb-1">&lt; 1s</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Sync Latency</div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Zap className="text-blue-600" />, 
                title: "Real-time Delta", 
                desc: "Our AI only scans your latest diffs, ensuring documentation stays updated at the speed of your terminal." 
              },
              { 
                icon: <CheckCircle className="text-blue-600" />, 
                title: "Natural Logic", 
                desc: "Don't just list functions. We explain business logic, edge cases, and architectural flow automatically." 
              },
              { 
                icon: <Shield className="text-blue-600" />, 
                title: "Zero-Data Training", 
                desc: "Your code is your moat. We never use your proprietary data to train our public models." 
              }
            ].map((f, i) => (
              <div key={i} className="p-10 rounded-[2rem] border border-gray-100 hover:border-blue-200 transition-colors bg-white shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-gray-100 text-center text-gray-400 text-sm">
        Built for the next generation of developers. 
      </footer>
    </div>
  );
};

export default LandingPage;