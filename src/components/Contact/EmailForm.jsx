import emailjs from '@emailjs/browser';
import React, { useState } from 'react';

const EmailForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Initialize emailjs with your user ID
        emailjs.init('iaPQFtO-gAVDAqni-');

        // Generate a random contact_number
        const contactNumber = Math.random() * 100000 | 0;

        const templateParams = {
            contact_number: contactNumber,
            user_name: name,
            user_email: email,
            message: message,
            user_subject: subject,
        };

        // Service ID and Template ID from your emailjs account
        const serviceId = 'contact_service';
        const templateId = 'contact_form';

        emailjs.send(serviceId, templateId, templateParams)
            .then(() => {
                alert('Message successfully sent!');
                setName('');
                setEmail('');
                setMessage('');
                setSubject('');
            })
            .catch((error) => {
                alert('Failed to send the message, please try again');
            });
    };

    return (
        <div id='contact-form' className="contact-form">
            <form onSubmit={handleSubmit} id="contact-form">
                <ul>
                    <li className="half">
                        <input
                            type="text" placeholder="Name"
                            name="user_name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </li>
                    <li className="half">
                        <input
                            placeholder="Email"
                            type="email"
                            name="user_email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </li>
                    <li>
                        <input
                            placeholder="Subject"
                            type="text"
                            name="user_subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </li>
                    <li>
                        <textarea
                            placeholder="Message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </li>
                    <li>
                        <input type="submit" className="flat-button" value="Send" />
                    </li>
                </ul>
            </form>
        </div >
    );
};

export default EmailForm;
