"use client";
import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { ChevronDown, Check } from "lucide-react";
import Image from "next/image";
// import { Country, State, City } from "country-state-city";
import { motion, AnimatePresence } from "framer-motion";
const CustomSelect = ({
  label,
  options,
  onChange,
  value,
  error,
  innerRef,
  multi,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={innerRef}>
      <div className="relative w-full" ref={dropdownRef}>
        <label className="text-sm font-tthoves-demibold mb-1 block">
          {label}
        </label>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className={`w-full bg-transparent px-4  text-left flex justify-between items-center border ${
            error
              ? "border-red-500 border-dashed rounded-md p-2"
              : "border-dashed border-[#5B5B5B] focus:outline-none rounded-md p-3"
          }`}
        >
          <span
            className={`text-[#fff] ${
              (!value || (Array.isArray(value) && value.length === 0)) &&
              "text-[#434343]"
            }`}
          >
            {multi
              ? Array.isArray(value) && value.length > 0
                ? value.join(", ")
                : "Select"
              : value || "Select"}
          </span>

          <Image
            alt="down-arrow"
            src="/generation-for-tech/down-aroow-white.png"
            width={18}
            height={18}
            className={`ml-2 transition-transform text-[#2050B1] ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <ul className="absolute left-0 right-0 text-[#000] w-full bg-[#fff] shadow transition-all duration-300 ease-in-out overflow-hidden z-50 max-h-60 opacity-100">
            {options.map((opt) => (
              <li
                key={opt}
                className="px-4 hover:text-black cursor-pointer text-[#000] py-1"
                onClick={() => {
                  if (multi) {
                    let newSelection = Array.isArray(value) ? [...value] : [];
                    if (newSelection.includes(opt)) {
                      newSelection = newSelection.filter(
                        (item) => item !== opt
                      );
                    } else {
                      newSelection.push(opt);
                    }
                    onChange(newSelection);
                  } else {
                    onChange(opt);
                    setIsOpen(false);
                  }
                }}
              >
                <div className="flex justify-between items-center">
                  <span>{opt}</span>
                  {Array.isArray(value) && value.includes(opt) && (
                    <Check size={16} />
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
        {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
      </div>
    </div>
  );
};

export default function EnquiryForm() {
  const initialState = {
    fullName: "",
    company: "",
    email: "",
    phone: "",
    job: "",
    reachingOut: "",
    interest: [],
    dateTime: "",
    textField: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  // const [countries, setCountries] = useState([]);
  // const [states, setStates] = useState([]);
  // const [cities, setCities] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  // Disable body scroll when popup is open
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showPopup]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  // useEffect(() => {
  //   const countryList = Country.getAllCountries();
  //   setCountries(countryList);
  // }, []);

  // useEffect(() => {
  //   const countryList = Country.getAllCountries();
  //   setCountries(countryList);
  // }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setFormErrors({ ...formErrors, [name]: "" });
  };

  console.log(responseMsg);
  console.log(formData);
  const validate = () => {
    const errors = {};

    if (!formData.fullName) {
      errors.fullName = "Full name is required.";
    } else if (formData.fullName.length < 2) {
      errors.fullName = "Name must be at least 2 characters.";
    }

    if (!formData.company) {
      errors.company = "Company name is required.";
    } else if (formData.company.length < 3) {
      errors.company = "Company must be at least 3 characters.";
    }

    if (!formData.email) {
      errors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address.";
    }

    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number must be 10 digits if provided.";
    }

    if (!formData.job) {
      errors.job = "Job title is required.";
    } else if (formData.job.length < 2) {
      errors.job = "Job title must be at least 2 characters.";
    }

    if (!formData.reachingOut) {
      errors.reachingOut = "Please specify where you’re reaching out from.";
    }

    if (!formData.interest || formData.interest.length === 0) {
      errors.interest = "Please select at least one interest.";
    } else if (formData.interest.length > 2) {
      errors.interest = "You can select at most two interests.";
    }

    if (!formData.dateTime) {
      errors.dateTime = "Preferred date & time is required.";
    }

    if (!formData.textField) {
      errors.textField = "Please provide some details.";
    } else if (formData.textField.length < 10) {
      errors.textField = "Details must be at least 10 characters.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    const localDateTime = new Date(formData.dateTime).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour12: true, // shows AM/PM
    });

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
      form.append("dateTime", localDateTime);
    });

    try {
      const res = await fetch(
        "https://docs.ivistaz.com/wp-json/contact-form-7/v1/contact-forms/1010/feedback",
        {
          method: "POST",
          body: form,
          headers: {
            Accept: "application/json",
          },
        }
      );

      const result = await res.json();
      if (result.status === "mail_sent") {
        setResponseMsg("Application submitted successfully!");
        setFormData(initialState);
        setFormErrors({});
        setFormErrors({});
        setShowPopup(true);
      } else {
        setResponseMsg("❌ Submission failed. Please try again.");
      }
    } catch (error) {
      setResponseMsg("❌ Error submitting the form.");
    } finally {
      setSubmitting(false);
    }
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!validate()) return;

  //   setSubmitting(true);

  //   const form = new FormData();
  //   Object.keys(formData).forEach((key) => {
  //     form.append(key, formData[key]);
  //   });

  //   try {
  //     // Check if the selected date and time are available
  //     const availabilityRes = await fetch(
  //       "https://docs.ivistaz.com/wp-json/appointments/check-availability",
  //       {
  //         method: "POST",
  //         body: JSON.stringify({ dateTime: formData.dateTime }),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     const availability = await availabilityRes.json();
  //     if (!availability.isAvailable) {
  //       setResponseMsg("❌ The selected date and time are already booked. Please choose another.");
  //       return;
  //     }

  //     // Submit the form
  //     const res = await fetch(
  //       "https://docs.ivistaz.com/wp-json/contact-form-7/v1/contact-forms/895/feedback",
  //       {
  //         method: "POST",
  //         body: form,
  //         headers: {
  //           Accept: "application/json",
  //         },
  //       }
  //     );

  //     const result = await res.json();
  //     if (result.status === "mail_sent") {
  //       setResponseMsg("Application submitted successfully!");
  //       setFormData(initialState);
  //       setFormErrors({});
  //       setShowPopup(true);
  //     } else {
  //       setResponseMsg("❌ Submission failed. Please try again.");
  //     }
  //   } catch (error) {
  //     setResponseMsg("❌ Error submitting the form.");
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  return (
    <>
      <div className="bg-black">
        <h2 className="lg:text-2xl text-xl text-center font-tthoves-bold mb-6 text-white lg:pt-28 pb-10 pt-10">
          Book a quick 15-minute call to explore fit <br /> Fill this form to
          Schedule a Call
        </h2>

        <div className="container mx-auto lg:px-20 py-8 text-white bg-black shadow-lg border border-[#5B5B5B] rounded-2xl">
        {/* <div className="container mx-auto lg:px-20 py-8 text-white bg-gradient-to-r from-[#0059BE] via-[#0059BE] to-[#0078B1] shadow-lg"> */}
          <h2 className="text-4xl text-center font-tthoves-bold mb-6 text-white">
            Enquiry Form
          </h2>
          <form className="space-y-6 p-10" onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <div>
                <label className="text-sm font-tthoves-demibold mb-1 block">
                  <span className="text-xl">Full Name</span>{" "}
                  <span className="text-[#fff] font-monument-light"> (Required)</span>
                </label>
                <input
                  // placeholder="We’d Love To Know Who We’re Speaking To"
                  type="text"
                  className={`w-full border ${
                    formErrors.fullName
                      ? "border-red-500 border-dashed rounded-md "
                      : "border-dashed border-[#5B5B5B] focus:outline-none rounded-md p-3"
                  } p-2`}
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (formErrors.fullName) {
                      setFormErrors({ ...formErrors, fullName: undefined });
                    }
                  }}
                />
                {formErrors.fullName && (
                  <p className="text-red-600 text-sm">{formErrors.fullName}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-tthoves-demibold mb-1 block">
                  <span className="text-xl">Company Name</span>
                  <span className="text-[#fff] font-monument-light"> (Required)</span>
                </label>

                <input
                  // placeholder="This Helps Us Tailor Our Recommendations"
                  type="text"
                  className={`w-full border ${
                    formErrors.company
                      ? "border-red-500 border-dashed rounded-md "
                      : "border-dashed border-[#5B5B5B] focus:outline-none rounded-md p-3"
                  } p-2`}
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
                {formErrors.company && (
                  <p className="text-red-600 text-sm">{formErrors.company}</p>
                )}
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
              <div>
                <label className="text-sm font-tthoves-demibold mb-1 block">
                  <span className="text-xl">Work Email</span>
                  <span className="text-[#fff] font-monument-light"> (Required)</span>
                </label>
                <input
                  // placeholder="Your Business Email Helps Us Reach You Directly"
                  type="email"
                  className={`w-full border ${
                    formErrors.email
                      ? "border-red-500 border-dashed rounded-md "
                      : "border-dashed border-[#5B5B5B] focus:outline-none rounded-md p-3"
                  } p-2`}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {formErrors.email && (
                  <p className="text-red-600 text-sm">{formErrors.email}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-tthoves-demibold mb-1 block">
                  <span className="text-xl">Phone Number</span>
                  <span className="text-[#fff] font-monument-light"> (Optional)</span>
                </label>
                <input
                  type="text"
                  // placeholder="Share This Only If You’d Prefer A Quick Call"
                  className={`w-full border ${
                    formErrors.phone
                      ? "border-red-500 border-dashed rounded-md "
                      : "border-dashed border-[#5B5B5B] focus:outline-none rounded-md p-3"
                  } p-2`}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                {formErrors.phone && (
                  <p className="text-red-600 text-sm">{formErrors.phone}</p>
                )}
              </div>
            </div>

            {/* Row 3 */}
            {/* Row 3 */}

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Job Title / Role */}
              <div>
                <label className="text-sm font-tthoves-demibold mb-1 block">
                  <span className="text-xl">Job Title / Role</span>
                  <span className="text-[#fff] font-monument-light"> (Required)</span>
                </label>
                <input
                  type="text"
                  className={`w-full border ${
                    formErrors.job
                      ? "border-red-500 border-dashed rounded-md "
                      : "border-dashed border-[#5B5B5B] focus:outline-none rounded-md p-3"
                  } p-2`}
                  value={formData.job}
                  onChange={(e) =>
                    setFormData({ ...formData, job: e.target.value })
                  }
                />
                {formErrors.job && (
                  <p className="text-red-600 text-sm">{formErrors.job}</p>
                )}
              </div>

              {/* Where Are You Reaching Out From? */}
              <div>
                <label className="text-sm font-tthoves-demibold mb-1 block">
                  <span className="text-xl">
                    Where Are You Reaching Out From?
                  </span>
                  <span className="text-[#fff] font-monument-light"> (Required)</span>
                </label>
                <input
                  type="text"
                  className={`w-full border ${
                    formErrors.reachingOut
                      ? "border-red-500 border-dashed rounded-md "
                      : "border-dashed border-[#5B5B5B] focus:outline-none rounded-md p-3"
                  } p-2`}
                  value={formData.reachingOut}
                  onChange={(e) =>
                    setFormData({ ...formData, reachingOut: e.target.value })
                  }
                />
                {formErrors.reachingOut && (
                  <p className="text-red-600 text-sm">
                    {formErrors.reachingOut}
                  </p>
                )}
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <CustomSelect
                  multi
                  label={
                    <span className="text-xl flex flex-col py-2">
                      What Are You Most Interested In?{" "}
                      <span className="text-sm text-[#fff] font-monument-light">
                        (Required – Multi-Select Checkboxes)
                      </span>
                    </span>
                  }
                  options={[
                    "Lead Generation",
                    "Website/Ux Revamp",
                    "Conversion Optimization",
                    "Remote Delivery Support (For Client Projects)",
                    "Other",
                  ]}
                  onChange={(val) =>
                    setFormData({ ...formData, interest: val })
                  }
                  value={formData.interest || []}
                  error={formErrors.interest}
                />

                <div className="py-5">
                  <label className="text-sm font-tthoves-demibold mb-1 block">
                    <span className="text-xl">
                      Preferred Date & Time For A Call
                    </span>
                  </label>

                  <DatePicker
                    selected={
                      formData.dateTime ? new Date(formData.dateTime) : null
                    }
                    onChange={(date) => {
                      setFormData({
                        ...formData,
                        dateTime: date.toISOString(),
                      });
                    }}
                    showTimeSelect
                    dateFormat="yyyy-MM-dd HH:mm"
                    // placeholderText="We’ll Do Our Best To Match Your Availability."
                    className={`lg:w-[504px] border w-full ${
                      formErrors.dateTime
                        ? "border-red-500 border-dashed rounded-md"
                        : "border-dashed border-[#5B5B5B] focus:outline-none rounded-md p-3"
                    } p-2`}
                    minDate={new Date()}
                    timeIntervals={30} // half hour slots
                  />

                  {formErrors.dateTime && (
                    <p className="text-red-600 text-sm">
                      {formErrors.dateTime}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="text-sm font-tthoves-demibold mb-1 block">
                  <span className="text-xl flex flex-col py-2">
                    Tell Us Briefly What You’re Looking For{" "}
                    {/* <span className="text-sm text-[#fff] font-monument-light">
                      (Short Text Field)
                    </span> */}
                  </span>
                </label>
                <textarea
                  // placeholder="Briefly describe what you're looking for"
                  className={`w-full border ${
                    formErrors.textField
                      ? "border-red-500 border-dashed rounded-md"
                      : "border-dashed border-[#5B5B5B] focus:outline-none rounded-md p-3 h-44"
                  }`}
                  value={formData.textField}
                  onChange={(e) =>
                    setFormData({ ...formData, textField: e.target.value })
                  }
                />
                {formErrors.textField && (
                  <p className="text-red-600 text-sm">{formErrors.textField}</p>
                )}
              </div>
            </div>

            {/* Declaration */}
            {/* <div className="space-y-4">
              <button
                type="submit"
                disabled={submitting}
                className="bg-white text-black rounded-md text-xl hover:bg-gradient-to-r from-[#0078B1] to-[#0059BE] p-3 w-32"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </div> */}
            <button
            type="submit"
            disabled={submitting}
             className="relative inline-flex h-12 w-36 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-black hover:bg-white px-3 py-1 text-xl font-medium text-white hover:text-black backdrop-blur-3xl divide-neutral-400 transition">
              {submitting ? "Submitting..." : "Submit"}
              </span>
            </button>

            {/* Response Message */}
            {responseMsg && (
              <p className="text-sm text-gray-500">{responseMsg}</p>
            )}
            {/* Popup on submission */}
            <AnimatePresence>
              {showPopup && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
                >
                  <motion.div
                    ref={popupRef}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative iv-bg rounded-2xl p-8 max-w-4xl w-full mx-auto shadow-xl text-center"
                  >
                    {/* Close button */}
                    <button
                      onClick={() => setShowPopup(false)}
                      className="absolute top-0 right-4 text-white hover:text-gray-800 text-4xl font-bold"
                      aria-label="Close"
                    >
                      &times;
                    </button>
                    <div className="flex justify-center items-center">
                      <Image
                        src="/ivista_logo.svg"
                        width={250}
                        height={100}
                        alt="logo"
                      />
                    </div>
                    {/* Thank You Message */}
                    <h2 className="text-4xl pt-4 font-tthoves-demibold text-[#fff] mb-4">
                      Thank you for contacting us!
                    </h2>
                    <p className="text-[#fff] text-md">
                      We’ve received your submission and will get back to you
                      shortly.
                    </p>
                    <p className="text-[#fff] text-md">
                      Our team is reviewing your message with care.
                    </p>
                    <p className="text-[#fff] text-md">
                      Expect a response within the next 24–48 hours.
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </>
  );
}
