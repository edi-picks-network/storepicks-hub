"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Send, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="relative pt-32 pb-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#84CC16] bg-lime-50 px-3 py-1.5 rounded-md mb-4">
            Contact
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Have a question about e-commerce tools or want to suggest a tool for review? Our team in Bellevue is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-lime-50 border border-[#84CC16]/30 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#84CC16]/10 flex items-center justify-center mx-auto mb-3">
                    <Send className="w-6 h-6 text-[#84CC16]" />
                  </div>
                  <p className="text-gray-900 font-semibold text-lg mb-1">Message Sent!</p>
                  <p className="text-gray-500 text-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:border-[#84CC16] focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:border-[#84CC16] focus:outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:border-[#84CC16] focus:outline-none transition-colors"
                    >
                      <option value="">Select a subject...</option>
                      <option value="general">General Inquiry</option>
                      <option value="provider-listing">List My Tool</option>
                      <option value="bug">Report a Bug</option>
                      <option value="suggestion">Feature Suggestion</option>
                      <option value="advertising">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:border-[#84CC16] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-[#84CC16] hover:bg-[#65A30D] text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#84CC16]" />
                Email Us
              </h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">
                  <strong className="text-gray-900">General:</strong>
                  <br />
                  <a href="mailto:sell@storepicks.net" className="text-[#84CC16] hover:underline">
                    sell@storepicks.net
                  </a>
                </p>
                <p className="text-sm text-gray-500">
                  <strong className="text-gray-900">Support:</strong>
                  <br />
                  <a href="mailto:sell@storepicks.net" className="text-[#84CC16] hover:underline">
                    sell@storepicks.net
                  </a>
                </p>
                <p className="text-sm text-gray-500">
                  <strong className="text-gray-900">Press:</strong>
                  <br />
                  <a href="mailto:sell@storepicks.net" className="text-[#84CC16] hover:underline">
                    sell@storepicks.net
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#84CC16]" />
                Office
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                11100 NE 8th Street, Suite 600
                <br />
                Bellevue, WA 98004
                <br />
                United States
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#84CC16]" />
                Response Time
              </h3>
              <p className="text-sm text-gray-500">
                We typically respond within <strong className="text-gray-900">24 hours</strong> during
                business days (PST).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
