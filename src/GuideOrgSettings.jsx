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

function GuideOrgSettingsPage() {
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
              <span className="text-zinc-900">How do I manage my organisation's settings?</span>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg p-8 md:p-12 flex flex-col gap-8">
              {/* Title */}
              <h1 className="font-bold text-4xl md:text-5xl text-zinc-950 leading-tight">
                How do I manage my organisation's settings?
              </h1>

              {/* Intro */}
              <div className="text-base leading-7 text-zinc-700">
                <p>
                  The Settings page is the central hub for managing your organisation's details, members, and overall activity on the AGARI platform.
                </p>
              </div>

              {/* Who can access Organisation Settings? */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Who can access Organisation Settings?
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  Access to this page is restricted to the highest-level administrators to ensure security and proper governance. However, their permissions within the page differ:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li><strong>Organisation Owner:</strong> Has full access to all settings, including organisation details, members, and activity logs.</li>
                  <li><strong>Organisation Admin:</strong> Can access and manage Members and view the Activity Log, but cannot see or edit the core Organisation Details.</li>
                </ul>
                <p className="text-base leading-7 text-zinc-700">
                  If you hold one of these roles, you can access the page by clicking your user avatar in the top-right corner and selecting "Settings" from the dropdown menu.
                </p>
              </div>

              {/* What You Can Manage */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  What You Can Manage
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  The Settings page is divided into several sections:
                </p>
              </div>

              {/* 1. Organisation Details */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  1. Organisation Details (Owner Only)
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  This section is only visible and editable by the Organisation Owner. It allows them to define the organisation's core identity on the platform by editing:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li><strong>Full Name:</strong> The official name of your organisation.</li>
                  <li><strong>Abbreviation:</strong> A shorter name for display in various parts of the UI.</li>
                  <li><strong>Website URL:</strong> A link to your organisation's official website.</li>
                  <li><strong>About:</strong> A brief description of your organisation's mission and work.</li>
                  <li><strong>Transfer Ownership:</strong> A critical, permanent action to transfer their role to another member.</li>
                </ul>
              </div>

              {/* 2. Members */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  2. Members (Owner & Admin)
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  This section is visible to both Organisation Owners and Admins and is used for managing users with organisation-wide roles. From here, you can:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li><strong>Invite Organisation Members:</strong> Add new users and assign them a role (Organisation Admin, Contributor, or Viewer) that grants them access to all projects.</li>
                  <li><strong>Manage Existing Members:</strong> The members table lists all users in your organisation. You can click on a member to manage their roles, disable their account, or permanently delete them.</li>
                </ul>
                <p className="text-base leading-7 text-zinc-700">
                  To add a member to a <em>specific project</em> rather than the whole organisation, you must do so from that project's "Settings" tab.
                </p>
              </div>

              {/* 3. Activity Log */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  3. Activity Log (Owner & Admin)
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  Visible to both Owners and Admins, this section provides a high-level, auditable log of major events across your entire organisation. It tracks key actions such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>Project creation and deletion.</li>
                  <li>Addition, removal, and deletion of organisation members.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default GuideOrgSettingsPage;

