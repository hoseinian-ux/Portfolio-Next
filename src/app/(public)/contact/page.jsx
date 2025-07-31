// src/app/contact/page.tsx

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    // اینجا می‌تونی فرم رو به EmailJS، Resend یا API خودت بفرستی
    console.log("form submitted", form);
    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section className="max-w-4xl mx-auto p-6 space-y-10">
      <motion.h1
        className="text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        تماس با من
      </motion.h1>

      {/* فرم تماس */}
      <motion.form
        action="https://formspree.io/f/xeozzqnq"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-xl shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <input
          type="text"
          name="name"
          placeholder="نام شما"
          className="w-full p-3 border rounded-md"
          required
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="email"
          name="email"
          placeholder="ایمیل"
          className="w-full p-3 border rounded-md"
          required
          onChange={handleChange}
          value={form.email}
        />
        <textarea
          name="message"
          placeholder="پیام شما"
          rows={5}
          className="w-full p-3 border rounded-md"
          required
          onChange={handleChange}
          value={form.message}
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          disabled={submitted}
        >
          {submitted ? "در حال ارسال..." : "ارسال پیام"}
        </button>
      </motion.form>

      {/* اطلاعات تماس */}
      <motion.div
        className="grid gap-4 md:grid-cols-2 bg-gray-50 p-6 rounded-lg shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="space-y-2">
          <span className="flex items-center gap-2">
            <Mail /> a.hoseinian13@gmail.com
          </span>
          <p className="flex items-center gap-2">
            <Phone /> 09378623292{" "}
          </p>
        </div>
        <div className="flex gap-4 justify-start items-center ">
          <div className="flex items-center gap-2 hover:text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 rotate-[-45deg]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
            <span className=""> @A_hosseinian2 </span>
          </div>

          <a href="https://github.com/yourusername" target="_blank">
            <Github className="hover:text-amber-500" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
