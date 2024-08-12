import instagram1 from '../assets/instagram-footer-1.jpg';
import instagram2 from '../assets/instagram-footer-2.jpg';
import instagram3 from '../assets/instagram-footer-3.jpg';
import instagram4 from '../assets/instagram-footer-4.jpg';
import instagram5 from '../assets/instagram-footer-5.jpg';
import instagram6 from '../assets/instagram-footer-6.jpg';




const Footer = () => {
  return (
    

<div className="container  py-10 bg-[#16243d] px-10 ">
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
    
    {/* LifeSure Section */}
    <div className="col-span-1 lg:col-span-1 ">
      <div>
        <h3 className="text-white text-2xl flex items-center">
          <i className="fab fa-slack mr-3"></i> LifeSure
        </h3>
        <p className="text-white mt-4 mb-8">Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
        <div className="flex space-x-4">
          <a className="bg-primary text-white rounded-full p-3" href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="bg-primary text-white rounded-full p-3" href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="bg-primary text-white rounded-full p-3" href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="bg-primary text-white rounded-full p-3" href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
    
    {/* Useful Links Section */}
    <div className="col-span-1 lg:col-span-1">
      <h4 className="text-white text-xl mb-4">Useful Links</h4>
      <ul>
        <li><a href="#" className="text-white"><i className="fas fa-angle-right mr-2"></i> About Us</a></li>
        <li><a href="#" className="text-white"><i className="fas fa-angle-right mr-2"></i> Features</a></li>
        <li><a href="#" className="text-white"><i className="fas fa-angle-right mr-2"></i> Services</a></li>
        <li><a href="#" className="text-white"><i className="fas fa-angle-right mr-2"></i> FAQ's</a></li>
        <li><a href="#" className="text-white"><i className="fas fa-angle-right mr-2"></i> Blogs</a></li>
        <li><a href="#" className="text-white"><i className="fas fa-angle-right mr-2"></i> Contact</a></li>
      </ul>
    </div>
    
    {/* Instagram Section */}
    <div className="col-span-1 lg:col-span-1">
      <h4 className="text-white text-xl mb-4">Instagram</h4>
      <div className="grid grid-cols-3 gap-3">
        <div className="relative">
          <img src={instagram1} className="rounded w-full" alt="Instagram 1" />
          <a href="/assets/instagram-footer-1.jpg" className="absolute inset-0 flex items-center justify-center  rounded">
            <i className="fas fa-link text-white"></i>
          </a>
        </div>
        <div className="relative">
          <img src={instagram2} className="rounded w-full" alt="Instagram 2" />
          <a href="/assets/instagram-footer-2.jpg" className="absolute inset-0 flex items-center justify-center  rounded">
            <i className="fas fa-link text-white"></i>
          </a>
        </div>
        <div className="relative">
          <img src={instagram3} className="rounded w-full" alt="Instagram 3" />
          <a href="/assets/instagram-footer-3.jpg" className="absolute inset-0 flex items-center justify-center  rounded">
            <i className="fas fa-link text-white"></i>
          </a>
        </div>
        <div className="relative">
          <img src={instagram4} className="rounded w-full" alt="Instagram 4" />
          <a href="/assets/instagram-footer-4.jpg" className="absolute inset-0 flex items-center justify-center  rounded">
            <i className="fas fa-link text-white"></i>
          </a>
        </div>
        <div className="relative">
          <img src={instagram5} className="rounded w-full" alt="Instagram 5" />
          <a href="/assets/instagram-footer-5.jpg" className="absolute inset-0 flex items-center justify-center  rounded">
            <i className="fas fa-link text-white"></i>
          </a>
        </div>
        <div className="relative">
          <img src={instagram6} className="rounded w-full" alt="Instagram 6" />
          <a href="" className="absolute inset-0 flex items-center justify-center  rounded">
            <i className="fas fa-link text-white"></i>
          </a>
        </div>
      </div>
    </div>
    
    {/* Newsletter Section */}
    <div className="col-span-1 lg:col-span-1">
      <h4 className="text-white text-xl mb-4">Newsletter</h4>
      <p className="text-white mb-4">Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="relative w-full">
        <input className="form-input py-3 px-4 rounded-full w-full" type="text" placeholder="Enter your email" />
        <button className="btn btn-primary absolute top-1/2 right-4 transform -translate-y-1/2 rounded-full py-2 px-6">SignUp</button>
      </div>
      <div className="flex items-center mt-4">
        <div className="relative">
          <a href="#" className="bg-primary text-white p-4 rounded-full flex items-center justify-center">
            <i className="fa fa-phone-alt fa-2x"></i>
            <span className="absolute top-2 right-4 text-secondary"><i className="fa fa-comment-dots"></i></span>
          </a>
        </div>
        <div className="ml-4">
          <span className="text-white">Call to Our Experts</span><br />
          <a href="tel:+01234567890" className="text-white">Free: +0123 456 7890</a>
        </div>
      </div>
    </div>
    
  </div>

  {/* Address, Mail, Telephone Section */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 border-t border-gray-700 pt-10">
    <div className="flex items-center">
      <div className="bg-primary text-white p-5 rounded-full mr-4">
        <i className="fas fa-map-marker-alt fa-2x"></i>
      </div>
      <div>
        <h4 className="text-white">Address</h4>
        <p>123 Street New York.USA</p>
      </div>
    </div>
    <div className="flex items-center">
      <div className="bg-primary text-white p-5 rounded-full mr-4">
        <i className="fas fa-envelope fa-2x"></i>
      </div>
      <div>
        <h4 className="text-white">Mail Us</h4>
        <p>info@example.com</p>
      </div>
    </div>
    <div className="flex items-center">
      <div className="bg-primary text-white p-5 rounded-full mr-4">
        <i className="fa fa-phone-alt fa-2x"></i>
      </div>
      <div>
        <h4 className="text-white">Telephone</h4>
        <p>(+012) 3456 7890</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Footer






