

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt, faEnvelope, faGlobe, faChevronDown, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons';
import websitelogo from '../assets/websitelogo.png';

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white shadow-sm z-10">
      {/* Top bar */}
      <div className="bg-[#f2f5f9] text-sm text-[#6c757d]">
        <div className="container mx-auto flex justify-between items-center h-9 px-4">
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center">
               <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1 text-blue-700"  />
              Find A Location
            </a>
            <span>|</span>
            <a href="mailto:example@gmail.com" className="flex items-center ">
            <FontAwesomeIcon icon={faEnvelope} className="mr-1 text-blue-700" /> 
            example@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4 text-blue-700" >
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#" className="flex items-center">
            <FontAwesomeIcon icon={faGlobe} className="mr-1" />
              English
              <FontAwesomeIcon icon={faChevronDown} />
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white">
        <div className="container mx-auto flex items-center justify-between py-2 px-4">
          {/* Logo */}

          <div className='flex items-center	'>
          <div className="flex items-center px-10">
            <a href="#" className="flex items-center">
              <img src={websitelogo} alt="LifeSure Logo" className="h-12 mr-2" />
              <h1 className="text-2xl font-bold text-blue-700">LifeSure</h1>
            </a>
          </div>


          {/* Navigation links */}
          <div className="hidden lg:flex space-x-6 bg-[#f2f5f9] h-10 text-sm rounded-md">
            <a href="index.html" className="text-gray-600 hover:text-blue-700 my-auto">Home</a>
            <a href="about.html" className="text-gray-600 hover:text-blue-700 my-auto">About</a>
            <a href="service.html" className="text-gray-600 hover:text-blue-700 my-auto">Services</a>
            <a href="blog.html" className="text-gray-600 hover:text-blue-700 my-auto">Blog</a>
            <div className="relative group">
              <button className="text-gray-600 hover:text-blue-700 flex items-center mt-2">
                pages
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
              <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
                <a href="feature.html" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Our Features</a>
                <a href="team.html" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Our Team</a>
                <a href="testimonial.html" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Testimonial</a>
                <a href="FAQ.html" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">FAQs</a>
                <a href="404.html" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">404 Page</a>
              </div>
            </div>
            <a href="contact.html" className="text-gray-600 hover:text-blue-700 my-auto">Contact</a>
          </div>
          </div>
          {/* Right-side buttons */}
          <div className="flex items-center space-x-4 bg-[#f2f5f9]">
            <button className="bg-blue-700 text-gray-100 hover:bg-gray-200 p-2 rounded-full">
              <i className="fas fa-search  text-white">
              <FontAwesomeIcon icon={faSearch} />
              </i>
            </button>
            <a href="#" className="text-white bg-blue-700 py-2 px-4 rounded-full">Get a Quote</a>
            <div className="hidden lg:flex items-center space-x-2">
              <a href="#" className="text-blue-700 bg-gray-100 hover:bg-gray-200 p-2 rounded-full relative">
                <i className="fas fa-phone-alt"></i>
                <span className="absolute top-0 right-0 text-blue-700">
                <FontAwesomeIcon icon={faPhone} />
                </span>
              </a>
              <div className="text-sm">
                <span>Call to Our Experts</span>
                <a href="tel:+01234567890" className="text-blue-700 block">Free: +0123 456 7890</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

  

export default Navbar;
