
"use client";

import { useState } from "react";

const LoginWrapper = ({ onClose }) => {
  const [state, setState] = useState("login");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (state === "login") {
      console.log("Login Data:", {
        email: formData.email,
        password: formData.password,
      });
    } else {
      console.log("Sign Up Data:", formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleAuth = () => {
    setState((prev) => (prev === "login" ? "register" : "login"));
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl border border-gray-300/60 bg-white px-8 py-8 text-center shadow-xl"
      >
        {/* Heading */}
        <h1 className="mt-2 text-3xl font-medium text-gray-900">
          {state === "login" ? "Login" : "Sign up"}
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          {state === "login"
            ? "Please sign in to continue"
            : "Create an account to continue"}
        </p>

        {/* Name - Only Register */}
        {state === "register" && (
          <div className="mt-6 flex h-12 w-full items-center gap-2 overflow-hidden rounded border border-gray-300/80 bg-white pl-5">
            {/* User Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6B7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-none bg-transparent pr-4 outline-none ring-0"
            />
          </div>
        )}

        {/* Email */}
        <div className="mt-4 flex h-12 w-full items-center gap-2 overflow-hidden rounded border border-gray-300/80 bg-white pl-5">
          {/* Mail Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>

          <input
            type="email"
            name="email"
            placeholder="Email id"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border-none bg-transparent pr-4 outline-none ring-0"
          />
        </div>

        {/* Password */}
        <div className="mt-4 flex h-12 w-full items-center gap-2 overflow-hidden rounded border border-gray-300/80 bg-white pl-5">
          {/* Lock Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border-none bg-transparent pr-4 outline-none ring-0"
          />
        </div>

        {/* Forgot Password */}
        {state === "login" && (
          <div className="mt-4 text-left">
            <button
              type="button"
              className="text-sm text-indigo-500 hover:underline"
            >
              Forgot password?
            </button>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-5 h-11 w-full rounded bg-indigo-500 text-white transition-opacity hover:opacity-90"
        >
          {state === "login" ? "Login" : "Sign up"}
        </button>

        {/* Toggle Login / Register */}
        <div className="mb-2 mt-5 text-sm text-gray-500">
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            type="button"
            onClick={toggleAuth}
            className="ml-1 text-indigo-500 hover:underline"
          >
            {state === "login" ? "Sign up" : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginWrapper;

