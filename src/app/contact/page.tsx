'use client'

import { useState, useEffect, useRef } from "react";
import ScrollHeader from "@/components/ScrollHeader";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    helpOptions: {
      privateEvent: false,
      groupReservation: false,
      catering: false,
      generalInquiry: false
    },
    location: '',
    message: ''
  });

  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const locationDropdownRef = useRef<HTMLDivElement>(null);

  const locations = [
    { value: 'west-village', label: 'West Village' },
    { value: 'midtown', label: 'Midtown' },
    { value: 'both', label: 'Both Locations' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (locationDropdownRef.current && !locationDropdownRef.current.contains(event.target as Node)) {
        setIsLocationDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (option: string) => {
    setFormData(prev => ({
      ...prev,
      helpOptions: {
        ...prev.helpOptions,
        [option]: !prev.helpOptions[option as keyof typeof prev.helpOptions]
      }
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start w-full">
          {/* Left Column - Title, Description and Illustration */}
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-[#004100] uppercase tracking-wider leading-tight mb-4">
              CONTACT US
            </h1>
            <p className="text-[#004100] text-sm font-[family-name:var(--font-gt-america)] mb-8 text-center lg:text-left">
              Please fill out the form below.
            </p>
            <div className="flex justify-center lg:justify-start mb-8">
              <Image
                src="/img/onca.png"
                alt="Onca illustration"
                width={300}
                height={300}
                className="w-48 sm:w-56 md:w-64 lg:w-72 object-contain"
              />
            </div>
            
            {/* Contact Information */}
            <div className="text-[#004100] font-[family-name:var(--font-gt-america)] text-sm space-y-1">
              <p>Berimbau West Village: (212) 401-0021</p>
              <p>Berimbau Midtown: (212) 763-7123</p>
              <p>info@berimbaurestaurant.com</p>
              <p>Event@berimbaurestaurant.com</p>
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

              {/* Email and Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              </div>

              {/* How Can We Help Section */}
              <div>
                <label className="block text-[#004100] text-sm font-[family-name:var(--font-gt-america)] uppercase tracking-wide mb-4">
                  HOW CAN WE HELP?*
                </label>
                <div className="space-y-3">
                  <label className="flex items-center text-[#004100] font-[family-name:var(--font-gt-america)] text-sm cursor-pointer">
                    <div className="custom-checkbox mr-3">
                      <input
                        type="checkbox"
                        checked={formData.helpOptions.privateEvent}
                        onChange={() => handleCheckboxChange('privateEvent')}
                      />
                      <span className="checkbox-box"></span>
                    </div>
                    Private Event
                  </label>
                  <label className="flex items-center text-[#004100] font-[family-name:var(--font-gt-america)] text-sm cursor-pointer">
                    <div className="custom-checkbox mr-3">
                      <input
                        type="checkbox"
                        checked={formData.helpOptions.groupReservation}
                        onChange={() => handleCheckboxChange('groupReservation')}
                      />
                      <span className="checkbox-box"></span>
                    </div>
                    Group Reservation
                  </label>
                  <label className="flex items-center text-[#004100] font-[family-name:var(--font-gt-america)] text-sm cursor-pointer">
                    <div className="custom-checkbox mr-3">
                      <input
                        type="checkbox"
                        checked={formData.helpOptions.catering}
                        onChange={() => handleCheckboxChange('catering')}
                      />
                      <span className="checkbox-box"></span>
                    </div>
                    Catering
                  </label>
                  <label className="flex items-center text-[#004100] font-[family-name:var(--font-gt-america)] text-sm cursor-pointer">
                    <div className="custom-checkbox mr-3">
                      <input
                        type="checkbox"
                        checked={formData.helpOptions.generalInquiry}
                        onChange={() => handleCheckboxChange('generalInquiry')}
                      />
                      <span className="checkbox-box"></span>
                    </div>
                    General Inquiry
                  </label>
                </div>
              </div>

              {/* Choose Location */}
              <div className="relative" ref={locationDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                  className="w-full border-2 border-[#004100] bg-transparent text-[#004100] font-[family-name:var(--font-gt-america)] text-sm uppercase tracking-wide px-4 py-3 flex items-center justify-between hover:border-[#faaa00] transition-colors duration-300 relative"
                >
                  <span>{formData.location ? locations.find(l => l.value === formData.location)?.label : 'CHOOSE LOCATION (if applicable)*'}</span>
                  <div className="flex items-center justify-center w-4">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className={`transition-transform duration-300 ${isLocationDropdownOpen ? 'rotate-45' : ''}`}>
                      <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </button>
                
                {isLocationDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 bg-[#faf0d2] border-2 border-[#004100] border-t-0 z-10">
                    {locations.map((location) => (
                      <button
                        key={location.value}
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({ ...prev, location: location.value }));
                          setIsLocationDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-[#004100] font-[family-name:var(--font-gt-america)] text-sm uppercase tracking-wide hover:bg-[#004100] hover:text-[#faf0d2] transition-colors duration-300"
                      >
                        {location.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Message Text Area */}
              <div>
                <label className="block text-[#004100] text-sm font-[family-name:var(--font-gt-america)] uppercase tracking-wide mb-2">
                  WRITE A MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full border-2 border-[#004100] bg-transparent text-[#004100] font-[family-name:var(--font-gt-america)] px-3 py-3 focus:outline-none focus:border-[#faaa00] transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#004100] text-[#faf0d2] font-[family-name:var(--font-gt-america)] text-sm uppercase tracking-wide px-6 py-4 hover:bg-[#225533] transition-all duration-300"
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
