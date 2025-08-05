import React from 'react';
import { motion } from 'framer-motion';

// Ganti dengan path gambar Anda di folder /public/events/
const eventData = [
    { id: 1, src: '/events/event1.jpg', span: 2 },
    { id: 2, src: '/events/event2.jpg', span: 1 },
    { id: 3, src: '/events/event3.jpg', span: 1 },
    { id: 4, src: '/events/event4.jpg', span: 2 },
    { id: 5, src: '/events/event5.jpg', span: 1 },
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
                            className="event-item"
                            style={{ gridColumn: `span ${item.span}` }}
                            variants={itemVariants}
                        >
                            <img src={item.src} alt={`Event ${item.id}`} />
                            <div className="event-overlay"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Events;