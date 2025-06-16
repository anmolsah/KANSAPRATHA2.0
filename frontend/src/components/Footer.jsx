// import React from "react";
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { FaCartShopping, FaHeart } from "react-icons/fa6";

// const Footer = () => {
//   const navigate = useNavigate();
//   const { userInfo } = useSelector((state) => state.auth);
//   const { cart_product_count, wishlist_count } = useSelector(
//     (state) => state.cart
//   );
//   const socialLinks = [
//     {
//       icon: FaFacebookF,
//       url: "https://www.facebook.com/YourPageName",
//     },
//     {
//       icon: FaTwitter,
//       url: "https://www.twitter.com/YourProfile",
//     },
//     {
//       icon: FaInstagram,
//       url: "https://www.instagram.com/YourProfile",
//     },
//   ];
//   return (
//     <footer className="bg-[#006a50]">
//       <div className="max-w-7xl mx-auto px-4 py-16 border-b border-gray-200/20">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Company Info */}
//           <div className="md:col-span-1">
//             <div className="flex flex-col gap-4">
//               <img
//                 src="/logo01.png"
//                 alt="logo"
//                 className="w-48 h-10 object-contain"
//               />
//               <ul className="flex flex-col gap-2 text-gray-50">
//                 <li className="text-sm">
//                   S.I.T Campus, Salbari, P.O. Sukna, Dt. Darjeeling,
//                   <br />
//                   West Bengal - 734009, India
//                 </li>
//                 <li className="text-sm">Phone: 9836565761</li>
//                 <li className="text-sm">Email: kansapratha@gmail.com</li>
//               </ul>
//             </div>
//           </div>

//           {/* Newsletter */}
//           <div className="md:col-span-1">
//             <div className="flex flex-col gap-5">
//               <h2 className="font-bold text-lg text-gray-800 mb-2">
//                 Join our Shop
//               </h2>
//               <span className="text-gray-50 text-sm">
//                 Get Email updates about our latest shop and special offers
//               </span>
//               <div className="relative">
//                 <input
//                   className="w-full h-12 px-4 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
//                   type="email"
//                   placeholder="Enter your email"
//                 />
//                 <button className="absolute right-0 top-0 h-full bg-emerald-500 text-white px-6 rounded-r-lg hover:bg-emerald-600 transition-colors text-sm font-semibold">
//                   Subscribe
//                 </button>
//               </div>
//               <div className="flex gap-4 mt-2">
//                 {socialLinks.map(({ icon: Icon, url }, index) => (
//                   <a
//                     key={index}
//                     href={url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-2 bg-white/10 rounded-full text-gray-50 hover:bg-emerald-500 transition-colors"
//                   >
//                     <Icon className="w-5 h-5" />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="bg-indigo-950 py-4">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <span className="text-gray-50 text-sm">
//             Copyright &copy; 2023 All Rights Reserved
//           </span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping, FaHeart } from "react-icons/fa6";

const Footer = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const { cart_product_count, wishlist_count } = useSelector(
    (state) => state.cart
  );
  const socialLinks = [
    {
      icon: FaFacebookF,
      url: "https://www.facebook.com/YourPageName",
    },
    {
      icon: FaTwitter,
      url: "https://www.twitter.com/YourProfile",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/YourProfile",
    },
  ];
  return (
    <footer className="bg-[#8b2614]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 border-b border-gray-200/20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex flex-col gap-4">
              <img
                src="/logo01.png"
                alt="logo"
                className="w-40 sm:w-48 h-auto object-contain"
              />
              <ul className="flex flex-col gap-2 text-gray-50">
                <li className="text-xs sm:text-sm">
                  S.I.T Campus, Salbari, P.O. Sukna, Dt. Darjeeling,
                  <br />
                  West Bengal - 734009, India
                </li>
                <li className="text-xs sm:text-sm">Phone: 9836565761</li>
                <li className="text-xs sm:text-sm">Email: kansapratha@gmail.com</li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 lg:col-span-1">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-lg text-white mb-2">Quick Links</h2>
              <ul className="grid grid-cols-2 gap-3 text-gray-50">
                <li>
                  <Link to="/" className="text-xs sm:text-sm hover:text-emerald-300 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="text-xs sm:text-sm hover:text-emerald-300 transition-colors">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-xs sm:text-sm hover:text-emerald-300 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-xs sm:text-sm hover:text-emerald-300 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-xs sm:text-sm hover:text-emerald-300 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-xs sm:text-sm hover:text-emerald-300 transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-4 sm:gap-5">
              <h2 className="font-bold text-lg text-white mb-2">
                Join our Shop
              </h2>
              <span className="text-gray-50 text-xs sm:text-sm">
                Get Email updates about our latest shop and special offers
              </span>
              <div className="relative">
                <input
                  className="w-full h-10 sm:h-12 px-4 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-xs sm:text-sm"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="absolute right-0 top-0 h-full bg-emerald-500 text-white px-4 sm:px-6 rounded-r-lg hover:bg-emerald-600 transition-colors text-xs sm:text-sm font-semibold">
                  Subscribe
                </button>
              </div>
              <div className="flex gap-3 sm:gap-4 mt-1">
                {socialLinks.map(({ icon: Icon, url }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full text-gray-50 hover:bg-emerald-500 transition-colors"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#571307] py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-gray-50 text-xs sm:text-sm">
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;