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

function GuideViewerPage() {
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
              <span className="text-zinc-900">As a Viewer, what can I do?</span>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg p-8 md:p-12 flex flex-col gap-8">
              {/* Title */}
              <h1 className="font-bold text-4xl md:text-5xl text-zinc-950 leading-tight">
                As a Viewer, what can I do?
              </h1>

              {/* Intro */}
              <div className="text-base leading-7 text-zinc-700">
                <p>
                  As a Viewer, you have read-only access to data in the projects you are a member of. This role is designed for users who need to analyze data without modifying it.
                </p>
              </div>

              {/* Key Capabilities */}
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Key Capabilities (within your assigned projects)
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  Your permissions are focused on data consumption:
                </p>
              </div>

              {/* Capability: View Project Details */}
              <div className="flex flex-col gap-3">
                <p className="text-base leading-7 text-zinc-700">
                  <strong>View Project Details:</strong> You can see the project's description, pathogen type, and sharing policy.
                </p>
              </div>

              {/* Capability: View Published Data */}
              <div className="flex flex-col gap-3">
                <p className="text-base leading-7 text-zinc-700">
                  <strong>View Published Data:</strong> You can access the "Isolates Table" for a project to view all isolate data that has been officially published.
                </p>
              </div>

              {/* Capability: Download Published Data */}
              <div className="flex flex-col gap-3">
                <p className="text-base leading-7 text-zinc-700">
                  <strong>Download Published Data:</strong> You can select and download published isolate data and metadata for offline analysis.
                </p>
              </div>

              {/* Capability: Explore Dashboards */}
              <div className="flex flex-col gap-3">
                <p className="text-base leading-7 text-zinc-700">
                  <strong>Explore Dashboards:</strong> You can use the main pathogen dashboards to see aggregated, visual representations of the published data you have access to.
                </p>
              </div>

              {/* Limitations */}
              <div className="flex flex-col gap-4 mt-4">
                <h2 className="font-bold text-2xl text-zinc-950">
                  Limitations
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  As a Viewer, you have no permissions to edit, upload, or manage data. You cannot see draft submissions, manage project settings, or manage members.
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

export default GuideViewerPage;

