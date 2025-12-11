import React from 'react'

function NewNavbar() {
    return (
        <div className="container-small navigation">
            <div className="nav-wrap">
                {/* <div className="nav-blur-layer"></div> */}
                <div className="nav-layout grid-3-cols">
                    <a
                        href="/"
                        id="w-node-ed1a30f1-6737-bc57-209a-0418d51ae10e-d51ae109"
                        aria-current="page"
                        className="logo-link w-inline-block w--current logo-new-div"
                    ><img
                            src="https://atelier-product.vercel.app/assets/ATS%20White%20lOGO%20PNG.png"
                            loading="lazy"
                            alt="Atelier"
                            className="logo-new"
                        />
                    </a>
                    <nav role="navigation" className="nav-menu w-nav-menu">
                        <div className="nav-links-list">
                            <a href="#features" className="nav-link w-inline-block">
                                <div className="nav-link-text">Features</div> </a
                            ><a href="#products" className="nav-link w-inline-block">
                                <div className="nav-link-text">Products</div>
                            </a>
                            <a href="#benefits" className="nav-link w-inline-block">
                                <div className="nav-link-text">Benefits</div> </a
                            ><a href="#testimonial" className="nav-link w-inline-block">
                                <div className="nav-link-text">Testimonial</div> </a
                            ><a href="#our-values" className="nav-link w-inline-block">
                                <div className="nav-link-text">Our Value</div>
                            </a>
                        </div>
                    </nav>
                    <div
                        id="w-node-ed1a30f1-6737-bc57-209a-0418d51ae124-d51ae109"
                        className="nav-rights"
                    >
                        <div className="landscape-hide">
                            <a
                                data-wf--button-small--style="secondary"
                                href="/contact.html"
                                className="button-main small w-variant-4f1ced44-5afc-4753-1771-3275f473f97b w-inline-block"
                            >
                                <div className="button-text-wrap">
                                    <div className="button-text-initial">Start for free</div>
                                    <div className="button-text-reveal">Start for free</div>
                                </div>
                            </a>
                        </div>
                        <div className="nav-menu-button w-nav-button">
                            <div className="menu-button-icon">
                                <div
                                    data-w-id="ed1a30f1-6737-bc57-209a-0418d51ae128"
                                    className="menu-button-icon-line"
                                ></div>
                                <div
                                    data-w-id="ed1a30f1-6737-bc57-209a-0418d51ae129"
                                    className="menu-button-icon-line"
                                ></div>
                                <div
                                    data-w-id="ed1a30f1-6737-bc57-209a-0418d51ae12a"
                                    className="menu-button-icon-line"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewNavbar