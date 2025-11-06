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

function GuideInviteOrgMembersPage() {
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
              <span className="text-zinc-900">How do I invite members to my organisation?</span>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg p-8 md:p-12 flex flex-col gap-8">
              {/* Title */}
              <h1 className="font-bold text-4xl md:text-5xl text-zinc-950 leading-tight">
                How do I invite members to my organisation?
              </h1>

              {/* Intro */}
              <div className="text-base leading-7 text-zinc-700">
                <p>
                  Inviting members at the organisation level is the way to grant users broad, cross-project permissions. This guide explains who can invite members and how to do it.
                </p>
              </div>

              {/* Who can invite organisation members? */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Who can invite organisation members?
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  This powerful administrative action is restricted to users with the highest-level roles:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>Organisation Owner</li>
                  <li>Organisation Admin</li>
                </ul>
              </div>

              {/* Step-by-Step Guide */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Step-by-Step Guide
                </h2>
                <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>Navigate to the Settings page by clicking on your user avatar in the top-right corner and selecting "Settings" from the dropdown.</li>
                  <li>On the left-hand navigation menu, ensure you are in the "Members" section.</li>
                  <li>Click the "Invite Organisation Member" button.</li>
                  <li>
                    In the dialog that appears:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li><strong>Enter email addresses:</strong> Type or paste the email addresses of the users you want to invite. You can separate them with commas, spaces, or new lines.</li>
                      <li><strong>Select a role:</strong> Choose the role you want to assign to all these new members from the dropdown. This role will apply to all projects in your organisation.</li>
                    </ul>
                  </li>
                  <li>Click "Send Invitations".</li>
                </ol>
                <p className="text-base leading-7 text-zinc-700">
                  The invited users will receive an email prompting them to create their AGARI account. Their status in the members table will appear as "Invited" until they complete the setup process.
                </p>
              </div>

              {/* Organisation vs. Project Members */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Organisation vs. Project Members
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  It is important to understand the difference between inviting a member to the organisation versus inviting them to a single project.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>An <strong>Organisation Member</strong> (invited via this process) has a role that applies to all current and future projects.</li>
                  <li>A <strong>Project Member</strong> is invited from a specific project's settings and their role only applies to that project.</li>
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

export default GuideInviteOrgMembersPage;

