import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../../index.css';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-8 pb-4 mt-20 rounded-lg">
            <div className="container mx-auto px-4 w-full max-w-none flex flex-col md:flex-row justify-between">
                {/* Contact Section */}
                <div className="mb-8 md:mb-0">
                    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-sm mb-2">123 Library St, Book City, BK 12345</p>
                    <p className="text-sm mb-2">Phone: (123) 456-7890</p>
                    <p className="text-sm">Email: info@judasarchive.com</p>
                </div>

                {/* Social Media Section */}
                <div className='flex flex-col items-end'>
                    <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-700 mt-8 py-4 text-center">
                <p className="text-sm">&copy; 2024 Judas Archive. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
