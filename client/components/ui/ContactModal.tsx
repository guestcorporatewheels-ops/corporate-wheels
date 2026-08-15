import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '../../hooks/use-toast';

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // lightweight client-side validation
    if (!name || !email || !message) {
      toast({ title: 'Please complete all fields', description: 'Name, email and message are required.', variant: 'destructive' });
      return;
    }

    // fake submit
    setTimeout(() => {
      toast({ title: 'Message sent', description: 'We will get back to you shortly.' });
      setName('');
      setEmail('');
      setMessage('');
      onClose();
    }, 400);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />
          <motion.div className="relative w-full max-w-lg bg-card/90 backdrop-blur rounded-2xl p-6 shadow-2xl border border-white/10" initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}>
            <h3 className="text-lg font-semibold">Contact our partnerships team</h3>
            <p className="text-sm text-muted-foreground mt-1">Tell us about your needs and we'll reach out with a tailored plan.</p>
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <input className="w-full rounded-md p-2 bg-zinc-900 border border-white/10" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
              <input className="w-full rounded-md p-2 bg-zinc-900 border border-white/10" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <textarea className="w-full rounded-md p-2 bg-zinc-900 border border-white/10" placeholder="Message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
              <div className="flex justify-end">
                <button type="button" className="mr-2 px-4 py-2 rounded-md bg-transparent border border-white/10" onClick={onClose}>Close</button>
                <button type="submit" className="px-4 py-2 rounded-md bg-corporate-gold text-black font-semibold">Send</button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
