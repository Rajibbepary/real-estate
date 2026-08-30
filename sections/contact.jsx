"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const houseImage = "/assets/house.png";

export function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target);

    // Web3Forms Access Key
    formData.append(
      "access_key",
      "01f80bcd-c92d-419d-88e1-7da88e646885"
    );

    // Email subject
    formData.append(
      "subject",
      "New Contact Form Submission"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent!");

        alert("Form Submitted Successfully!");

        event.target.reset();

        // Message remove after 3 seconds
        setTimeout(() => {
          setResult("");
        }, 3000);
      } else {
        console.log("Error:", data);

        alert(data.message || "Something went wrong!");

        setResult("");
      }
    } catch (error) {
      console.error("Error:", error);

      alert("Something went wrong. Please try again.");

      setResult("");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 w-full flex items-center justify-center"
    >
      <div className="max-w-5xl w-full mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left Column */}
        <div className="flex flex-col">

          <motion.div
            className="flex items-center gap-1.5"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="size-1.5 bg-zinc-900"></span>

            <span className="text-sm text-zinc-900">
              CONTACT
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-[40px]/11 text-zinc-900 mt-5 leading-tight font-medium max-w-100"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Connect with us <br />
            to get the best deal
          </motion.h2>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="mt-15 flex flex-col gap-6"
          >

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Name */}
              <div className="flex flex-col">
                <label className="text-sm text-zinc-600 mb-2">
                  YOUR NAME
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name..."
                  required
                  className="w-full border border-zinc-200 rounded-sm px-4 py-2.5 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-300 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-sm text-zinc-600 mb-2">
                  EMAIL ADDRESS
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="rajib@gmail.com"
                  required
                  className="w-full border border-zinc-200 rounded-sm px-4 py-2.5 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-300 transition-colors"
                />
              </div>

            </div>

            {/* Phone + Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Phone */}
              <div className="flex flex-col">
                <label className="text-sm text-zinc-600 mb-2">
                  PHONE NUMBER
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="BD. +880 456 789 00"
                  className="w-full border border-zinc-200 rounded-sm px-4 py-2.5 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-300 transition-colors"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col">
                <label className="text-sm text-zinc-600 mb-2">
                  SUBJECT
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Buying Property"
                  required
                  className="w-full border border-zinc-200 rounded-sm px-4 py-2.5 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-300 transition-colors"
                />
              </div>

            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-sm text-zinc-600 mb-2">
                MESSAGE
              </label>

              <textarea
                name="message"
                rows={4}
                placeholder="I want to buy a property..."
                required
                className="w-full border border-zinc-200 rounded-sm px-4 py-2.5 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-300 transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <div className="mt-2">
              <button
                type="submit"
                disabled={result === "Sending..."}
                className="bg-black hover:bg-zinc-900 disabled:opacity-50 text-white text-xs px-6 py-3.5 rounded-full transition-colors duration-200 cursor-pointer"
              >
                {result || "Send Message"}
              </button>
            </div>

          </form>
        </div>

        {/* Right Image */}
        <motion.div
          className="relative overflow-hidden group flex justify-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative w-95.5 h-113.75 overflow-hidden rounded-xl">

            <Image
              src={houseImage}
              alt="Contact House"
              width={382}
              height={455}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none brightness-80"
            />

            <div className="absolute bottom-10 left-10 flex flex-col gap-2.5 z-10">

              <span className="text-base text-white">
                KEY DETAILS
              </span>

              <div className="flex flex-col gap-1 text-sm text-white">
                <p>Monday-Friday: 10 AM - 6 PM</p>
                <p>Saturday: 10 AM - 4 PM</p>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}