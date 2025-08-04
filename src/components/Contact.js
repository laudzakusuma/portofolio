import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Hubungi Saya</h2>
      <p>
        Saya selalu terbuka untuk diskusi, kolaborasi, atau peluang baru.
        Jangan ragu untuk menghubungi saya.
      </p>
      <a href="mailto:emailanda@example.com" className="cta-button">
        Kirim Email
      </a>
      <div className="social-links">
        {/* Ganti '#' dengan link sosial media Anda */}
        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </div>
  );
};

export default Contact;