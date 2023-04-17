import React from "react";

const Footer = () => {
  return (
    <div
      className="footer p-[5rem] mb-4 bg-[#113aee] rounded-[20px] gap-[8] grid
    grid-cols-5 m-auto items-center justify-center"
    >
      <div className="grid w-1/5">
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-[]">
          Intern<strong>ME</strong>
          </h1>
          <br />
        </div>
        <p className="text-white pb-[13px] opacity-70 leading-7">
          We always make our seekers and companies find the best internships and
          employeers find the best candidates...
        </p>
      </div>
      <div className="grid w-1/5">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">Company</span>
        <div className="grid gap-3">
          
          <li className="text-white opacity-[.7] hover:opacity-[1]">About Us</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Features</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">News</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">FAQ</li>

        </div>

      </div>

      <div className="grid w-1/5">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">Resources</span>
        <div className="grid gap-3">
          
          <li className="text-white opacity-[.7] hover:opacity-[1]">Account</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Support Center</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Feedback</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Contact Us</li>

        </div>

      </div>

      <div className="grid w-1/5">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">Support</span>
        <div className="grid gap-3">
          
          <li className="text-white opacity-[.7] hover:opacity-[1]">Events</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Promo</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Req Demo</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Carreers</li>

        </div>
      </div>

      <div className="grid w-1/5">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-[#fff]">Contact Info</span>
        <div>
          <small className="text-[14px] text-white">findyourinternship.com</small>
        </div>

      </div>
    </div>
  );
};

export default Footer;
