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
                    <h2 className="text-gradient">Get Started</h2>
                    <p>Fill out the form below to begin.</p>
                </div>
                <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="company">Company</label>
                        <input type="text" id="company" placeholder="Company" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Work Email</label>
                        <input type="email" id="email" placeholder="john@company.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" placeholder="Testing needs..." rows="2"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-full">Submit Request</button>
                    <p className="form-footer">
                        Agree to our <a href="#">Terms</a> and <a href="#">Privacy</a>.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default GetStartedModal;
