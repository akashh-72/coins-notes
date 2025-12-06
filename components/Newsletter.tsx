"use client";
"use client";

import React from 'react';

export default function Newsletter() {
    return (
        <section className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 text-white">
            {/* Premium Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/95 to-neutral-800/90"></div>

            <div className="relative z-10 px-4 py-12 sm:px-12 sm:py-24 text-center max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-serif tracking-tight">
                    Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500">Updated</span>
                </h2>
                <p className="text-base sm:text-xl text-neutral-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
                    Join our exclusive list. Get notified about new arrivals, private sales, and collecting tips.
                </p>

                <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition-all backdrop-blur-sm"
                    />
                    <button
                        type="submit"
                        className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-full hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-lg shadow-yellow-500/20 active:scale-95"
                    >
                        Subscribe
                    </button>
                </form>
                <p className="text-xs text-neutral-500 mt-6 uppercase tracking-wider">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>
        </section>
    );
}
