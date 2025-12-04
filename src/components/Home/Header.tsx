"use client";

import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BookOpenCheck,
  Building2,
  CalendarDays,
  ChevronDown,
  Facebook,
  FileText,
  GraduationCap,
  HandCoins,
  Image as ImageIcon,
  Info,
  Landmark,
  MessageCircleQuestion,
  MessageSquareText,
  Microscope,
  Plane,
  Stamp,
  Trophy,
  UsersRound,
  Instagram,
  Youtube,
  Linkedin,
  Sparkles,
  Globe,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";

type DropdownKey = "services" | "destinations" | "about";

type ServiceItem = {
  label: string;
  icon: LucideIcon;
  description: string;
  href: string;
};

type DestinationItem = {
  country: string;
  flag: string;
  popular: boolean;
  href: string;
};

type AboutItem = {
  label: string;
  icon: LucideIcon;
  description: string;
  href: string;
};

type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

type NavLink = {
  label: string;
  href?: string;
  dropdown?: DropdownKey;
  highlight?: boolean;
};

const serviceItems: ServiceItem[] = [
  { label: "University Admissions", icon: GraduationCap, description: "Top global universities", href: "/services/admissions" },
  { label: "Free Assessment", icon: MessageSquareText, description: "Personalized consultation", href: "/services/assessment" },
  { label: "Quick Offer Letter", icon: Stamp, description: "Fast-track processing", href: "/services/offer-letter" },
  { label: "Visa Preparation", icon: FileText, description: "Documentation & guidance", href: "/services/visa-preparation" },
  { label: "Visa Processing", icon: Plane, description: "End-to-end support", href: "/services/visa-processing" },
  { label: "Language Courses", icon: BookOpenCheck, description: "IELTS/TOEFL preparation", href: "/services/language-courses" },
  { label: "Scholarship Support", icon: HandCoins, description: "Funding opportunities", href: "/services/scholarships" },
  { label: "Bank Assistance", icon: Landmark, description: "Financial documentation", href: "/services/bank-support" },
  { label: "Accommodation", icon: Building2, description: "Housing arrangements", href: "/services/accommodation" },
  { label: "Research Support", icon: Microscope, description: "Ph.D. guidance", href: "/services/research-support" },
  { label: "Interview Prep", icon: MessageCircleQuestion, description: "Embassy coaching", href: "/services/interview-prep" },
];

const destinationItems: DestinationItem[] = [
  { country: "Austria", flag: "🇦🇹", popular: false, href: "/destinations/austria" },
  { country: "UK", flag: "🇬🇧", popular: true, href: "/destinations/uk" },
  { country: "Australia", flag: "🇦🇺", popular: true, href: "/destinations/australia" },
  { country: "USA", flag: "🇺🇸", popular: true, href: "/destinations/usa" },
  { country: "Canada", flag: "🇨🇦", popular: true, href: "/destinations/canada" },
  { country: "Germany", flag: "🇩🇪", popular: false, href: "/destinations/germany" },
  { country: "France", flag: "🇫🇷", popular: false, href: "/destinations/france" },
  { country: "Netherlands", flag: "🇳🇱", popular: false, href: "/destinations/netherlands" },
  { country: "Sweden", flag: "🇸🇪", popular: false, href: "/destinations/sweden" },
  { country: "Switzerland", flag: "🇨🇭", popular: false, href: "/destinations/switzerland" },
  { country: "New Zealand", flag: "🇳🇿", popular: false, href: "/destinations/new-zealand" },
  { country: "Singapore", flag: "🇸🇬", popular: false, href: "/destinations/singapore" },
  { country: "Japan", flag: "🇯🇵", popular: false, href: "/destinations/japan" },
  { country: "South Korea", flag: "🇰🇷", popular: false, href: "/destinations/south-korea" },
  { country: "Ireland", flag: "🇮🇪", popular: false, href: "/destinations/ireland" },
  { country: "Denmark", flag: "🇩🇰", popular: false, href: "/destinations/denmark" },
];

const aboutItems: AboutItem[] = [
  { label: "About Study Connect", icon: Info, description: "Our mission & vision", href: "/about/company" },
  { label: "Expert Team", icon: UsersRound, description: "Meet our consultants", href: "/about/team" },
  { label: "Success Gallery", icon: ImageIcon, description: "Student achievements", href: "/about/gallery" },
  { label: "Success Stories", icon: Trophy, description: "Graduate testimonials", href: "/about/success-stories" },
  { label: "Events & Webinars", icon: CalendarDays, description: "Upcoming sessions", href: "/about/events" },
];

