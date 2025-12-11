import React from 'react'
import './NewFooter.css'
function NewFooter() {
    return (
        <footer className="footer mt-10">
            <section className="footerAboveContact-section">
                <div className="footerAboveContact-container">
                    <div className="footerAboveContact-wrapper">
                        <div className="footerAboveContact-left">
                            <span className="footerAboveContact-get-started-btn">
                                Get started
                            </span>

                            <div className="footerAboveContact-left-text">
                                <h2 className="footerAboveContact-heading">
                                    Build a complete website using the assistance
                                </h2>
                                <p className="footerAboveContact-heading-text">
                                    Start your free trial today and see your ideas come to life
                                    easily and creatively.
                                </p>
                            </div>
                        </div>

                        <div className="footerAboveContact-right">
                            <form action="#" method="post"
                                className="footerAboveContact-form">
                                <input type="email" name="email" id="userEmail-cta-v1" placeholder="Enter your email"
                                    required className="footerAboveContact-input" />

                                <button type="submit" className="footerAboveContact-btn">
                                    <span>Get started</span>
                                </button>
                            </form>

                            <ul className="footerAboveContact-points">
                                <li className="footerAboveContact-point-item">
                                    <span className="footerAboveContact-icon">
                                        ✔
                                    </span>
                                    <p>No credit card required</p>
                                </li>

                                <li className="footerAboveContact-point-item">
                                    <span className="footerAboveContact-icon">
                                        ✔
                                    </span>
                                    <p>7-Day free trial</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-layout-blockcontainer container w-container main-foot">
                <div className="footer-layout grid-2-cols Footer-html">
                    <div className="footer-cell">
                        <div className="footer-about-layout Footer-html">
                            <a href="/" aria-current="page" className="logo-link w-inline-block w--current"><img
                                src="https://atelier-product.vercel.app/assets/ATS%20White%20lOGO%20PNG.png" loading="lazy" alt="" className="foot-log-img" />
                            </a>
                            <div className="log-bottom-text" id="dynamicFooterText">
                                At Atelier, we are dedicated to simplifying your professional
                                journey by enhancing team collaboration and driving business
                                success, regardless of your company&#x27;s scale.
                            </div>
                            <div className="footer-link-text">
                                <img src="https://theateliercreation.com/assets/gov-approved-BdeF_Fdx.png" className="foot-gov-img" />
                            </div>
                        </div>
                    </div>
                    <div className="footer-cell">
                        <div className="footer-menu-wrap">
                            <div className="footer-menu-list">
                                <div className="footer-menu-list-header text-style-small">
                                    Product
                                </div>
                                <a href="/#features" className="footer-link w-inline-block">
                                    <div className="footer-link-text">Features</div>
                                </a><a href="/#benefits" className="footer-link w-inline-block">
                                    <div className="footer-link-text">Benefits</div>
                                </a><a href="/#pricing" className="footer-link w-inline-block">
                                    <div className="footer-link-text">Pricing</div>
                                </a><a href="/#our-value" className="footer-link w-inline-block">
                                    <div className="footer-link-text">Our Value</div>
                                </a><a href="https://www.gitbook.com/" target="_blank" className="footer-link w-inline-block !flex flex-row">
                                    <div className="footer-link-text">Docs</div>
                                    <img loading="lazy" src="https://atelier-product.vercel.app/images/placeholder-icon-arrow-up-right.svg" alt=""
                                        className="footer-link-icon icon-small" />
                                </a>
                            </div>
                            <div className="footer-menu-list">
                                <div className="footer-menu-list-header text-style-small">
                                    Socials
                                </div>
                                <a href="http://www.linkedin.com/in/atelier-technology" target="_blank" className="footer-link w-inline-block">
                                    <div className="footer-link-text">LinkedIn</div>
                                </a><a href="https://www.instagram.com/atelier_technology_solutions?igsh=aHYxYzQ2eWtlc25u" target="_blank" className="footer-link w-inline-block">
                                    <div className="footer-link-text">Instagram</div>
                                </a>
                            </div>
                            <div className="footer-menu-list">
                                <div className="footer-menu-list-header text-style-small">
                                    Contact us
                                </div>
                                <a href="#" className="footer-link w-inline-block">
                                    <div className="footer-link-text">84282 05537</div>
                                </a><a href="#" className="footer-link w-inline-block">
                                    <div className="footer-link-text">Atelierhub.assist@gmail.com</div>
                                </a><a href="#" className="footer-link w-inline-block">
                                    <div className="footer-link-text Address">No 293/6 R G Complex 1st Floor, Perur Main Road, Telungapalayam, Near Canara Bank, Coimbatore - 641039</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-cell">
                        <p className="footer-legal-text text-style-small">
                            © 2025 Atelier Product, Inc. All rights reserved. <br />
                            <a href="https://theateliercreation.com/" target="_blank">Atelier Creations</a>
                        </p>
                    </div>
                    <div className="footer-cell">
                        <div className="footer-links-list text-style-small">
                            <a href="/terms-and-conditions" className="footer-legal-link">Terms &amp; Conditions</a><a
                                href="/privacy-policy" className="footer-legal-link">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default NewFooter