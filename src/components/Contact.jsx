import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
  };

  return (
    <section id="contact" className="relative bg-black text-white py-24">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold">Contact</h3>
        <p className="mt-3 text-white/70 max-w-2xl">Have an idea or a project in mind? Let’s collaborate.</p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/60 ring-1 ring-white/10">
                <Mail className="h-5 w-5 text-yellow-300" />
              </div>
              <h4 className="text-lg font-semibold">Reach out</h4>
            </div>
            <p className="mt-3 text-white/70 text-sm">Email: hello@joseph.dev</p>
            <p className="text-white/70 text-sm">Location: Remote • Global</p>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required type="text" placeholder="Your name" className="w-full rounded-xl bg-black/50 p-3 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-yellow-300/60" />
              <input required type="email" placeholder="Your email" className="w-full rounded-xl bg-black/50 p-3 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-yellow-300/60" />
            </div>
            <textarea required placeholder="Your message" rows={5} className="mt-4 w-full rounded-xl bg-black/50 p-3 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-yellow-300/60" />
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-full bg-purple-600/80 px-5 py-3 font-medium hover:bg-purple-500 transition">
              Send message <Send className="h-4 w-4" />
            </button>
            {status && <p className="mt-3 text-sm text-yellow-300">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
