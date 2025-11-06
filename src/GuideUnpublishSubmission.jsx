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

function GuideUnpublishSubmissionPage() {
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
              <span className="text-zinc-900">What happens when I unpublish a submission?</span>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg p-8 md:p-12 flex flex-col gap-8">
              {/* Title */}
              <h1 className="font-bold text-4xl md:text-5xl text-zinc-950 leading-tight">
                What happens when I unpublish a submission?
              </h1>

              {/* Intro */}
              <div className="text-base leading-7 text-zinc-700">
                <p>
                  Unpublishing a submission is a reversible action that allows you to withdraw published data from view, typically to make corrections or updates. This moves the submission from a "Published" state back to a "Draft" state.
                </p>
              </div>

              {/* Who can unpublish a submission? */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Who can unpublish a submission?
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  The same users who can publish a submission can also unpublish it. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>The project's Organisation Owner</li>
                  <li>An Organisation Admin</li>
                  <li>A project-specific Admin</li>
                  <li>The original Contributor who created the submission.</li>
                </ul>
              </div>

              {/* What Happens When You Unpublish? */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  What Happens When You Unpublish?
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  When you click the "Unpublish" button on a submission's detail page, the following actions occur immediately:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-zinc-700">
                  <li><strong>Status Reverts to Draft:</strong> The submission's status badge changes from "Published" back to "Draft".</li>
                  <li><strong>Visibility is Restricted:</strong> The data is immediately hidden from users who can only see published data (e.g., those with a "Viewer" role). It is also removed from all aggregated views like the main pathogen dashboards.</li>
                  <li><strong>Log Entry is Created:</strong> A new entry is added to the submission's log, indicating that the submission was unpublished and by whom.</li>
                  <li><strong>The Data is Not Deleted:</strong> Your data remains safe within the draft submission, ready for you to edit.</li>
                </ul>
              </div>

              {/* What to Do Next */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  What to Do Next
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  After unpublishing, you can treat the submission just like any other draft. This is your opportunity to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>Upload a new version of your metadata or sequence files to correct errors.</li>
                  <li>Edit the submission's title.</li>
                </ul>
                <p className="text-base leading-7 text-zinc-700">
                  <strong>Important:</strong> Once you have made your corrections, you must go through the publishing process again to make your updated data visible to all project members.
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

export default GuideUnpublishSubmissionPage;

