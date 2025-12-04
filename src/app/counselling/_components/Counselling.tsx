"use client";

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { ArrowRight, CheckCircle, Star, Users, Award, Globe } from "lucide-react";

const CounsellingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    country: "",
    ielts: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <section className="bg-linear-to-b from-[#f4f6ff] via-[#f8faff] to-white pb-24">
      {/* Enhanced Hero Header */}
      <div className="relative h-80 overflow-hidden rounded-b-[40px] bg-linear-to-br from-[#12074a] via-[#1e0a5c] to-[#2a1065]">
        <div className="absolute inset-0 bg-linear-to-r from-purple-900/30 to-blue-900/30" />
        <img
          src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=80"
          alt="Graduation ceremony with students celebrating"
          className="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
        
        {/* Floating Elements */}
        <div className="absolute top-8 right-8 opacity-20">
          <div className="flex space-x-4">
            <Star className="h-6 w-6 text-yellow-300 animate-pulse" fill="currentColor" />
            <Globe className="h-6 w-6 text-blue-300 animate-bounce" />
            <Award className="h-6 w-6 text-purple-300 animate-pulse" fill="currentColor" />
          </div>
        </div>
        
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center justify-center px-6">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <CheckCircle className="h-5 w-5 text-green-400" fill="currentColor" />
              <span className="text-sm font-medium text-white">100% Free Consultation</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
              Book Your <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-400">Free</span> Consultation
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Get expert guidance from our certified education consultants and start your study abroad journey today
            </p>
            <div className="mt-6 flex items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="text-sm">10,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span className="text-sm">15+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" fill="currentColor" />
                <span className="text-sm">5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Enhanced Form Container */}
      <div className="mx-auto -mt-16 max-w-2xl">
        <div className="group relative transform transition-all duration-500 hover:-translate-y-2">
          <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-purple-400 to-blue-400 opacity-20 blur-xl transition-opacity group-hover:opacity-30" />
          <div className="relative rounded-3xl bg-white p-8 shadow-[0_25px_70px_rgba(12,22,73,0.15)] backdrop-blur-sm border border-gray-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-r from-purple-500 to-blue-500 mb-4 shadow-lg">
                <CheckCircle className="h-8 w-8 text-white" fill="currentColor" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Start Your Journey Today</h2>
              <p className="text-gray-600">Fill out the form below and get personalized guidance within 24 hours</p>
            </div>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                  <CheckCircle className="h-10 w-10 text-green-500" fill="currentColor" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">Your consultation request has been submitted successfully. Our team will contact you within 24 hours.</p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", education: "", country: "", ielts: "" });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  Book Another Consultation
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm transition-all duration-300 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 group-hover:border-gray-300 cursor-pointer"
                      required
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm transition-all duration-300 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 group-hover:border-gray-300 cursor-pointer"
                      required
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm transition-all duration-300 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 group-hover:border-gray-300 cursor-pointer"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Educational Qualification *
                    </label>
                    <select 
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm transition-all duration-300 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 group-hover:border-gray-300 cursor-pointer"
                      required
                    >
                      <option value="">Select your education level</option>
                      <option value="high-school">High School</option>
                      <option value="diploma">Diploma</option>
                      <option value="bachelors">Bachelor's Degree</option>
                      <option value="masters">Master's Degree</option>
                      <option value="phd">PhD/Doctorate</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Country *
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="e.g., USA, UK, Canada, Australia"
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm transition-all duration-300 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 group-hover:border-gray-300 cursor-pointer"
                      required
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      IELTS Score
                    </label>
                    <select 
                      name="ielts"
                      value={formData.ielts}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm transition-all duration-300 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 group-hover:border-gray-300 cursor-pointer"
                    >
                      <option value="">Not taken yet</option>
                      <option value="below-6">Below 6.0</option>
                      <option value="6">6.0 - 6.5</option>
                      <option value="6.5">6.5 - 7.0</option>
                      <option value="7">7.0 - 7.5</option>
                      <option value="7.5">7.5 - 8.0</option>
                      <option value="8">8.0+</option>
                    </select>
                  </div>
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full relative overflow-hidden rounded-xl bg-linear-to-r from-purple-600 to-blue-600 py-4 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(74,28,255,0.4)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(74,28,255,0.6)] hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-purple-700 to-blue-700 opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Get Free Consultation</span>
                          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </div>
                  </button>
                  
                  <p className="mt-4 text-center text-xs text-gray-500">
                    By submitting this form, you agree to our terms and conditions. We respect your privacy and will never share your information.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center group cursor-pointer">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" fill="currentColor" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">100% Free Service</h3>
            <p className="text-sm text-gray-600">No hidden charges or fees. Completely free consultation and guidance.</p>
          </div>
          
          <div className="text-center group cursor-pointer">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Expert Counsellors</h3>
            <p className="text-sm text-gray-600">Certified education consultants with 10+ years of experience.</p>
          </div>
          
          <div className="text-center group cursor-pointer">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4">
              <Award className="h-6 w-6 text-purple-600" fill="currentColor" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Guaranteed Success</h3>
            <p className="text-sm text-gray-600">95% success rate in university admissions and visa approvals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounsellingSection;
