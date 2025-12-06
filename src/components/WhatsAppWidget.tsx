"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const WHATSAPP_NUMBER = "+60 1-2345 6789"; // Malaysia WhatsApp number
const MESSAGE = "Hello Study Connect Malaysia team! I need help with studying in Malaysia. Can you please guide me?";

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
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const openChat = () => {
    setHasInteracted(true);
    const encodedMessage = encodeURIComponent(MESSAGE);
    const url = isMobile
      ? `https://wa.me/${WHATSAPP_NUMBER.replace(/\s/g, '')}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER.replace(/\s/g, '')}&text=${encodedMessage}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  const toggleWidget = () => {
    setHasInteracted(true);
    setIsOpen(prev => !prev);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2">
      {/* Chat Widget */}
      {isOpen && (
        <div className="mb-2 w-80 sm:w-80 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] sm:shadow-[0_15px_50px_rgba(0,0,0,0.2)] border border-gray-100">
            {/* Header */}
            <div className="relative bg-linear-to-r from-green-600 to-green-500 px-4 py-3 sm:px-6 sm:py-4 text-white">
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="relative">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-green-400 border-2 border-white" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-lg font-bold">Study Connect Malaysia</p>
                    <p className="text-xs text-green-100">Online • Replies instantly</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="rounded-full bg-white/20 p-1.5 sm:p-2 transition-all hover:bg-white/30 hover:scale-110 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                >
                  <X className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                </button>
              </div>
            </div>

            {/* Message Content */}
            <div className="p-4 sm:p-6 space-y-3">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-linear-to-r from-green-600 to-green-500 flex items-center justify-center shrink-0">
                  <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="rounded-xl sm:rounded-2xl rounded-tl-sm bg-gray-50 p-3 sm:p-4">
                    <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                      Hi! 👋 Need help with studying in Malaysia? Our experts can help with:
                    </p>
                    <ul className="mt-1.5 text-xs text-gray-600 space-y-0.5">
                      <li>• University admissions in Malaysia</li>
                      <li>• Student visa processing</li>
                      <li>• Scholarship guidance</li>
                      <li>• Pre-departure support</li>
                    </ul>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Study Connect • now</p>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={openChat}
                className="w-full flex items-center justify-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-linear-to-r from-green-600 to-green-500 py-2.5 sm:py-3 text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Chat on WhatsApp</span>
                <Send className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                <span>Free consultation • Secure chat</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <div className="relative">
        {/* Notification Badge */}
        {!hasInteracted && (
          <div className="absolute -top-1 -right-1 z-10 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-red-500 text-[10px] sm:text-xs font-bold text-white animate-bounce">
            <span className="hidden sm:inline">1</span>
            <span className="sm:hidden">!</span>
          </div>
        )}
        
        <button
          type="button"
          onClick={toggleWidget}
          aria-label="Toggle WhatsApp chat"
          className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-linear-to-r from-green-600 to-green-500 text-white shadow-lg sm:shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
        >
          <MessageCircle className={`h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 ${isOpen ? 'rotate-12 scale-90' : 'group-hover:scale-110'}`} />
          
          {/* Subtle ring effect on hover */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 transition-colors duration-300" />
        </button>
      </div>
      
      {/* Floating Tooltip - Only show once */}
      {!hasInteracted && !isOpen && (
        <div className="absolute bottom-16 right-0 mb-1 animate-in slide-in-from-right-4 fade-in duration-500 delay-2000">
          <div className="relative">
            <div className="rounded-xl bg-gray-900 px-3 py-1.5 text-xs font-medium text-white shadow-md whitespace-nowrap">
              Need help? 💬
            </div>
            <div className="absolute -bottom-1 right-4 h-2 w-2 rotate-45 bg-gray-900" />
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppWidget;