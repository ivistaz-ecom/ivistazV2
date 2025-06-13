"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import ConfigData from "../../../config";
import { motion, AnimatePresence } from "framer-motion";

const CareerForms = () => {
  const [errors, setErrors] = useState({});
  const [yourName, setyourName] = useState("");
  const [yourEmail, setyourEmail] = useState("");
  const [yourPhone, setyourPhone] = useState("");
  const [yourJobType, setyourJobType] = useState("");
  const [yourFile, setyourFile] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const options = [
    "Team Lead - Full Stack Developer",
    "Creative Lead",
    "SEO & Social Media Executive",
    "Inside Sales Executive",
    "Account Executive",
    "UI/Graphic Designer",
  ];

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const nameRegex = /^[a-zA-Z\s]*$/;
  const numRegex = /^[0-9]+$/;
  const notAllowedDomains = [
    "test.com",
    "sample.com",
    "example.com",
    "testing.com",
    "gmail.co",
    "gmail.c",
    "gmail.",
  ];

  const isValidEmail = (email) => {
    const [, domain] = email.split("@");
    return !notAllowedDomains.includes(domain);
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    const newErrors = {};

    if (name === "yourName") {
      if (!nameRegex.test(value)) newErrors[name] = "Invalid character in name";
      else setyourName(value);
    }
    if (name === "yourEmail") {
      if (!emailRegex.test(value))
        newErrors[name] = "Please enter a valid email address.";
      else if (!isValidEmail(value))
        newErrors[name] = "This email domain is not allowed.";
      else setyourEmail(value);
    }
    if (name === "yourPhone") {
      if (!numRegex.test(value))
        newErrors[name] = "Please enter a valid phone number.";
      else setyourPhone(value);
    }
    if (name === "yourJobType") {
      if (value === "Job Type") newErrors[name] = "Please select a job type";
      else setyourJobType(value);
    }

    setErrors(newErrors);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const fileTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (
      !file ||
      !fileTypes.includes(file.type) ||
      file.size > 4 * 1024 * 1024
    ) {
      setErrors({ yourFile: "Invalid file. Must be PDF/DOC and < 4MB." });
      setyourFile(null);
    } else {
      setErrors({});
      setyourFile(file);
    }
  };

  const resetForm = () => {
    setyourName("");
    setyourEmail("");
    setyourPhone("");
    setyourJobType("");
    setyourFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loading

    const formData = new FormData();
    formData.append("yourName", yourName);
    formData.append("yourEmail", yourEmail);
    formData.append("yourPhone", yourPhone);
    formData.append("yourJobType", yourJobType);
    if (yourFile) formData.append("yourFile", yourFile);

    try {
      const res = await axios.post(
        `https://docs.ivistaz.com/wp-json/contact-form-7/v1/contact-forms/239/feedback`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.status === "mail_sent") {
        resetForm();
        setShowSuccessModal(true);
      } else if (res.data.status === "validation_failed") {
        const newErrors = {};
        res.data.invalid_fields.forEach((f) => {
          newErrors[f.field] = f.message;
        });
        setErrors(newErrors);
      }
    } catch (err) {
      console.error("Form submission error", err);
    } finally {
      setIsSubmitting(false); // End loading
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="yourName"
            className="block text-md font-medium text-gray-700"
          >
            Full Name *
          </label>
          <input
            id="yourName"
            name="yourName"
            value={yourName}
            onChange={handleTextChange}
            required
            className={`mt-1 block w-full border rounded p-2 ${
              errors.yourName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.yourName && (
            <p className="text-red-600 text-md mt-1">{errors.yourName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="yourEmail"
            className="block text-md font-medium text-gray-700"
          >
            Email *
          </label>
          <input
            id="yourEmail"
            name="yourEmail"
            type="email"
            value={yourEmail}
            onChange={handleTextChange}
            className={`mt-1 block w-full border rounded p-2 ${
              errors.yourEmail ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.yourEmail && (
            <p className="text-red-600 text-md mt-1">{errors.yourEmail}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="yourPhone"
            className="block text-md font-medium text-gray-700"
          >
            Phone *
          </label>
          <input
            id="yourPhone"
            name="yourPhone"
            maxLength={10}
            value={yourPhone}
            onChange={handleTextChange}
            className={`mt-1 block w-full border rounded p-2 ${
              errors.yourPhone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.yourPhone && (
            <p className="text-red-600 text-md mt-1">{errors.yourPhone}</p>
          )}
        </div>

        {/* Job Type */}
        <div>
          <label
            htmlFor="yourJobType"
            className="block text-md font-medium text-gray-700"
          >
            Job Type *
          </label>
          <select
            id="yourJobType"
            name="yourJobType"
            value={yourJobType}
            onChange={handleTextChange}
            className={`mt-1 block w-full border rounded p-2 ${
              errors.yourJobType ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option>Job Type</option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.yourJobType && (
            <p className="text-red-600 text-md mt-1">{errors.yourJobType}</p>
          )}
        </div>

        {/* Resume Upload */}
        <div>
          <label
            htmlFor="yourFile"
            className="block text-md font-medium text-gray-700 mb-1"
          >
            Upload Resume
          </label>
          <div className="relative">
            <input
              id="yourFile"
              name="yourFile"
              type="file"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              accept=".pdf,.doc,.docx"
            />

            <div
              className={`flex items-center gap-5 border rounded-md ${
                errors.yourFile ? "border-red-500" : "border-gray-300"
              }`}
            >
              <span className="px-4 py-2 bg-gray-50 border-r border-gray-300 text-md font-semibold">
                Choose file
              </span>
              <span className="text-md text-gray-500 truncate max-w-xs">
                {yourFile ? yourFile.name : "No file chosen"}
              </span>
            </div>
          </div>
          {errors.yourFile && (
            <p className="text-red-600 text-md mt-1">{errors.yourFile}</p>
          )}
        </div>

        {/* Privacy Policy */}
        <p className="text-md text-gray-600">
          We value your privacy and will handle your information with utmost
          confidentiality. By submitting this form, you agree to our{" "}
          <Link href="/privacy-policy" className="text-blue-600 underline">
            Privacy Policy
          </Link>
          .
        </p>

        {/* Submit Button */}
        <div className="text-center flex justify-center">
          <button type="submit" className="btn-16" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 text-center shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <h3 className="text-lg font-semibold text-green-700">
                Form Submission Successful
              </h3>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CareerForms;
