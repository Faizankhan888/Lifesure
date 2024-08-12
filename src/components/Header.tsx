

import mainImage from '../assets/main.png';
import AboutImage from '../assets/about-1.png';
import CarImage from '../assets/car.png';
import healthimage from '../assets/health.png';
import lifeimage from '../assets/Life.png';
import homeimage from '../assets/Home.png';
import team1image from '../assets/team-1.jpg';
import team2image from '../assets/team-2.jpg';
import team3image from '../assets/team-3.jpg';
import team4image from '../assets/team-4.jpg';
import testimonial1 from '../assets/testimonial-1.jpg';
import testimonial2 from '../assets/testimonial-2.jpg';


const Header = () => {

return(
  <main>
<div className="bg-[#014CA1] h-100 ">
<h4 className="text-white uppercase  pt-8 pl-14 text-2xl">Welcome to Lifesure</h4>
<div className="flex justify-between h-full">


  {/* Left Side: Text and Buttons */}
  <div className="w-2/4 flex flex-col justify-center p-14 text-left text-md	">
    <h1 className="text-white font-bold uppercase text-6xl w-450">Life insurance makes you happy</h1>
    <p className="text-white mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy... 
    .</p>
    <div className="mt-4">
      <button className="bg-white text-blue-700 py-2 px-4 rounded-3xl mr-2 hover:bg-black hover:text-white">Watch Video</button>
      <button className="bg-[#16263d] text-white py-2 px-4 rounded-3xl">Learn More</button>
    </div>
  </div>

  {/* Right Side: Image */}
  <div className="w-2/4 flex items-center justify-center">
    <img src={mainImage} alt="Right Side Image" className="w-100 h-auto" />
  </div>
</div>

{/* Bottom: Arrow Buttons */}
<div className="flex justify-center mt-4">
  <button className="bg-white  py-2 px-4 rounded-full mx-2">←</button>
  <button className="bg-white   px-4 rounded-full ">→</button>
</div>



      {/* New Section: Features and Cards */}
      <div className="flex flex-col items-center mt-12 p-4 bg-[#f2f5f9]">
        <h4 className="text-[#015fc9] text-center text-2xl">Our Feature</h4>
        <h1 className="text-[#16243d] text-center text-xl mt-2 font-xb">Insurance provides you a better future</h1>
        <p className=" text-center mt-2 max-w-xl text-lg font-bold">
          This is a paragraph describing the features in more detail. You can customize this text as needed.
        </p>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center mt-8 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-4 w-64 rounded-lg shadow-md">
            <div className="flex items-center">
              <img src="your-logo-url-here" alt="Logo" className="w-10 h-10 mr-2" />
            </div>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-3xl">Learn More</button>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 w-64 rounded-lg shadow-md">
            <div className="flex items-center">
              <img src="your-logo-url-here" alt="Logo" className="w-10 h-10 mr-2" />
            </div>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-3xl">Learn More</button>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 w-64 rounded-lg shadow-md">
            <div className="flex items-center">
              <img src="your-logo-url-here" alt="Logo" className="w-10 h-10 mr-2" />
            </div>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-3xl">Learn More</button>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-4 w-64 rounded-lg shadow-md">
            <div className="flex items-center">
              <img src="your-logo-url-here" alt="Logo" className="w-10 h-10 mr-2" />
            </div>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-3xl">Learn More</button>
          </div>
          
        </div>
      </div>


      
      {/* About our Company */}
      <div className="flex bg-white p-8">
      {/* Left Side: Text and Information */}
      <div className="w-2/4 pr-8">
        <h4 className="text-blue-600">About Our Company</h4>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 leading-tight">
          High Range of Exploring Protection
        </h1>
        <p className="text-gray-600 mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt debitis sint tempora. Corporis
          consequatur.
        </p>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae.
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center text-gray-600">
            <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
            We can save your money.
          </li>
          <li className="flex items-center text-gray-600">
            <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
            Production or trading of good.
          </li>
          <li className="flex items-center text-gray-600">
            <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
            Our life insurance is flexible.
          </li>
        </ul>
        <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg">
          More Information
        </button>
      </div>

      {/* Right Side: Image and Stats */}
      <div className="w-2/4 pl-8">
        <img src={AboutImage} alt="Illustration" className="w-full h-auto rounded-lg mb-6" />
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-blue-600">129+</h3>
            <p className="text-gray-600">Insurance Policies</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-blue-600">99+</h3>
            <p className="text-gray-600">Awards WON</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-blue-600">556+</h3>
            <p className="text-gray-600">Skilled Agents</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-blue-600">967+</h3>
            <p className="text-gray-600 no-underline">Team Members</p>
          </div>
        </div>
      </div>
    </div>



    {/* our service 4 page */}

    <div className="bg-white py-16">
      {/* Top Section */}
      <div className="text-center mb-12">
        <h4 className="text-blue-600">Our Services</h4>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">We Provide Best Services</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        {/* Card 1 */}
        <div className="bg-gray-100  rounded-lg shadow-lg text-center">
          <img src={CarImage} alt="Life Insurance" className=" h-auto mx-100% mb-4 bg-white " />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Car Insurance</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eum!
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full">
            Read More
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100  rounded-lg shadow-lg text-center">
          <img src={homeimage} alt="Life Insurance" className=" h-auto mx-100% mb-4 bg-white " />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Car Insurance</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eum!
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full">
            Read More
          </button>
        </div>
         
         {/* Card 3 */}
        <div className="bg-gray-100  rounded-lg shadow-lg text-center">
          <img src={healthimage} alt="Life Insurance" className=" h-auto mx-100% mb-4 bg-white " />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Health Insurance</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eum!
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full">
            Read More
          </button>
        </div>

{/* Card 4 */}
<div className="bg-gray-100  rounded-lg shadow-lg text-center">
          <img src={lifeimage} alt="Life Insurance" className=" h-auto mx-100% mb-4 bg-white " />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Life Insurance</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eum!
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full">
            Read More
          </button>
        </div>
    
      </div>

      {/* More Services Button */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white py-3 px-8 rounded-full">
          More Services
        </button>
      </div>
    </div>



{/* page 5 some important Faqs */}
<div className="flex bg-gray-50 py-16 px-8">
      {/* Left Side - Text Content */}
      <div className="w-1/2 pr-8">
        <h4 className="text-blue-600">Some Important FAQ's</h4>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">Common Frequently Asked Questions</h1>
        
        {/* FAQ Items */}
        <div className="mt-8  ">
          {/* FAQ 1 */}
          <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg cursor-pointer">
            <span className="text-blue-600">Q: What happens during Freshers' Week?</span>
            <button className="text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* FAQ 2 */}
          <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg cursor-pointer">
            <span className="text-blue-600">Q: What is the transfer application process?</span>
            <button className="text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* FAQ 3 */}
          <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg cursor-pointer">
            <span className="text-blue-600">Q: Why should I attend community college?</span>
            <button className="text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2 pl-8 flex items-center justify-center">
        <img src={mainImage} alt="FAQ Illustration" className="max-w-full h-auto" />
      </div>
</div>



{/* page 6 starts from here-from blog */}



<div className="py-16 px-8 bg-gray-50">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h4 className="text-blue-600 text-2xl">From Blog</h4>
        <h1 className="text-5xl font-bold text-gray-900 mt-2">News And Updates</h1>
        <p className="text-gray-600 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>

      {/* Blog Cards */}
      <div className="flex justify-between space-x-4">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-1/3">
          <div className="relative">
            <img src={CarImage} alt="Car Insurance" className="w-full object-cover" />
            <span className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">Business</span>
          </div>
          <div className="p-4">
            <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
              <span>Martin.C</span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 0v4m-4 6v5m0 4v-4m0 4v-4M4 12h16"></path></svg>
                30 Dec 2025
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 13.172a4 4 0 115.657 5.656l-5.657-5.656zM4 4v5.657M21.586 4a2 2 0 010 2.828l-2.828 2.829m-2.829 2.829L14 15.414"></path></svg>
                6 Comments
              </span>
            </div>
            <a href="#" className="text-lg font-semibold text-gray-900 block hover:text-blue-600">
              Which allows you to pay down insurance bills
            </a>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#" className="flex items-center mt-4 text-blue-600 hover:underline">
              Read More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>

        {/* Repeat for other cards */}
        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-1/3">
          <div className="relative">
            <img src={homeimage} alt="Home Insurance" className="w-full  object-cover" />
            <span className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">Business</span>
          </div>
          <div className="p-4">
            <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
              <span>Martin.C</span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 0v4m-4 6v5m0 4v-4m0 4v-4M4 12h16"></path></svg>
                30 Dec 2025
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 13.172a4 4 0 115.657 5.656l-5.657-5.656zM4 4v5.657M21.586 4a2 2 0 010 2.828l-2.828 2.829m-2.829 2.829L14 15.414"></path></svg>
                6 Comments
              </span>
            </div>
            <a href="#" className="text-lg font-semibold text-gray-900 block hover:text-blue-600">
              Leverage agile frameworks to provide
            </a>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#" className="flex items-center mt-4 text-blue-600 hover:underline">
              Read More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-1/3">
          <div className="relative">
            <img src={homeimage} alt="Life Insurance" className="w-full  object-cover" />
            <span className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">Business</span>
          </div>
          <div className="p-4">
            <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
              <span>Martin.C</span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 0v4m-4 6v5m0 4v-4m0 4v-4M4 12h16"></path></svg>
                30 Dec 2025
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 13.172a4 4 0 115.657 5.656l-5.657-5.656zM4 4v5.657M21.586 4a2 2 0 010 2.828l-2.828 2.829m-2.829 2.829L14 15.414"></path></svg>
                6 Comments
              </span>
            </div>
            <a href="#" className="text-lg font-semibold text-gray-900 block hover:text-blue-600">
              Leverage agile frameworks to provide
            </a>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#" className="flex items-center mt-4 text-blue-600 hover:underline">
              Read More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </div>




    {/* page 7 starts from here Our Teams */}

<div className="bg-white py-12">
            <div className="text-center mb-8">
                <h4 className="text-blue-600 text-lg font-semibold">Our Team</h4>
                <h1 className="text-4xl font-bold text-gray-800">Meet Our Expert Team Members</h1>
                <p className="text-gray-600 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                <div className="relative group">
                    <img src={team1image} alt="David James" className="w-full rounded-md"/>
                    <div className="absolute bottom-0 left-0 right-0 bg-blue-600 bg-opacity-75 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="font-semibold text-lg">David James</p>
                        <p className="text-sm">Profession</p>
                    </div>
                    <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-90 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex space-x-3">
                            <a href="#" className="text-white hover:text-gray-200"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-white hover:text-gray-200"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-white hover:text-gray-200"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" className="text-white hover:text-gray-200"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>

                <div className="relative group">
                    <img src={team2image} alt="David James" className="w-full rounded-md"/>
                    <div className="absolute bottom-0 left-0 right-0 bg-blue-600 bg-opacity-75 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="font-semibold text-lg">David James</p>
                        <p className="text-sm">Profession</p>
                    </div>
                    <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-90 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex space-x-3">
                            <a href="#" className="text-white hover:text-gray-200"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-white hover:text-gray-200"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-white hover:text-gray-200"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" className="text-white hover:text-gray-200"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>

                <div className="relative group">
                    <img src={team3image} alt="David James" className="w-full rounded-md"/>
                    <div className="absolute bottom-0 left-0 right-0 bg-blue-600 bg-opacity-75 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="font-semibold text-lg">David James</p>
                        <p className="text-sm">Profession</p>
                    </div>
                    <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-90 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex space-x-3">
                            <a href="#" className="text-white hover:text-gray-200"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-white hover:text-gray-200"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-white hover:text-gray-200"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" className="text-white hover:text-gray-200"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>

                <div className="relative group">
                    <img src={team4image} alt="David James" className="w-full rounded-md"/>
                    <div className="absolute bottom-0 left-0 right-0 bg-blue-600 bg-opacity-75 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="font-semibold text-lg">David James</p>
                        <p className="text-sm">Profession</p>
                    </div>
                    <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-90 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex space-x-3">
                            <a href="#" className="text-white hover:text-gray-200"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-white hover:text-gray-200"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-white hover:text-gray-200"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" className="text-white hover:text-gray-200"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>





        {/* page 8 starts from here-testimonials */}
<div className='bg-white pb-24'>
<div className='bg-white flex flex-col items-center gap-6 px-10 sm:px-20 md:px-28 lg:px-36'>
  <h4 className='text-blue-600 text-lg'>Testimonials</h4>
  <h1 className='text-3xl md:text-4xl lg:text-5xl text-center font-bold'>What our Customer are saying</h1>
  <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque error consequuntur est aperiam! Illo qui ex cupiditate esse suscipit in. Ea eveniet modi fuga doloribus vero, dolorem vel deserunt ut?</p>
</div>
<div className="flex flex-row mx-24 space justify-between mt-10 gap-8">
               
                
                    <div className="bg-gray-100 rounded-md flex items-start">
                        <img src={testimonial1} alt="Client 1" className="w-40 h-auto  bg-cover  mr-4 grow rounded-lg"/>
                        <div>
                            <h4 className="text-xl font-semibold text-gray-800">Client Name</h4>
                            <p className="text-gray-500">Profession</p>
                         
                            <p className="text-gray-600 mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim error molestiae aut modi corrupti.</p>
                        </div>
                    </div>

                    <div className="bg-gray-100  rounded-md flex items-start">
                        <img src={testimonial2}  alt="Client 2" className="w-40 h-auto  bg-cover  mr-4 grow rounded-lg"/>
                        <div>
                            <h4 className="text-xl font-semibold text-gray-800">Client Name</h4>
                            <p className="text-gray-500">Profession</p>
                           
                            <p className="text-gray-600 mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim error molestiae aut modi corrupti.</p>
                        </div>
                    </div>

                
               
            </div>
</div>



{/* Pgae 9 starts from here-footer part */}








    </div>





    </main>

);
};

export default Header;

