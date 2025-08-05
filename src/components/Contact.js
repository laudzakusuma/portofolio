import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
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
        <a href="mailto:emailanda@example.com" className="cta-button">
          Kirim Pesan <span className="arrow-icon">&rarr;</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;