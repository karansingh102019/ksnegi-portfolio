"use client";
import React, { useState } from "react";
import { FromType } from "@/types/types";
import { contactInfo, socialLinks } from "@/data/data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | "";
    text: string;
  }>({ type: "", text: "" });

  const handleChange = (e: FromType) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage({
          type: "success",
          text: "Message sent successfully! Check your email for confirmation.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatusMessage({
          type: "error",
          text: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setStatusMessage({
        type: "error",
        text: "An error occurred. Please try again later.",
      });
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black text-white relative overflow-hidden border-t border-red-800">
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-900 via-red-700 to-red-500 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-red-900 to-red-500 rounded-full animate-pulse"></div>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {
              "Have a project in mind or just want to say hello? I'd love to hear from you. Let's create something"
            }
            <span className="text-red-400 font-medium"> amazing </span>
            together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-500">
              <h2 className="text-3xl font-bold mb-5 pb-5 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Send Message
              </h2>

              {/* Status Message */}
              {statusMessage.text && (
                <div
                  className={`mb-6 p-4 rounded-xl border ${
                    statusMessage.type === "success"
                      ? "bg-green-900/20 border-green-500/50 text-green-300"
                      : "bg-red-900/20 border-red-500/50 text-red-300"
                  }`}
                >
                  {statusMessage.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-black-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:bg-black transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="group relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-black-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:bg-black transition-all duration-300 peer"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className="group relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-black-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:bg-black transition-all duration-300 peer"
                    placeholder="Subject"
                  />
                </div>

                <div className="group relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-black-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:bg-black transition-all duration-300 peer resize-none"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group shimmerauto relative w-full px-8 py-4 bg-gradient-to-r from-red-900 to-purple-600 rounded-xl hover:from-red-800 hover:to-purple-700 
                  text-white font-semibold  transition-all duration-300 shadow-lg hover:scale-105 
                               disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 overflow-hidden"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group relative">
                  <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-red-500/30 transition-all duration-500">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center text-red-400 group-hover:text-red-300 group-hover:bg-red-600/30 transition-all duration-300">
                        {info.iconName}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-red-300 transition-colors duration-300">
                          {info.title}
                        </h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-400">{info.value}</p>
                        )}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-900 to-red-500 group-hover:w-full transition-all duration-500 rounded-b-xl"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={social.href}
                    className="group w-12 h-12  bg-gray-800/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-800 transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
