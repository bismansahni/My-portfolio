import './styles/Contact.css';
import React, { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Your Name',
    subject: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send('service_id', 'template_id', toSend, 'user_id')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      {/* Contact title */}
      <h2 className="contact-title">Contact me</h2>
      <form onSubmit={onSubmit} className="contact-form">
        <label>Name:</label>
        <input
          type="text"
          name="from_name"
          value={toSend.from_name}
          onChange={handleChange}
          className="contact-input"
        />
        <label>Subject:</label>
        <input
          type="text"
          name="subject"
          value={toSend.subject}
          onChange={handleChange}
          className="contact-input"
        />
        <label>Email:</label>
        <input
          type="email"
          name="reply_to"
          value={toSend.reply_to}
          onChange={handleChange}
          className="contact-input"
        />
        <label>Message:</label>
        <textarea
          name="message"
          value={toSend.message}
          onChange={handleChange}
          className="contact-textarea"
        />
        <button type="submit" className="contact-button">Send</button>
      </form>
    </div>
  );
};

export default Contact;
