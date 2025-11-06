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

function GuideInviteMembersPage() {
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
              <span className="text-zinc-900">How do I invite members to a project?</span>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg p-8 md:p-12 flex flex-col gap-8">
              {/* Title */}
              <h1 className="font-bold text-4xl md:text-5xl text-zinc-950 leading-tight">
                How do I invite members to a project?
              </h1>

              {/* Intro */}
              <div className="text-base leading-7 text-zinc-700">
                <p>
                  You can grant other users access to your project by inviting them as members. This guide explains who can invite members and how the process works.
                </p>
              </div>

              {/* Who can invite members? */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Who can invite members?
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  Only users with administrative permissions for a project can add or invite new members. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>Organisation Owner</li>
                  <li>Organisation Admin</li>
                  <li>A project-specific Admin</li>
                </ul>
              </div>

              {/* Step-by-Step Guide */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Step-by-Step Guide
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  To invite a member to a specific project:
                </p>
                <ol className="list-decimal pl-6 space-y-3 text-base leading-7 text-zinc-700">
                  <li>Navigate to the Projects page and click on the relevant project.</li>
                  <li>Select the "Settings" tab.</li>
                  <li>In the "Members" card, click the "Invite Members" button.</li>
                  <li>
                    The dialog provides two ways to add members:
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li><strong>Invite new members:</strong> Enter one or more email addresses into the text area. Select a project-specific role (Admin, Contributor, or Viewer) that will be assigned to all new invitees.</li>
                      <li><strong>Add existing members:</strong> Below the text area, you will see a list of users who are part of your organisation but not yet members of this project. Check the box next to their name and assign them a role using the dropdown menu that appears.</li>
                    </ul>
                  </li>
                  <li>Click "Add Members" to finish.</li>
                </ol>
              </div>

              {/* Summary */}
              <div className="text-base leading-7 text-zinc-700 mt-4">
                <p>
                  New users will receive an email invitation to join the platform. Existing members will be granted access to the project immediately.
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

export default GuideInviteMembersPage;

