import React, { useEffect } from 'react';
import { useModal } from '../context/ModalContext';
import './GetStartedModal.css';

const GetStartedModal = () => {
    const { isModalOpen, closeModal } = useModal();

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    if (!isModalOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your interest! We will contact you soon.');
        closeModal();
    };

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={closeModal}>&times;</button>
                <div className="modal-header">
                    <h2 className="text-gradient">Get Started with Solvik</h2>
                    <p>Fill out the form below to begin your journey to intelligent testing.</p>
                </div>
                <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Work Email</label>
                        <input type="email" id="email" placeholder="john@company.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="company">Company</label>
                        <input type="text" id="company" placeholder="Acme Inc." required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" placeholder="Tell us about your testing needs..." rows="4"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-full">Submit Request</button>
                    <p className="form-footer">
                        By submitting this form, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default GetStartedModal;
