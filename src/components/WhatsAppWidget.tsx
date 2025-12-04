"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const WHATSAPP_NUMBER = "+8801304589994";
const MESSAGE = "Hello Study Connect team! I need help with studying abroad. Can you please guide me?";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const ua = navigator.userAgent || "";
      setIsMobile(/Android|iPhone|iPad|iPod/i.test(ua));
    }

    // Show widget after a delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Auto-pulse effect if user hasn't interacted
    const pulseTimer = setInterval(() => {
      if (!hasInteracted) {
        // Trigger pulse animation by briefly toggling a state
      }
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearInterval(pulseTimer);
    };
  }, [hasInteracted]);

  const openChat = () => {
    setHasInteracted(true);
    const encodedMessage = encodeURIComponent(MESSAGE);
    const url = isMobile
      ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
    window.open(url, "_blank");
    setIsOpen(false); // Close widget after opening chat
  };

  const toggleWidget = () => {
    setHasInteracted(true);
    setIsOpen(prev => !prev);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {isOpen && (
        <div className="group w-96 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_25px_60px_rgba(12,16,44,0.3)] backdrop-blur-sm border border-gray-100">
            {/* Header */}
            <div className="relative bg-linear-to-r from-[#25d366] to-[#20c75a] px-6 py-4 text-white">
              <div className="absolute inset-0 bg-linear-to-r from-green-600/20 to-green-500/20" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-400 border-2 border-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold">Study Connect</p>
                    <p className="text-xs text-green-100">Online • Typically replies instantly</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="group/btn rounded-full bg-white/20 p-2 transition-all hover:bg-white/30 hover:scale-110 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4 text-white transition-transform group-hover/btn:rotate-90" />
                </button>
              </div>
            </div>

            {/* Message Content */}
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-linear-to-r from-[#25d366] to-[#20c75a] flex items-center justify-center shrink-0">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="rounded-2xl rounded-tl-sm bg-gray-100 p-4">
                    <p className="text-sm text-gray-800 leading-relaxed">
                      Hi there! 👋 <br/>
                      Need help with studying abroad? Our education consultants are here to assist you with:
                    </p>
                    <ul className="mt-2 text-xs text-gray-600 space-y-1">
                      <li>• University selection & applications</li>
                      <li>• Visa guidance & processing</li>
                      <li>• Scholarship opportunities</li>
                      <li>• IELTS preparation</li>
                    </ul>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Study Connect Team • now</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={openChat}
                  className="group/chat w-full flex items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-[#25d366] to-[#20c75a] py-4 text-white font-semibold shadow-[0_15px_35px_rgba(37,211,102,0.4)] transition-all duration-300 hover:shadow-[0_20px_45px_rgba(37,211,102,0.6)] hover:-translate-y-1 cursor-pointer"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Continue on WhatsApp</span>
                  <Send className="h-4 w-4 transition-transform group-hover/chat:translate-x-1" />
                </button>
                
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Free consultation • No spam • Secure chat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="relative">
        {/* Pulse Animation Ring */}
        {!hasInteracted && (
          <div className="absolute inset-0 -m-2 rounded-full bg-[#25d366]/30 animate-ping" />
        )}
        
        {/* Notification Badge */}
        {!hasInteracted && (
          <div className="absolute -top-1 -right-1 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white animate-bounce">
            1
          </div>
        )}
        
        <button
          type="button"
          onClick={toggleWidget}
          aria-label="Toggle WhatsApp chat"
          className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-r from-[#25d366] to-[#20c75a] text-white shadow-[0_20px_40px_rgba(37,211,102,0.45)] transition-all duration-300 hover:shadow-[0_25px_50px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 cursor-pointer"
        >
          <div className="absolute inset-0 rounded-full bg-linear-to-t from-white/10 to-transparent" />
          <MessageCircle className={`h-8 w-8 transition-transform duration-300 ${isOpen ? 'rotate-12 scale-90' : 'group-hover:scale-110'}`} />
        </button>
      </div>
      
      {/* Floating Tooltip */}
      {!hasInteracted && !isOpen && isVisible && (
        <div className="absolute bottom-20 right-0 mb-2 animate-in slide-in-from-right-4 fade-in duration-500 delay-1000">
          <div className="relative">
            <div className="rounded-2xl bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-lg whitespace-nowrap">
              Need help? Chat with us! 💬
            </div>
            <div className="absolute -bottom-1 right-8 h-3 w-3 rotate-45 bg-gray-900" />
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppWidget;
