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

function Header() {
  return (
    <div className="bg-white border-b border-zinc-200 border-solid box-border content-stretch flex items-center justify-between p-6 relative shrink-0 w-full">
      <div className="basis-0 content-stretch flex grow items-center justify-between max-w-[1200px] mx-auto min-h-px min-w-px relative shrink-0 w-full">
        <div className="content-stretch flex gap-6 items-center relative shrink-0">
          <Link to="/">
            <LogoHorizontal size="small" className="h-[32px] relative shrink-0 w-[71px] cursor-pointer" />
          </Link>
        </div>
        <div className="content-stretch flex gap-4 items-center relative shrink-0">
          <Link to="/guides" className="box-border content-stretch flex gap-1 items-center justify-center min-w-[80px] overflow-clip px-3 py-2 relative rounded-md shrink-0 cursor-pointer hover:bg-zinc-50 transition-colors">
            <div className="box-border content-stretch flex gap-0 items-start px-1 py-0 relative shrink-0">
              <p className="font-medium leading-6 relative shrink-0 text-[#348f41] text-sm text-nowrap whitespace-pre">
                Guides
              </p>
            </div>
          </Link>
          <div className="bg-zinc-100 box-border content-stretch flex gap-1 items-center justify-center min-w-[80px] overflow-clip px-3 py-2 relative rounded-md shrink-0">
            <div className="box-border content-stretch flex gap-0 items-start px-1 py-0 relative shrink-0">
              <p className="font-medium leading-6 relative shrink-0 text-[#348f41] text-sm text-nowrap whitespace-pre">
                Sign in
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

