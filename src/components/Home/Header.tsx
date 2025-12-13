/* eslint-disable @next/next/no-img-element */
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
  MessageCircleQuestion,
  MessageSquareText,
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
  Home,
  School,
  Award,
  Briefcase,
} from "lucide-react";

type DropdownKey = "services" | "malaysia" | "about";

type ServiceItem = {
  label: string;
  icon: LucideIcon;
  description: string;
  href: string;
};

type MalaysiaItem = {
  label: string;
  icon: LucideIcon;
  description: string;
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
  { label: "University Admissions", icon: GraduationCap, description: "Top Malaysian universities", href: "/services" },
  { label: "Free Assessment", icon: MessageSquareText, description: "Personalized consultation", href: "/services" },
  { label: "Offer Letter Processing", icon: Stamp, description: "Fast-track acceptance", href: "/services" },
  { label: "Student Visa", icon: FileText, description: "Visa application & guidance", href: "/malaysia-student-visa" },
  { label: "EMGS Processing", icon: Plane, description: "Education Malaysia support", href: "/services" },
  { label: "Scholarship Support", icon: HandCoins, description: "Malaysian scholarships", href: "/services" },
  { label: "Accommodation", icon: Building2, description: "Student housing in Malaysia", href: "/services" },
  { label: "Airport Pickup", icon: Plane, description: "Arrival assistance", href: "/services" },
  { label: "Pre-departure Briefing", icon: MessageCircleQuestion, description: "Orientation & guidance", href: "/services" },
  { label: "Post-Arrival Support", icon: Home, description: "Settlement assistance", href: "/services" },
];

const malaysiaItems: MalaysiaItem[] = [
  { label: "Why Study in Malaysia", icon: Award, description: "Benefits & advantages", href: "/destinations" },
  { label: "Education System", icon: School, description: "Academic structure", href: "/destinations" },
  { label: "Top Universities", icon: GraduationCap, description: "Rankings & programs", href: "/destinations" },
  { label: "Cost of Studying", icon: HandCoins, description: "Tuition & living expenses", href: "/destinations" },
  { label: "Student Life", icon: UsersRound, description: "Campus & culture", href: "/destinations" },
  { label: "Visa Requirements", icon: FileText, description: "Document checklist", href: "/malaysia-student-visa" },
  { label: "Work Opportunities", icon: Briefcase, description: "Part-time & post-study", href: "/destinations" },
  { label: "Popular Courses", icon: BookOpenCheck, description: "In-demand programs", href: "/destinations" },
  { label: "Accommodation Guide", icon: Building2, description: "Living options", href: "/destinations" },
  { label: "Health & Safety", icon: Award, description: "Medical & insurance", href: "/destinations" },
  { label: "Cultural Adaptation", icon: UsersRound, description: "Local customs & tips", href: "/destinations" },
  { label: "Travel Guide", icon: Plane, description: "Exploring Malaysia", href: "/destinations" },
];

const aboutItems: AboutItem[] = [
  { label: "About Study Connect Malaysia", icon: Info, description: "Our mission & vision", href: "/about" },
  { label: "Expert Team", icon: UsersRound, description: "Malaysia education specialists", href: "/about/team" },
  { label: "Success Gallery", icon: ImageIcon, description: "Student achievements", href: "/about" },
  { label: "Success Stories", icon: Trophy, description: "Graduate testimonials", href: "/about" },
  { label: "Events & Webinars", icon: CalendarDays, description: "Study Malaysia sessions", href: "/about" },
  { label: "Partnerships", icon: HandCoins, description: "University collaborations", href: "/about" },
];

const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "https://facebook.com/studyconnect-malaysia", icon: Facebook },
  { label: "Instagram", href: "https://instagram.com/studyconnect_malaysia", icon: Instagram },
  { label: "YouTube", href: "https://youtube.com/@studyconnect-malaysia", icon: Youtube },
  { label: "LinkedIn", href: "https://linkedin.com/company/studyconnect-malaysia", icon: Linkedin },
];

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", dropdown: "services" },
  { label: "Study in Malaysia", href: "/destinations", dropdown: "malaysia" },
  { label: "Universities", href: "/universities" },
  { label: "About", href: "/about", dropdown: "about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact", highlight: true },
];

