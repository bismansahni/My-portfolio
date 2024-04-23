import './styles/Contact.css';
import React, { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    subject: '',
    message: '',
    reply_to: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,  // Use environment variable for EmailJS service ID
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Use environment variable for EmailJS template ID
      toSend,
      process.env.REACT_APP_EMAILJS_USER_ID      // Use environment variable for EmailJS user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setMessage('Your message has been sent successfully.');
      setIsSubmitting(false);
      // Reset form if needed
      setToSend({
        from_name: '',
        subject: '',
        message: '',
        reply_to: '',
      });
    })
    .catch((err) => {
      console.log('FAILED...', err);
      setMessage('Failed to send the message. Please try again later.');
      setIsSubmitting(false);
    });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
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
        <button type="submit" className="contact-button" disabled={isSubmitting}>
          Send
        </button>
      </form>
      {/* Display submission message */}
      {message && <div className="submission-message">{message}</div>}
    </div>





  );
};

export default Contact;
