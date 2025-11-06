import React from 'react';
import { Link } from 'react-router-dom';

// Asset URLs
const imgGroup37 = "/assets/logo-symbol-small.svg";
const imgAgari = "/assets/logo-text-small.svg";

function LogoHorizontal({ className, size = "large" }) {
  if (size === "small") {
    return (
      <div className={className} data-name="size=small">
        <div className="absolute bottom-[0.96%] flex items-center justify-center left-[0.28%] right-[65.19%] top-0">
          <div className="flex-none h-[31.693px] rotate-[180deg] scale-y-[-100%] w-[24.517px]">
            <div className="relative size-full">
              <img alt="" className="block max-w-none size-full" src={imgGroup37} />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[25.74%] left-[40.38%] right-[0.24%] top-1/4" data-name="AGARI">
          <img alt="" className="block max-w-none size-full" src={imgAgari} />
        </div>
      </div>
    );
  }
  return null;
}

function Footer() {
  return (
    <div className="bg-white border-t border-zinc-200 border-solid box-border flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-6 sm:py-8 gap-4 sm:gap-0 relative w-full mt-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-[1200px] mx-auto w-full gap-4 sm:gap-6">
        <div className="flex gap-6 items-center">
          <Link to="/">
            <LogoHorizontal size="small" className="h-[32px] relative shrink-0 w-[71px] cursor-pointer" />
          </Link>
        </div>
        <div className="flex flex-wrap font-normal gap-4 sm:gap-6 items-center justify-center leading-6 text-zinc-500 text-sm">
          <p className="relative cursor-pointer hover:text-zinc-700">
            Terms of Service
          </p>
          <p className="relative cursor-pointer hover:text-zinc-700">
            Privacy Policy
          </p>
          <Link to="/guides" className="relative cursor-pointer hover:text-zinc-700">
            Guides
          </Link>
        </div>
        <div className="flex gap-2 items-center justify-center sm:justify-end">
          <p className="font-normal leading-6 text-zinc-500 text-sm text-center sm:text-right">
            © 2025 AGARI. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

