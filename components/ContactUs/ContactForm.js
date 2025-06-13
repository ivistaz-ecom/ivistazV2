'use client';
import React, { useState } from 'react';
import axios from 'axios';
import ConfigData from '../../config';

const ContactForm = () => {
  const siteUrl = ConfigData.apiDomainUrl;

  const [post, setPost] = useState(null);
  const [errors, setErrors] = useState({});
  const [yourName, setyourName] = useState('');
  const [yourEmail, setyourEmail] = useState('');
  const [yourPhone, setyourPhone] = useState('');
  const [yourCompany, setyourCompany] = useState('');
  const [yourMessage, setyourMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const notAllowedDomains = ['test.com', 'sample.com', 'example.com', 'testing.com', 'gmail.co', 'gmail.c', 'gmail.'];

  const isNotAllowedDomain = (email) => {
    const [, domain] = email.split('@');
    return notAllowedDomains.includes(domain);
  };

  const nameRegex = /^[a-zA-Z\s]*$/;
  const phoneRegex = /^[0-9]{10}$/;

  const handleTextChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'yourName':
        setyourName(value);
        setErrors(prev => ({ ...prev, yourName: nameRegex.test(value) ? null : 'Invalid character in name' }));
        break;
      case 'yourEmail':
        setyourEmail(value);
        if (!emailRegex.test(value)) {
          setErrors(prev => ({ ...prev, yourEmail: 'Please enter a valid email address.' }));
        } else if (isNotAllowedDomain(value)) {
          setErrors(prev => ({ ...prev, yourEmail: 'This email domain is not allowed.' }));
        } else {
          setErrors(prev => ({ ...prev, yourEmail: null }));
        }
        break;
      case 'yourPhone':
        const numeric = value.replace(/[^0-9]/g, '');
        if (numeric.length <= 10) setyourPhone(numeric);
        setErrors(prev => ({ ...prev, yourPhone: phoneRegex.test(numeric) ? null : 'Invalid phone number' }));
        break;
      case 'yourCompany':
        setyourCompany(value);
        break;
      case 'yourMessage':
        setyourMessage(value);
        break;
      default:
        break;
    }
  };

  const handleBeforeInput = (event) => {
    const { name, data } = event.nativeEvent;
    if (name === 'yourPhone' && !/[0-9]/.test(data)) {
      event.preventDefault();
    }
  };

  const resetForm = () => {
    setyourName('');
    setyourEmail('');
    setyourPhone('');
    setyourCompany('');
    setyourMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(errors).some(error => error)) return;
    setLoading(true);
    try {
      const response = await axios.post(
        `${siteUrl}wp-json/contact-form-7/v1/contact-forms/271/feedback`,
        { yourName, yourEmail, yourPhone, yourCompany, yourMessage },
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      if (response?.data?.status === 'mail_sent') {
        setPost(response.data.message);
        resetForm();
        setSubmitted(true);
      } else if (response?.data?.status === 'validation_failed') {
        const fieldErrors = {};
        response.data.invalid_fields.forEach(field => {
          fieldErrors[field.field] = field.message;
        });
        setErrors(fieldErrors);
      }
    } catch (err) {
      console.error("Error submitting form", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="yourName" className="block text-white font-medium mb-1">
              Full Name <sup className="text-red-500">*</sup>
            </label>
            <input
              type="text"
              id="yourName"
              name="yourName"
              value={yourName}
              onChange={handleTextChange}
              className={`w-full px-4 py-2 rounded border bg-white ${
                errors.yourName ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-red-400`}
              required
            />
            {errors.yourName && <p className="text-red-500 text-sm mt-1">{errors.yourName}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="yourEmail" className="block text-white font-medium mb-1">
              Email <sup className="text-red-500">*</sup>
            </label>
            <input
              type="email"
              id="yourEmail"
              name="yourEmail"
              value={yourEmail}
              onChange={handleTextChange}
              className={`w-full px-4 py-2 rounded border bg-white ${
                errors.yourEmail ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-red-400`}
              required
            />
            {errors.yourEmail && <p className="text-red-500 text-sm mt-1">{errors.yourEmail}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="yourPhone" className="block text-white font-medium mb-1">
              Phone <sup className="text-red-500">*</sup>
            </label>
            <input
              type="text"
              id="yourPhone"
              name="yourPhone"
              value={yourPhone}
              maxLength="10"
              onBeforeInput={handleBeforeInput}
              onChange={handleTextChange}
              className={`w-full px-4 py-2 rounded border bg-white ${
                errors.yourPhone ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-red-400`}
              required
            />
            {errors.yourPhone && <p className="text-red-500 text-sm mt-1">{errors.yourPhone}</p>}
          </div>

          {/* Company */}
          <div>
            <label htmlFor="yourCompany" className="block text-white font-medium mb-1">
              Company <sup className="text-red-500">*</sup>
            </label>
            <input
              type="text"
              id="yourCompany"
              name="yourCompany"
              value={yourCompany}
              onChange={handleTextChange}
              className="w-full px-4 py-2 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="yourMessage" className="block text-white font-medium mb-1">
              Message
            </label>
            <textarea
              id="yourMessage"
              name="yourMessage"
              rows="5"
              value={yourMessage}
              onChange={handleTextChange}
              className="w-full px-4 py-2 rounded border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="btn-15"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
            {post && loading && <p className="text-green-500 mt-3 font-semibold">{post}</p>}
          </div>
        </form>
      ) : (
        <div className="text-center text-white py-6">
          <h3 className="text-xl font-semibold">Thank you for your submission!</h3>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
