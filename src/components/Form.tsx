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
      // const result = await response.json();
      // if (result.success) {
        // setSuccess(true);
      // }
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
    <div className="bg-white p-6 w-full h-screen font-sans">
      <h2 className="text-2xl font-semibold text-black-800 mb-5">Send us a Message</h2>
      <div className={success ? 'hidden' : 'block'}>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input type="text" id="fullName" required value={formData.fullName} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md text-sm text-gray-900" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input type="email" id="email" required value={formData.email} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md text-sm text-gray-900" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input type="tel" id="phone" required value={formData.phone} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md text-sm text-gray-900" />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input type="text" id="company" value={formData.company} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md text-sm text-gray-900" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea id="message" required value={formData.message} onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md text-sm min-h-[100px] resize-y" />
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
  );
};

export default SubmitForm;