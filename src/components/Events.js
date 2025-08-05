import React from 'react';
import { motion } from 'framer-motion';

// Ganti dengan path gambar Anda di folder /public/events/
const eventData = [
  { id: 1, src: '/events/event1.jpg', title: 'Konferensi Web Dev 2024', description: 'Berbagi wawasan tentang masa depan React.' },
  { id: 2, src: '/events/event2.jpg', title: 'Workshop UI/UX', description: 'Sesi langsung merancang dengan Figma.' },
  { id: 3, src: '/events/event3.jpg', title: 'Meetup Komunitas', description: 'Diskusi panel tentang tren teknologi.' },
  { id: 4, src: '/events/event4.jpg', title: 'Hackathon Nasional', description: 'Membangun aplikasi dalam 24 jam.' },
  { id: 5, src: '/events/event5.jpg', title: 'Pameran Teknologi', description: 'Mempresentasikan proyek terbaru.' },
];

const Events = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="events" className="events-section">
            <div className="events-container">
                <h2 className="section-title">/galeri-event</h2>
                <motion.div
                    className="events-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {eventData.map(item => (
                        <motion.div
                            key={item.id}
                            className="event-card"
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.03 }}
                        >
                            <div className="event-image-container">
                                <img src={item.src} alt={item.title} />
                            </div>
                            <div className="event-card-content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Events;