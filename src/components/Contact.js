import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFocused, setIsFocused] = useState({ name: false, email: false, message: false });

  const handleFocus = (e) => setIsFocused({ ...isFocused, [e.target.name]: true });
  const handleBlur = (e) => {
    if (e.target.value === "") {
        setIsFocused({ ...isFocused, [e.target.name]: false });
    }
  };
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="contact-section">
      <motion.div 
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">/mulai-percakapan</h2>
        <p>
          Saya sedang mencari peluang baru dan pintu saya selalu terbuka. Baik Anda memiliki pertanyaan atau hanya ingin menyapa, saya akan berusaha sebaik mungkin untuk membalas Anda!
        </p>
        <form className="contact-form">
            <div className="form-group">
                <label htmlFor="name" className={isFocused.name || formData.name ? 'active' : ''}>Nama Anda</label>
                <input type="text" id="name" name="name" onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="email" className={isFocused.email || formData.email ? 'active' : ''}>Email Anda</label>
                <input type="email" id="email" name="email" onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="message" className={isFocused.message || formData.message ? 'active' : ''}>Pesan Anda</label>
                <textarea id="message" name="message" rows="4" onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="cta-button magnetic-link">
                Kirim Pesan <span className="arrow-icon">&rarr;</span>
            </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;