import React, { useState } from 'react';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('login');
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const [signupData, setSignupData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSignupChange = (e) => {
        const { name, value } = e.target;
        setSignupData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Login logic here (to be implemented)
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSubmitStatus('success');
            setTimeout(() => {
                onClose();
                setLoginData({ email: '', password: '' });
                setSubmitStatus(null);
            }, 1500);
        } catch (error) {
            console.error('Login error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Google Sheets Web App URL (dummy URL - to be updated later)
        const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Required for Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...signupData,
                    type: 'signup',
                    timestamp: new Date().toISOString()
                })
            });

            // Since we're using no-cors, we can't read the response
            // But we'll assume success
            setSubmitStatus('success');
            setTimeout(() => {
                onClose();
                // Reset form
                setSignupData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: ''
                });
                setSubmitStatus(null);
            }, 2000);
        } catch (error) {
            console.error('Error submitting signup:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="auth-modal-overlay" onClick={onClose}>
            <div className="auth-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="auth-modal-close" onClick={onClose}>&times;</button>
                
                <div className="auth-tabs">
                    <button
                        className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveTab('login');
                            setSubmitStatus(null);
                        }}
                    >
                        Login
                    </button>
                    <button
                        className={`auth-tab ${activeTab === 'signup' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveTab('signup');
                            setSubmitStatus(null);
                        }}
                    >
                        Sign-up
                    </button>
                </div>

                <div className="auth-form-container">
                    {activeTab === 'login' ? (
                        <form onSubmit={handleLogin} className="auth-form">
                            <h2 className="auth-form-title">Login</h2>
                            
                            <div className="form-group">
                                <label htmlFor="login-email">Email *</label>
                                <input
                                    type="email"
                                    id="login-email"
                                    name="email"
                                    value={loginData.email}
                                    onChange={handleLoginChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="login-password">Password *</label>
                                <input
                                    type="password"
                                    id="login-password"
                                    name="password"
                                    value={loginData.password}
                                    onChange={handleLoginChange}
                                    required
                                />
                            </div>

                            {submitStatus === 'success' && (
                                <div className="form-message success">
                                    Login successful!
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="form-message error">
                                    Login failed. Please try again.
                                </div>
                            )}

                            <button type="submit" className="btn btn-primary auth-submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Logging in...' : 'Login'}
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleSignup} className="auth-form">
                            <h2 className="auth-form-title">Sign-up</h2>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="signup-firstName">First Name *</label>
                                    <input
                                        type="text"
                                        id="signup-firstName"
                                        name="firstName"
                                        value={signupData.firstName}
                                        onChange={handleSignupChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="signup-lastName">Last Name *</label>
                                    <input
                                        type="text"
                                        id="signup-lastName"
                                        name="lastName"
                                        value={signupData.lastName}
                                        onChange={handleSignupChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="signup-email">Email *</label>
                                <input
                                    type="email"
                                    id="signup-email"
                                    name="email"
                                    value={signupData.email}
                                    onChange={handleSignupChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="signup-phone">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="signup-phone"
                                    name="phoneNumber"
                                    value={signupData.phoneNumber}
                                    onChange={handleSignupChange}
                                    required
                                />
                            </div>

                            {submitStatus === 'success' && (
                                <div className="form-message success">
                                    Thank you! Your account has been created successfully.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="form-message error">
                                    There was an error creating your account. Please try again.
                                </div>
                            )}

                            <button type="submit" className="btn btn-primary auth-submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Signing up...' : 'Sign-up'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthModal;

