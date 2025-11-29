import { Facebook, FacebookIcon, Twitter, X } from "lucide-react";
import React from "react";
import { TwitterX } from "react-bootstrap-icons";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaTiktok,
    FaWhatsapp,
    FaGithub,
    FaPhone
} from "react-icons/fa";
const leftLink = [
    {
        title: "Community",
        subLink: [
            { label: "Forums", link: "#" },
            { label: "Events", link: "#" },
            { label: "Blog", link: "#" },
            { label: "Newsletter", link: "#" },
            { label: "Support", link: "#" },
        ],
    },
    {
        title: "Company",
        subLink: [
            { label: "About Us", link: "#" },
            { label: "Careers", link: "#" },
            { label: "Press", link: "#" },
            { label: "Contact", link: "#" },
        ],
    },
    {
        title: "Resources",
        subLink: [
            { label: "Docs", link: "#" },
            { label: "API", link: "#" },
            { label: "Guides", link: "#" },
            { label: "Tutorials", link: "#" },
        ],
    },
];

function Footer() {
    return (
        <footer className="bg-[#252733] mt-6">
            {/* Logo */}
            <img
                src="https://atelier-sdu1.vercel.app/assets/blue_logo-BZsKBbFk.svg"
                className="h-30 mx-auto mb-5"
            />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* LEFT SIDE */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {leftLink.map((item, i) => (
                        <div key={i}>
                            <p className="font-semibold text-[1.2rem] mb-3 text-white">{item.title}</p>
                            <ul className="space-y-2 text-sm text-[#ADB5BD]">
                                {item.subLink.map((sub, j) => (
                                    <li key={j}>
                                        <a href={sub.link} className="hover:text-black duration-200">
                                            {sub.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* RIGHT SIDE */}
                <div>
                    {/* Country Select Box */}
                    <div className="mb-6">
                        <select className="border-none p-2 rounded w-fit">
                            <option>India</option>
                            <option>USA</option>
                            <option>UK</option>
                            <option>Canada</option>
                        </select>
                    </div>

                    {/* Horizontal Line */}
                    <hr className="my-4" />

                    {/* Footer Content */}
                    <p className="text-[#ADB5BD] text-base mb-4">
                        Atelier is a suite of open source business apps that cover all your company needs: CRM, eCommerce, accounting, inventory, point of sale, project management, etc.
                    </p>
                    <p className="text-[#ADB5BD] text-base mb-4">Odoo's unique value proposition is to be at the same time very easy to use and fully integrated.</p>
                    {/* Social Icons */}
                    <div className="flex gap-4 mt-3 text-[#ADB5BD]">
                        <a href="#">
                            <FaFacebookF size={18}/>
                        </a>
                        <a href="#">
                            <TwitterX size={18}/>
                        </a>
                        <a href="#">
                            <FaLinkedinIn size={18}/>
                        </a>
                        <a href="#">
                            <FaInstagram size={18}/>
                        </a>
                        <a href="#">
                            <FaTiktok size={18}/>
                        </a>
                        <a href="#">
                            <FaWhatsapp size={18}/>
                        </a>
                        <a href="#">
                            <FaGithub size={18}/>
                        </a>
                        <a href="#">
                            <FaPhone size={18}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center bg-[#1A1C24] p-3 mt-4">
                <p>Website made with <a href="/" className="font-bold">Atelier</a></p>
            </div>
        </footer>
    );
}

export default Footer;
