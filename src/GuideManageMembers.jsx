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

function GuideManageMembersPage() {
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
              <span className="text-zinc-900">How do I change a member's role or remove them?</span>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg p-8 md:p-12 flex flex-col gap-8">
              {/* Title */}
              <h1 className="font-bold text-4xl md:text-5xl text-zinc-950 leading-tight">
                How do I change a member's role or remove them?
              </h1>

              {/* Intro */}
              <div className="text-base leading-7 text-zinc-700">
                <p>
                  As a project evolves, you may need to change a member's level of access or remove them from the project entirely. These actions can be performed from the project's settings.
                </p>
              </div>

              {/* Who can manage project members? */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Who can manage project members?
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  Only users with administrative permissions for a project can manage its members. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>Organisation Owner</li>
                  <li>Organisation Admin</li>
                  <li>A project-specific Admin</li>
                </ul>
              </div>

              {/* How to Change a Member's Role */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  How to Change a Member's Role
                </h2>
                <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>Navigate to the project and select the "Settings" tab.</li>
                  <li>Find the user in the "Members" table.</li>
                  <li>Click on the dropdown menu in the "Role" column for that user.</li>
                  <li>Select their new role from the list (Admin, Contributor, or Viewer). The change is saved automatically.</li>
                </ol>
                <p className="text-base leading-7 text-zinc-700">
                  <strong>Note:</strong> You can only change the roles of members who have project-specific access. Users with organisation-wide roles (like Organisation Contributor) must have their roles managed from the main organisation Settings page.
                </p>
              </div>

              {/* How to Remove a Member from a Project */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  How to Remove a Member from a Project
                </h2>
                <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>Navigate to the project and select the "Settings" tab.</li>
                  <li>Find the user in the "Members" table.</li>
                  <li>Click the "More actions" (three dots) icon at the end of the user's row.</li>
                  <li>Select "Remove from project" from the menu.</li>
                </ol>
                <p className="text-base leading-7 text-zinc-700">
                  This will revoke the user's access to this specific project. It will not remove them from the organisation or from other projects they may be a part of.
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

export default GuideManageMembersPage;