const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "https://facebook.com/studyconnect-education", icon: Facebook },
  { label: "Instagram", href: "https://instagram.com/studyconnect_education", icon: Instagram },
  { label: "YouTube", href: "https://youtube.com/@studyconnect-education", icon: Youtube },
  { label: "LinkedIn", href: "https://linkedin.com/company/studyconnect-education", icon: Linkedin },
];

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", dropdown: "services" },
  { label: "Destinations", href: "/destinations", dropdown: "destinations" },
  { label: "Universities", href: "/universities" },
  { label: "About", href: "/about", dropdown: "about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact", highlight: true },
];

const contactInfo = [
  { icon: Phone, label: "+1 234 567 8900", href: "tel:+12345678900" },
  { icon: Mail, label: "info@studyconnect.com", href: "mailto:info@studyconnect.com" },
  { icon: MapPin, label: "123 Education Street, City, Country", href: "#" },
];

const DropdownShell = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className="absolute left-1/2 top-[calc(100%+24px)] z-50 -translate-x-1/2 animate-in fade-in slide-in-from-top-2 duration-300">
    <div className="pointer-events-none absolute left-1/2 top-0 h-4 w-4 -translate-y-1/2 -translate-x-1/2 rotate-45 bg-white shadow-[0_0_0_1px_rgba(148,163,184,0.1)]" />
    <div
      className={`relative overflow-hidden rounded-2xl bg-white p-6 shadow-2xl shadow-purple-500/5 ring-1 ring-gray-100 backdrop-blur-xl ${className ?? ""}`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-white via-white to-purple-50/50" />
      <div className="relative">{children}</div>
    </div>
  </div>
);

const BrandGlyph = ({ size = "lg" }: { size?: "sm" | "lg" }) => {
  const wrapper = size === "lg" ? "h-14 w-14" : "h-12 w-12";
  const inner = size === "lg" ? "h-11 w-11 text-lg" : "h-9 w-9 text-base";

  return (
    <div
      className={`${wrapper} relative flex items-center justify-center rounded-2xl bg-linear-to-br from-violet-500 via-purple-500 to-indigo-600 shadow-lg`}
    >
      <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-white/10 to-transparent" />
      <div
        className={`${inner} flex items-center justify-center rounded-xl bg-white/95 font-black text-violet-600 shadow-inner`}
      >
        SC
      </div>
      <div className="absolute -right-1 -top-1">
        <Sparkles className="h-3 w-3 text-amber-400" fill="currentColor" />
      </div>
    </div>
  );
};

const BrandLockup = () => (
  <Link href="/" className="group flex items-center gap-3">
    <BrandGlyph />
    <div className="leading-tight transition-transform group-hover:scale-[1.02]">
      <div className="flex items-baseline gap-2">
        <p className="text-2xl font-bold tracking-tight text-gray-900">STC</p>
        <span className="rounded-full bg-linear-to-r from-violet-500 to-purple-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
          Premium
        </span>
      </div>
      <p className="bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-[11px] font-semibold uppercase tracking-[0.3em] text-transparent">
        Overseas Education
      </p>
      <p className="text-xs text-gray-500">Global Education Consultants</p>
    </div>
  </Link>
);

