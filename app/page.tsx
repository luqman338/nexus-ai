'use client';

import React, { useState } from 'react';
import { CheckCircle, Zap, ArrowRight, Loader2, GitBranch, Terminal, ShieldCheck, Cpu } from 'lucide-react';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-indigo-500/30 overflow-x-hidden font-sans">
      
      {/* THE "SAASPO" GRID & GLOW */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[500px] w-full rounded-full bg-indigo-600 opacity-[0.15] blur-[120px]"></div>
      </div>

      {/* HEADER */}
      <nav className="flex justify-between items-center h-20 px-8 max-w-7xl mx-auto border-b border-white/5">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <Zap size={18} className="text-white fill-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter">NexusDraft</span>
        </div>
        <button className="text-sm font-bold bg-white text-black px-6 py-2 rounded-full hover:bg-slate-200 transition-all">
          Get Access
        </button>
      </nav>

      <main className="pt-32 pb-20 px-6">
        {/* HERO SECTION */}
        <section className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-10 text-[10px] font-bold tracking-[0.2em] text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20">
            <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
            V1.0 is officially open
          </div>

          <h1 className="text-6xl md:text-[92px] font-black tracking-[-0.05em] leading-[0.9] mb-8">
            Code into docs. <br />
            <span className="text-white/40">In seconds.</span>
          </h1>

          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            NexusDraft AI bridges the gap between your GitHub commits and your documentation. Stop writing—start shipping.
          </p>

          {/* CONVERSION BOX */}
          <div className="w-full max-w-lg mx-auto mb-24">
            {status !== 'success' ? (
              <form onSubmit={handleSubmit} className="flex p-1.5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl group focus-within:border-indigo-500/50 transition-all">
                <input
                  required
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 bg-transparent outline-none text-white font-medium"
                />
                <button
                  disabled={status === 'loading'}
                  className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] active:scale-95"
                >
                  {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Join Waitlist'}
                </button>
              </form>
            ) : (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold animate-in zoom-in-95 duration-300">
                <CheckCircle className="inline-block mr-2" /> You are on the list!
              </div>
            )}
          </div>

          {/* BENTO BOX GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left">
            <div className="md:col-span-2 p-10 rounded-[32px] bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
               <Terminal size={32} className="text-indigo-400 mb-6" />
               <h3 className="text-2xl font-bold mb-4">Semantic Code Intelligence</h3>
               <p className="text-slate-400 leading-relaxed">Our models don't just read syntax. They understand the architecture of your pull requests to write documentation that actually makes sense to humans.</p>
            </div>
            
            <div className="p-10 rounded-[32px] bg-gradient-to-br from-indigo-600/20 to-transparent border border-white/10">
               <GitBranch size={32} className="text-white mb-6" />
               <h3 className="text-2xl font-bold mb-4">Git Native</h3>
               <p className="text-slate-400 leading-relaxed">Integrated directly into your workflow.</p>
            </div>

            <div className="p-10 rounded-[32px] bg-white/[0.03] border border-white/10">
               <ShieldCheck size={32} className="text-emerald-400 mb-6" />
               <h3 className="text-2xl font-bold mb-4">SOC2 Secure</h3>
               <p className="text-slate-400 leading-relaxed">Your code stays yours. Period.</p>
            </div>

            <div className="md:col-span-2 p-10 rounded-[32px] bg-white/[0.03] border border-white/10 flex flex-col md:flex-row items-center gap-8">
               <div className="w-full md:w-1/3 bg-indigo-500/20 aspect-video rounded-2xl flex items-center justify-center">
                  <Cpu size={40} className="text-indigo-400 animate-pulse" />
               </div>
               <div>
                  <h3 className="text-2xl font-bold mb-2">Edge-Speed Delivery</h3>
                  <p className="text-slate-400 leading-relaxed">Processed globally. Zero latency documentation updates.</p>
               </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5 text-center text-slate-600 text-sm font-medium">
        © 2026 NexusDraft Inc. Optimized for 99th percentile velocity.
      </footer>
    </div>
  );
}