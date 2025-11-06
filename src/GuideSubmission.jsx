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

function GuideSubmissionPage() {
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
              <span className="text-zinc-900">What is a "submission"?</span>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg p-8 md:p-12 flex flex-col gap-8">
              {/* Title */}
              <h1 className="font-bold text-4xl md:text-5xl text-zinc-950 leading-tight">
                What is a "submission"?
              </h1>

              {/* Intro */}
              <div className="text-base leading-7 text-zinc-700">
                <p>
                  A submission is a container for a batch of related data that you upload to a project. Think of it as a single "unit of work" that groups together your metadata file and all its associated sequence files.
                </p>
              </div>

              {/* The Submission Lifecycle */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  The Submission Lifecycle
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  Every submission moves through a lifecycle from a private draft to a visible, published state.
                </p>
              </div>

              {/* 1. Draft */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  1. Draft
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  When you first create a submission and upload your files, it begins in the Draft state. This is a private, temporary space for you and your project's administrators to review the data.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>The system automatically validates your files and organizes your isolates into tabs: "Eligible for publishing," "Missing sequence data," and "Errors."</li>
                  <li>You can upload new versions of your files to correct any errors found during validation.</li>
                  <li>Data in a draft submission is not visible to project members with a "Viewer" role.</li>
                </ul>
              </div>

              {/* 2. Published */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  2. Published
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  Once you are confident that your data is correct and complete, you can Publish it. This is a critical step that makes the data official.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>Only the valid, error-free isolates that have associated sequence data will be included in the published set.</li>
                  <li>Once published, the data becomes visible to all members of the project, including Viewers.</li>
                  <li>The data will also be included in the main pathogen dashboards and aggregated views, according to the project's sharing policy.</li>
                </ul>
              </div>

              {/* Versioning and Editing */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Versioning and Editing
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  Submissions are designed to be version-controlled.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>If you need to make corrections after publishing, you can upload a new version of the data.</li>
                </ul>
                <p className="text-base leading-7 text-zinc-700">
                  <strong>Important:</strong> Uploading a new version to a Published submission will automatically revert it to a Draft state. You will need to re-publish it for the changes to become visible to others.
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

export default GuideSubmissionPage;

