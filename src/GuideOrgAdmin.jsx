import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

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

function GuideOrgAdminPage() {
  return (
    <div className="border border-zinc-200 border-solid relative size-full bg-white min-h-screen">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <Header />

        {/* Content Area */}
        <div className="bg-zinc-50 box-border content-stretch flex flex-col gap-4 items-center px-8 py-12 relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-8 max-w-[800px] relative shrink-0 w-full">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm">
              <Link to="/guides" className="text-zinc-600 hover:text-[#348f41] transition-colors">
                Guides
              </Link>
              <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-zinc-900">As an Organisation Admin, what can I do?</span>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg p-8 md:p-12 flex flex-col gap-8">
              {/* Title */}
              <h1 className="font-bold text-4xl md:text-5xl text-zinc-950 leading-tight">
                As an Organisation Admin, what can I do?
              </h1>

              {/* Intro */}
              <div className="text-base leading-7 text-zinc-700">
                <p>
                  As an Organisation Admin, you have extensive permissions to manage the members and projects within your organisation, acting as a deputy to the Organisation Owner.
                </p>
              </div>

              {/* Key Capabilities */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Key Capabilities
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  Your role is critical for the day-to-day management of your organisation's activities:
                </p>
              </div>

              {/* Capability: Full Member Management */}
              <div className="flex flex-col gap-3">
                <p className="text-base leading-7 text-zinc-700">
                  <strong>Full Member Management:</strong> You have the ability to invite new users, manage the roles of existing members, and remove users from the organisation. The only member you cannot manage is the Organisation Owner.
                </p>
              </div>

              {/* Capability: Create New Projects */}
              <div className="flex flex-col gap-3">
                <p className="text-base leading-7 text-zinc-700">
                  <strong>Create New Projects:</strong> You can initiate new projects, define their scope, and set their initial sharing policies.
                </p>
              </div>

              {/* Capability: Universal Project Admin Access */}
              <div className="flex flex-col gap-3">
                <p className="text-base leading-7 text-zinc-700">
                  <strong>Universal Project Admin Access:</strong> Your role grants you automatic "Admin" privileges on all projects within the organisation, allowing you to manage settings, members, and data across the board.
                </p>
              </div>

              {/* Capability: View Organisation Activity Log */}
              <div className="flex flex-col gap-3">
                <p className="text-base leading-7 text-zinc-700">
                  <strong>View Organisation Activity Log:</strong> You can access the high-level activity log to monitor key events like project creation and member changes throughout the organisation.
                </p>
              </div>

              {/* Key Difference from Owner */}
              <div className="flex flex-col gap-4 mt-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Key Difference from Owner
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  While you have broad administrative powers, you cannot perform top-level actions such as changing the organisation's name or transferring ownership. These responsibilities are reserved for the Organisation Owner.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default GuideOrgAdminPage;

