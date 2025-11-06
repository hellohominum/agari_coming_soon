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

function GuideEditProfilePage() {
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
              <span className="text-zinc-900">How do I edit my personal profile information?</span>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg p-8 md:p-12 flex flex-col gap-8">
              {/* Title */}
              <h1 className="font-bold text-4xl md:text-5xl text-zinc-950 leading-tight">
                How do I edit my personal profile information?
              </h1>

              {/* Intro */}
              <div className="text-base leading-7 text-zinc-700">
                <p>
                  All users on the AGARI platform can manage their own personal profile information. This guide explains how to access your profile and what you can change.
                </p>
              </div>

              {/* Accessing Your Profile */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Accessing Your Profile
                </h2>
                <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>Click on your user avatar in the top-right corner of the application header to open the user menu.</li>
                  <li>Select "Profile" from the dropdown menu.</li>
                  <li>This will take you to your personal profile page, which displays your current information.</li>
                </ol>
              </div>

              {/* Editing Your Profile Information */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Editing Your Profile Information
                </h2>
                <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>On your profile page, click the "Edit Profile" button.</li>
                  <li>
                    A dialog will appear where you can update the following fields:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li><strong>Full Name:</strong> Your display name across the platform.</li>
                      <li><strong>Email Address:</strong> Your primary contact and login email.</li>
                      <li><strong>About:</strong> A short biography or description about yourself.</li>
                    </ul>
                  </li>
                  <li>After making your desired changes, click "Save Changes".</li>
                </ol>
              </div>

              {/* Changing Your Email Address */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Changing Your Email Address
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  Changing your email address is a sensitive action and requires a verification step for security. When you enter a new email and save, the system will send a confirmation link to the new address. Your email will not be updated on the platform until you click this link to verify ownership. Your old email remains active until the new one is confirmed.
                </p>
              </div>

              {/* Information You Cannot Change */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Information You Cannot Change
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  You cannot change the following information from your profile page, as it is managed by your organisation's administrators:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>Your assigned roles (e.g., Contributor, Admin)</li>
                  <li>Your organisation</li>
                </ul>
                <p className="text-base leading-7 text-zinc-700">
                  If you need to change this information, please contact your Organisation Owner or an Organisation Admin.
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

export default GuideEditProfilePage;

