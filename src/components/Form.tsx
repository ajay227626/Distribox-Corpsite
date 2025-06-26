import React, { useState } from 'react';

const SubmitForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const submitForm = async () => {
    setSubmitting(true);

    try {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = now.getFullYear();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const formattedTimestamp = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
      const formatedData = {
        formData: {
          timeStamp: formattedTimestamp,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message
        }
      }
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbwJzr1fBifC_gtZtNuzZBOXdpBiwb173d0E774dQ_ZYxsemDB7M0CNmfgYcOoznDiNz8A/exec';
      console.log('formData', formData);

      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formatedData),
      });

      console.log('response', response);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({ fullName: '', email: '', phone: '', company: '', message: '' });
      }, 4000);

    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }

    setSubmitting(false);
  };


  return (
    <div className="bg-white text-gray-900 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold mb-6 text-center">Send us a Message</h3>
      <div className='space-y-6'>
        <div className={success ? 'hidden' : 'block'}>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-10">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input type="text" id="fullName" required value={formData.fullName} onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200" placeholder="Enter your full name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input type="email" id="email" required value={formData.email} onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200" placeholder="Enter your email" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-10">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input type="tel" id="phone" required value={formData.phone} onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200" placeholder="Enter your phone number" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input type="text" id="company" value={formData.company} onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200" placeholder="Enter your company name" />
            </div>
          </div>

          <div className="mb-10">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea id="message" required value={formData.message} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none" placeholder="Tell us about your requirements, quantity needed, or any specific questions..." />
          </div>

          <button onClick={submitForm} disabled={submitting}
            className={`w-full flex items-center justify-center gap-2 px-6 py-4 text-white text-base font-semibold rounded-md transition duration-200 ${submitting ? 'bg-orange-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'}`}>
            {submitting && <div className="w-4 h-4 border-2 border-t-white border-transparent rounded-full animate-spin" />}
            <span>{submitting ? 'Sending...' : 'Send Message'}</span>
          </button>
        </div>

        {success && (
          <div className="fixed top-0 left-0 w-full h-full bg-green-50 flex flex-col items-center justify-center z-50 animate-fadeIn">
            <svg className="w-24 h-24 stroke-green-500 fill-none" viewBox="0 0 52 52">
              <circle className="stroke-current" cx="26" cy="26" r="25" strokeWidth="2" />
              <path className="stroke-current" d="M14 27l7 7 16-16" strokeWidth="2" fill="none" />
            </svg>
            <div className="text-2xl text-green-600 font-bold mt-5">Message Sent Successfully!</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubmitForm;