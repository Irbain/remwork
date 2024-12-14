"use client";

import { usePathname } from "next/navigation";

import Logo from "./Logo";

const Footer = () => {
  const pathname = usePathname();
  const pathsToMinimize = ["/verify-email", "/sign-up", "/sign-in"];

  return (
    <footer className="bottom-0 bg-white flex-grow-0">
      <div className="border-t border-gray-200">
        {pathsToMinimize.includes(pathname) ? null : (
          <div className="pb-8 pt-16"></div>
        )}

        {pathsToMinimize.includes(pathname) ? null : (
          <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
              <div className="text-center mb-6">
                <p>&copy; 2024 remwork. All rights reserved.</p>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <Logo bgColor="black" />

                <nav className="mt-4 md:mt-0">
                  <ul className="flex space-x-6">
                    <li>
                      <a
                        href="#"
                        className="hover:text-[#FACC15] transition-colors"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-[#FACC15] transition-colors"
                      >
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-[#FACC15] transition-colors"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </footer>
        )}
      </div>
    </footer>
  );
};

export default Footer;
