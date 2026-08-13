'use client';

import React, { useState } from 'react';
import { Bot, Send, Sparkles, Loader2 } from 'lucide-react';
import { InteractiveRobotSpline } from '@/components/blocks/interactive-3d-robot';
import { PopoverCloseButton, PopoverContent, PopoverOpenArea, PopoverRoot, PopoverTrigger } from '@/components/ui/popover';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

export function RobotSection() {
  const ROBOT_SCENE_URL = 'https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode';
  const CHAT_API_URL = '/api/chat';
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: "Hello! I'm Whobee, SkillYug's AI Assistant. How can I help you build or scale your project today?" },
  ]);

  async function handleSend(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const userMsg = input.trim();
    if (!userMsg || isSending) return;

    const conversation = messages.map((message) => ({
      role: message.sender === 'user' ? 'user' as const : 'assistant' as const,
      content: message.text,
    }));

    setMessages((previous) => [...previous, { sender: 'user', text: userMsg }]);
    setInput('');
    setIsSending(true);

    try {
      const response = await fetch(CHAT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...conversation, { role: 'user', content: userMsg }] }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.detail || `Chat request failed (${response.status})`);
      }

      setMessages((previous) => [...previous, { sender: 'bot', text: data.reply }]);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'I’m having trouble connecting right now. Please try again in a moment.';

      setMessages((previous) => [
        ...previous,
        { sender: 'bot', text: `Whobee can’t answer right now: ${message}` },
      ]);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <PopoverRoot onOpenChange={setIsOpen} className="h-[480px] w-full lg:h-[540px]">
      <PopoverOpenArea className="absolute inset-0 z-0 cursor-pointer" title="Click to chat with Whobee AI">
        <InteractiveRobotSpline scene={ROBOT_SCENE_URL} className="h-full w-full" />
      </PopoverOpenArea>

      {!isOpen && (
        <PopoverTrigger
          onClick={() => setIsOpen(true)}
          className="absolute right-4 top-4 z-20 rounded-full border-blue-400/30 bg-blue-600/90 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg hover:bg-blue-500"
        >
          <Sparkles size={14} className="mr-2" /> Click Robot to Chat
        </PopoverTrigger>
      )}

      <PopoverContent className="inset-x-4 bottom-4 top-4 flex flex-col md:inset-x-auto md:right-4 md:w-[380px]">
        <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/50 bg-blue-600/30 text-blue-300">
              <Bot size={18} />
            </div>
            <div>
              <h4 className="text-sm font-bold leading-none">Whobee AI</h4>
              <span className="mt-1 flex items-center gap-1 text-[11px] text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
                {isSending ? 'Thinking...' : 'Online'}
              </span>
            </div>
          </div>
          <PopoverCloseButton className="text-neutral-400 hover:text-white" />
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm">
          {messages.map((message, index) => (
            <div
              key={`${message.sender}-${index}`}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm ${
                  message.sender === 'user'
                    ? 'rounded-br-none bg-blue-600 text-white'
                    : 'rounded-bl-none border border-white/10 bg-white/10 text-neutral-200'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isSending && (
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <Loader2 size={14} className="animate-spin" /> Whobee is thinking…
            </div>
          )}
        </div>

        <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-white/10 bg-white/5 p-3">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask Whobee about SkillYug..."
            disabled={isSending}
            className="h-10 flex-1 rounded-xl border border-white/10 bg-black/30 px-3.5 text-xs text-white outline-none placeholder:text-neutral-500 focus:border-blue-400"
          />
          <button
            type="submit"
            disabled={isSending || !input.trim()}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white transition-colors hover:bg-blue-500 disabled:opacity-50"
            aria-label="Send message"
          >
            <Send size={15} />
          </button>
        </form>
      </PopoverContent>
    </PopoverRoot>
  );
}
