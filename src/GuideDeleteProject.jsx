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

function GuideDeleteProjectPage() {
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
              <span className="text-zinc-900">How do I delete a project?</span>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg p-8 md:p-12 flex flex-col gap-8">
              {/* Title */}
              <h1 className="font-bold text-4xl md:text-5xl text-zinc-950 leading-tight">
                How do I delete a project?
              </h1>

              {/* Intro */}
              <div className="text-base leading-7 text-zinc-700">
                <p>
                  Deleting a project is a permanent action that removes the project and all of its associated data, including submissions and member access settings. This guide explains who can perform this action and how to do it.
                </p>
              </div>

              {/* Who can delete a project? */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Who can delete a project?
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  Due to the permanent nature of this action, only users with high-level administrative permissions for a project can delete it. This includes:
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
                  Follow these steps to permanently delete a project:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-base leading-7 text-zinc-700">
                  <li>Navigate to the Projects page and click on the project you wish to delete.</li>
                  <li>Select the "Settings" tab.</li>
                  <li>In the "Project Details" card, click the "Edit" button.</li>
                  <li>In the dialog that appears, click the red "Delete Project" button at the bottom left.</li>
                  <li>A final confirmation dialog will appear. To proceed, click the "Confirm Delete" button.</li>
                </ol>
              </div>

              {/* Warning */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-4">
                <p className="text-base leading-7 text-red-900 font-semibold">
                  <strong>Warning:</strong> This action cannot be undone. All project data will be lost permanently.
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

export default GuideDeleteProjectPage;

