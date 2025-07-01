
import React, { useState } from 'react';
import './ContactForm.css';
import sideImage from '../../Assets/Desktop/baneer-4.png'; 
const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(
        'https://nirman.maksoftbox.com/MDocBoxAPI/MdocAddEnquiryORTeleCalling',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            Name: formData.name,
            Email: formData.email,
            PhoneNumber: formData.phone
          })
        }
      );
      if (!res.ok) throw new Error(`Error ${res.status}`);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="contact-form-container">
      <div className="form-side">
        <h2 className="title">
          THE SUITE LIFE UPGRADE<br />
          YOU'VE BEEN WAITING<br />
          FOR IS HERE
        </h2>

        <form onSubmit={handleSubmit} className="form">
          <label>
            Name*
            <input
              className="input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email*
            <input
              className="input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone Number*
            <input
              className="input"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>

          <button className="submit-button" type="submit">
            KNOW MORE
          </button>

          {status === 'loading' && <p className="message">Submitting...</p>}
          {status === 'success' && (
            <p className="message success">Thank you! We'll be in touch.</p>
          )}
          {status === 'error' && (
            <p className="message error">Submission failed. Please try again.</p>
          )}

          <p className="small-text">*T&C Apply</p>
          <p className="small-text">
            *Your privacy is very important to us; we will never share your
            information.
          </p>
        </form>
      </div>

      <div className="image-side">
        <img src={sideImage} alt="Contact" className="side-image" />
      </div>
    </div>
  );
};

export default ContactForm;
