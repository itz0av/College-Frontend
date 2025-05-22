import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaRss,
} from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-800 w-full text-white px-6 md:px-16 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Left Column */}
        <div>
          <h2 className="text-xl font-bold mb-2">SJ Mahavidyalaya</h2>
          <div className="flex gap-3 my-3 text-2xl">
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
            <FaLinkedinIn />
            <FaYoutube />
            <FaRss />
          </div>
          <p>Ramaipur, Naubasta, Kanpur,</p>
          <p>Uttar Pradesh 208021 </p>
          <p className="text-blue-300">956.326.2001</p>
          <p className="text-blue-300">enroll@tamiu.edu</p>
          <a
            href="https://www.google.com/maps/dir//9823%2BW4M,+Naubasta+Road,+Kanpur+Central,+Ramaipur,+Naubasta,+Kanpur,+Uttar+Pradesh+208021/@26.3523062,80.2203877,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x399c464a3e151dd1:0x6923b654ff834422!2m2!1d80.3027865!2d26.3523242?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
            className="inline-flex items-center text-sm mt-2 text-white underline"
          >
            <FaMapMarkerAlt className="mr-1" />
            Campus Map
          </a>
        </div>

        {/* Middle Column */}
        <div>
          <h3 className="text-lg font-bold border-b border-white/50 pb-1 mb-3 w-fit">
            Learn More
          </h3>
          <ul className="space-y-1 underline">
            <li>
              <a href="#">About SJ</a>
            </li>
            <li>
              <a href="#">Current Students</a>
            </li>
            <li>
              <a href="#">Future Students</a>
            </li>
            <li>
              <a href="#">Alumni & Giving</a>
            </li>
            <li>
              <a href="#">Uconnect</a>
            </li>
            <li>
              <a href="#">OIT Services</a>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-lg font-bold border-b border-white/50 pb-1 mb-3 w-fit">
            Navigate
          </h3>
          <ul className="space-y-1 underline">
            <li>
              <a href="#">Accessibility</a>
            </li>
            <li>
              <a href="#">Report It!</a>
            </li>
            <li>
              <a href="#">Title IX Reporting</a>
            </li>
            <li>
              <a href="#">Mental Health Resources</a>
            </li>
            <li>
              <a href="#">Texas Veterans Portal</a>
            </li>
            <li>
              <a href="#">Faculty Profiles</a>
            </li>
            <li>
              <a href="#">Faculty and Course Info</a>
            </li>
            <li>
              <a href="#">Jobs@TAMIU</a>
            </li>
            <li>
              <a href="#">
                <em>EthicsPoint</em> - Risk, Fraud & Misconduct Hotline
              </a>
            </li>
            <li>
              <a href="#">Campus Accreditation</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-white/30 mt-10 pt-4 text-sm flex flex-col md:flex-row justify-between items-center">
        <p className="mb-2 md:mb-0">
        Affiliated College of Chhatrapati Shahu Ji Maharaj University, Kanpur
        </p>
        <div className="space-x-4 underline">
          <a href="#">Disclaimer</a>
          <a href="#">Directory</a>
          <a href="#">Hindi</a>
          <a href="#">Feedback</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
