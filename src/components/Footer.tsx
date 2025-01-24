import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Conny Furniture. All rights reserved.</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-blue-500 transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
          <div>
            <a
              href="mailto:contact@connyfurniture.com"
              className="hover:text-blue-500 transition-colors"
            >
              contact@connyfurniture.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
