'use client';

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Bot, Send, X, Loader2, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

const QUICK_PROMPTS = [
  'What services does SkillYug offer?',
  'How do I start a project?',
  'Tell me about AI Agents',
];

export function WhobeeFloatingChat() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Hello! I'm Whobee, SkillYug's AI Assistant. How can I help you build or scale your project today?",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  async function sendMessage(userMsg: string) {
    if (!userMsg.trim() || isSending) return;

    const conversation = messages.map((m) => ({
      role: m.sender === 'user' ? ('user' as const) : ('assistant' as const),
      content: m.text,
    }));

    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');
    setIsSending(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...conversation, { role: 'user', content: userMsg }],
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.detail || `Chat request failed (${response.status})`);
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }]);
    } catch (error) {
      const msg =
        error instanceof Error
          ? error.message
          : "I'm having trouble connecting right now. Please try again in a moment.";

      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: `Whobee can't answer right now: ${msg}` },
      ]);
    } finally {
      setIsSending(false);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    void sendMessage(input);
  }

  if (!mounted) return null;

  const content = (
    <>
      {/* ─── Floating Trigger Area ─── */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 999999,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          pointerEvents: 'auto',
        }}
      >
        {/* Label pill — only shown when chat is closed, desktop only */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/90 text-slate-200 border border-slate-700/60 text-xs shadow-xl backdrop-blur-md select-none"
              style={{ pointerEvents: 'none' }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium tracking-wide">Chat with Whobee AI</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Liquid Metal FAB — open state shows a close button instead */}
        {isOpen ? (
          <motion.button
            type="button"
            onClick={() => setIsOpen(false)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              border: '1px solid rgba(99,102,241,0.4)',
              color: '#a5b4fc',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}
            aria-label="Close Whobee AI Chat"
          >
            <ChevronDown size={22} />
          </motion.button>
        ) : (
          <LiquidMetalButton
            viewMode="icon"
            label="Open Whobee AI Chat"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>

      {/* ─── Chat Window ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 360, damping: 28 }}
            style={{
              position: 'fixed',
              bottom: '92px',
              right: '24px',
              zIndex: 999999,
              width: 'calc(100vw - 32px)',
              maxWidth: '384px',
              height: '520px',
              maxHeight: 'calc(100vh - 120px)',
            }}
            className="flex flex-col rounded-2xl border border-slate-700/70 bg-slate-950/96 backdrop-blur-2xl shadow-2xl overflow-hidden text-slate-100 font-sans pointer-events-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/80 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md border border-blue-400/40">
                  <Bot size={20} />
                  {/* Online dot */}
                  <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-slate-900" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-bold text-white tracking-wide">Whobee AI</h3>
                    <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      SkillYug
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {isSending ? 'Thinking...' : 'Skillyug AI'}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3.5 overflow-y-auto p-4 text-sm scrollbar-thin scrollbar-thumb-slate-800">
              {messages.map((message, index) => (
                <div
                  key={`${message.sender}-${index}`}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed shadow-sm ${
                      message.sender === 'user'
                        ? 'rounded-br-none bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium'
                        : 'rounded-bl-none bg-slate-900/90 border border-slate-800 text-slate-200'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {isSending && (
                <div className="flex items-center gap-2 text-xs text-blue-400 font-medium pl-1">
                  <Loader2 size={15} className="animate-spin text-blue-400" />
                  <span>Whobee is typing...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts */}
            {messages.length <= 2 && !isSending && (
              <div className="px-3 py-2 border-t border-slate-800/40 bg-slate-900/40 flex flex-wrap gap-1.5">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => void sendMessage(prompt)}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-blue-600/30 hover:border-blue-500/50 text-slate-300 hover:text-blue-200 border border-slate-700/60 transition-all text-left cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-slate-800/80 bg-slate-900/90 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Whobee about SkillYug..."
                disabled={isSending}
                className="h-10 flex-1 rounded-xl border border-slate-700/60 bg-slate-950 px-3.5 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <button
                type="submit"
                disabled={isSending || !input.trim()}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed shadow-md cursor-pointer"
                aria-label="Send message"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  return createPortal(content, document.body);
}
