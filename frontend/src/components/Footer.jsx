import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-400">
      <div className="w-[85%] flex flex-wrap mx-auto border-b py-16">
        <div classNmae="w-3/12 lg:w-4/12">
          <div className="flex flex-col gap-3">
            <img src="/logo01.png" alt="logo" className="w-[250px] h-10" />
            <ul className="flex flex-col gap-2 text-slate-600">
              <li>
                2nd Floor Bangalore,
                Karnataka - 560001 India
              </li>
              <li>Phone: 8569746565</li>
              <li>Email: support@gmail.com</li>
            </ul>
          </div>
        </div>
        <div classNmae="w-5/12 lg:w-8/12 "></div>
      </div>
    </footer>
  );
};

export default Footer;
