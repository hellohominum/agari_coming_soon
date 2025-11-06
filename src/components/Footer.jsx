import React from 'react';
import { Link } from 'react-router-dom';
import LogoHorizontal from './LogoHorizontal';

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
          <Link to="/terms-of-service" className="relative cursor-pointer hover:text-zinc-700">
            Terms of Service
          </Link>
          <Link to="/privacy-policy" className="relative cursor-pointer hover:text-zinc-700">
            Privacy Policy
          </Link>
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