const renderDropdown = (key: DropdownKey) => {
  switch (key) {
    case "services":
      return (
        <DropdownShell className="w-[720px]">
          <div className="mb-4 flex items-center gap-2">
            <div className="rounded-lg bg-linear-to-r from-violet-500 to-purple-500 p-2">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Our Services</h3>
              <p className="text-sm text-gray-500">Comprehensive support for your journey</p>
            </div>
          </div>
          <div className="max-h-[360px] overflow-y-auto pr-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="grid grid-cols-2 gap-4">
              {serviceItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group cursor-pointer rounded-xl p-4 transition-all hover:bg-linear-to-r hover:from-violet-50 hover:to-purple-50 hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-violet-100 to-purple-100 text-violet-600 shadow-inner group-hover:from-violet-200 group-hover:to-purple-200">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 group-hover:text-violet-700">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </DropdownShell>
      );
    case "destinations":
      return (
        <DropdownShell className="w-[540px]">
          <div className="mb-6 flex items-center gap-2">
            <div className="rounded-lg bg-linear-to-r from-blue-500 to-cyan-500 p-2">
              <Globe className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Study Destinations</h3>
              <p className="text-sm text-gray-500">Top countries for international students</p>
            </div>
          </div>
          <div className="max-h-80 overflow-y-auto pr-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="grid grid-cols-2 gap-3">
              {destinationItems.map((item) => (
                <Link
                  key={item.country}
                  href={item.href}
                  className="group cursor-pointer flex items-center justify-between rounded-xl px-4 py-3 transition-all hover:bg-linear-to-r hover:from-blue-50 hover:to-cyan-50"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">
                      {item.flag}
                    </span>
                    <span className="font-medium text-gray-900 group-hover:text-blue-700">
                      {item.country}
                    </span>
                  </div>
                  {item.popular && (
                    <span className="rounded-full bg-linear-to-r from-amber-400 to-orange-400 px-2 py-1 text-xs font-medium text-white">
                      Popular
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </DropdownShell>
      );
    case "about":
      return (
        <DropdownShell className="w-[640px]">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="mb-6 flex items-center gap-2">
                <div className="rounded-lg bg-linear-to-r from-emerald-500 to-teal-500 p-2">
                  <Info className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">About Study Connect</h3>
                  <p className="text-sm text-gray-500">Your trusted education partner</p>
                </div>
              </div>
              <div className="space-y-3">
                {aboutItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group cursor-pointer flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-linear-to-r hover:from-emerald-50 hover:to-teal-50"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-emerald-100 to-teal-100 text-emerald-600 group-hover:from-emerald-200 group-hover:to-teal-200">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-emerald-700">
                        {item.label}
                      </p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-900 to-gray-800 p-6">
              <div className="relative z-10">
                <div className="mb-6 text-center">
                  <BrandGlyph size="sm" />
                  <p className="mt-3 text-xl font-bold text-white">Let&apos;s Connect</p>
                  <p className="mt-1 text-sm text-gray-300">
                    Follow us for updates & insights
                  </p>
                </div>
                <div className="mb-6 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-center text-sm font-medium text-white">
                    Join 10,000+ successful students
                  </p>
                </div>
                <div className="flex justify-center gap-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-all hover:scale-110 hover:bg-white hover:text-gray-900"
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 right-0 opacity-10">
                <Globe className="h-32 w-32" />
              </div>
            </div>
          </div>
        </DropdownShell>
      );
    default:
      return null;
  }
};

// Mobile Sidebar Component
const MobileSidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);

  const renderMobileDropdown = (key: DropdownKey) => {
    switch (key) {
      case "services":
        return (
          <div className="ml-4 mt-2 space-y-3 border-l border-gray-200 pl-4">
            {serviceItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-3 rounded-lg p-3 transition-all hover:bg-violet-50"
                onClick={onClose}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                  <item.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </Link>
            ))}
          </div>
        );
      case "destinations":
        return (
          <div className="ml-4 mt-2 grid grid-cols-2 gap-3 border-l border-gray-200 pl-4">
            {destinationItems.map((item) => (
              <Link
                key={item.country}
                href={item.href}
                className="flex items-center gap-2 rounded-lg p-3 transition-all hover:bg-blue-50"
                onClick={onClose}
              >
                <span className="text-xl">{item.flag}</span>
                <span className="text-sm font-medium text-gray-900">{item.country}</span>
                {item.popular && (
                  <span className="ml-auto rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
                    Popular
                  </span>
                )}
              </Link>
            ))}
          </div>
        );
      case "about":
        return (
          <div className="ml-4 mt-2 space-y-3 border-l border-gray-200 pl-4">
            {aboutItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 rounded-lg p-3 transition-all hover:bg-emerald-50"
                onClick={onClose}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                  <item.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </Link>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 p-6">
            <BrandLockup />
            <button
              onClick={onClose}
              className="rounded-lg p-2 transition-all hover:bg-gray-100"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-1">
              {navLinks.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 rounded-lg px-4 py-3 text-base font-medium text-gray-900 transition-all hover:bg-gray-50">
                        <Link
                          href={item.href ?? "#"}
                          className="flex-1 text-left"
                          onClick={onClose}
                        >
                          {item.label}
                        </Link>
                        <button
                          onClick={() =>
                            setOpenDropdown(openDropdown === item.dropdown ? null : item.dropdown!)
                          }
                          className="rounded-md p-1 text-gray-600 transition-transform"
                          aria-label={`Toggle ${item.label} menu`}
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              openDropdown === item.dropdown ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                      {openDropdown === item.dropdown && renderMobileDropdown(item.dropdown)}
                    </div>
                  ) : (
                    <Link
                      href={item.href ?? "#"}
                      className={`flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-all ${
                        item.highlight
                          ? "bg-violet-50 text-violet-700 hover:bg-violet-100"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                      onClick={onClose}
                    >
                      {item.label}
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-4 rounded-xl bg-linear-to-br from-gray-50 to-gray-100 p-4">
              <h3 className="text-sm font-semibold text-gray-900">Contact Info</h3>
              {contactInfo.map((info) => (
                <Link
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900"
                  onClick={onClose}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-gray-600">
                    <info.icon className="h-4 w-4" />
                  </div>
                  <span>{info.label}</span>
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="mb-4 text-sm font-semibold text-gray-900">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:scale-110 hover:bg-violet-100 hover:text-violet-600"
                    onClick={onClose}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 p-6">
            <Link
              href="/counselling"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-violet-600 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:shadow-violet-500/25"
              onClick={onClose}
            >
              Free Counselling
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeout.current = setTimeout(() => setActiveDropdown(null), 220);
  };

  const openDropdown = (key: DropdownKey) => {
    clearCloseTimeout();
    setActiveDropdown(key);
  };

  const closeDropdown = () => {
    clearCloseTimeout();
    setActiveDropdown(null);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    // Close any open dropdowns when opening sidebar
    if (!sidebarOpen) {
      closeDropdown();
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur-xl supports-backdrop-filter:bg-white/60">
        <div
          className="mx-auto max-w-7xl px-4 sm:px-6 py-3"
          onMouseEnter={clearCloseTimeout}
          onMouseLeave={scheduleClose}
        >
          <div className="flex items-center justify-between">
            <BrandLockup />
            
            {/* Desktop Navigation */}
            <nav 
              className="hidden lg:flex items-center gap-1"
              onMouseEnter={clearCloseTimeout}
              onMouseLeave={scheduleClose}
            >
              {navLinks.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.dropdown && openDropdown(item.dropdown)}
                  >
                    <div className="group flex items-center gap-0 rounded-full transition-all hover:bg-gray-50">
                      <Link
                        href={item.href ?? "#"}
                        className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-700 transition-all hover:text-gray-900"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={activeDropdown === item.dropdown}
                        className="flex items-center justify-center px-1 py-2.5 text-sm font-medium text-gray-700 transition-all hover:text-gray-900"
                        onFocus={() => item.dropdown && openDropdown(item.dropdown)}
                        onClick={(event) => {
                          event.preventDefault();
                          if (activeDropdown === item.dropdown) {
                            closeDropdown();
                          } else if (item.dropdown) {
                            openDropdown(item.dropdown);
                          }
                        }}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === item.dropdown
                              ? "rotate-180 text-violet-600"
                              : "text-gray-400 group-hover:text-gray-600"
                          }`}
                        />
                      </button>
                    </div>
                    {activeDropdown === item.dropdown && (
                      <div onMouseEnter={clearCloseTimeout} onMouseLeave={scheduleClose}>
                        {renderDropdown(item.dropdown)}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href ?? "#"}
                    className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all ${
                      item.highlight
                        ? "text-violet-600 hover:text-violet-700 hover:bg-violet-50"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                    onMouseEnter={closeDropdown}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={toggleSidebar}
                className="lg:hidden rounded-lg p-2 transition-all hover:bg-gray-100"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6 text-gray-600" />
              </button>
              
              {/* Desktop CTA Button */}
              <Link
                href="/counselling"
                className="hidden lg:inline-flex items-center gap-2 rounded-md bg-linear-to-r from-violet-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/35 hover:-translate-y-0.5 hover:from-violet-700 hover:to-purple-700"
              >
                <span>Free Counselling</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Header;
