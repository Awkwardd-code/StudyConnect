"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight
} from "lucide-react";

type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

type ContactItem = {
  icon: LucideIcon;
  label: string;
};

const services = [
  "Admission in Foreign Universities",
  "Free assessment & Consultation",
  "Quick Offer Letter",
  "Visa Documents Preparation",
  "Visa Guidance & Processing",
  "Scholarship/Funding",
  "Bank Support",
  "Accommodation",
  "Ph.D/Research support",
  "Embassy Interview Preparation",
];

const destinationsColumn1 = [
  "Study in Australia",
  "Study in USA",
  "Study in UK",
  "Study in Austria",
  "Study in Canada",
  "Study in Lithuania",
  "Study in Hungary",
  "Study in South Korea",
];

const destinationsColumn2 = [
  "Study in France",
  "Study in Sweden",
  "Study in Denmark",
  "Study in Cyprus",
  "Study in Dubai",
  "Study in Malaysia",
  "Study in Malta",
  "Study in New Zealand",
];

const contactInfo: ContactItem[] = [
  { icon: Mail, label: "studyconnectbd@gmail.com" },
  { icon: Phone, label: "+880184 4220 001" },
  { icon: Phone, label: "+880184 4220 002" },
  { icon: Phone, label: "+880184 4220 003" },
  { 
    icon: MapPin, 
    label: "United Benison (5th & 6th floor) House -1, Road -17, Block - D (Hotel Sarina Opposite), Banani, Dhaka - 1213, Bangladesh"
  },
];

const coverageCountries = [
  "Australia",
  "USA",
  "UK",
  "Austria",
  "Canada",
  "France",
  "Denmark",
  "Hungary",
  "Lithuania",
  "South Korea",
  "Sweden",
  "Cyprus",
  "Malaysia",
  "Malta",
  "New Zealand",
];

const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "YouTube", href: "#", icon: Youtube },
  { label: "LinkedIn", href: "#", icon: Linkedin },
];

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-gray-900 to-black text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Column 1: About & Social */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-3 rounded-lg bg-linear-to-r from-blue-600 to-blue-800 px-4 py-2">
                  <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-lg font-bold text-white">SC</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Study Connect</h2>
                    <p className="text-xs text-blue-100">Global Education</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-300">About Us</h3>
                <h2 className="mt-2 text-3xl font-bold">
                  Let&apos;s get Social.
                </h2>
                <p className="mt-3 text-sm text-gray-400">
                  Connect with us for updates and guidance on your study abroad journey.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all hover:scale-110 hover:bg-blue-600 hover:text-white hover:shadow-lg"
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">Our Services</h2>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="group">
                  <Link 
                    href="#" 
                    className="flex items-center gap-2 text-gray-300 transition-all hover:text-white hover:translate-x-1"
                  >
                    <ChevronRight className="h-4 w-4 text-blue-400 opacity-0 transition-opacity group-hover:opacity-100" />
                    <span className="text-sm">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Destinations */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">Study Destinations</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {/* Left column */}
              <div className="space-y-3">
                {destinationsColumn1.map((destination) => (
                  <Link
                    key={destination}
                    href="#"
                    className="block text-sm text-gray-300 transition-all hover:text-white hover:translate-x-1"
                  >
                    {destination}
                  </Link>
                ))}
              </div>
              
              {/* Right column */}
              <div className="space-y-3">
                {destinationsColumn2.map((destination) => (
                  <Link
                    key={destination}
                    href="#"
                    className="block text-sm text-gray-300 transition-all hover:text-white hover:translate-x-1"
                  >
                    {destination}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 4: Address */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">Address</h2>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-gray-800 to-gray-900">
                    <item.icon className="h-4 w-4 text-blue-400" />
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-linear-to-r from-transparent via-gray-700 to-transparent" />

        {/* Coverage Countries */}
        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6">
            {coverageCountries.map((country) => (
              <span
                key={country}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {country}
              </span>
            ))}
          </div>
          
          <div className="mt-6">
            <div className="inline-flex items-center justify-center gap-2">
              {coverageCountries.slice(0, 8).map((country) => (
                <span
                  key={country}
                  className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {country}
                </span>
              ))}
            </div>
            <div className="inline-flex items-center justify-center gap-2 mt-2">
              {coverageCountries.slice(8).map((country) => (
                <span
                  key={country}
                  className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <p className="mt-8 text-sm text-gray-500">
            © {new Date().getFullYear()} Study Connect Overseas Education. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;