
'use client';


import SectionHeader from '@/components/SectionHeader/SectionHeader';
import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        location: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <div className='w-full sm:px-4 px-14 py-4 mt-10 flex flex-col items-center justify-center'>
            <SectionHeader title='Contact Us' subtitle='Have questions or feedback? We&apos;d love to hear from you.' pt={4} />
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="location" className="block mb-1">Location</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-1">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 border rounded min-h-[120px]"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Send Message
                    </button>
                </form>

                {/* Mini Map */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Our Location</h3>
                    <div className="border rounded-lg overflow-hidden mb-4">
                        <iframe
                            width="100%"
                            height="300"
                            src="https://maps.google.com/maps?q=University%20of%20Delhi&z=15&output=embed"
                            style={{ border: 0 }}
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="space-y-2">
                        <p>University of Delhi, North Campus</p>
                        <p>Delhi 110007, India</p>
                        <p>Email: contact@duresources.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;