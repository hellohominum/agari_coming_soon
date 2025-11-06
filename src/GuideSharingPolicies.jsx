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

function GuideSharingPoliciesPage() {
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
              <span className="text-zinc-900">What are sharing policies and how do they work?</span>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg p-8 md:p-12 flex flex-col gap-8">
              {/* Title */}
              <h1 className="font-bold text-4xl md:text-5xl text-zinc-950 leading-tight">
                What are sharing policies and how do they work?
              </h1>

              {/* Intro */}
              <div className="text-base leading-7 text-zinc-700">
                <p>
                  Sharing policies are a critical security feature in AGARI. They are set for each project and define the default visibility and access rules for users who are not explicitly assigned as members. This includes both unassigned members within your own organisation and all members of other organisations on the platform.
                </p>
              </div>

              {/* Private */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Private
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  This is the most restrictive policy, designed for sensitive data that should not be visible to anyone outside the immediate project team.
                </p>
                <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-zinc-700">
                  <li><strong>Project Page Access:</strong> Strictly limited to explicitly assigned project members. The project is completely invisible to all other users.</li>
                  <li><strong>Data Visibility:</strong> All project data (metadata and genomic sequences) is visible only to assigned project members.</li>
                  <li><strong>Aggregated Views:</strong> Data from private projects does not appear in any cross-project aggregated views, such as the main pathogen dashboards.</li>
                </ul>
              </div>

              {/* Semi-private */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Semi-private
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  This policy balances the need for data privacy with the goal of contributing to continental surveillance efforts.
                </p>
                <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-zinc-700">
                  <li><strong>Project Page Access:</strong> Same as Private. Access is strictly limited to explicitly assigned project members.</li>
                  <li><strong>Data Viewing & Download:</strong> Only explicitly assigned project members can view detailed data tables and download any data.</li>
                  <li><strong>Aggregated Views:</strong> To assist with surveillance, a limited, aggregated subset of metadata is shared for visualization on the main pathogen dashboards. This includes location, clade, and collection date, but never allows access to the underlying detailed data for non-members.</li>
                </ul>
              </div>

              {/* Public */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Public
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  This policy is for data that is intended to be openly accessible to all authenticated users on the AGARI platform to maximize collaboration.
                </p>
                <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-zinc-700">
                  <li><strong>Project Page Access:</strong> The project is visible and accessible to all authenticated AGARI users, regardless of their organisation. Non-members are automatically granted 'Viewer' level permissions.</li>
                  <li><strong>Data Visibility:</strong> All of the project's published data is visible to all authenticated users in all views, including aggregated dashboards and detailed isolate tables.</li>
                  <li><strong>Data Download:</strong> Any authenticated user can download the published data from the project.</li>
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

export default GuideSharingPoliciesPage;