const contactInfo = [
  { icon: Phone, label: "+60 3-1234 5678", href: "tel:+60312345678" },
  { icon: Mail, label: "malaysia@studyconnect.com", href: "mailto:malaysia@studyconnect.com" },
  { icon: MapPin, label: "Kuala Lumpur, Malaysia", href: "#" },
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
      className={`relative overflow-hidden rounded-2xl bg-white p-6 shadow-2xl shadow-blue-500/5 ring-1 ring-gray-100 backdrop-blur-xl ${className ?? ""}`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-white via-white to-blue-50/50" />
      <div className="relative">{children}</div>
    </div>
  </div>
);

const BrandGlyph = ({ size = "lg" }: { size?: "sm" | "lg" }) => {
  const wrapper = size === "lg" ? "h-14 w-14" : "h-12 w-12";
  const inner = size === "lg" ? "h-11 w-11 text-lg" : "h-9 w-9 text-base";

  return (
    <div
      className={`${wrapper} relative flex items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 via-red-500 to-white shadow-lg`}
    >
      {/* glossy overlay */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-white/10 to-transparent" />

      {/* inner white container */}
      <div
        className={`${inner} flex items-center justify-center rounded-xl bg-white/95 shadow-inner p-2`}
      >
        <img
          src="/logos/malaysia/logo.jpg"
          alt="Brand Logo"
          className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
        />
      </div>

      {/* sparkle accent */}
      <div className="absolute -right-1 -top-1">
        <Sparkles className="h-3 w-3 text-yellow-400" fill="currentColor" />
      </div>
    </div>
  );
};

const BrandLockup = () => (
  <Link href="/" className="group flex items-center gap-3">
    <BrandGlyph />
    <div className="leading-tight transition-transform group-hover:scale-[1.02]">
      <div className="flex items-baseline gap-2">
        {/* 🔁 STC → Study Connect */}
        <p className="text-2xl font-bold tracking-tight text-gray-900">
          Study Connect
        </p>
        <span className="rounded-full bg-linear-to-r from-blue-500 to-red-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
          Malaysia
        </span>
      </div>
      <p className="bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-[11px] font-semibold uppercase tracking-[0.3em] text-transparent">
        Study in Malaysia
      </p>
      <p className="text-xs text-gray-500">Malaysian Education Specialists</p>
    </div>
  </Link>
);

const renderDropdown = (key: DropdownKey) => {
  switch (key) {
    case "services":
      return (
        <DropdownShell className="w-[680px]">
          <div className="mb-3 flex items-center gap-2">
            <div className="rounded-lg bg-linear-to-r from-blue-500 to-red-500 p-1.5">
              <GraduationCap className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Our Malaysia Services
              </h3>
              <p className="text-xs text-gray-500">
                Complete support for studying in Malaysia
              </p>
            </div>
          </div>
          <div className="max-h-80 overflow-y-auto pr-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="grid grid-cols-2 gap-2">
              {serviceItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group cursor-pointer rounded-lg p-3 transition-all hover:bg-linear-to-r hover:from-blue-50 hover:to-red-50 hover:shadow-md"
                >
                  <div className="flex items-start gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-100 to-red-100 text-blue-600 shadow-inner group-hover:from-blue-200 group-hover:to-red-200">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-700">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-xs text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </DropdownShell>
      );
    case "malaysia":
      return (
        <DropdownShell className="w-[540px]">
          <div className="mb-6 flex items-center gap-2">
            <div className="rounded-lg bg-linear-to-r from-blue-500 to-red-500 p-2">
              <Globe className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Study in Malaysia 🇲🇾
              </h3>
              <p className="text-sm text-gray-500">
                Everything about Malaysian education
              </p>
            </div>
          </div>
          <div className="max-h-80 overflow-y-auto pr-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="grid grid-cols-2 gap-3">
              {malaysiaItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group cursor-pointer flex items-center gap-3 rounded-xl px-4 py-3 transition-all hover:bg-linear-to-r hover:from-blue-50 hover:to-red-50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-200">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 group-hover:text-blue-700">
                      {item.label}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </DropdownShell>
      );
    case "about":
      return (
        <DropdownShell className="w-[580px]">
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <div className="rounded-lg bg-linear-to-r from-blue-500 to-red-500 p-1.5">
                  <Info className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    About Study Connect Malaysia
                  </h3>
                  <p className="text-xs text-gray-500">
                    Your trusted Malaysia education partner
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                {aboutItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group cursor-pointer flex items-center gap-2 rounded-lg p-2 transition-all hover:bg-linear-to-r hover:from-blue-50 hover:to-red-50"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-linear-to-br from-blue-100 to-red-100 text-blue-600 group-hover:from-blue-200 group-hover:to-red-200">
                      <item.icon className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 leading-tight">
                        {item.label}
                      </p>
                      <p className="text-xs text-gray-500 leading-tight">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-900 to-red-800 p-4">
              <div className="relative z-10">
                <div className="mb-4 text-center">
                  <BrandGlyph size="sm" />
                  <p className="mt-2 text-lg font-bold text-white">
                    Study Malaysia Experts
                  </p>
                  <p className="mt-1 text-xs text-gray-300">
                    1+ years experience in Malaysian education
                  </p>
                </div>
                <div className="mb-4 rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                  <p className="text-center text-xs font-medium text-white">
                    0,000+ students placed in Malaysia
                  </p>
                </div>
                <div className="flex justify-center gap-2">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white transition-all hover:scale-110 hover:bg-white hover:text-gray-900"
                    >
                      <social.icon className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 right-0 opacity-10">
                <Globe className="h-24 w-24" />
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
                className="group flex items-center gap-3 rounded-lg p-3 transition-all hover:bg-blue-50"
                onClick={onClose}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <item.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {item.label}
                  </p>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </Link>
            ))}
          </div>
        );
      case "malaysia":
        return (
          <div className="ml-4 mt-2 space-y-3 border-l border-gray-200 pl-4">
            {malaysiaItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 rounded-lg p-3 transition-all hover:bg-blue-50"
                onClick={onClose}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <item.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {item.label}
                  </p>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
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
                className="flex items-center gap-3 rounded-lg p-3 transition-all hover:bg-blue-50"
                onClick={onClose}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <item.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {item.label}
                  </p>
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
                            setOpenDropdown(
                              openDropdown === item.dropdown ? null : item.dropdown!
                            )
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
                      {openDropdown === item.dropdown &&
                        renderMobileDropdown(item.dropdown)}
                    </div>
                  ) : (
                    <Link
                      href={item.href ?? "#"}
                      className={`flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-all ${
                        item.highlight
                          ? "bg-blue-50 text-blue-700 hover:bg-blue-100"
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
              <h3 className="text-sm font-semibold text-gray-900">
                Contact Info (Malaysia)
              </h3>
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
              <h3 className="mb-4 text-sm font-semibold text-gray-900">
                Follow Us
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:scale-110 hover:bg-blue-100 hover:text-blue-600"
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
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-blue-600 to-red-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:shadow-blue-500/25"
              onClick={onClose}
            >
              Free Malaysia Counselling
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
                              ? "rotate-180 text-blue-600"
                              : "text-gray-400 group-hover:text-gray-600"
                          }`}
                        />
                      </button>
                    </div>
                    {activeDropdown === item.dropdown && (
                      <div
                        onMouseEnter={clearCloseTimeout}
                        onMouseLeave={scheduleClose}
                      >
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
                        ? "text-blue-600 hover:text-blue-700 hover:bg-blue-50"
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
                className="hidden lg:inline-flex items-center gap-2 rounded-md bg-linear-to-r from-blue-600 to-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 hover:from-blue-700 hover:to-red-700"
              >
                <span>Free Counselling</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </>
  );
};

export default Header;
