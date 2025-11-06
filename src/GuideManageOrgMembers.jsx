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

function GuideManageOrgMembersPage() {
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
                  As your organisation grows, you may need to adjust a member's permissions or remove their access entirely. This guide explains how to manage user roles and remove members at the organisation level.
                </p>
              </div>

              {/* Who can manage organisation members? */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Who can manage organisation members?
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  Only users with the highest administrative privileges can manage other members for the entire organisation. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>Organisation Owner</li>
                  <li>Organisation Admin</li>
                </ul>
                <p className="text-base leading-7 text-zinc-700">
                  Project Admins can only manage members within their specific projects and cannot change organisation-level roles.
                </p>
              </div>

              {/* How to Change a Member's Role */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  How to Change a Member's Role
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  You can change a member's permissions, switching them between organisation-wide access and project-specific access.
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>Navigate to the Settings page from the user menu in the header.</li>
                  <li>Find the user in the "Members" table.</li>
                  <li>Click the "More actions" (three dots) icon at the end of the user's row and select "Manage role(s)".</li>
                  <li>
                    In the dialog, you can choose between two access scopes:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li><strong>All projects:</strong> Grant the user a role (e.g., Organisation Admin, Contributor) that applies across all current and future projects.</li>
                      <li><strong>Specific projects:</strong> Define the user's role and access on a project-by-project basis. You can grant them different roles for different projects or remove access entirely.</li>
                    </ul>
                  </li>
                  <li>After configuring their access, click "Save Changes".</li>
                </ol>
              </div>

              {/* How to Disable or Delete a Member */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  How to Disable or Delete a Member
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  Disabling a user temporarily revokes their access, while deleting them is a permanent removal.
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>Navigate to the "Members" table in the organisation Settings.</li>
                  <li>Click the "More actions" (three dots) icon for the desired user.</li>
                  <li>
                    Choose one of the following options:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li><strong>Disable user:</strong> This temporarily revokes the user's ability to log in. Their data and roles are preserved, and you can re-enable them later from the same menu.</li>
                      <li><strong>Delete user:</strong> This will permanently remove the user from your organisation and all associated projects. A confirmation dialog will appear to prevent accidental deletion.</li>
                    </ul>
                  </li>
                </ol>
              </div>

              {/* Warning */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-4">
                <p className="text-base leading-7 text-red-900 font-semibold">
                  <strong>Warning:</strong> Deleting a user is irreversible. They will lose access to all projects and data.
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

export default GuideManageOrgMembersPage;

