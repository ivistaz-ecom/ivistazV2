'use client';
import React, { useState } from 'react';
import axios from 'axios';
import ConfigData from '../../config';

const GrowthForm = () => {
  const siteUrl = ConfigData.apiDomainUrl;
  const [yourFirstName, setYourFirstName] = useState('');
  const [yourLastName, setYourLastName] = useState('');
  const [yourEmail, setYourEmail] = useState('');
  const [yourPhone, setYourPhone] = useState('');
  const [yourCompany, setYourCompany] = useState('');
  const [yourJobTitle, setYourJobTitle] = useState('');
  const [whatWouldYouLike, setWhatWouldYouLike] = useState('');
  const [yourChallenges, setYourChallenges] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phoneRegex = /^[0-9]{10}$/;
  const nameRegex = /^[a-zA-Z\s]*$/;
  const notAllowedDomains = ['test.com', 'sample.com', 'example.com', 'testing.com', 'gmail.co', 'gmail.c', 'gmail.'];

  const isNotAllowedDomain = (email) => {
    const [, domain] = email.split('@');
    return notAllowedDomains.includes(domain);
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'yourFirstName':
      case 'yourLastName':
        if (!nameRegex.test(value)) {
          setErrors(prev => ({ ...prev, [name]: 'Invalid character in name' }));
        } else {
          setErrors(prev => ({ ...prev, [name]: null }));
        }
        name === 'yourFirstName' ? setYourFirstName(value) : setYourLastName(value);
        break;
      case 'yourEmail':
        setYourEmail(value);
        if (!emailRegex.test(value)) {
          setErrors(prev => ({ ...prev, [name]: 'Enter a valid email address' }));
        } else if (isNotAllowedDomain(value)) {
          setErrors(prev => ({ ...prev, [name]: 'This email domain is not allowed' }));
        } else {
          setErrors(prev => ({ ...prev, [name]: null }));
        }
        break;
      case 'yourPhone':
        const cleaned = value.replace(/[^0-9]/g, '');
        setYourPhone(cleaned);
        if (!phoneRegex.test(cleaned)) {
          setErrors(prev => ({ ...prev, [name]: 'Enter a valid 10-digit phone number' }));
        } else {
          setErrors(prev => ({ ...prev, [name]: null }));
        }
        break;
      case 'yourCompany':
        setYourCompany(value);
        break;
      case 'yourJobTitle':
        setYourJobTitle(value);
        break;
      default:
        break;
    }
  };

  const handleCheckboxChange = (e, state, setState, isSingle = false) => {
    const { value, checked } = e.target;
    if (isSingle) {
      setState(checked ? value : '');
    } else {
      if (checked) {
        setState([...state, value]);
      } else {
        setState(state.filter(item => item !== value));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = { ...errors };
    if (whatWouldYouLike === '') {
      newErrors.whatWouldYouLike = 'Please select one option';
    } else {
      newErrors.whatWouldYouLike = null;
    }

    if (yourChallenges.length === 0) {
      newErrors.yourChallenges = 'Please select at least one challenge';
    } else {
      newErrors.yourChallenges = null;
    }

    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error !== null)) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('yourFirstName', yourFirstName);
      formData.append('yourLastName', yourLastName);
      formData.append('yourEmail', yourEmail);
      formData.append('yourPhone', yourPhone);
      formData.append('yourCompany', yourCompany);
      formData.append('yourJobTitle', yourJobTitle);
      formData.append('whatWouldYouLike', whatWouldYouLike);
      formData.append('yourChallenges', yourChallenges.join(', '));

      const response = await axios.post(
        `${siteUrl}wp-json/contact-form-7/v1/contact-forms/851/feedback`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      if (response.data.status === 'mail_sent') {
        setPost(response.data.message);
        resetForm();
        setSubmitted(true);
      } else if (response.data.status === 'validation_failed') {
        const fieldErrors = {};
        response.data.invalid_fields.forEach(field => {
          fieldErrors[field.field] = field.message;
        });
        setErrors(fieldErrors);
      }
    } catch (error) {
      console.error("Form submission error", error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setYourFirstName('');
    setYourLastName('');
    setYourEmail('');
    setYourPhone('');
    setYourCompany('');
    setYourJobTitle('');
    setWhatWouldYouLike('');
    setYourChallenges([]);
  };

  const inputClass = (hasError) =>
    `w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F00] ${
      hasError ? 'border-[#F00]' : 'border-gray-300'
    }`;

  return (
    <div className="bg-white lg:px-4 lg:py-6 lg:max-w-5xl mx-auto container">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6 border border-[#F00] rounded-2xl p-2 lg:p-6 shadow-md">
          <h2 className="text-2xl lg:text-[35px] font-monument-bold text-center text-[#F00]">READY TO SCALE YOUR GROWTH?</h2>
          <p className="text-center text-lg">Let’s drive predictable revenue and sustainable growth with<br className="block md:hidden" /> AI-powered marketing.</p>
          <p className="text-center text-lg">Get in touch today and start seeing results within weeks.</p>

          <div className="grid md:grid-cols-2 gap-4">
            <input name="yourFirstName" value={yourFirstName} onChange={handleTextChange} placeholder="First Name" className={inputClass(errors.yourFirstName)} required />
            <input name="yourLastName" value={yourLastName} onChange={handleTextChange} placeholder="Last Name" className={inputClass(errors.yourLastName)} required />
            <input name="yourJobTitle" value={yourJobTitle} onChange={handleTextChange} placeholder="Job Title" className={inputClass()} required />
            <input name="yourCompany" value={yourCompany} onChange={handleTextChange} placeholder="Company" className={inputClass()} required />
            <input type="email" name="yourEmail" value={yourEmail} onChange={handleTextChange} placeholder="Official Email ID" className={inputClass(errors.yourEmail)} required />
            <input name="yourPhone" value={yourPhone} onChange={handleTextChange} placeholder="Phone Number" className={inputClass(errors.yourPhone)} required maxLength="10" />
          </div>

          <h4 className="text-2xl lg:text-[35px] font-monument-bold text-center text-[#F00]">WHAT WOULD YOU LIKE?</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <label className="flex gap-2 items-center">
              
              <p className='space-x-2'>
              <input type="radio" value="Website Audit" checked={whatWouldYouLike === 'Website Audit'} onChange={(e) => handleCheckboxChange(e, whatWouldYouLike, setWhatWouldYouLike, true)} />
              <span className='font-monument-bold'>A complimentary audit of your website - </span> <span>Analyze your site’s performance, UX, and SEO with our expert insights & recommendations</span>
              </p>
            </label>
            <label className="flex gap-2 items-center">
              <input type="radio" value="Thought Leadership Piece" checked={whatWouldYouLike === 'Thought Leadership Piece'} onChange={(e) => handleCheckboxChange(e, whatWouldYouLike, setWhatWouldYouLike, true)} />
              <p><span className='font-monument-bold'>A complimentary thought leadership piece -</span> <span>tailored to your industry</span></p>
            </label>
          </div>
          {errors.whatWouldYouLike && <p className="text-[#F00] text-sm">{errors.whatWouldYouLike}</p>}

          <h4 className="text-2xl lg:text-[35px] font-monument-bold text-center text-[#F00]">WHAT IS YOUR CHALLENGE?</h4>
          <p className="text-center text-gray-600">(Select All That Apply)</p>
          <div className="grid md:grid-cols-2 gap-4">
            {['Generating consistent pipeline', 'Low conversion rate', 'Lack of thought leadership', 'Low brand awareness'].map((label, idx) => (
              <label key={idx} className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  value={label}
                  onChange={(e) => handleCheckboxChange(e, yourChallenges, setYourChallenges)}
                  checked={yourChallenges.includes(label)}
                />
                {label}
              </label>
            ))}
          </div>
          {errors.yourChallenges && <p className="text-[#F00] text-sm">{errors.yourChallenges}</p>}

          <div className="text-center pt-4 flex justify-center">
            <button type="submit" className="btn-15" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center text-green-600 font-semibold">
          {post ? post : 'Thank you for your interest. We will get back to you soon.'}
        </div>
      )}
    </div>
  );
};

export default GrowthForm;
