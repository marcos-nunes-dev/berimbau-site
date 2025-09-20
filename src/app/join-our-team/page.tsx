'use client'

import { useState, useEffect, useRef } from "react";
import ScrollHeader from "@/components/ScrollHeader";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    startDate: '',
    introduction: '',
    resume: null as File | null
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const datePickerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setIsDatePickerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const positions = [
    { value: 'server', label: 'Server' },
    { value: 'bartender', label: 'Bartender' },
    { value: 'chef', label: 'Chef' },
    { value: 'manager', label: 'Manager' },
    { value: 'host', label: 'Host' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen h-screen bg-[#faf0d2] flex flex-col">
      {/* Header */}
      <ScrollHeader isVisible={true} useBorder={true} />

      {/* Main Content */}
      <main className="flex-1 container mx-auto py-16 sm:py-20 md:py-24 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Left Column - Title and Illustration */}
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-[#004100] uppercase tracking-wider mb-8 whitespace-pre-line" style={{ lineHeight: '0.8' }}>
              JOIN{"\n"}OUR TEAM
            </h1>
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/img/leaf.png"
                alt="Decorative leaf illustration"
                width={300}
                height={300}
                className="w-48 sm:w-56 md:w-64 lg:w-72 object-contain"
              />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full px-4 sm:px-6 md:px-8">
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              {/* Name Fields Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="floating-label">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder=" "
                    className="font-[family-name:var(--font-gt-america)]"
                  />
                  <label className="font-[family-name:var(--font-gt-america)]">
                    FIRST NAME*
                  </label>
                </div>
                <div className="floating-label">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder=" "
                    className="font-[family-name:var(--font-gt-america)]"
                  />
                  <label className="font-[family-name:var(--font-gt-america)]">
                    LAST NAME*
                  </label>
                </div>
              </div>

              {/* Email Field */}
              <div className="floating-label">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder=" "
                  className="font-[family-name:var(--font-gt-america)]"
                />
                <label className="font-[family-name:var(--font-gt-america)]">
                  EMAIL*
                </label>
              </div>

              {/* Phone Field */}
              <div className="floating-label">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder=" "
                  className="font-[family-name:var(--font-gt-america)]"
                />
                <label className="font-[family-name:var(--font-gt-america)]">
                  PHONE*
                </label>
              </div>

              {/* Position and Start Date Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full border-2 border-[#004100] bg-transparent text-[#004100] font-[family-name:var(--font-gt-america)] text-sm uppercase tracking-wide px-4 py-3 flex items-center justify-between hover:border-[#faaa00] transition-colors duration-300 relative"
                  >
                    <span>{formData.position ? positions.find(p => p.value === formData.position)?.label : 'SELECT A POSITION*'}</span>
                    <div className="flex items-center justify-center w-4">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-45' : ''}`}>
                        <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 bg-[#faf0d2] border-2 border-[#004100] border-t-0 z-10">
                      {positions.map((position) => (
                        <button
                          key={position.value}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, position: position.value }));
                            setIsDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-3 text-[#004100] font-[family-name:var(--font-gt-america)] text-sm uppercase tracking-wide hover:bg-[#004100] hover:text-[#faf0d2] transition-colors duration-300"
                        >
                          {position.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="relative" ref={datePickerRef}>
                  <button
                    type="button"
                    onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                    className="w-full border-2 border-[#004100] bg-transparent text-[#004100] font-[family-name:var(--font-gt-america)] text-sm uppercase tracking-wide px-4 py-3 flex items-center justify-between hover:border-[#faaa00] transition-colors duration-300 relative"
                  >
                    <span>{formData.startDate === 'immediately' ? 'IMMEDIATELY' : formData.startDate || 'AVAILABLE START DATE*'}</span>
                    <div className="flex items-center justify-center w-4">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <rect x="2" y="3" width="12" height="11" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
                        <rect x="4" y="1" width="1" height="4" fill="currentColor"/>
                        <rect x="11" y="1" width="1" height="4" fill="currentColor"/>
                        <line x1="2" y1="6" x2="14" y2="6" stroke="currentColor" strokeWidth="1"/>
                        <rect x="4" y="8" width="1" height="1" fill="currentColor"/>
                        <rect x="6" y="8" width="1" height="1" fill="currentColor"/>
                        <rect x="8" y="8" width="1" height="1" fill="currentColor"/>
                        <rect x="10" y="8" width="1" height="1" fill="currentColor"/>
                        <rect x="12" y="8" width="1" height="1" fill="currentColor"/>
                        <rect x="4" y="10" width="1" height="1" fill="currentColor"/>
                        <rect x="6" y="10" width="1" height="1" fill="currentColor"/>
                        <rect x="8" y="10" width="1" height="1" fill="currentColor"/>
                        <rect x="10" y="10" width="1" height="1" fill="currentColor"/>
                        <rect x="12" y="10" width="1" height="1" fill="currentColor"/>
                      </svg>
                    </div>
                  </button>
                  
                  {isDatePickerOpen && (
                    <div className="absolute top-full left-0 right-0 bg-[#faf0d2] border-2 border-[#004100] border-t-0 z-10">
                      <div className="p-4 border-b border-[#004100]">
                        <input
                          ref={dateInputRef}
                          type="date"
                          name="startDate"
                          value={formData.startDate === 'immediately' ? '' : formData.startDate}
                          onChange={(e) => {
                            handleInputChange(e);
                            setIsDatePickerOpen(false);
                          }}
                          className="w-full border-b-2 border-[#004100] bg-transparent text-[#004100] font-[family-name:var(--font-gt-america)] px-0 py-2 focus:outline-none focus:border-[#faaa00] transition-colors duration-300"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({ ...prev, startDate: 'immediately' }));
                          setIsDatePickerOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-[#004100] font-[family-name:var(--font-gt-america)] text-sm uppercase tracking-wide hover:bg-[#004100] hover:text-[#faf0d2] transition-colors duration-300"
                      >
                        IMMEDIATELY
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Introduction Text Area */}
              <div>
                <label className="block text-[#004100] text-sm font-[family-name:var(--font-gt-america)] uppercase tracking-wide mb-2">
                  INTRODUCE YOURSELF*
                </label>
                <textarea
                  name="introduction"
                  value={formData.introduction}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full border-2 border-[#004100] bg-transparent text-[#004100] font-[family-name:var(--font-gt-america)] px-3 py-3 focus:outline-none focus:border-[#faaa00] transition-colors duration-300 resize-none"
                />
              </div>

              {/* File Upload and Submit Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block border-2 border-[#004100] text-[#004100] font-[family-name:var(--font-gt-america)] text-sm uppercase tracking-wide px-4 py-3 cursor-pointer hover:bg-[#004100] hover:text-[#faf0d2] transition-all duration-300 text-center">
                    UPLOAD RESUME (MAX 15MB)
                    <input
                      type="file"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                  </label>
                  {formData.resume && (
                    <p className="text-[#004100] text-xs font-[family-name:var(--font-gt-america)] mt-2">
                      {formData.resume.name}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-[#004100] text-[#faf0d2] font-[family-name:var(--font-gt-america)] text-sm uppercase tracking-wide px-6 py-3 hover:bg-[#225533] transition-all duration-300"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer without newsletter */}
      <footer className="w-full bg-[#faf0d2] overflow-hidden">
        {/* Locations & Copyright Section */}
        <div className="px-8 sm:px-12 md:px-16 lg:px-20 py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto">
            {/* Three Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 items-center">
              {/* Left Column - West Village */}
              <div className="text-center space-y-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-normal font-[family-name:var(--font-gt-america)] text-[#225533] uppercase tracking-wider">
                  WEST VILLAGE
                </h3>
                <p className="text-[#225533] text-sm sm:text-base md:text-lg font-[family-name:var(--font-gt-america)]">
                  43 Carmine St, New York, NY 10014
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
                  <a href="/menus" className="text-[#225533] text-sm sm:text-base md:text-lg font-[family-name:var(--font-gt-america)] underline hover:no-underline">
                    MENUS
                  </a>
                  <span className="hidden sm:inline text-[#225533]">-</span>
                  <a href="/reservations" className="text-[#225533] text-sm sm:text-base md:text-lg font-[family-name:var(--font-gt-america)] underline hover:no-underline">
                    RESERVATION
                  </a>
                </div>
              </div>

              {/* Center - Brand Logo */}
              <div className="flex justify-center">
                <Image
                  src="/img/logo-green.png"
                  alt="BR/NY Logo"
                  width={200}
                  height={200}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 object-contain"
                  priority
                />
              </div>

              {/* Right Column - Midtown */}
              <div className="text-center space-y-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-normal font-[family-name:var(--font-gt-america)] text-[#225533] uppercase tracking-wider">
                  MIDTOWN
                </h3>
                <p className="text-[#225533] text-sm sm:text-base md:text-lg font-[family-name:var(--font-gt-america)]">
                  3 West 36th Street, New York, NY 10018
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
                  <a href="/menus" className="text-[#225533] text-sm sm:text-base md:text-lg font-[family-name:var(--font-gt-america)] underline hover:no-underline">
                    MENUS
                  </a>
                  <span className="hidden sm:inline text-[#225533]">-</span>
                  <a href="/reservations" className="text-[#225533] text-sm sm:text-base md:text-lg font-[family-name:var(--font-gt-america)] underline hover:no-underline">
                    RESERVATION
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Email */}
        <div className="px-8 sm:px-12 md:px-16 lg:px-20 py-6 sm:py-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-[#225533] text-sm sm:text-base font-[family-name:var(--font-gt-america)] mb-2 sm:mb-0">
              info@berimbaurestaurant.com
            </p>
            <p className="text-[#225533] text-sm sm:text-base font-[family-name:var(--font-gt-america)]">
              © 2025 by Berimbau Brazilian Table
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
