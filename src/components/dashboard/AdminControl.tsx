"use client";
import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function MasterControl() {
  const [msg, setMsg] = useState("System Standby");

  const changeLiveVersion = async (v: string) => {
    setMsg(`Broadcasting ${v.toUpperCase()}...`);
    const { error } = await supabase
      .from('site_settings')
      .update({ value: v })
      .eq('key', 'active_tier');
    
    if (error) setMsg("Error: " + error.message);
    else setMsg(`ACTIVE: Site updated to ${v.toUpperCase()}`);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <div className="border border-zinc-800 p-10 bg-zinc-950 rounded-lg max-w-sm w-full text-center">
        <h1 className="text-xl font-black tracking-widest mb-2">VI_WEB_SYNC</h1>
        <p className="text-xs text-zinc-500 mb-8 uppercase font-mono">{msg}</p>
        
        <div className="space-y-4">
          {['alpha', 'gamma', 'zeta'].map((v) => (
            <button 
              key={v}
              onClick={() => changeLiveVersion(v)}
              className="w-full py-3 border border-zinc-700 hover:border-white transition-all uppercase text-xs font-bold tracking-widest"
            >
              Activate {v}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}