/* eslint-disable @next/next/no-img-element */

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
  ChevronRight,
  GraduationCap,
  Building2,
  UsersRound,
  Globe,
  BookOpenCheck
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

const malaysiaServices = [
  "Admission in Malaysian Universities",
  "Free Malaysia Education Assessment",
  "EMGS Application Processing",
  "Student Visa Processing",
  "Scholarship for Malaysia Studies",
  "Accommodation in Malaysia",
  "Pre-departure Briefing",
  "Post-arrival Support",
  "Airport Pickup Service",
  "Bank & Financial Documentation",
  "Health Insurance Arrangement",
  "Part-time Job Assistance",
];

const malaysiaUniversities = [
  "University of Malaya (UM)",
  "Universiti Teknologi Malaysia (UTM)",
  "Universiti Putra Malaysia (UPM)",
  "Universiti Sains Malaysia (USM)",
  "Universiti Kebangsaan Malaysia (UKM)",
  "Taylor's University",
  "Sunway University",
  "INTI International University",
  "University of Nottingham Malaysia",
  "Monash University Malaysia",
  "Asia Pacific University (APU)",
  "Limkokwing University",
];

const popularCourses = [
  "Medicine & Health Sciences",
  "Engineering & Technology",
  "Business & Management",
  "Computer Science & IT",
  "Architecture & Design",
  "Hospitality & Tourism",
  "Law & Social Sciences",
  "Education & Humanities",
  "Pharmacy & Life Sciences",
  "Media & Communications",
];

const contactInfo: ContactItem[] = [
  { icon: Mail, label: "malaysia@studyconnect.com" },
  { icon: Phone, label: "+60 3-1234 5678 (Malaysia Office)" },
  { icon: Phone, label: "+60 1-2345 6789 (WhatsApp)" },
  { icon: Phone, label: "+88 0184 4220 003 (Bangladesh Office)" },
  {
    icon: MapPin,
    label: "Kuala Lumpur Office: Level 23, Menara Maxis, Kuala Lumpur City Centre, 50088 Kuala Lumpur, Malaysia"
  },
  {
    icon: MapPin,
    label: "Bangladesh Office: United Benison (5th & 6th floor) House -1, Road -17, Block - D, Banani, Dhaka - 1213, Bangladesh"
  },
];

const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "https://facebook.com/studyconnect-malaysia", icon: Facebook },
  { label: "Instagram", href: "https://instagram.com/studyconnect_malaysia", icon: Instagram },
  { label: "YouTube", href: "https://youtube.com/@studyconnect-malaysia", icon: Youtube },
  { label: "LinkedIn", href: "https://linkedin.com/company/studyconnect-malaysia", icon: Linkedin },
];

const malaysiaStats = [
  { label: "Students Placed", value: "0,000+" },
  { label: "Partner Universities", value: "10+" },
  { label: "Success Rate", value: "98%" },
  { label: "Years Experience", value: "1+" },
];

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-blue-900 to-black text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Column 1: About & Social */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-3 rounded-lg bg-linear-to-r from-blue-600 to-red-600 px-4 py-2">

                  {/* Logo Box */}
                  <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm p-1.5">
                    <img
                      src="/logos/malaysia/logo.png"
                      alt="Study Connect Malaysia Logo"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h2 className="text-xl font-bold text-white">Study Connect Malaysia</h2>
                    <img
                      src="https://flagcdn.com/my.svg"
                      alt="Malaysia Flag"
                      className="h-2 w-auto mr-1"
                    />
                    <p className="text-xs text-blue-100">

                      Malaysian Education Specialists</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-300">Your Gateway to Malaysia</h3>
                <h2 className="mt-2 text-3xl font-bold">
                  Let&apos;s Connect.
                </h2>
                <p className="mt-3 text-sm text-gray-400">
                  Expert guidance for studying in Malaysia&apos;s top universities. 10+ years of experience in Malaysian education.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {malaysiaStats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-blue-800/30 p-3 text-center backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Follow Our Malaysia Updates
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-800/50 text-gray-300 transition-all hover:scale-110 hover:bg-blue-600 hover:text-white hover:shadow-lg"
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>


          {/* Column 2: Malaysia Services */}
          <div>
            <h2 className="mb-6 text-2xl font-bold flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-blue-400" />
              Our Malaysia Services
            </h2>
            <ul className="space-y-3">
              {malaysiaServices.map((service) => (
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

          {/* Column 3: Universities & Courses */}
          <div>
            <h2 className="mb-6 text-2xl font-bold flex items-center gap-2">
              <Building2 className="h-6 w-6 text-red-400" />
              Top Universities
            </h2>
            <div className="space-y-4">
              <div className="space-y-3">
                {malaysiaUniversities.slice(0, 6).map((university) => (
                  <Link
                    key={university}
                    href="#"
                    className="block text-sm text-gray-300 transition-all hover:text-white hover:translate-x-1"
                  >
                    {university}
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-800">
                <h3 className="mb-3 text-lg font-semibold flex items-center gap-2">
                  <BookOpenCheck className="h-5 w-5 text-blue-400" />
                  Popular Courses
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularCourses.map((course) => (
                    <span
                      key={course}
                      className="inline-block rounded-full bg-blue-900/50 px-3 py-1 text-xs text-gray-300 hover:bg-blue-800 hover:text-white transition-all"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Address & Contact */}
          <div>
            <h2 className="mb-6 text-2xl font-bold flex items-center gap-2">
              <UsersRound className="h-6 w-6 text-red-400" />
              Contact Us
            </h2>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-900 to-blue-800">
                    <item.icon className="h-4 w-4 text-blue-300" />
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Why Malaysia */}
            <div className="mt-8 rounded-xl bg-blue-900/30 p-4 backdrop-blur-sm">
              <h3 className="mb-3 text-lg font-semibold flex items-center gap-2">
                <Globe className="h-5 w-5 text-white" />
                Why Study in Malaysia?
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
                  <span>Affordable tuition fees & living costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
                  <span>World-class education with international recognition</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
                  <span>Multicultural society with English widely spoken</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
                  <span>Safe and student-friendly environment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-linear-to-r from-transparent via-blue-800 to-transparent" />

        {/* Malaysian Cities & Quick Links */}
        <div className="text-center">
          <h3 className="mb-6 text-xl font-bold text-white">Study Locations in Malaysia</h3>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            {[
              "Kuala Lumpur", "Penang", "Selangor", "Johor Bahru",
              "Malacca", "Sabah", "Sarawak", "Putrajaya",
              "Cyberjaya", "Shah Alam", "Ipoh", "Kuching"
            ].map((city) => (
              <span
                key={city}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors hover:scale-105"
              >
                {city}
              </span>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold text-gray-300">Quick Links</h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                "EMGS Application Process",
                "Student Visa Requirements",
                "Malaysia Education System",
                "Cost Calculator",
                "Scholarships in Malaysia",
                "Accommodation Guide",
                "International Students FAQ",
                "Post-Study Work Visa"
              ].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Study Connect Malaysia - Overseas Education Consultants. All rights reserved.
            </p>
            <p className="mt-2 text-xs text-gray-600">
              Study Connect Malaysia is an authorized agent for Malaysian universities and operates under the regulations of the Ministry of Higher Education Malaysia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;