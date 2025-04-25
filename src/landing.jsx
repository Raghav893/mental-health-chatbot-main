
import { useState, useEffect } from 'react';
import './landing.css'
import { Link } from 'react-router-dom';

export default function Landing() {
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="app-container">
            
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="nav-container">
                    <div className="logo">
                        <div className="logo-icon">M</div>
                        <span>MindfulCompanion</span>
                    </div>
                    
                    <div className="nav-links">
                        <a href="#features">Features</a>
                        <a href="#how-it-works">How It Works</a>
                        <a href="#testimonials">Testimonials</a>
                        <Link to="/login" ><button className="btn-login"> Log in  </button></Link>
                       <Link to="/signup"> <button className="btn-signup">Sign up</button></Link>
                    </div>
                </div>
            </nav>

            
            <section className="hero">
                <div className="hero-content">
                    <h1>Mindful Companion</h1>
                    <p className="subtitle">Your personal mental health support, available anytime</p>
                    <div className="hero-buttons">
                        <Link  to="/signup"  ><button className="btn-primary">Get Started</button></Link>
                        <button className="btn-secondary">Learn More</button>
                    </div>
                </div>
                
            </section>
 
            <section id="features" className="features">
                <h2 className="section-title">Why Choose MindfulCompanion</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon icon-support"></div>
                        <h3>24/7 Support</h3>
                        <p>Access emotional support whenever you need it, day or night</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon icon-privacy"></div>
                        <h3>Complete Privacy</h3>
                        <p>Your conversations are secure and completely confidential</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon icon-insights"></div>
                        <h3>Personalized Insights</h3>
                        <p>Receive guidance tailored to your unique mental health journey</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon icon-tracking"></div>
                        <h3>Progress Tracking</h3>
                        <p>Monitor your mood and well-being over time with intuitive tools</p>
                    </div>
                </div>
            </section>

            
            <section id="how-it-works" className="how-it-works">
                <h2 className="section-title">How It Works</h2>
                <div className="steps-container">
                    <div className="step">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h3>Sign Up</h3>
                            <p>Create your profile in less than a minute</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h3>Start Chatting</h3>
                            <p>Connect with our AI companion anytime</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h3>Get Support</h3>
                            <p>Receive guidance and wellness tips</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                            <h3>Track Progress</h3>
                            <p>Monitor your mental well-being journey</p>
                        </div>
                    </div>
                </div>
            </section>

            
            <section id="testimonials" className="testimonials">
                <h2 className="section-title">What People Say</h2>
                <div className="testimonials-container">
                    <div className="testimonial-card">
                        <div className="quote-mark">"</div>
                        <p className="testimonial-text">I use it daily. It really helps me calm down when I'm feeling overwhelmed with coursework!</p>
                        <div className="testimonial-author">
                            <div className="author-avatar"></div>
                            <div className="author-info">
                                <h4>Aditi</h4>
                                <p>Student</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="quote-mark">"</div>
                        <p className="testimonial-text">Super friendly and non-judgmental chatbot. It's become an important part of my mental health routine.</p>
                        <div className="testimonial-author">
                            <div className="author-avatar"></div>
                            <div className="author-info">
                                <h4>Aryan</h4>
                                <p>Engineer</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="quote-mark">"</div>
                        <p className="testimonial-text">As someone who struggles with anxiety, having this tool has been incredibly helpful for managing my symptoms.</p>
                        <div className="testimonial-author">
                            <div className="author-avatar"></div>
                            <div className="author-info">
                                <h4>Maya</h4>
                                <p>Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           
            <section className="cta-section">
                <div className="cta-content">
                    <h2>Ready to take charge of your mental well-being?</h2>
                    <p>Join thousands of users who have improved their mental health with MindfulCompanion</p>
                    <Link to ="/signup"><button className="btn-primary">Get Started Free</button></Link>
                    <p className="cta-footnote">No credit card required</p>
                </div>
            </section>

           
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <div className="logo-icon">M</div>
                        <span>MindfulCompanion</span>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Product</h4>
                            <a href="#">Features</a>
                            <a href="#">Pricing</a>
                            <a href="#">FAQ</a>
                        </div>
                        <div className="footer-column">
                            <h4>Company</h4>
                            <a href="#">About Us</a>
                            <a href="#">Careers</a>
                            <a href="#">Contact</a>
                        </div>
                        <div className="footer-column">
                            <h4>Resources</h4>
                            <a href="#">Blog</a>
                            <a href="#">Support</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 MindfulCompanion. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}