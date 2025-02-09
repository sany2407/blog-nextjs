import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="">
              We are committed to delivering insightful perspectives on the
              rapidly evolving digital landscape.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className=" hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white">
                  Articles
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="">Email: support@opinionmatters.com</p>
            <p className="">Phone: +1 234 567 890</p>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className=" hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className=" hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className=" hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className=" hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center  pt-6">
          <p className="">
            © 2025 Opinion Matters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;