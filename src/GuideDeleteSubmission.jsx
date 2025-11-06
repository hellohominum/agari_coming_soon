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

function GuideDeleteSubmissionPage() {
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
              <span className="text-zinc-900">How do I delete a submission?</span>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg p-8 md:p-12 flex flex-col gap-8">
              {/* Title */}
              <h1 className="font-bold text-4xl md:text-5xl text-zinc-950 leading-tight">
                How do I delete a submission?
              </h1>

              {/* Intro */}
              <div className="text-base leading-7 text-zinc-700">
                <p>
                  Deleting a submission is a permanent action that removes all of its associated data from the project. This guide explains who can perform this action and the steps to do it safely.
                </p>
              </div>

              {/* Who can delete a submission? */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Who can delete a submission?
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  Permission to delete is restricted to ensure data integrity. The following roles can delete a submission:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>The project's Organisation Owner, Organisation Admin, or a project-specific Admin can delete any submission within the project.</li>
                  <li>A Contributor can only delete submissions that they originally created, whether it is in a Draft or Published state.</li>
                </ul>
              </div>

              {/* Step-by-Step Guide */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Step-by-Step Guide
                </h2>
                <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>Navigate to the project and click on the submission you wish to delete to open its detail page.</li>
                  <li>Click the "Edit submission" dropdown button in the top-right corner of the page.</li>
                  <li>Select "Delete submission" from the menu.</li>
                  <li>A confirmation dialog will appear, warning you that this action is permanent and will delete all associated isolates.</li>
                  <li>To proceed, click the "Confirm Delete" button.</li>
                </ol>
              </div>

              {/* What Happens After Deletion? */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  What Happens After Deletion?
                </h2>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <p className="text-base leading-7 text-red-900 font-semibold mb-3">
                    <strong>Warning:</strong> This action cannot be undone. All data associated with the submission will be lost permanently.
                  </p>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>The submission and all its associated isolate data are permanently removed from the system.</li>
                  <li>An activity log entry with the action 'Submission Deleted' is created for the user who performed the action, recording the project ID and submission title.</li>
                  <li>You will be redirected back to the project's "Submissions" list page.</li>
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

export default GuideDeleteSubmissionPage;

