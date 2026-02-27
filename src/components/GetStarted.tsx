import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ClipboardCheck, Heart, ChevronDown } from 'lucide-react';

export const GetStarted: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 px-6 text-center bg-slate-50/50">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight">
            Start Your Care Journey
          </h1>
          <p className="text-slate-500 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            Follow our simple three-step process to receive the professional, compassionate home care you deserve.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto mt-20 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-[70%] h-px bg-slate-200 -z-0"></div>
          
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {[
              {
                step: '1. Initial Consultation',
                desc: 'Book a free talk with our experts to discuss your specific needs.',
                icon: Calendar,
              },
              {
                step: '2. Care Plan Design',
                desc: 'Receive a tailored support strategy designed specifically for your lifestyle.',
                icon: ClipboardCheck,
              },
              {
                step: '3. Commencing Care',
                desc: 'Meet your dedicated professional caregiver and begin your journey to better living.',
                icon: Heart,
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center space-y-6">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center text-blue-600 shadow-xl shadow-blue-600/10">
                  <item.icon size={40} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">{item.step}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-[240px] mx-auto">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Form Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Quick Start Form</h2>
          <p className="text-slate-500 text-lg">
            Tell us a bit about what you're looking for and we'll handle the rest.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200 border border-slate-100 p-8 lg:p-12">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              {/* Who is this care for? */}
              <div className="space-y-4">
                <label className="block text-sm font-bold text-slate-900">Who is this care for?</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['Self', 'Family', 'Friend'].map((option) => (
                    <label 
                      key={option}
                      className="relative flex items-center p-4 border border-slate-100 rounded-2xl cursor-pointer hover:bg-slate-50 transition-colors group"
                    >
                      <input type="radio" name="care-for" className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-600" />
                      <div className="ml-4">
                        <span className="block text-sm font-bold text-slate-900">{option}</span>
                        <span className="block text-[10px] text-slate-400">
                          {option === 'Self' ? 'For myself' : option === 'Family' ? 'For a relative' : 'For a neighbor'}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Support & Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-900">Type of Support Needed</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all appearance-none cursor-pointer">
                      <option>Select a service...</option>
                      <option>Personal Care</option>
                      <option>Domestic Assistance</option>
                      <option>Social Support</option>
                      <option>Nursing Care</option>
                    </select>
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-slate-400">
                      <ChevronDown size={18} />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-900">Best Time to Call</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all appearance-none cursor-pointer">
                      <option>Anytime</option>
                      <option>Morning</option>
                      <option>Afternoon</option>
                      <option>Evening</option>
                    </select>
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-slate-400">
                      <ChevronDown size={18} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-900">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-900">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="0493-334-910"
                    className="w-full bg-white border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
              >
                Submit Request & Book Consultation
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
