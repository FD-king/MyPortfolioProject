"use client";

import { useState } from "react";

export default function ContactForm() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "1a6480a5-e0cd-443d-80ae-d27a4003cb37");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setShowModal(true);
      (e.target as HTMLFormElement).reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="w-full px-4 py-10">
      {/* Custom Centered Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-8 md:pt-12 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="relative w-full max-w-md bg-[#16082f] border border-white/15 p-8 rounded-2xl shadow-2xl text-center flex flex-col items-center animate-[slideDown_0.4s_ease-in-out_forwards]">
            <div className="w-14 h-14 rounded-full bg-linear-to-r from-[#5DFFFF] via-[#A832C6] to-[#AE0CA7] flex items-center justify-center text-2xl text-white shadow-lg mb-4">
              ✨
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              Message Submitted!
            </h3>

            <p className="text-sm text-white/70 mb-6 leading-relaxed">
              You will be answered shortly.
            </p>

            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="px-8 py-2.5 rounded-full bg-linear-to-r from-[#5DFFFF] via-[#A832C6] to-[#AE0CA7] text-white font-medium text-sm hover:opacity-95 transition-all cursor-pointer active:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-155 rounded-xl border-t-[6px] border-purple-900 bg-linear-to-br from-[#281039] to-[#101329] px-7 py-6 shadow-xl sm:px-9"
      >
        {/* Name */}
        <div className="mb-3">
          <label
            htmlFor="name"
            className="mb-2 block text-xs font-semibold text-gray-200"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter Your Name"
            autoComplete="name"
            required
            className="w-full rounded-md border border-white/5 bg-white/10 px-3 py-3 text-xs text-white outline-none placeholder:text-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-semibold text-gray-200"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter Your Mail"
            autoComplete="email"
            required
            className="w-full rounded-md border border-white/5 bg-white/10 px-3 py-3 text-xs text-white outline-none placeholder:text-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
          />
        </div>

        {/* Message */}
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-2 block text-xs font-semibold text-gray-200"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="How can I help?"
            required
            className="w-full resize-y rounded-md border border-white/5 bg-white/10 px-3 py-3 text-xs text-white outline-none placeholder:text-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="rounded-full bg-linear-to-r from-cyan-400 via-blue-400 to-purple-600 px-5 py-2.5 text-xs font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 cursor-pointer"
        >
          Send message
        </button>
      </form>
    </section>
  );
}
